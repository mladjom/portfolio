# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, Radix UI, and SCSS.

## Features

- 📱 Fully responsive design
- 🎨 Custom SCSS with BEM methodology
- 🧩 Modular component structure
- 🔍 SEO optimized
- 🔄 Smooth animations and transitions
- 🎛️ Accessible UI components with Radix UI
- 🌐 Next.js for optimized performance

## Technologies Used

- **Next.js** - React framework for server-side rendering and static site generation
- **TypeScript** - Typed JavaScript for better developer experience
- **SCSS** - CSS preprocessor for more maintainable styles
- **BEM** - CSS naming convention for more organized styles
- **Radix UI** - Unstyled, accessible UI components
- **Intersection Observer API** - For scroll-based animations

## Project Structure

```
portfolio-site/
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── projects/
│   │   └── skills/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── styles/
│   │   ├── variables.scss
│   │   ├── mixins.scss
│   │   ├── global.scss
│   │   └── components/
│   ├── types/
│   ├── data/
│   │   └── portfolio-data.ts
│   └── pages/
│       ├── _app.tsx
│       ├── _document.tsx
│       └── index.tsx
├── tsconfig.json
└── package.json
```

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-site.git
cd portfolio-site
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information
Update your personal information in the `src/data/portfolio-data.ts` file:
- Name, title, and contact information
- Skills and experience
- Education and certifications
- Projects and work samples

### Styling
Customize the look and feel by modifying:
- `src/styles/variables.scss` - Colors, typography, spacing
- `src/styles/components/` - Component-specific styles

### Images
Replace the placeholder images in the `public/images/` directory with your own:
- `profile.jpg` - Your profile picture
- `projects/` - Images of your projects
- `about.jpg` - Image for the About section

## Deployment

The site can be easily deployed to Vercel, Netlify, or other platforms that support Next.js:

```bash
npm run build
```

This will create an optimized production build in the `.next` folder.

## License

This project is available as open-source under the terms of the MIT License.