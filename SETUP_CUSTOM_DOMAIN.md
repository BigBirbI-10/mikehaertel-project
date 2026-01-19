# Setup Custom Domain (mhaertel.com)

**Current Issue:** IAM user `mikehaertel-deploy` lacks permissions for:
- ACM (SSL certificates)
- CloudFront (CDN)

**Solution:** Use AWS Console with admin account to complete setup

---

## Current State

✅ **What's Working:**
- S3 website: http://mikehaertel-website-2025.s3-website-us-east-1.amazonaws.com
- Route 53 hosted zone: mhaertel.com (Z68ZB0XO34TTO)

❌ **What's Needed:**
- SSL certificate for HTTPS
- CloudFront distribution
- DNS update to point mhaertel.com → CloudFront

---

## Option 1: AWS Console Setup (Recommended)

### Step 1: Request SSL Certificate

1. Go to **AWS Certificate Manager** (ACM) - **MUST be us-east-1 region**
2. Click "Request certificate"
3. Choose "Request a public certificate"
4. Domain names:
   - `mhaertel.com`
   - `www.mhaertel.com`
5. Validation method: **DNS validation**
6. Click "Request"
7. Click "Create records in Route 53" (auto-adds validation records)
8. Wait 5-30 minutes for validation to complete
9. **Save the Certificate ARN** (you'll need it for CloudFront)

### Step 2: Create CloudFront Distribution

1. Go to **CloudFront** in AWS Console
2. Click "Create distribution"

**Origin settings:**
- Origin domain: `mikehaertel-website-2025.s3-website-us-east-1.amazonaws.com`
  - ⚠️ Do NOT select from dropdown - type the full website endpoint
- Origin path: leave blank
- Name: `S3-mikehaertel-website`
- Enable Origin Shield: No

**Default cache behavior:**
- Viewer protocol policy: **Redirect HTTP to HTTPS**
- Allowed HTTP methods: **GET, HEAD**
- Cache policy: **CachingOptimized**

**Settings:**
- Alternate domain names (CNAMEs):
  - `mhaertel.com`
  - `www.mhaertel.com`
- Custom SSL certificate: **Select your ACM certificate from dropdown**
- Default root object: `index.html`

3. Click "Create distribution"
4. **Save the Distribution ID** (e.g., E1234567890ABC)
5. **Save the CloudFront domain** (e.g., d111111abcdef8.cloudfront.net)
6. Wait 10-15 minutes for deployment

### Step 3: Update Route 53 DNS

1. Go to **Route 53** → Hosted zones
2. Click **mhaertel.com**
3. Delete or update existing A and AAAA records:
   - Current A record points to: 35.153.134.191
   - Current AAAA record points to: 2600:1f18:145d:c800:9159:8840:bf2a:709b

**Create new A record (for mhaertel.com):**
- Record name: leave blank (for root domain)
- Record type: **A**
- Alias: **Yes**
- Route traffic to: **Alias to CloudFront distribution**
- Choose your CloudFront distribution from dropdown
- Click "Create records"

**Create AAAA record (IPv6):**
- Record name: leave blank
- Record type: **AAAA**
- Alias: **Yes**
- Route traffic to: **Alias to CloudFront distribution**
- Same CloudFront distribution
- Click "Create records"

**Create www subdomain (optional):**
- Record name: `www`
- Record type: **CNAME**
- Value: `mhaertel.com`
- TTL: 300
- Click "Create records"

### Step 4: Test

Wait 5-10 minutes for DNS propagation, then test:

```bash
# Check DNS
dig mhaertel.com

# Test HTTPS (should work now)
curl -I https://mhaertel.com

# Open in browser
open https://mhaertel.com
```

---

## Option 2: CLI Setup (If You Get Permissions)

If you grant `mikehaertel-deploy` user these permissions:
- `acm:RequestCertificate`
- `acm:DescribeCertificate`
- `cloudfront:CreateDistribution`
- `cloudfront:GetDistribution`
- `cloudfront:CreateInvalidation`
- `route53:ChangeResourceRecordSets`

Then I can automate this with:

```bash
# 1. Request certificate
CERT_ARN=$(aws acm request-certificate \
  --domain-name mhaertel.com \
  --subject-alternative-names www.mhaertel.com \
  --validation-method DNS \
  --region us-east-1 \
  --query CertificateArn \
  --output text)

# 2. Get validation records
aws acm describe-certificate \
  --certificate-arn $CERT_ARN \
  --region us-east-1

# 3. Add validation records to Route 53 (can be done via console or CLI)

# 4. Wait for validation
aws acm wait certificate-validated \
  --certificate-arn $CERT_ARN \
  --region us-east-1

# 5. Create CloudFront distribution (complex JSON config needed)
# 6. Update Route 53 A record
```

---

## Option 3: Quick HTTP-Only Setup (No SSL)

**Not recommended** but if you want mhaertel.com working immediately without HTTPS:

### Update DNS to point to S3 (HTTP only)

Create a CNAME record:
```bash
aws route53 change-resource-record-sets \
  --hosted-zone-id Z68ZB0XO34TTO \
  --change-batch file://change-batch.json
```

**change-batch.json:**
```json
{
  "Changes": [
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "www.mhaertel.com",
        "Type": "CNAME",
        "TTL": 300,
        "ResourceRecords": [
          {
            "Value": "mikehaertel-website-2025.s3-website-us-east-1.amazonaws.com"
          }
        ]
      }
    }
  ]
}
```

⚠️ **Limitations:**
- Only works for www.mhaertel.com (not root domain)
- No HTTPS (browsers will show "Not Secure")
- Not recommended for professional portfolio

---

## Recommended Approach

**Use Option 1** (AWS Console):
1. Takes ~30-45 minutes total
2. Gets you HTTPS and custom domain
3. Professional setup
4. Best for portfolio site

**Steps:**
1. ACM certificate (5 min setup + 5-30 min validation)
2. CloudFront distribution (5 min setup + 10-15 min deploy)
3. Route 53 DNS update (2 min setup + 5-10 min propagation)

---

## After Setup Complete

### Update Deployment Script

Once CloudFront is set up, deployments need to invalidate the cache:

```bash
# Get CloudFront distribution ID
DISTRIBUTION_ID="E1234567890ABC"  # From CloudFront console

# Deploy as usual
cd website && npm run build
aws s3 sync ./out/ s3://mikehaertel-website-2025/ --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id $DISTRIBUTION_ID \
  --paths "/*"
```

### Update Documentation

After setup, update these files with your CloudFront distribution ID:
- `DEPLOYMENT.md`
- `CURRENT_STATE.md`
- `DEPLOYMENT_SUMMARY.md`

---

## Need Help?

If you don't have AWS Console access or need help:
1. Grant additional IAM permissions to `mikehaertel-deploy`
2. Or share your CloudFront distribution ID after you create it manually
3. Or we can use an alternative like Vercel/Netlify for HTTPS + custom domain

---

## Quick Reference

**Current Resources:**
- S3 Bucket: `mikehaertel-website-2025` (us-east-1)
- S3 Website: http://mikehaertel-website-2025.s3-website-us-east-1.amazonaws.com
- Route 53 Zone: `mhaertel.com` (Z68ZB0XO34TTO)
- Domain: mhaertel.com (currently pointing to 35.153.134.191)

**Need to Create:**
- ACM Certificate ARN (in us-east-1)
- CloudFront Distribution ID
- Route 53 A record update

**IAM Permissions Needed (for CLI automation):**
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "acm:RequestCertificate",
        "acm:DescribeCertificate",
        "acm:ListCertificates",
        "cloudfront:CreateDistribution",
        "cloudfront:GetDistribution",
        "cloudfront:CreateInvalidation",
        "route53:ChangeResourceRecordSets",
        "route53:GetChange"
      ],
      "Resource": "*"
    }
  ]
}
```
