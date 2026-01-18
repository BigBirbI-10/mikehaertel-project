# Deployment Guide

**Last Updated:** 2026-01-17

## Overview

This guide covers deploying the mikehaertel.com project to AWS infrastructure.

## Prerequisites

Before deploying, ensure you have:

- [ ] AWS CLI installed and configured
- [ ] AWS credentials with appropriate permissions
- [ ] Domain (mikehaertel.com) registered
- [ ] Git repository set up
- [ ] Code tested locally
- [ ] Environment variables configured

## Deployment Environments

### Development
- Local development environment
- Test AWS resources in separate account/region
- Used for testing changes before production

### Production
- Live site at mikehaertel.com
- All production AWS resources
- Only deploy tested, reviewed code

## Initial Deployment

### Step 1: AWS Infrastructure Setup

See [aws-setup.md](aws-setup.md) for detailed AWS configuration.

#### Create S3 Bucket
```bash
# Create bucket
aws s3 mb s3://mikehaertel.com --region us-east-1

# Enable static website hosting
aws s3 website s3://mikehaertel.com \
  --index-document index.html \
  --error-document error.html

# Enable versioning (for rollback capability)
aws s3api put-bucket-versioning \
  --bucket mikehaertel.com \
  --versioning-configuration Status=Enabled
```

#### Configure Bucket Policy
```bash
# Create bucket policy file
cat > bucket-policy.json << 'EOF'
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::mikehaertel.com/*"
    }
  ]
}
EOF

# Apply policy
aws s3api put-bucket-policy \
  --bucket mikehaertel.com \
  --policy file://bucket-policy.json
```

### Step 2: SSL Certificate

```bash
# Request certificate (must be in us-east-1 for CloudFront)
aws acm request-certificate \
  --domain-name mikehaertel.com \
  --subject-alternative-names www.mikehaertel.com \
  --validation-method DNS \
  --region us-east-1

# Note the CertificateArn from output
# Add DNS validation records to Route 53
# Wait for validation (can take 5-30 minutes)
```

### Step 3: CloudFront Distribution

Create distribution (use AWS Console for initial setup, or CloudFormation for repeatability):

1. Origin: S3 bucket (mikehaertel.com)
2. Viewer protocol: Redirect HTTP to HTTPS
3. Allowed methods: GET, HEAD
4. Cache policy: CachingOptimized
5. SSL certificate: Custom (ACM certificate from Step 2)
6. Alternate domain names: mikehaertel.com, www.mikehaertel.com

**Save the CloudFront distribution domain name** (e.g., d1234567890.cloudfront.net)

### Step 4: DNS Configuration

```bash
# Create Route 53 hosted zone (if not exists)
aws route53 create-hosted-zone \
  --name mikehaertel.com \
  --caller-reference $(date +%s)

# Create A record pointing to CloudFront
# (Use AWS Console or create JSON file and use CLI)
```

Example Route 53 record:
```json
{
  "Changes": [{
    "Action": "CREATE",
    "ResourceRecordSet": {
      "Name": "mikehaertel.com",
      "Type": "A",
      "AliasTarget": {
        "HostedZoneId": "Z2FDTNDATAQYW2",
        "DNSName": "d1234567890.cloudfront.net",
        "EvaluateTargetHealth": false
      }
    }
  }]
}
```

## Deploying Code

### Manual Deployment

```bash
# Build the site (if using a build process)
# npm run build  OR  python build.py

# Sync files to S3
aws s3 sync ./dist s3://mikehaertel.com \
  --delete \
  --cache-control max-age=31536000,public \
  --exclude "*.html" \
  --exclude "*.xml"

# HTML files with shorter cache (for updates)
aws s3 sync ./dist s3://mikehaertel.com \
  --delete \
  --cache-control max-age=3600,public \
  --exclude "*" \
  --include "*.html" \
  --include "*.xml"

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

### Automated Deployment (GitHub Actions)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to AWS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v2
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1
    
    # Build step (if needed)
    # - name: Build
    #   run: npm run build
    
    - name: Deploy to S3
      run: |
        aws s3 sync ./dist s3://mikehaertel.com --delete
    
    - name: Invalidate CloudFront
      run: |
        aws cloudfront create-invalidation \
          --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} \
          --paths "/*"
```

