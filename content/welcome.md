---
title: Welcome to Project Therese
subtitle: A Simple Markdown Blog with Project Isidore Styling
date: 2025-09-10
type: page
---

# Welcome

Project Therese is [Project Isidore](https://gitlab.com/bhw/project-isidore)'s
'little way': a beautiful and elegant design philosophy, made accessible with
Node.js and Markdown.

Instead of building the entire site stack with Common Lisp (which is a rabbit
hole you _NEED_ to
[read about](https://www.bhw.name/assets/blog/project-isidore-doc.html)),
Project Therese uses... _checks notes_... npm.

Built with simplicity and aesthetics in mind, it transforms your markdown files
into beautifully formatted web pages, hopefully making it look like a parish
bulletin you actually want to read. Perfect for a blog!

## The Philosophy

- **Single file architecture** - the entire system is comprehensible in minutes
- **Minimal configuration** - basic site config, works beautifully out of the
  box
- **Opinionated beauty** - classical typography over endless customization
- **Responsive design**: Looks great on desktop and mobile
- **Batteries included**: RSS and sitemap out of the box

## Why Project Therese?

While there are many markdown processors, Project Therese focuses on:

```javascript
// Clean, semantic HTML output
const html = marked(markdown, {
    highlight: function (code, lang) {
        return hljs.highlight(code, { language: lang }).value;
    },
});
```

## Getting Started

Project Therese follows the 'little way' - do small things with great love:

1. Write your markdown files in the `content/` directory
2. Run `npm run build` to generate your site
3. Use `npm run dev` to build and serve locally on port 3000

That's it. Just basic site configuration in build.js, no complex setup, no
decision fatigue.

## What You Get

Project Therese is built using several excellent tools:

- **Beautiful typography** - Cinzel and Palatino fonts
- **Syntax highlighting** - grayscale theme for code blocks
- **RSS feeds** - automatically generated from your posts
- **Sitemaps** - SEO-friendly XML sitemaps
- **Responsive design** - looks great everywhere
- **Security** - HTML sanitization prevents XSS attacks

The entire system is designed to be lightweight, fast, and easy to customize
while maintaining the elegant aesthetic that makes reading a pleasure.

## Technical Architecture

Built with:

- **marked.js** - markdown processing
- **gray-matter** - frontmatter parsing
- **highlight.js** - syntax highlighting
- **DOMPurify** - security sanitization
- **feed & sitemap** - content generation

The entire build system lives in a single, readable file - no hidden complexity.

## The 'Little Way' Promise

Writing should be a joy, and reading should be a pleasure. Project Therese
focuses on doing one thing perfectly: transforming your markdown into something
beautiful.

No feature creep. No endless configuration files. Just elegant simplicity that
honors both your content and your readers.
