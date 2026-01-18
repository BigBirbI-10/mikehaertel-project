# Architecture Overview

**Last Updated:** 2026-01-17  
**Status:** Planning Phase

## System Design Philosophy

This project follows first principles thinking with emphasis on:

1. **Simplicity** - Use the simplest solution that works
2. **Security** - Security by design, not as an afterthought
3. **Cost Efficiency** - Leverage AWS free tier and pay-as-you-grow services
4. **Maintainability** - Clean, documented code that's easy to understand
5. **Scalability** - Architecture that can grow with demand

## High-Level Architecture

```
┌─────────────┐
│   Client    │ (Browser)
└──────┬──────┘
       │ HTTPS
       ↓
┌─────────────────────┐
│   CloudFront CDN    │ (Global Edge Locations)
│   - SSL/TLS         │
│   - Caching         │
│   - DDoS Protection │
└──────┬──────────────┘
       │
       ↓
┌─────────────────────┐
│    S3 Bucket        │ (Static Hosting)
│  mikehaertel.com    │
│   - HTML/CSS/JS     │
│   - Images/Assets   │
└─────────────────────┘

┌─────────────────────┐
│    Route 53 DNS     │
│  mikehaertel.com    │
└─────────────────────┘
```

## Technology Stack (To Be Determined)

### Frontend Options
- **Static Site:** HTML/CSS/JavaScript (simplest, lowest cost)
- **React/Next.js:** For dynamic content and SSR
- **Vue/Nuxt:** Alternative modern framework

### Backend Options (If Needed)
- **Serverless:** AWS Lambda + API Gateway (pay per request)
- **Container:** ECS/Fargate (if complex backend needed)
- **Traditional:** EC2 (if specific requirements demand it)

### Database Options (If Needed)
- **DynamoDB:** Serverless NoSQL (free tier available)
- **RDS:** Managed PostgreSQL/MySQL (if relational data needed)
- **S3:** For simple key-value storage

## Component Details

### CloudFront Distribution

**Purpose:** Global content delivery, SSL termination, security

**Benefits:**
- Free SSL certificate via ACM
- Global edge locations reduce latency
- DDoS protection included
- Reduces load on origin
- Cost-effective caching

**Configuration:**
- Origin: S3 bucket
- Viewer Protocol Policy: Redirect HTTP to HTTPS
- Allowed HTTP Methods: GET, HEAD, OPTIONS
- Cache behavior: Cache based on headers, query strings as needed
- Custom error pages: 403, 404 → index.html (for SPA routing)

### S3 Static Hosting

**Purpose:** Store and serve static files

**Benefits:**
- Highly available (99.99% SLA)
- Automatically scales
- Pay only for storage and requests
- Versioning for backup/recovery

**Configuration:**
- Bucket name: mikehaertel.com (must match domain)
- Static website hosting enabled
- Public read access (only through CloudFront)
- Versioning enabled
- Server-side encryption (AES-256)
- Lifecycle policies for cost optimization

### Route 53 DNS

**Purpose:** DNS management and routing

**Configuration:**
- Hosted zone: mikehaertel.com
- A record: Alias to CloudFront distribution
- AAAA record: IPv6 alias to CloudFront
- MX records: If email is configured
- Health checks: For high availability (if multiple origins)

## Security Architecture

### Defense in Depth

1. **Edge Layer (CloudFront)**
   - AWS Shield (DDoS protection)
   - WAF rules (if needed)
   - Geo-blocking (if needed)

2. **Application Layer**
   - Input validation
   - Output encoding
   - HTTPS only
   - Security headers

3. **Data Layer**
   - Encryption at rest (S3)
   - Encryption in transit (TLS)
   - Access logging
   - Versioning for recovery

### Identity & Access Management

```
Root Account (MFA enabled, locked)
    ↓
Admin IAM User (MFA enabled)
    ↓
Deploy IAM User (Programmatic access only)
    ↓
Specific permissions (least privilege)
```

## Deployment Pipeline

```
Developer
    ↓
Git Commit → GitHub
    ↓
GitHub Actions (CI/CD)
    ↓
Build & Test
    ↓
Deploy to S3
    ↓
CloudFront Invalidation
    ↓
Production Live
```

## Cost Estimation

### Free Tier Usage (First 12 months)
- CloudFront: 50 GB data transfer out
- S3: 5 GB storage, 20,000 GET requests
- Route 53: $0.50/month for hosted zone
- Lambda: 1M requests, 400,000 GB-seconds compute

### Estimated Monthly Cost (After Free Tier)
**Scenario: Small personal site, 10,000 visitors/month**

- Route 53: $0.50 (hosted zone)
- S3 Storage (1 GB): $0.023
- S3 Requests (100,000): $0.04
- CloudFront (10 GB): $0.85
- **Total: ~$1.50/month**

### Cost Optimization Strategies

1. **Leverage free tier** while learning and building
2. **CloudFront caching** reduces origin requests
3. **S3 lifecycle policies** move old content to cheaper storage
4. **CloudWatch alarms** alert on unexpected usage
5. **Budget alerts** at $10, $25, $50 thresholds

## Monitoring & Observability

### Key Metrics
- CloudFront: Cache hit ratio, error rate, latency
- S3: Request count, error rate
- Overall: Availability, response time

### Logging
- CloudFront access logs → S3
- S3 access logs → Separate bucket
- CloudTrail → All API calls

### Alarms
- 4xx/5xx error rate exceeds threshold
- Monthly cost exceeds budget
- Unusual traffic patterns

## Scalability Considerations

### Current Architecture Scales To:
- **Users:** Millions (CloudFront handles it)
- **Storage:** Unlimited (S3 scales automatically)
- **Geography:** Global (CloudFront edge locations)

### When to Evolve Architecture:
1. **Need dynamic content** → Add Lambda functions
2. **Need user authentication** → Add Cognito
3. **Need database** → Add DynamoDB or RDS
4. **Need API** → Add API Gateway

## Future Enhancements

**Phase 1 (Current):** Static website on S3 + CloudFront
**Phase 2:** Add serverless functions for dynamic features
**Phase 3:** Add database for user data/content
**Phase 4:** Add authentication and user accounts
**Phase 5:** Scale based on actual needs

## Decision Log

### Why Static Site First?
- Simplest implementation
- Lowest cost (nearly free)
- Fastest time to deployment
- Easy to maintain
- Highly secure (less attack surface)
- Can evolve to dynamic as needed

### Why CloudFront Over Direct S3?
- Free SSL certificate
- Better performance (global CDN)
- Enhanced security (AWS Shield)
- Better for SEO (HTTPS)
- Minimal cost difference

### Why AWS Over Alternatives?
- Free tier for learning
- Industry standard
- Comprehensive service offering
- Strong security and compliance
- Easy to integrate services

## References

- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
- [AWS Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [CloudFront Best Practices](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/best-practices.html)
