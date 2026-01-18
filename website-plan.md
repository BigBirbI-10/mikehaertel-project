# MikeHaertel.com - Website Plan

## Strategic Goals

### Primary Objectives
1. **Get hired** - Position for Technical Account Manager, DevOps Engineer, or Solutions Architect roles
2. **Demonstrate capabilities** - Show you're not just infrastructure, but full-stack capable
3. **Tell your story** - The journey from enterprise IT to building SaaS products
4. **Network & credibility** - Establish professional presence for business ventures

### Target Audience
- **Technical recruiters** - Need to quickly see skills and experience
- **Hiring managers** - Want to understand problem-solving ability and cultural fit
- **Potential collaborators** - Other entrepreneurs, developers, security community
- **General professional network** - LinkedIn connections, conference contacts

## Recommended Tech Stack

### Framework: Next.js 14 (TypeScript)
**Why?**
- ✅ You already know it (FareScout experience)
- ✅ Excellent performance and SEO
- ✅ Easy deployment to AWS (Amplify, CloudFront, S3)
- ✅ Demonstrates modern development skills
- ✅ Image optimization built-in (important for photo portfolio)
- ✅ Can start static, add dynamic features later

### Styling: Tailwind CSS
**Why?**
- ✅ Faster development than vanilla CSS
- ✅ Responsive by default
- ✅ Professional design without designer
- ✅ Industry standard (good for resume)

**Alternative**: Vanilla CSS (like FareScout) if you prefer consistency

### Hosting: AWS
**Why?**
- ✅ You already have the account configured
- ✅ Demonstrates AWS expertise
- ✅ Cost-effective for static/low-traffic site
- ✅ Professional infrastructure

**Recommended AWS Stack**:
- **CloudFront** - CDN for global performance
- **S3** - Static site hosting
- **Route 53** - DNS for MikeHaertel.com
- **Certificate Manager** - Free SSL/TLS
- **Amplify** - Optional: simplified deployment pipeline

**Estimated Cost**: $1-5/month for low traffic

## Site Structure

### Homepage (/)
**Purpose**: Strong first impression, clear value proposition

**Sections**:
1. **Hero Section**
   - Professional headshot
   - Name + Tagline: "Technical Account Manager & Full-Stack Developer"
   - Subtitle: "Building scalable infrastructure and modern applications"
   - CTA buttons: "View Projects" | "Download Resume" | "Contact"

2. **About Summary**
   - 2-3 paragraph overview
   - Key stats (15+ years experience, live SaaS product, DEF CON guest)
   - Current status: "Available for opportunities"

3. **Featured Projects** (3-4 cards)
   - FareScout.App (primary spotlight)
   - Home Lab Infrastructure
   - Hak5 Security Tools
   - Optional: Pedicab business or E-commerce venture

4. **Skills Overview**
   - Visual skill categories
   - Cloud Platforms, Development, Infrastructure, Security
   - Link to full resume/experience

5. **Recent Photography** (optional)
   - 3-4 standout photos to show creative side
   - Subtle, not dominating

### Projects (/projects)
**Purpose**: Detailed showcase of technical work

**Project Pages** (individual or sections):

1. **FareScout.App** - Primary showcase
   - Hero image/screenshot
   - Problem statement & solution
   - Tech stack breakdown
   - Architecture diagram (optional)
   - Key features
   - Screenshots/demos
   - Link to live site
   - "What I learned" section

2. **Home Lab Infrastructure**
   - Photos of equipment
   - Architecture diagram
   - Technologies used
   - Real-world applications
   - Learning outcomes

3. **Security Research & Tools**
   - Hak5 projects with GitHub links
   - DEF CON photos
   - Community involvement
   - Skills demonstrated

4. **Pedicab Business** (Optional)
   - Photos from events
   - Business skills learned
   - Connection to FareScout origin story
   - Sales and customer service experience

5. **E-Commerce Venture** (Optional/Private)
   - Could be password-protected or generic
   - Technical infrastructure focus
   - Learning outcomes

### Experience (/experience or /resume)
**Purpose**: Traditional resume content in web format

**Sections**:
- Professional summary
- Work history (formatted nicely from resume.md)
- Education
- Skills & certifications
- Download PDF resume button

### Photography (/photography) - Optional
**Purpose**: Show creative side, visual skills

**Layout**:
- Grid gallery
- Categories: Astrophotography, Landscape, Events
- Lightbox for full-size viewing
- Keep it clean and professional

### About (/about)
**Purpose**: Personal story, values, what you're looking for

**Content**:
- Longer-form personal narrative
- Career journey and transition
- Current interests and focus
- What you're looking for in next role
- Personal interests (camping, racing, woodworking)
- Contact information

### Contact (/contact)
**Purpose**: Make it easy to reach you

**Content**:
- Email: MikeATX@gmail.com
- GitHub: BigBirbI-10
- LinkedIn: (if you have one)
- Location: Austin, TX
- Optional: Contact form (or just email link)

## Design Direction

### Visual Style: Modern Technical Professional

**Mood**:
- Clean and minimal
- Dark mode option (shows technical skill)
- Professional but not corporate
- Technical but approachable

**Color Palette Suggestion**:
- **Primary**: Deep blue/navy (trust, technical)
- **Accent**: Bright cyan/teal (modern, tech)
- **Neutral**: Grays and whites
- **Dark mode**: True blacks with subtle gradients

**Typography**:
- **Headings**: Modern sans-serif (Inter, Outfit, Space Grotesk)
- **Body**: Readable sans-serif (Inter, System UI)
- **Code**: Monospace for technical sections (JetBrains Mono, Fira Code)

