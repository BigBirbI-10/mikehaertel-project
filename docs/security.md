# Security Best Practices

**Last Updated:** 2026-01-17

## Principle: Security First

Security is not optional. Every component must be designed with security as a primary concern, not an afterthought.

## Credentials Management

### Never Commit Secrets

**Prohibited in Git:**
- AWS access keys
- API tokens
- Database passwords
- Private keys
- Session secrets
- OAuth credentials

### Environment Variables

Store all secrets in environment variables:

```bash
# .env (never committed)
AWS_ACCESS_KEY_ID=AKIA...
AWS_SECRET_ACCESS_KEY=...
DATABASE_URL=postgresql://...
API_KEY=...
```

Use `.env.example` as template (committed):
```bash
# .env.example (safe to commit)
AWS_ACCESS_KEY_ID=your_aws_key_here
AWS_SECRET_ACCESS_KEY=your_aws_secret_here
DATABASE_URL=your_database_url_here
```

### AWS Credentials

```bash
# Use AWS credentials file (safer than environment variables)
~/.aws/credentials

# Or use IAM roles when running on AWS infrastructure
# This is the MOST secure approach - no credentials needed
```

## AWS Security

### IAM Best Practices

1. **Least Privilege Principle**
   - Start with minimal permissions
   - Add permissions only as needed
   - Regularly audit and remove unused permissions

2. **Never Use Root Account**
   - Create IAM admin user immediately
   - Enable MFA on root account
   - Lock root access keys in safe

3. **MFA Everywhere**
   - Enable MFA on all human users
   - Use virtual MFA (Google Authenticator, Authy)
   - Consider hardware tokens for highest security

4. **Rotate Credentials**
   - Access keys: every 90 days
   - Passwords: every 90 days
   - Set up AWS Config rules for automated compliance checks

### S3 Security

```bash
# Block all public access by default
aws s3api put-public-access-block \
  --bucket mikehaertel.com \
  --public-access-block-configuration \
  "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"

# Enable versioning for recovery
aws s3api put-bucket-versioning \
  --bucket mikehaertel.com \
  --versioning-configuration Status=Enabled

# Enable server-side encryption
aws s3api put-bucket-encryption \
  --bucket mikehaertel.com \
  --server-side-encryption-configuration \
  '{"Rules":[{"ApplyServerSideEncryptionByDefault":{"SSEAlgorithm":"AES256"}}]}'
```

### Network Security

1. **Use HTTPS Everywhere**
   - Enable SSL/TLS for all endpoints
   - Use AWS Certificate Manager (free certificates)
   - Configure HSTS headers

2. **VPC Configuration**
   - Use private subnets for databases and backend services
   - Public subnets only for load balancers
   - Network ACLs as secondary defense

3. **Security Groups**
   - Whitelist approach (deny by default)
   - Minimum necessary ports
   - Document each rule's purpose
   - Regular audits

## Application Security

### Input Validation

```javascript
// Always validate and sanitize user input
function sanitizeInput(input) {
  // Remove potentially dangerous characters
  // Validate against expected format
  // Limit length
  return validated;
}
```

### SQL Injection Prevention

```javascript
// BAD - vulnerable to SQL injection
const query = `SELECT * FROM users WHERE id = ${userId}`;

// GOOD - use parameterized queries
const query = 'SELECT * FROM users WHERE id = ?';
db.query(query, [userId]);
```

### XSS Prevention

```javascript
// Escape user-generated content
// Use Content Security Policy headers
// Validate on server, not just client
```

### Authentication

- Use established libraries (Passport.js, OAuth)
- Never roll your own crypto
- Hash passwords with bcrypt (cost factor ≥ 12)
- Implement rate limiting on login attempts
- Use secure session management

## Code Security

### Dependency Management

```bash
# Regularly audit dependencies
npm audit
# or
pip-audit

# Update dependencies
npm update
# or
pip install --upgrade -r requirements.txt

# Use lock files
package-lock.json
requirements.txt with pinned versions
```

### Code Review

- All code must be reviewed before merging
- Security-focused review checklist
- Automated security scanning in CI/CD

## Secrets Detection

### Git Hooks

Prevent accidental commits of secrets:

```bash
# .git/hooks/pre-commit
#!/bin/bash
if git diff --cached | grep -E 'AKIA|aws_secret|password.*=.*[^example]'; then
  echo "Possible secret detected! Commit rejected."
  exit 1
fi
```

### Scanning Tools

- git-secrets (AWS secrets)
- gitleaks (general secret scanning)
- trufflehog (entropy-based detection)

## Monitoring & Incident Response

### CloudWatch Alarms

Monitor for:
- Unauthorized API calls
- Root account usage
- IAM policy changes
- Security group modifications
- Failed authentication attempts

### AWS CloudTrail

- Enable in all regions
- Log to S3 with versioning
- Set up log file validation
- Regular log analysis

### Incident Response Plan

1. Detection (monitoring, alarms)
2. Containment (isolate affected resources)
3. Investigation (CloudTrail logs, forensics)
4. Recovery (restore from clean backups)
5. Post-mortem (what happened, how to prevent)

## Compliance & Auditing

### Regular Security Audits

- Quarterly IAM permission reviews
- Monthly dependency updates
- Weekly automated scans
- Annual penetration testing (for production systems)

### Documentation

- Document all security decisions
- Maintain inventory of all AWS resources
- Keep incident log
- Update security runbooks

## Data Protection

### Encryption

- **At Rest:** All S3 buckets, databases, EBS volumes
- **In Transit:** TLS 1.2+ for all communications
- **Key Management:** AWS KMS for encryption keys

### Backups

- Automated daily backups
- Test restoration procedures quarterly
- Store backups in separate AWS region
- Encrypt all backups

### Data Retention

- Define retention policies
- Automated cleanup of old data
- Secure deletion (not just removal)

## Security Checklist

Before deploying to production:

- [ ] All secrets in environment variables or AWS Secrets Manager
- [ ] `.gitignore` includes `.env` and credential files
- [ ] MFA enabled on all AWS users
- [ ] S3 buckets have encryption and versioning
- [ ] HTTPS configured with valid certificate
- [ ] Security groups follow least privilege
- [ ] CloudTrail enabled in all regions
- [ ] Automated dependency scanning in CI/CD
- [ ] CloudWatch alarms configured
- [ ] Backup and recovery tested
- [ ] Incident response plan documented

## Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [AWS Security Best Practices](https://aws.amazon.com/architecture/security-identity-compliance/)
- [CIS AWS Foundations Benchmark](https://www.cisecurity.org/benchmark/amazon_web_services)

## Emergency Contacts

**Security Incident:** [Your security contact]  
**AWS Support:** [Your AWS support plan details]

---

**Remember:** Security is everyone's responsibility. When in doubt, ask.
