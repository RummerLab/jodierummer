# Dr. Jodie Rummer's Website

Personal website for Dr. Jodie Rummer, Professor of Marine Biology at James Cook University, showcasing her research, publications, and contributions to marine science and conservation.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)
- **Deployment**: [Vercel](https://vercel.com)

## ✨ Features

- Server-Side Rendering (SSR) for optimal performance
- Dark mode support
- Responsive design for all devices
- SEO optimized with structured data
- Accessibility compliant
- TypeScript for type safety
- Modern, clean UI with Tailwind CSS

## 🛠️ Development

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/jodierummer.git
cd jodierummer
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env.local` file:

```bash
cp .env.template .env.local
```

4. Start the development server:

```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Project Structure

```
jodierummer/
├── app/                    # Next.js app directory
│   ├── about/             # About page and CV
│   ├── research/          # Research areas and projects
│   ├── publications/      # Academic publications
│   ├── women-in-science/  # Diversity initiatives
│   └── contact/          # Contact information
├── components/            # Reusable React components
├── lib/                   # Utility functions and configs
├── public/               # Static assets
└── styles/              # Global styles and Tailwind config
```

## 🎨 Design System

- Uses Tailwind CSS for styling
- Custom theme configuration in `tailwind.config.ts`
- Consistent color palette and typography
- Mobile-first responsive design
- Dark mode support

## 📱 Responsive Design

- Desktop (1280px and up)
- Tablet (768px to 1279px)
- Mobile (320px to 767px)

## 🔒 Security

### Environment variables

Sensitive credentials (Bluesky, YouTube API, Google Analytics) are stored in environment variables — see [`.env.template`](.env.template). Never commit `.env.local`.

### HTTP security headers

Headers are configured in [`next.config.js`](next.config.js) and applied to all routes via the `headers()` export.

| Header | Value | Purpose |
|--------|-------|---------|
| `X-Frame-Options` | `DENY` | Blocks other sites from embedding pages in iframes (SEO-relevant) |
| `Content-Security-Policy` | `frame-ancestors 'none'` | Modern equivalent of `X-Frame-Options` |
| `X-Content-Type-Options` | `nosniff` | Prevents MIME-type sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Limits referrer data sent to third parties |
| `Permissions-Policy` | camera/mic/geo disabled | Restricts browser feature access |
| `Content-Security-Policy-Report-Only` | Full policy (see config) | Monitors CSP violations without blocking; iterate before enforcing |

**Enforced today:** framing, MIME sniffing, referrer, and permissions headers.

**Report-only (monitoring):** a full CSP allowlisting Google Analytics, Vercel Analytics/Speed Insights, YouTube embeds, and external image CDNs. Check browser DevTools console for CSP violation reports after deploy, then tighten and switch to an enforcing `Content-Security-Policy` when clean.

### HSTS (Cloudflare)

`Strict-Transport-Security` is set at the Cloudflare layer (not in Next.js). Keep HSTS enabled in Cloudflare **SSL/TLS → Edge Certificates → HTTP Strict Transport Security**.

### Cloudflare checklist

Traffic flows **Browser → Cloudflare → Vercel**. After each deploy, confirm Cloudflare passes through (does not strip) headers from Vercel:

1. **Transform Rules** — Ensure no rule removes or overrides `X-Frame-Options`, `Content-Security-Policy`, or related headers.
2. **Optional belt-and-suspenders** — Duplicate core headers in a Cloudflare **Modify Response Header** rule if Vercel headers ever fail to reach the browser.
3. **`Access-Control-Allow-Origin: *`** — This header is not required for a static marketing site with no public API. In Cloudflare, check **Rules → Transform Rules** and **Configuration Rules** for anything adding CORS headers; remove if unnecessary.

### Verifying headers

After deploy, confirm headers are present:

```bash
curl -I https://jodierummer.com
```

Or scan with [securityheaders.com](https://securityheaders.com/?q=jodierummer.com).

Locally after `pnpm build && pnpm start`:

```bash
curl -I http://localhost:3000
```

### Other hardening

- External links use `rel="noopener noreferrer"`
- No public API routes; third-party fetches (Bluesky, microlink) run server-side only
- Next.js `<Image>` uses an explicit hostname allowlist in `next.config.js`

## ♿ Accessibility

- WCAG 2.1 compliant
- Semantic HTML
- ARIA attributes where needed
- Keyboard navigation support
- Screen reader friendly

## 🚀 Deployment

The site is deployed on Vercel with:

- Automatic deployments on push to main
- Preview deployments for pull requests
- Edge functions for optimal performance
- Analytics and monitoring

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

For any questions or concerns, please let us know.
