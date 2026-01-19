#!/bin/bash
set -e

# Complete CloudFront and DNS Setup Script
# Run this after ACM certificate is validated

CERT_ARN="arn:aws:acm:us-east-1:308076653178:certificate/a7537d21-91c1-4ab6-93b6-36c836e3ad1b"
HOSTED_ZONE_ID="Z68ZB0XO34TTO"
DOMAIN="mhaertel.com"

echo "==========================================="
echo "CloudFront Setup for mhaertel.com"
echo "==========================================="
echo ""

# Check certificate status
echo "1. Checking certificate status..."
CERT_STATUS=$(aws acm describe-certificate \
  --certificate-arn $CERT_ARN \
  --region us-east-1 \
  --query 'Certificate.Status' \
  --output text)

if [ "$CERT_STATUS" != "ISSUED" ]; then
  echo "❌ Certificate not yet validated. Status: $CERT_STATUS"
  echo "Please wait for validation to complete."
  echo "Check: https://console.aws.amazon.com/acm/home?region=us-east-1"
  exit 1
fi

echo "✓ Certificate is validated!"
echo ""

# Create CloudFront distribution
echo "2. Creating CloudFront distribution..."
DISTRIBUTION_ID=$(aws cloudfront create-distribution \
  --distribution-config file:///tmp/cloudfront-config.json \
  --query 'Distribution.Id' \
  --output text)

echo "✓ CloudFront distribution created: $DISTRIBUTION_ID"
echo ""

# Get CloudFront domain name
CF_DOMAIN=$(aws cloudfront get-distribution \
  --id $DISTRIBUTION_ID \
  --query 'Distribution.DomainName' \
  --output text)

echo "CloudFront domain: $CF_DOMAIN"
echo ""

# Wait for CloudFront to deploy
echo "3. Waiting for CloudFront deployment (this takes 10-15 minutes)..."
aws cloudfront wait distribution-deployed --id $DISTRIBUTION_ID
echo "✓ CloudFront distribution deployed!"
echo ""

# Update Route 53 DNS
echo "4. Updating Route 53 DNS records..."

# Create change batch for A record
cat > /tmp/route53-update.json << EOF
{
  "Changes": [
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "$DOMAIN",
        "Type": "A",
        "AliasTarget": {
          "HostedZoneId": "Z2FDTNDATAQYW2",
          "DNSName": "$CF_DOMAIN",
          "EvaluateTargetHealth": false
        }
      }
    },
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "$DOMAIN",
        "Type": "AAAA",
        "AliasTarget": {
          "HostedZoneId": "Z2FDTNDATAQYW2",
          "DNSName": "$CF_DOMAIN",
          "EvaluateTargetHealth": false
        }
      }
    }
  ]
}
EOF

aws route53 change-resource-record-sets \
  --hosted-zone-id $HOSTED_ZONE_ID \
  --change-batch file:///tmp/route53-update.json

echo "✓ DNS records updated!"
echo ""

echo "==========================================="
echo "Setup Complete!"
echo "==========================================="
echo ""
echo "Your website will be available at:"
echo "  https://$DOMAIN"
echo "  https://www.$DOMAIN"
echo ""
echo "DNS propagation takes 5-10 minutes."
echo ""
echo "CloudFront Distribution ID: $DISTRIBUTION_ID"
echo "Save this for future deployments!"
echo ""
echo "To deploy updates in the future:"
echo "  cd website && npm run build"
echo "  aws s3 sync ./out/ s3://mikehaertel-website-2025/ --delete"
echo "  aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths '/*'"
echo ""
