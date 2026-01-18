# Development Guide

**Last Updated:** 2026-01-17

## Development Philosophy

This project follows these principles:

1. **First Principles Thinking** - Question assumptions, understand fundamentals
2. **Keep It Simple** - Simplest solution that works is usually the best
3. **Clean Code** - Code is read more than written; make it clear
4. **Security First** - Build security in, don't bolt it on
5. **Document Everything** - Your future self will thank you

## Getting Started

### Clone and Setup

```bash
# Clone the repository
git clone <repository-url>
cd mikehaertel-project

# Copy environment template
cp .env.example .env

# Edit .env with your credentials
# NEVER commit .env to Git
```

### Project Structure

```
mikehaertel-project/
├── .github/          # GitHub Actions workflows
├── docs/             # All documentation
│   ├── README.md
│   ├── architecture.md
│   ├── aws-setup.md
│   ├── deployment.md
│   └── security.md
├── src/              # Source code
├── tests/            # Test files
├── scripts/          # Utility scripts
├── config/           # Configuration files
├── .gitignore
├── .env.example      # Environment template
├── README.md         # Project overview
└── CHANGELOG.md      # Version history
```

## Git Workflow

### Branch Strategy

```
main (production)
  ↓
develop (integration)
  ↓
feature/feature-name (development)
```

**Branch Types:**
- `main` - Production-ready code only
- `develop` - Integration branch for features
- `feature/*` - Individual features
- `bugfix/*` - Bug fixes
- `hotfix/*` - Emergency production fixes

### Making Changes

```bash
# Create feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name

# Make changes, commit frequently
git add .
git commit -m "Clear description of what changed"

# Push to remote
git push origin feature/your-feature-name

# Create pull request when ready
# After review and approval, merge to develop
```

### Commit Messages

Follow conventional commits format:

```
type(scope): short description

Longer description if needed

- Bullet points for details
- Reference issues: #123
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding/updating tests
- `chore:` Maintenance tasks

**Examples:**
```
feat(auth): add user login functionality

fix(api): correct response status codes

docs(readme): update installation instructions

chore(deps): update dependencies
```

## Code Standards

### General Principles

1. **Readable** - Code should be self-documenting
2. **Simple** - Avoid clever tricks, prefer clarity
3. **Consistent** - Follow established patterns
4. **Tested** - Write tests for critical functionality
5. **Secure** - Never trust user input

### JavaScript/Node.js

```javascript
// Use const by default, let when needed, never var
const API_KEY = process.env.API_KEY;
let counter = 0;

// Descriptive names
function calculateUserAge(birthDate) {
  // Clear, single-responsibility functions
}