**Required GitHub Secrets:**
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `CLOUDFRONT_DISTRIBUTION_ID`

## Rollback Procedures

### Option 1: S3 Versioning
```bash
# List versions
aws s3api list-object-versions \
  --bucket mikehaertel.com \
  --prefix index.html

# Restore specific version
aws s3api copy-object \
  --copy-source mikehaertel.com/index.html?versionId=VERSION_ID \
  --bucket mikehaertel.com \
  --key index.html
```

### Option 2: Git Revert
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# This triggers automated deployment of previous version
```

## Monitoring Deployment

### Check Deployment Status

```bash
# Verify S3 sync
aws s3 ls s3://mikehaertel.com/

# Check CloudFront invalidation status
aws cloudfront get-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --id INVALIDATION_ID

# Test the site
curl -I https://mikehaertel.com
```

### Post-Deployment Checks

- [ ] Site loads at https://mikehaertel.com
- [ ] SSL certificate is valid
- [ ] All pages/resources load correctly
- [ ] No console errors
- [ ] Mobile responsive
- [ ] SEO meta tags present

## Troubleshooting

### Site Not Loading

1. **Check DNS propagation**
   ```bash
   dig mikehaertel.com
   nslookup mikehaertel.com
   ```

2. **Verify CloudFront status**
   - Distribution should be "Deployed"
   - May take 10-15 minutes for new distributions

3. **Check S3 bucket**
   ```bash
   aws s3 ls s3://mikehaertel.com/
   ```

### 403 Forbidden Errors

- Check S3 bucket policy allows public read
- Verify index.html exists
- Check CloudFront origin settings

### SSL Certificate Issues

- Certificate must be in us-east-1 region
- Verify DNS validation records
- Check certificate status in ACM

### CloudFront Cache Issues

```bash
# Create invalidation to clear cache
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

## Best Practices

1. **Test Before Deploy**
   - Always test changes locally
   - Use separate dev environment
   - Review in staging before production

2. **Version Control**
   - Commit all changes
   - Use meaningful commit messages
   - Tag releases: `git tag -a v1.0.0 -m "Initial release"`

3. **Backups**
   - S3 versioning enabled
   - Regular backups of critical data
   - Document recovery procedures

4. **Security**
   - Never commit AWS credentials
   - Use IAM roles when possible
   - Regular security audits

5. **Monitoring**
   - Set up CloudWatch alarms
   - Monitor costs daily
   - Review CloudFront reports

## Maintenance

### Regular Tasks

**Weekly:**
- Check CloudWatch metrics
- Review error logs
- Monitor costs

**Monthly:**
- Update dependencies
- Review and rotate credentials
- Audit IAM permissions
- Check for AWS service updates

**Quarterly:**
- Review and update documentation
- Test backup/restore procedures
- Conduct security review
- Optimize costs

## Emergency Procedures

### Site Down
1. Check AWS Service Health Dashboard
2. Verify CloudFront distribution status
3. Check S3 bucket accessibility
4. Review CloudWatch logs
5. Contact AWS support if needed

### Security Incident
1. Immediately rotate all credentials
2. Review CloudTrail logs
3. Isolate affected resources
4. Follow incident response plan (see security.md)

## Cost Optimization

### Tips for Keeping Costs Low

1. **Use CloudFront caching**
   - Reduces S3 requests
   - Improves performance

2. **Compress assets**
   - Gzip/Brotli compression
   - Smaller file sizes = lower transfer costs

3. **S3 lifecycle policies**
   - Move old versions to cheaper storage
   - Delete temporary files

4. **Monitor and alert**
   - AWS Budgets with alerts
   - Regular cost reviews

## Additional Resources

- [AWS S3 Documentation](https://docs.aws.amazon.com/s3/)
- [CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
- [Route 53 Documentation](https://docs.aws.amazon.com/route53/)
- [GitHub Actions for AWS](https://github.com/aws-actions)

---

For questions or issues, refer to the main [README.md](../README.md) or create an issue in the repository.
