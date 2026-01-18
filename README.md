# Mike Haertel Project

## Overview
Professional portfolio website built with Next.js and AWS infrastructure.

**Domain:** mikehaertel.com
**Status:** Active Development
**Last Updated:** 2025-01-18

## Project Structure
```
mikehaertel-project/
├── website/                 # Next.js application
│   ├── app/
│   │   ├── components/     # React components (MediaGallery, etc.)
│   │   ├── lib/            # Utilities (asset scanner, etc.)
│   │   └── page.tsx        # Homepage
│   ├── public/
│   │   └── assets/         # Synced from /assets
│   └── README.md
├── assets/                  # Media files (source)
│   ├── headshots/          # Professional photos
│   ├── photos/             # Photography portfolio
│   ├── projects/           # Project images & videos
│   └── README.md
├── docs/                    # Project documentation
├── scripts/                 # Utility scripts
└── README.md
```

## Quick Start

### Prerequisites
- Node.js 18+
- AWS CLI configured with credentials
- Git installed

### Initial Setup
```bash
# Clone the repository
git clone https://github.com/BigBirbI-10/mikehaertel-project.git
cd mikehaertel-project

# Install website dependencies
cd website
npm install

# Start development server
npm run dev
# Open http://localhost:3000
```

### Asset Management
```bash
# Assets are in /assets at project root
# Add images/videos to:
assets/headshots/    # Professional photos
assets/photos/       # Photography portfolio
assets/projects/     # Project documentation (supports videos!)

# Assets sync to website/public/assets/ automatically
# Gallery component reads them on build
```

### AWS Configuration
```bash
# Configure AWS credentials
aws configure

# Verify connectivity
aws sts get-caller-identity
```

## Development

### Technology Stack
- **Frontend:** Next.js 15 (React, TypeScript)
- **Styling:** Tailwind CSS
- **Deployment:** AWS (planned)
- **Media:** Automatic gallery system with video support

### Key Features
- **Automatic Media Gallery**: Drop images/videos in asset folders, gallery displays them automatically
- **Video Support**: MP4/WebM videos autoplay on hover in project gallery
- **Responsive Design**: Mobile-first approach with Tailwind
- **Contact Form**: Resend integration for email (see website/CONTACT_FORM_SETUP.md)

### Version Control
This project uses Git for version control.

Key branches:
- `main` - Production-ready code

### Documentation
- `README.md` - This file (project overview)
- `website/README.md` - Website-specific setup
- `website/app/components/README.md` - Component documentation
- `assets/README.md` - Asset management guide
- `docs/` - AWS infrastructure and deployment docs

See [docs/README.md](docs/README.md) for infrastructure details.

## Deployment

Deployment procedures are documented in [docs/deployment.md](docs/deployment.md).

## Security

Security practices and guidelines are in [docs/security.md](docs/security.md).

**Never commit:**
- AWS credentials
- API keys
- Private keys
- Environment files with secrets

## License

[To be determined]

## Contact

Mike Haertel - mikehaertel.com

---
For detailed changelog, see [CHANGELOG.md](CHANGELOG.md)