**Layout**:
- Spacious, generous whitespace
- Clear hierarchy
- Mobile-first responsive
- Fast loading (image optimization)

### Key Design Elements

1. **Project Cards**
   - Screenshot/photo
   - Tech stack badges
   - Brief description
   - CTA to learn more

2. **Tech Stack Badges/Pills**
   - Visual indicators: AWS, Next.js, TypeScript, Docker, etc.
   - Searchable/filterable (nice to have)

3. **Photo Gallery**
   - Masonry or grid layout
   - Lazy loading for performance
   - Lightbox for full-size

4. **Stats/Metrics** (optional)
   - Years of experience
   - Projects completed
   - GitHub contributions
   - Technologies mastered

## Content Strategy

### What to Emphasize

**Tier 1 - Front and Center**:
- FareScout.App (production SaaS demonstrates everything)
- 15+ years enterprise infrastructure experience
- Modern development skills (Next.js, TypeScript, Docker)
- AWS expertise with real deployments
- Available for hire

**Tier 2 - Supporting Evidence**:
- Home lab (maintains technical skills)
- Hak5/DEF CON (community involvement, learning mindset)
- Pedicab business (sales skills, entrepreneurship)
- AI tool proficiency (Claude, Cursor, modern development)

**Tier 3 - Personality/Culture Fit**:
- Photography (creative, attention to detail)
- Outdoor activities (team culture, work-life balance)
- Security community involvement (continuous learning)

### What to Downplay/Omit

**Private/Sensitive**:
- Moonshine Lube Co - probably omit from public site
  - Or make it very generic "consumer products venture"
  - Could be password-protected section if needed

**Too Much Detail**:
- Don't dump entire resume.md verbatim
- Summarize, don't exhaustively list everything
- Keep it scannable and visual

## Unique Value Propositions to Highlight

### "Infrastructure Expert Who Builds Software"
- 15 years infrastructure → Now building full-stack apps
- Not just theory, actual production deployments
- Bridges gap between dev and ops

### "Problem Solver Who Ships"
- Identified pedicab driver problem → Built FareScout → Deployed to production
- Not just ideas, actual execution
- From concept to customer-facing product

### "Modern Tools, Experienced Mindset"
- Leverages AI coding tools effectively
- Stays current with technology trends
- Brings seasoned judgment to modern practices

### "Technical Account Manager Who Gets Technical"
- Can speak both business and technical languages
- Actually understands what developers and ops teams face
- Hands-on experience backing up advisory role

## SEO & Discoverability

### Target Keywords
- Technical Account Manager Austin
- DevOps Engineer Austin
- Solutions Architect AWS
- Full-Stack Developer Next.js
- Mike Haertel

### SEO Basics
- Descriptive page titles and meta descriptions
- Semantic HTML structure
- Image alt text
- Fast page loads
- Mobile responsive
- HTTPS (AWS Certificate Manager)
- Sitemap.xml

### Analytics
- Google Analytics or privacy-focused alternative (Plausible, Fathom)
- Track which projects get most views
- Understanding visitor paths

## Development Phases

### Phase 1: MVP (Minimum Viable Portfolio)
**Goal**: Get something live quickly
- Homepage with hero and featured projects
- About page
- Resume/Experience page
- Deploy to AWS

**Timeline**: 1-2 days of focused work

### Phase 2: Content Depth
**Goal**: Add detailed project pages
- Individual project pages with screenshots
- Photo gallery for photography
- Improved visual design
- Dark mode toggle

**Timeline**: 3-5 days spread over a week

### Phase 3: Polish & Features
**Goal**: Professional polish
- Animations and transitions
- Contact form (if desired)
- Blog (optional, for writing about projects)
- Performance optimization
- SEO refinement

**Timeline**: Ongoing refinement

## Deployment Strategy

### AWS Architecture

```
User
  ↓
Route 53 (MikeHaertel.com)
  ↓
CloudFront (CDN)
  ↓
S3 Bucket (Static files)
```

**Setup Steps**:
1. Build Next.js for static export
2. Create S3 bucket for static hosting
3. Configure CloudFront distribution
4. Point Route 53 to CloudFront
5. Add SSL certificate via Certificate Manager
6. Deploy via AWS CLI or GitHub Actions

**Alternative (Easier)**:
- AWS Amplify Hosting
  - One-click deployment from GitHub
  - Automatic builds on push
  - Built-in CDN and SSL
  - Slightly more expensive but easier

## Success Metrics

### Must Have
- [ ] Live site at MikeHaertel.com with HTTPS
- [ ] FareScout.App prominently featured
- [ ] Resume/experience easily accessible
- [ ] Mobile responsive
- [ ] Professional appearance
- [ ] Contact information clear

### Nice to Have
- [ ] Photo gallery working smoothly
- [ ] Dark mode toggle
- [ ] Project pages with detailed content
- [ ] Fast page loads (<2s)
- [ ] Analytics tracking

### Stretch Goals
- [ ] Blog for writing about projects
- [ ] Newsletter signup
- [ ] Testimonials/recommendations
- [ ] Dynamic features (contact form, comments)

## Next Steps - Immediate Actions

1. **Choose final tech decisions**
   - Confirm: Next.js + TypeScript + Tailwind?
   - Confirm: AWS S3 + CloudFront?

2. **Initialize project**
   - Create Next.js app
   - Set up basic structure
   - Configure jj repository

3. **Build MVP**
   - Homepage
   - About page
   - Project showcase
   - Resume page

4. **Deploy to AWS**
   - Configure S3 bucket
   - Set up CloudFront
   - Point domain
   - Go live!

5. **Iterate**
   - Add content
   - Refine design
   - Gather feedback

---

**Ready to start building?** I can initialize the Next.js project and start implementing this plan.
