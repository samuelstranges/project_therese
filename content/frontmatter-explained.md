---
title: Frontmatter in Project Therese
subtitle: How to structure your content with YAML frontmatter
date: 2025-09-05
type: post
---

Every markdown file in Project Therese starts with frontmatter—a block of YAML
that tells the system how to handle your content. This post explains how
frontmatter works and why it's essential for organizing your site.

## What is Frontmatter?

Frontmatter is the YAML block at the beginning of each markdown file, enclosed
by triple dashes (`---`). It contains metadata about your content that Project
Therese uses to generate your site properly.

Here's the frontmatter for this very post:

```yaml
---
title: Understanding Frontmatter in Project Therese
subtitle: How to structure your content with YAML frontmatter
date: 2025-09-05
type: post
---
```

## Required Fields

Every markdown file should include these essential fields:

### title

The main title of your page or post. This appears as the `<h1>` element and in
the HTML `<title>` tag.

```yaml
title: Understanding Frontmatter in Project Therese
```

### type

Tells Project Therese how to handle this content. There are two main types:

- **`type: post`** - Blog posts that appear in your RSS feed and recent posts
  page
- **`type: page`** - Static pages like "About" or "Contact" that don't appear in
  blog listings

```yaml
type: post  # This makes it a blog post
type: page  # This makes it a static page
```

### date

The publication date in YYYY-MM-DD format. **Required for all content** - the
build will fail without a valid date.

```yaml
date: 2025-09-05
```

## Optional Fields

### subtitle

A descriptive subtitle that appears below the main title:

```yaml
subtitle: How to structure your content with YAML frontmatter
```

## How Project Therese Uses This Information

### Blog Posts vs Pages

When you set `type: post`, Project Therese will:

1. **Include it in RSS feeds** - Automatically added to `/rss.xml`
2. **List it on recent posts page** - Shows up at `/recent.html`
3. **Sort by date** - Posts are ordered chronologically
4. **Add date display** - Shows "Last Updated" information

When you set `type: page`, Project Therese will:

1. **Skip RSS inclusion** - Pages don't go in feeds
2. **Skip recent posts listing** - Pages are standalone
3. **Generate clean URLs** - Still creates `filename.html`

### RSS Feed Generation

Here's how posts appear in your RSS feed:

```xml
<item>
    <title>Understanding Frontmatter in Project Therese</title>
    <description>How to structure your content with YAML frontmatter</description>
    <link>http://yoursite.com/frontmatter-explained.html</link>
    <pubDate>Thu, 05 Sep 2025 00:00:00 GMT</pubDate>
</item>
```

### Sitemap Integration

Both posts and pages get included in `/sitemap.xml`:

- **Posts** get `changefreq: monthly` and `priority: 0.8`
- **Pages** get `changefreq: yearly` and `priority: 0.6`

## File Naming Conventions

Your markdown filename becomes your URL:

- `example-blog-post-0.md` → `/example-blog-post-0.html`
- `contact.md` → `/contact.html`
- `welcome.md` → `/welcome.html` (and also `/index.html`)

## Special Case: The Homepage

The `welcome.md` file is special—it gets generated as both `/welcome.html` and
`/index.html`, making it your site's homepage.

## Best Practices

### For Blog Posts

```yaml
---
title: Your Post Title Here
subtitle: An engaging subtitle that explains the post
date: 2025-09-05
type: post
---
```

### For Static Pages

```yaml
---
title: About Me
subtitle: Learn more about the author
date: 2025-09-05 # Required - build fails without it
type: page
---
```

### Dating Your Content

Always use the `YYYY-MM-DD` format for dates. This ensures proper sorting and
RSS feed generation:

```yaml
date: 2025-09-05  # ✓ Correct
date: 9/5/2025    # ✗ Wrong format
date: Sep 5 2025  # ✗ Won't sort properly
```

## Frontmatter in Action

When Project Therese processes your markdown:

1. **Parses frontmatter** using the gray-matter library
2. **Generates HTML** from your markdown content
3. **Creates templates** using your title, subtitle, and date
4. **Builds feeds** including posts in RSS and sitemap
5. **Organizes content** based on type and date

## Common Mistakes to Avoid

- **Missing type field** - Default behavior may not be what you want
- **Incorrect date format** - Use YYYY-MM-DD always
- **Empty title** - Required for proper HTML generation
- **Malformed YAML** - Check your indentation and syntax

## Conclusion

Frontmatter is the backbone of content organization in Project Therese. By
understanding how `type: post` differs from `type: page`, you can structure your
site exactly how you want it—with blog posts flowing through RSS and recent post
listings, while keeping static pages cleanly separated.

The combination of good frontmatter practices and meaningful file names creates
a site that's both well-organized and SEO-friendly.

---

_This post demonstrates `type: post` in action—check your RSS feed and recent
posts page to see it listed there._
