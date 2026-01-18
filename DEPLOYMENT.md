# AWS Deployment Documentation

**Last Updated:** 2025-01-18
**Status:** Deployed ✅

## Current Deployment

### Live URL
**Website:** http://mikehaertel-website-2025.s3-website-us-east-1.amazonaws.com

### Infrastructure
- **Service:** Amazon S3 Static Website Hosting
- **Region:** us-east-1
- **Bucket:** mikehaertel-website-2025
- **Type:** Static export of Next.js app

## Deployment Configuration

### Next.js Static Export
The website is configured for static export in `website/next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
};
```

### Current Limitations
- ❌ **Contact Form Disabled**: API routes (`/api/contact`) don't work with static export
  - Files in `/app/api.disabled/` folder
  - Can re-enable with Lambda/API Gateway or external service later

- ✅ **Media Gallery**: Works perfectly with static export
- ✅ **All Static Pages**: Fully functional

## How to Deploy Updates

### 1. Build the Static Site
```bash
cd website
npm run build
```

This creates the `out/` directory with static HTML/CSS/JS.

### 2. Sync to S3
```bash
aws s3 sync ./out/ s3://mikehaertel-website-2025/ --delete
```

The `--delete` flag removes files from S3 that aren't in your local build.

### 3. Verify Deployment
Visit: http://mikehaertel-website-2025.s3-website-us-east-1.amazonaws.com

### One-Command Deploy
```bash
cd website && npm run build && aws s3 sync ./out/ s3://mikehaertel-website-2025/ --delete
```

## S3 Bucket Configuration

### Website Hosting Settings
- **Index Document:** index.html
- **Error Document:** 404.html
- **Public Access:** Enabled (required for public website)

### Bucket Policy
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::mikehaertel-website-2025/*"
    }
  ]
}
```

## Next Steps (Optional Improvements)

### 1. Add CloudFront CDN
Benefits:
- HTTPS support with SSL certificate
- Faster global delivery
- Custom domain (mikehaertel.com)
- Caching at edge locations

Setup:
```bash
# 1. Request SSL certificate in ACM (us-east-1)
aws acm request-certificate \
  --domain-name mikehaertel.com \
  --subject-alternative-names www.mikehaertel.com \
  --validation-method DNS \
  --region us-east-1

# 2. Create CloudFront distribution (use AWS Console)
# - Origin: S3 bucket website endpoint
# - SSL: Custom certificate from ACM
# - Alternate domains: mikehaertel.com, www.mikehaertel.com

# 3. Point Route 53 to CloudFront
```

### 2. Re-enable Contact Form
Options:
- **AWS Lambda + API Gateway**: Serverless backend for contact form
- **External Service**: Formspree, Basin, Formcarry
- **Mailto Link**: Simple email link (less spam protection)

### 3. Add GitHub Actions CI/CD
Auto-deploy on push to main:

```yaml
name: Deploy to S3

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3

    - name: Setup Node
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Build
      run: |
        cd website
        npm install
        npm run build

    - name: Configure AWS
      uses: aws-actions/configure-aws-credentials@v2
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1

    - name: Deploy to S3
      run: |
        aws s3 sync website/out/ s3://mikehaertel-website-2025/ --delete
```

## Troubleshooting

### Site Not Loading
```bash
# Check S3 bucket
aws s3 ls s3://mikehaertel-website-2025/

# Verify website configuration
aws s3api get-bucket-website --bucket mikehaertel-website-2025

# Test direct file access
curl http://mikehaertel-website-2025.s3-website-us-east-1.amazonaws.com/index.html
```

### 403 Forbidden
- Verify bucket policy allows public read
- Check S3 Block Public Access settings
- Ensure files uploaded successfully

### Assets Not Loading
- Check that `website/public/assets/` was synced
- Verify file paths in code match S3 structure
- Check browser console for 404 errors

## Costs

### Current Monthly Cost (Estimated)
- **S3 Storage:** ~$0.50 (for ~700MB of media)
- **S3 Requests:** ~$0.10 (low traffic portfolio site)
- **Data Transfer:** Free tier likely covers it
- **Total:** ~$0.60/month

### With CloudFront (Future)
- **CloudFront:** ~$0.50/month (with free tier)
- **Total:** ~$1.10/month

## Rollback

### Revert to Previous Build
```bash
# From git
git checkout <previous-commit>
cd website && npm run build
aws s3 sync ./out/ s3://mikehaertel-website-2025/ --delete
```

### S3 Versioning
Not currently enabled. To enable:
```bash
aws s3api put-bucket-versioning \
  --bucket mikehaertel-website-2025 \
  --versioning-configuration Status=Enabled
```

## Security

✅ **Protected:**
- AWS credentials not in repo (.gitignore)
- Environment variables not deployed
- S3 bucket only allows GET requests

⚠️ **Public Access Required:**
- Bucket must be publicly readable for website hosting
- This is normal for public websites

## Monitoring

### Check Deployment Status
```bash
# List files
aws s3 ls s3://mikehaertel-website-2025/ --recursive | wc -l

# Get bucket size
aws s3 ls s3://mikehaertel-website-2025/ --recursive --summarize --human-readable
```

### View Access Logs (Optional Setup)
```bash
aws s3api put-bucket-logging \
  --bucket mikehaertel-website-2025 \
  --bucket-logging-status file://logging-config.json
```

## For Next LLM/Developer

**Quick Deploy:**
```bash
cd website
npm run build
aws s3 sync ./out/ s3://mikehaertel-website-2025/ --delete
```

**Live Site:** http://mikehaertel-website-2025.s3-website-us-east-1.amazonaws.com

**Contact Form:** Disabled (in `app/api.disabled/`), needs Lambda or external service to re-enable
