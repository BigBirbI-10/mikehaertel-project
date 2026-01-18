# AWS Setup Guide

**Last Updated:** 2026-01-17

## Overview

This document covers AWS configuration for mikehaertel.com infrastructure.

## Prerequisites

- AWS Account with appropriate permissions
- AWS CLI installed locally
- Domain registered (mikehaertel.com)

## Initial AWS Configuration

### 1. Install AWS CLI

```bash
# macOS
brew install awscli

# Linux
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Windows
# Download and run the AWS CLI MSI installer
```

### 2. Create IAM User

For security, create a dedicated IAM user with least-privilege access:

1. Log into AWS Console
2. Navigate to IAM → Users → Add User
3. User name: `mikehaertel-deploy`
4. Access type: Programmatic access
5. Attach policies (start minimal, expand as needed):
   - `AmazonS3FullAccess` (for static hosting)
   - `CloudFrontFullAccess` (for CDN)
   - `Route53FullAccess` (for DNS)
   - Custom policies as needed

**Save credentials securely** - they're shown only once.

### 3. Configure AWS CLI

```bash
aws configure

# Enter when prompted:
# AWS Access Key ID: [your-access-key]
# AWS Secret Access Key: [your-secret-key]
# Default region name: us-east-1  (or your preferred region)
# Default output format: json
```

### 4. Verify Configuration

```bash
# Check identity
aws sts get-caller-identity

# Should return:
# {
#     "UserId": "...",
#     "Account": "...",
#     "Arn": "arn:aws:iam::...:user/mikehaertel-deploy"
# }
```

## Core AWS Services Setup

### S3 Bucket for Static Hosting

```bash
# Create bucket (bucket names must be globally unique)
aws s3 mb s3://mikehaertel.com --region us-east-1

# Enable static website hosting
aws s3 website s3://mikehaertel.com \
  --index-document index.html \
  --error-document error.html

# Set bucket policy for public read (see security.md for considerations)
```

### CloudFront CDN

CloudFront provides:
- Global content delivery
- HTTPS termination
- DDoS protection
- Cost optimization through caching

Configuration via AWS Console or CloudFormation (recommended for infrastructure-as-code).

### Route 53 DNS

```bash
# Create hosted zone
aws route53 create-hosted-zone \
  --name mikehaertel.com \
  --caller-reference $(date +%s)

# Note the nameservers from output
# Update domain registrar to use these nameservers
```

## Security Considerations

### IAM Best Practices
- Enable MFA on root account
- Use IAM roles for EC2/Lambda when possible
- Rotate access keys every 90 days
- Never commit credentials to Git

### S3 Security
- Use bucket policies, not ACLs
- Enable versioning for critical buckets
- Enable server-side encryption
- Block public access unless specifically needed

### Network Security
- Use VPC for any compute resources
- Implement Security Groups (whitelist approach)
- Enable VPC Flow Logs
- Use AWS WAF for web application firewall

## Cost Optimization

### Free Tier Eligible Services
- S3: 5GB storage, 20,000 GET requests
- CloudFront: 50GB data transfer out
- Route 53: First hosted zone $0.50/month
- Lambda: 1M free requests/month

### Cost Monitoring
```bash
# Enable cost allocation tags
aws ce get-cost-and-usage \
  --time-period Start=2026-01-01,End=2026-01-31 \
  --granularity MONTHLY \
  --metrics BlendedCost
```

**Recommendation:** Set up AWS Budgets with alerts at $10, $25, $50 thresholds.

## Environment Variables

Create `.env` file (never commit to Git):

```bash
AWS_ACCOUNT_ID=123456789012
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your-key-here
AWS_SECRET_ACCESS_KEY=your-secret-here
DOMAIN_NAME=mikehaertel.com
```

Add to `.gitignore`:
```
.env
.env.*
!.env.example
```

## Troubleshooting

### Cannot Connect to AWS
```bash
# Check credentials
aws configure list

# Verify network
ping amazonaws.com

# Check permissions
aws iam get-user
```

### Permission Denied Errors
- Verify IAM user has necessary policies
- Check resource-based policies (S3 bucket policy, etc.)
- Ensure region matches resource location

## Next Steps

1. Set up SSL certificate with AWS Certificate Manager
2. Configure CloudFront distribution
3. Implement CI/CD pipeline
4. Set up CloudWatch monitoring and alarms

## Resources

- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
- [AWS CLI Command Reference](https://docs.aws.amazon.com/cli/latest/)
- [AWS Free Tier](https://aws.amazon.com/free/)
