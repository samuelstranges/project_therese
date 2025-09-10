---
title: Static vs Dynamic - Choosing the Right Approach
subtitle: Why static site generators are having their moment
date: 2025-09-07
type: post
---

# Static vs Dynamic

The web development world has come full circle. After years of complex content
management systems and server-side rendering, many developers are returning to
the simplicity and performance of static sites.

## The Static Renaissance

Static site generators like Project Therese offer compelling advantages:

### Performance Benefits

- **Lightning fast**: No database queries or server processing
- **CDN friendly**: Easy to distribute globally
- **Cacheable**: Aggressive caching strategies work perfectly
- **Minimal resources**: Lower hosting costs and environmental impact

### Security Advantages

- **No attack surface**: No database or dynamic code to exploit
- **Version controlled**: Complete audit trail of all changes
- **Backup simplicity**: Everything is in source control

## When Static Makes Sense

Static sites excel for:

1. **Blogs and content sites** (like this one!)
2. **Documentation** and knowledge bases
3. **Marketing pages** and landing sites
4. **Portfolio sites** for creatives

## The Build Process

Our build process is refreshingly simple:

```bash
# Write content in markdown
echo "# My Post" > content/my-post.md

# Build the site
npm run build

# Serve locally for development
npm run dev
```

## RSS and Discoverability

Static doesn't mean isolated. With proper RSS feeds and semantic HTML, static
sites can be just as discoverable and shareable as their dynamic counterparts.

The future of the web might be static after all.
