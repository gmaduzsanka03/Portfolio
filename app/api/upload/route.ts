import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData()
    const file: File | null = data.get('file') as unknown as File
    const type: string | null = data.get('type') as string // 'projects' or 'designs'

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file uploaded' })
    }

    if (!type || !['projects', 'designs'].includes(type)) {
      return NextResponse.json({ success: false, error: 'Invalid upload type' })
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ 
        success: false, 
        error: 'Invalid file type. Only JPEG, PNG, WebP, and GIF files are allowed.' 
      })
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024 // 10MB
    if (file.size > maxSize) {
      return NextResponse.json({ 
        success: false, 
        error: 'File too large. Maximum size is 10MB.' 
      })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Create unique filename
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 15)
    const fileExtension = file.name.split('.').pop()
    const filename = `${timestamp}_${randomString}.${fileExtension}`

    // Ensure upload directory exists
    const uploadDir = join(process.cwd(), 'public', 'uploads', type)
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }

    // Write file
    const filepath = join(uploadDir, filename)
    await writeFile(filepath, buffer)

    // Return the public URL
    const publicUrl = `/uploads/${type}/${filename}`

    return NextResponse.json({ 
      success: true, 
      url: publicUrl,
      filename: filename,
      size: file.size,
      type: file.type
    })

  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to upload file' 
    }, { status: 500 })
  }
}

// Handle GET requests to list uploaded files
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')

    if (!type || !['projects', 'designs'].includes(type)) {
      return NextResponse.json({ success: false, error: 'Invalid type parameter' })
    }

    const { readdir } = await import('fs/promises')
    const uploadDir = join(process.cwd(), 'public', 'uploads', type)
    
    if (!existsSync(uploadDir)) {
      return NextResponse.json({ success: true, files: [] })
    }

    const files = await readdir(uploadDir)
    const fileList = files
      .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
      .map(file => ({
        filename: file,
        url: `/uploads/${type}/${file}`,
        type: type
      }))

    return NextResponse.json({ 
      success: true, 
      files: fileList 
    })

  } catch (error) {
    console.error('List files error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to list files' 
    }, { status: 500 })
  }
}
