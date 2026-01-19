# How to Grant IAM Permissions

Follow these steps to grant the necessary permissions to the `mikehaertel-deploy` IAM user.

## Option 1: AWS Console (Easiest)

1. **Log into AWS Console** with an admin account

2. **Go to IAM** → Users → `mikehaertel-deploy`

3. **Click "Add permissions"** → "Attach policies directly"

4. **Click "Create policy"**:
   - Click "JSON" tab
   - Paste the contents of `IAM_PERMISSIONS_NEEDED.json`
   - Click "Next"
   - Name: `MikeHaertelWebsiteDeployment`
   - Description: `Permissions for CloudFront, ACM, and Route53 to deploy mikehaertel.com`
   - Click "Create policy"

5. **Attach the policy** to `mikehaertel-deploy` user:
   - Go back to Users → mikehaertel-deploy → Add permissions
   - Search for `MikeHaertelWebsiteDeployment`
   - Select it and click "Next"
   - Click "Add permissions"

6. **Verify**: Run this command to test:
   ```bash
   aws acm list-certificates --region us-east-1
   aws cloudfront list-distributions
   ```

## Option 2: AWS CLI (If you have admin access)

```bash
# Create the policy
aws iam create-policy \
  --policy-name MikeHaertelWebsiteDeployment \
  --policy-document file://IAM_PERMISSIONS_NEEDED.json

# Get the policy ARN (will be shown in output above)
# It will look like: arn:aws:iam::308076653178:policy/MikeHaertelWebsiteDeployment

# Attach to user
aws iam attach-user-policy \
  --user-name mikehaertel-deploy \
  --policy-arn arn:aws:iam::308076653178:policy/MikeHaertelWebsiteDeployment

# Verify
aws iam list-attached-user-policies --user-name mikehaertel-deploy
```

## What These Permissions Allow

### ACM (Certificate Manager)
- Request SSL certificates for HTTPS
- Manage certificates for mhaertel.com

### CloudFront (CDN)
- Create distribution for fast global delivery
- Invalidate cache when deploying updates
- Update distribution configuration

### Route 53 (DNS)
- Update DNS records to point mhaertel.com to CloudFront
- Create A/AAAA records for custom domain

## Security Notes

✅ **Safe:**
- These permissions are scoped to specific tasks
- No ability to create/delete users
- No ability to modify IAM policies
- Route 53 limited to specific hosted zone

⚠️ **Includes:**
- CloudFront/ACM resources use wildcard (*) because ARNs aren't known yet
- This is standard for deployment users

## After Granting Permissions

Once you've granted the permissions, tell me and I'll immediately:

1. Request SSL certificate for mhaertel.com
2. Create CloudFront distribution
3. Update Route 53 DNS records
4. Get your site live at https://mhaertel.com

**Estimated time:** 30-45 minutes (mostly waiting for AWS resource creation)

## Alternative: Use Existing Admin Credentials Temporarily

If you have admin AWS credentials locally, you could:

```bash
# Temporarily use admin profile
export AWS_PROFILE=admin  # or whatever your admin profile is named

# Then I can run the commands with elevated permissions
# After setup is done, switch back to mikehaertel-deploy profile
```

## Need Help?

If you're not comfortable with IAM policies or don't have admin access:
1. We can use the AWS Console manual approach (see SETUP_CUSTOM_DOMAIN.md)
2. Or deploy to Vercel instead (handles HTTPS + custom domain automatically)
