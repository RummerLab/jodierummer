# Dr. Jodie Rummer's Website

Personal website for Dr. Jodie Rummer, Professor of Marine Biology at James Cook University, showcasing her research, publications, and contributions to marine science and conservation.

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
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

- Environment variables for sensitive data
- Security headers configuration
- XSS protection
- CORS policies

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
