#!/bin/bash

# AWS Connectivity Verification Script
# Checks AWS CLI configuration and basic connectivity

set -e  # Exit on error

echo "==================================="
echo "AWS Connectivity Verification"
echo "==================================="
echo ""

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed"
    echo "Please install it: https://aws.amazon.com/cli/"
    exit 1
fi

echo "✓ AWS CLI is installed"
aws --version
echo ""

# Check if credentials are configured
echo "Checking AWS credentials..."
if ! aws sts get-caller-identity &> /dev/null; then
    echo "❌ AWS credentials are not configured or invalid"
    echo ""
    echo "To configure credentials, run:"
    echo "  aws configure"
    echo ""
    echo "You'll need:"
    echo "  - AWS Access Key ID"
    echo "  - AWS Secret Access Key"
    echo "  - Default region (e.g., us-east-1)"
    exit 1
fi

echo "✓ AWS credentials are configured"
echo ""

# Display current identity
echo "Current AWS Identity:"
aws sts get-caller-identity --output table
echo ""

# Display configured region
echo "Configured AWS Region:"
aws configure get region || echo "No default region set"
echo ""

# Test S3 access
echo "Testing S3 access..."
if aws s3 ls &> /dev/null; then
    echo "✓ S3 access confirmed"
    echo ""
    echo "Your S3 buckets:"
    aws s3 ls
else
    echo "⚠ Cannot list S3 buckets (may be due to permissions)"
fi
echo ""

# Test Route 53 access
echo "Testing Route 53 access..."
if aws route53 list-hosted-zones &> /dev/null; then
    echo "✓ Route 53 access confirmed"
    echo ""
    hosted_zones=$(aws route53 list-hosted-zones --query 'HostedZones[?Name==`mikehaertel.com.`]' --output text)
    if [ -z "$hosted_zones" ]; then
        echo "Note: No hosted zone found for mikehaertel.com"
    else
        echo "Hosted zone for mikehaertel.com exists"
    fi
else
    echo "⚠ Cannot access Route 53 (may be due to permissions)"
fi
echo ""

# Test CloudFront access
echo "Testing CloudFront access..."
if aws cloudfront list-distributions &> /dev/null; then
    echo "✓ CloudFront access confirmed"
else
    echo "⚠ Cannot access CloudFront (may be due to permissions)"
fi
echo ""

echo "==================================="
echo "Verification Complete!"
echo "==================================="
echo ""
echo "Next steps:"
echo "1. Review docs/aws-setup.md for detailed setup"
echo "2. Create S3 bucket for mikehaertel.com"
echo "3. Configure CloudFront distribution"
echo "4. Set up Route 53 DNS"