// Use async/await over callbacks
async function fetchData() {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Validate inputs
function processUserInput(input) {
  if (!input || typeof input !== 'string') {
    throw new Error('Invalid input');
  }
  // Sanitize and process
}
```

### Python

```python
# Clear naming, type hints when helpful
def calculate_total_cost(items: list[dict]) -> float:
    """Calculate total cost of items.
    
    Args:
        items: List of item dictionaries with 'price' key
        
    Returns:
        Total cost as float
    """
    return sum(item['price'] for item in items)

# Use context managers
with open('file.txt', 'r') as f:
    data = f.read()

# Validate and sanitize
def process_user_input(user_input: str) -> str:
    if not user_input:
        raise ValueError("Input cannot be empty")
    return user_input.strip()
```

### HTML/CSS

```html
<!-- Semantic HTML -->
<article class="blog-post">
  <header>
    <h1>Post Title</h1>
    <time datetime="2026-01-17">January 17, 2026</time>
  </header>
  <main>
    <!-- Content -->
  </main>
</article>

<!-- Accessible -->
<button aria-label="Close dialog">×</button>
<img src="photo.jpg" alt="Description of photo">
```

```css
/* Mobile-first approach */
.container {
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Use CSS variables for consistency */
:root {
  --primary-color: #007bff;
  --spacing-unit: 1rem;
}
```

## Testing

### Test Organization

```
tests/
├── unit/           # Unit tests
├── integration/    # Integration tests
└── e2e/           # End-to-end tests
```

### Writing Tests

```javascript
// Clear test descriptions
describe('User authentication', () => {
  it('should reject invalid email format', () => {
    expect(validateEmail('invalid')).toBe(false);
  });
  
  it('should accept valid email format', () => {
    expect(validateEmail('user@example.com')).toBe(true);
  });
});
```

### Running Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test -- auth.test.js

# Run with coverage
npm test -- --coverage
```

## Documentation

### Code Comments

```javascript
// Comments should explain WHY, not WHAT
// The code itself should explain WHAT

// Bad: Increment counter
counter++;

// Good: Track failed login attempts
failedLoginAttempts++;

// Complex logic deserves explanation
/**
 * Calculate tax using progressive brackets.
 * 
 * Uses 2026 federal tax brackets:
 * - 10% on income up to $11,000
 * - 12% on income $11,001 to $44,725
 * - etc.
 */
function calculateTax(income) {
  // Implementation
}
```

### Updating Documentation

When you change code:
1. Update relevant documentation
2. Update CHANGELOG.md
3. Note the date in doc headers
4. Link to related docs

## Security Practices

### Never Commit Secrets

```bash
# Check before committing
git diff --cached

# If you accidentally commit secrets:
# 1. Immediately rotate the compromised credentials
# 2. Remove from Git history:
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env" \
  --prune-empty --tag-name-filter cat -- --all
```

### Input Validation

```javascript
// Always validate
function createUser(username, email) {
  // Validate
  if (!username || username.length < 3) {
    throw new Error('Invalid username');
  }
  
  // Sanitize
  const clean = username.replace(/[^a-zA-Z0-9_]/g, '');
  
  // Process
  return saveUser(clean, email);
}
```

### Dependency Security

```bash
# Audit dependencies regularly
npm audit

# Fix vulnerabilities
npm audit fix

# Check for outdated packages
npm outdated
```

## Performance

### Optimization Guidelines

1. **Measure first** - Don't optimize prematurely
2. **Profile** - Identify actual bottlenecks
3. **Optimize hot paths** - Focus on code that runs frequently
4. **Cache when appropriate** - But avoid stale data

### Front-end Performance

```javascript
// Lazy load images
<img src="placeholder.jpg" data-src="real-image.jpg" loading="lazy">

// Minimize bundle size
// - Tree shaking
// - Code splitting
// - Compression (gzip/brotli)

// Use CDN for common libraries
<script src="https://cdn.jsdelivr.net/npm/library@version"></script>
```

## Debugging

### Effective Debugging

```javascript
// Use descriptive logging
console.log('User login attempt:', { username, timestamp });

// Structured error handling
try {
  await processPayment();
} catch (error) {
  console.error('Payment processing failed:', {
    error: error.message,
    userId: user.id,
    amount: payment.amount
  });
  // Handle gracefully
}
```

### Debug Tools

- Chrome DevTools
- VS Code debugger
- AWS CloudWatch Logs
- Network tab for API calls

## Common Tasks

### Adding a New Feature

1. Create feature branch
2. Write tests first (TDD)
3. Implement feature
4. Update documentation
5. Update CHANGELOG.md
6. Create pull request

### Fixing a Bug

1. Create bugfix branch
2. Write test that reproduces bug
3. Fix the bug
4. Verify test passes
5. Update CHANGELOG.md
6. Create pull request

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update package.json
npm update

# Test thoroughly
npm test

# Update CHANGELOG.md
```

## Resources

### Learning
- [AWS Documentation](https://docs.aws.amazon.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Clean Code (Book)](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)

### Tools
- [AWS CLI Reference](https://docs.aws.amazon.com/cli/latest/reference/)
- [Git Documentation](https://git-scm.com/doc)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

## Getting Help

1. Check documentation in `docs/`
2. Search existing issues
3. Create detailed issue with:
   - What you're trying to do
   - What you expected
   - What actually happened
   - Steps to reproduce

---

Remember: Clean, simple, secure code is better than clever code.
