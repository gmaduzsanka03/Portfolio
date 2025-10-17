# Netlify Deployment Guide

This guide will help you deploy your Next.js portfolio to Netlify.

## Prerequisites

1. A Netlify account (free at [netlify.com](https://netlify.com))
2. Your portfolio project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Methods

### Method 1: Git Integration (Recommended)

This method automatically deploys your site whenever you push changes to your repository.

#### Step 1: Prepare Your Repository

1. **Push your code** to a Git repository (GitHub, GitLab, or Bitbucket)
2. **Make sure your repository is public** (required for free Netlify accounts)

#### Step 2: Connect to Netlify

1. **Go to [netlify.com](https://netlify.com)** and sign in
2. **Click "New site from Git"**
3. **Choose your Git provider** (GitHub, GitLab, or Bitbucket)
4. **Authorize Netlify** to access your repositories
5. **Select your portfolio repository**

#### Step 3: Configure Build Settings

Netlify should automatically detect your Next.js project, but verify these settings:

- **Build command**: `npm run build`
- **Publish directory**: `out`
- **Node version**: `18` (or latest LTS)

#### Step 4: Deploy

1. **Click "Deploy site"**
2. **Wait for the build** to complete (usually 2-5 minutes)
3. **Your site will be live** at a random Netlify URL like `https://amazing-name-123456.netlify.app`

#### Step 5: Custom Domain (Optional)

1. **Go to Site settings** > **Domain management**
2. **Click "Add custom domain"**
3. **Enter your domain name**
4. **Follow DNS configuration instructions**

### Method 2: Manual Deploy

If you prefer to deploy manually without Git integration:

#### Step 1: Build Your Project

```bash
npm run build
```

#### Step 2: Deploy to Netlify

1. **Go to [netlify.com](https://netlify.com)**
2. **Drag and drop** the `out` folder to the deploy area
3. **Your site will be live** immediately

## Configuration Files

### netlify.toml
This file configures your Netlify deployment:

```toml
[build]
  publish = "out"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Key Features:
- **Build Configuration**: Specifies build command and output directory
- **Node Version**: Ensures consistent Node.js version
- **Redirects**: Handles client-side routing
- **Headers**: Security and caching headers
- **Image Caching**: Optimizes photo loading

## Environment Variables

If you need environment variables:

1. **Go to Site settings** > **Environment variables**
2. **Add your variables** (e.g., API keys, email settings)
3. **Redeploy** your site

## Continuous Deployment

With Git integration enabled:

1. **Push changes** to your repository
2. **Netlify automatically builds** and deploys
3. **Preview deployments** are created for pull requests
4. **Production deployments** happen on main branch pushes

## Performance Optimizations

### Image Optimization
- Images are served from Netlify's CDN
- Automatic compression and optimization
- Caching headers configured for photos

### Build Optimizations
- Static site generation for fast loading
- Optimized bundle sizes
- Tree shaking enabled

## Custom Features

### Form Handling
If you want to use Netlify Forms:

1. **Add `netlify` attribute** to your forms
2. **Forms will be automatically handled** by Netlify
3. **View submissions** in the Netlify dashboard

### Serverless Functions
For API endpoints:

1. **Create `netlify/functions/`** directory
2. **Add your serverless functions**
3. **Deploy automatically** with your site

## Troubleshooting

### Common Issues:

1. **Build Failures**:
   - Check build logs in Netlify dashboard
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version compatibility

2. **Images Not Loading**:
   - Ensure images are in `public/photos/` directory
   - Check file paths in your code
   - Verify image file extensions

3. **Routing Issues**:
   - The `netlify.toml` includes redirect rules
   - Ensure all routes are properly configured

4. **Environment Variables**:
   - Add variables in Netlify dashboard
   - Redeploy after adding variables

### Build Logs
- **View build logs** in the Netlify dashboard
- **Check for errors** in the deploy log
- **Verify build command** and output directory

## Advanced Features

### Branch Deploys
- **Preview deployments** for feature branches
- **Production deployments** for main branch
- **Password protection** for preview sites

### Split Testing
- **A/B testing** capabilities
- **Traffic splitting** between versions
- **Performance monitoring**

### Analytics
- **Built-in analytics** (Netlify Analytics)
- **Performance insights**
- **Visitor statistics**

## Support

### Netlify Documentation
- [Netlify Docs](https://docs.netlify.com/)
- [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/next-js/)

### Community
- [Netlify Community](https://community.netlify.com/)
- [GitHub Issues](https://github.com/netlify/netlify-cli/issues)

## Cost

### Free Tier Includes:
- **100GB bandwidth** per month
- **300 build minutes** per month
- **Unlimited sites**
- **Custom domains**
- **HTTPS certificates**

### Paid Plans:
- **Pro**: $19/month for more bandwidth and features
- **Business**: $99/month for team features
- **Enterprise**: Custom pricing

Your portfolio is now ready for Netlify deployment! 🚀
