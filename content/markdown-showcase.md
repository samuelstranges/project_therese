---
title: Markdown Showcase
subtitle: How Project Therese Renders Content
date: 2025-09-05
type: post
---

Project Therese transforms your markdown into beautifully formatted web pages.
This post showcases how various markdown elements are rendered, demonstrating
the clean typography and elegant styling that makes your content shine.

## Typography and Headings

Project Therese uses the elegant Cinzel font for headings and Palatino for body
text, creating a harmonious reading experience that's both modern and timeless.

### Third Level Heading

#### Fourth Level Heading

##### Fifth Level Heading

###### Sixth Level Heading

## Text Formatting

**Bold text** stands out clearly, while _italic text_ provides subtle emphasis.
You can also combine them with **_bold italic text_** for maximum impact.

Here's some `inline code` that's nicely styled, and ~~strikethrough text~~ for
corrections.

## Links and Navigation

Links are designed to be highly readable with
[subtle gray underlines](https://example.com) that become **bold with a dark
underline** on hover. Internal links work great too, like linking to the
[contact page](/contact.html).

## Lists Work Beautifully

### Unordered Lists

- **Clean bullets**: Perfect spacing and alignment
- **Nested lists**: Properly indented sub-items
    - Markdown processors vary in quality
    - Project Therese focuses on readability
    - Typography matters more than features
- **Multiple paragraphs**: Each item can contain rich content

### Ordered Lists

1. **First principle**: Content should be readable
2. **Second principle**: Design should be invisible
3. **Third principle**: Fast loading matters
    - Sub-items work here too
    - With proper indentation
4. **Fourth principle**: Simplicity wins

## Code Blocks and Syntax Highlighting

Project Therese includes syntax highlighting using the grayscale theme from
highlight.js:

```javascript
// Clean, readable code formatting
function generateSite(content) {
    const marked = require("marked");
    const html = marked(content, {
        highlight: function (code, lang) {
            return hljs.highlight(code, { language: lang }).value;
        },
    });
    return purify.sanitize(html);
}
```

Python code looks great too:

```python
# Environment setup for content generation
import markdown
from pathlib import Path

def build_site():
    content_dir = Path('content')
    for md_file in content_dir.glob('*.md'):
        with open(md_file) as f:
            content = f.read()
        # Process markdown here
        print(f"Processing {md_file.name}")
```

## Blockquotes

> Project Therese is built on the principle that beautiful, readable content
> deserves thoughtful presentation. The goal is to make your writing shine
> without getting in the way.
>
> Typography is not just about making text look pretty—it's about making ideas
> accessible and enjoyable to read.

## Tables

| Feature          | Project Therese | Other Generators |
| ---------------- | --------------- | ---------------- |
| **Setup Time**   | Minutes         | Hours            |
| **Dependencies** | Minimal         | Complex          |
| **Typography**   | Elegant         | Basic            |
| **Performance**  | Fast            | Varies           |

## Mathematical Expressions

While not native to basic Markdown, mathematical notation can be important:

- Variables: _n_, _x_, _y_
- Functions: _f(x) = x²_
- Greek letters: α, β, γ

## Special Elements

Project Therese includes some unique features:

- **Drop caps**: The first letter of each post gets special treatment
- **RSS feeds**: Automatically generated from your posts
- **Sitemap**: SEO-friendly site mapping
- **Clean URLs**: Beautiful, readable page addresses

## Images and Media

![An image](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/View_from_the_Window_at_Le_Gras%2C_Joseph_Nic%C3%A9phore_Ni%C3%A9pce.jpg/1280px-View_from_the_Window_at_Le_Gras%2C_Joseph_Nic%C3%A9phore_Ni%C3%A9pce.jpg)

Images are responsive and properly centered, working beautifully on both desktop
and mobile devices.

## Conclusion

This showcase demonstrates Project Therese's approach to content rendering:
clean, readable, and elegant. Every element is carefully styled to create a
cohesive reading experience that puts your content first.

The combination of thoughtful typography, subtle styling, and modern web
standards creates pages that are both beautiful to look at and enjoyable to
read.

---

_Want to see the source? All of this formatting comes from simple Markdown—no
complex syntax required._
