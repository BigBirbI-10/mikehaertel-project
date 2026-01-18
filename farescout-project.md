# FareScout.App

**Live Site**: [FareScout.App](https://farescout.app)
**Project Type**: SaaS Web Application
**Role**: Founder & Solo Developer
**Status**: Beta (Production)

## Overview

FareScout is a specialized analytics platform for pedicab drivers and event service providers. The application aggregates, deduplicates, and enriches event data from multiple sources to help drivers identify high-demand areas during concerts, sports events, and festivals to maximize their earnings.

**Core Value Proposition**: "We do what we say, and we say what we do." - Data quality is the product.

## Technical Architecture

### Tech Stack
- **Runtime**: Node.js
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: PostgreSQL 15 (Prisma ORM)
- **Styling**: Vanilla CSS (no framework)
- **Authentication**: NextAuth.js
- **Payments**: Stripe integration

### Key Technologies & Libraries
- **Google Gemini LLM**: Event data enrichment and analysis
- **Libpostal**: Address normalization and standardization
- **External APIs**: Ticketmaster, SeatGeek, SerpAPI for event data ingestion
- **Cloud Platform**: Google Cloud Platform (GCP)
  - Cloud Run (containerized deployment)
  - Cloud SQL (managed PostgreSQL)

### Development Pipeline
Multi-tier deployment strategy demonstrating DevOps proficiency:

1. **Local Development**: Docker Desktop for rapid prototyping
2. **Test Environment**: Docker on Proxmox-hosted Linux VM for integration testing
3. **Production**: GCP Cloud Run with containerized deployment

## Core Features

### Data Processing Pipeline
1. **Ingestion**: Multi-source event data aggregation (Ticketmaster, SeatGeek, SerpAPI)
2. **Normalization**: Libpostal address normalization with regex sanitization
3. **Deduplication**: Intelligent event matching across data sources
4. **Enrichment**: LLM-based enhancement for venue capacity and attendance estimates
5. **Verification**: Haversine distance validation against OpenStreetMap data
6. **Weather Integration**: Geospatial weather analysis for event planning

### User-Facing Features
- Event discovery and filtering
- Geographic search and mapping
- Attendance predictions
- Weather forecasting integration
- Subscription management (Stripe)
- User authentication and preferences

## Technical Highlights

### Infrastructure & DevOps
- Containerized application deployment
- Multi-environment CI/CD pipeline
- Self-hosted test environment (Proxmox hypervisor)
- Production-grade database management
- API integration and data pipeline orchestration

### Software Engineering
- TypeScript for type safety and code quality
- Modern React patterns with Next.js App Router
- RESTful API design
- Database schema design and ORM implementation
- Payment processing integration
- OAuth authentication flows

### Modern Development Practices
- Leveraged AI coding tools for rapid application development
- Documentation-driven development (comprehensive `/Documentation` directory)
- Version control and change management
- Security-first approach (LTS packages, vulnerability monitoring)

## Business Impact

Demonstrates end-to-end product development capabilities:
- **Product Vision**: Identified market need and designed solution
- **Technical Execution**: Full-stack implementation from database to UI
- **Infrastructure Design**: Built scalable, cost-effective architecture
- **Go-to-Market**: Live production application serving real users
- **Monetization**: Implemented subscription-based revenue model

## Project Complexity Indicators

- Multi-source data aggregation with deduplication logic
- LLM integration for data enrichment
- Address normalization and geospatial analysis
- Payment processing and subscription management
- Multi-tier deployment pipeline
- Production-grade security and authentication
- Complex state management and data flows

---

*This project showcases the ability to take an idea from concept through production deployment, including architecture design, full-stack development, DevOps implementation, and business execution.*
