# Welcome!

Project Therese is a static site generator inspired by the design of
[Project Isidore](https://gitlab.com/bhw/project-isidore) - but instead of
diving deep into Common Lisp web development, it goes the 'little way', using
Node.js and markdown.

Write markdown, run `npm run build`, get a complete website. No complex
configuration, no decision fatigue - just elegant simplicity for bloggers who
want their content to shine.

## The Philosophy

- **Single file architecture** - the entire system is comprehensible in minutes
- **Minimal configuration** - basic site config, works beautifully out of the
  box
- **Opinionated beauty** - classical typography over endless customization
- **Responsive design** - looks great on desktop and mobile
- **Batteries included** - RSS and sitemap out of the box

## Why Project Therese?

In a world of complex static site generators with hundreds of configuration
options, Project Therese takes a different approach:

- **Content-first design** - Your writing gets beautiful typography and layout
  without any design decisions on your part
- **Zero configuration fatigue** - One build file, sensible defaults, no plugin
  ecosystem to navigate
- **Readable codebase** - The entire generator fits in a single file you can
  understand and modify in an afternoon
- **Deployment anywhere** - Generate static files that work on any web server,
  CDN, or hosting platform

Unlike heavyweight frameworks that can generate any type of site, Project
Therese does one thing exceptionally well: turning markdown into elegant reading
experiences.

## Getting Started

Project Therese follows the 'little way' - do small things with great love:

1. Clone the repo:
   `git clone https://www.github.com/samuelstranges/project_therese.git`
1. Write your markdown files in the `content/` directory
1. Run `npm run build` to generate your site
1. Use `npm run dev` to build and serve locally on port 3000

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