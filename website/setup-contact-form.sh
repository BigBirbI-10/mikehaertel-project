#!/bin/bash

# Contact Form Setup Script
# This script helps you set up the Resend API key for the contact form

echo "================================================"
echo "Contact Form Setup"
echo "================================================"
echo ""

# Check if .env.local already exists
if [ -f .env.local ]; then
    echo "⚠️  .env.local already exists!"
    read -p "Do you want to overwrite it? (y/N): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Setup cancelled."
        exit 1
    fi
fi

echo "To get your Resend API key:"
echo "1. Go to https://resend.com"
echo "2. Sign up for a free account"
echo "3. Navigate to 'API Keys' section"
echo "4. Create a new API key"
echo ""

read -p "Enter your Resend API key (starts with 're_'): " api_key

# Validate API key format
if [[ ! $api_key == re_* ]]; then
    echo "❌ Invalid API key format. Should start with 're_'"
    exit 1
fi

# Create .env.local file
cat > .env.local << EOF
# Resend API Key
# Get your API key from: https://resend.com/api-keys
RESEND_API_KEY=$api_key
EOF

echo ""
echo "✅ .env.local created successfully!"
echo ""
echo "Next steps:"
echo "1. Start the dev server: npm run dev"
echo "2. Navigate to http://localhost:3000"
echo "3. Scroll to the contact form and test it"
echo "4. Check your Proton Mail for the test message"
echo ""
echo "Your SimpleLogin alias: personalsite.identity920@slmails.com"
echo ""
