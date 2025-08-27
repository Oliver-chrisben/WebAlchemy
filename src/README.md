# AlchemyWeb - Professional Web Development Portfolio

A modern, responsive website for AlchemyWeb showcasing web development services with a focus on events, healthcare, trading platforms, and custom solutions.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Modern Animations**: Smooth transitions and micro-interactions using Motion (Framer Motion)
- **Professional UI**: Clean black/white design with strategic red accents
- **Contact Integration**: WhatsApp integration and contact forms
- **Portfolio Showcase**: Filterable project gallery with case studies
- **Service Sections**: Dedicated areas for different service offerings
- **Quote System**: Interactive pricing packages and custom quote requests

## 🎨 Brand Guidelines

### Colors
- **Primary**: Black (`#000000`)
- **Secondary**: White (`#FFFFFF`) 
- **Accent**: Dark Red (`#A92020`)

### Logo
- Logo file: `figma:asset/c0822e83cf5c8e039129ee01b016a8dbdd971e6c.png`
- Used in contact section and footer

### Contact Information
- **Email**: chrisbenoliver207@gmail.com
- **WhatsApp**: +234 805 831 5655
- **Business Hours**: Mon-Fri 9AM-6PM, Sat 10AM-4PM

## 📁 Project Structure

```
├── App.tsx                 # Main application component
├── components/
│   ├── Navigation.tsx      # Header navigation with mobile menu
│   ├── Hero.tsx           # Landing section with CTA
│   ├── Services.tsx       # Service offerings showcase
│   ├── Portfolio.tsx      # Project portfolio with filtering
│   ├── About.tsx          # Company information and values
│   ├── Quote.tsx          # Pricing packages and quote form
│   ├── Contact.tsx        # Contact information and form
│   └── Footer.tsx         # Footer with links and branding
├── components/ui/         # Reusable UI components (ShadCN)
└── styles/globals.css     # Global styles and design tokens
```

## 🛠️ Customization Guide

### Updating Contact Information

1. **Email**: Search for `chrisbenoliver207@gmail.com` and replace all instances
2. **Phone/WhatsApp**: Search for `+2348058315655` and replace all instances
3. **WhatsApp Link**: Update the WhatsApp URL format: `https://wa.me/YOUR_PHONE_NUMBER`

### Changing Brand Colors

Update the color values in `/styles/globals.css`:

```css
/* Update these custom properties */
:root {
  --color-primary: #030213;        /* Change to your primary color */
  --color-destructive: #d4183d;    /* Change to your accent color */
}
```

Or update directly in components by searching for:
- `#A92020` (current red accent)
- `#8B1A1A` (darker red for hover states)

### Replacing the Logo

1. Replace the imported logo in `Contact.tsx` and `Footer.tsx`
2. Update the import path: `import newLogo from 'your-logo-path';`
3. Adjust logo sizing in the `className` attributes as needed

### Updating Content

**Hero Section** (`components/Hero.tsx`):
- Update headlines, descriptions, and call-to-action text
- Replace hero image URL with your preferred image

**Services** (`components/Services.tsx`):
- Modify the `services` array to reflect your offerings
- Update service descriptions, features, and images

**Portfolio** (`components/Portfolio.tsx`):
- Replace the `projects` array with your actual projects
- Update project images, descriptions, and tech stacks

**About Section** (`components/About.tsx`):
- Update company story, values, and achievements
- Modify the tech stack array to match your technologies

### Form Integration

**Contact Forms**: Currently set up as frontend-only. To make functional:

1. **Netlify Forms** (Recommended for static sites):
   ```html
   <!-- Add to form elements -->
   data-netlify="true" 
   name="contact"
   ```

2. **Formspree Integration**:
   ```jsx
   // Update form action
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

3. **Custom API**:
   ```jsx
   // Replace console.log with API call
   const response = await fetch('/api/contact', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData)
   });
   ```

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your repository to Netlify
2. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Enable Netlify Forms for contact functionality
4. Deploy!

### Vercel

1. Connect repository to Vercel
2. Framework preset: **React**
3. Build and output settings are auto-detected
4. Deploy!

### Manual Deployment

1. Run `npm run build`
2. Upload the `dist` folder to your web server
3. Ensure your server is configured for single-page applications

## 📱 Performance & SEO

### Image Optimization
- All images use the `ImageWithFallback` component
- Lazy loading is enabled by default
- Consider using WebP format for better compression

### SEO Enhancements
- Add meta tags in your HTML head:
  ```html
  <meta name="description" content="AlchemyWeb - Expert web development services for events, healthcare, and trading platforms">
  <meta property="og:title" content="AlchemyWeb - Professional Web Development">
  <meta property="og:description" content="Transform your business with expert web solutions">
  <meta property="og:image" content="your-og-image.jpg">
  ```

### Analytics Integration
- Add Google Analytics or your preferred analytics service
- Update privacy policy to reflect tracking usage

## 🔧 Development

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Key Dependencies
- **React**: UI framework
- **Motion**: Animations and transitions
- **Tailwind CSS**: Styling and responsive design
- **Lucide React**: Icon library
- **ShadCN/UI**: Component library

## 📞 Support

For technical support or customization requests:
- **Email**: chrisbenoliver207@gmail.com
- **WhatsApp**: +234 805 831 5655

## 📄 License

© 2025 AlchemyWeb. All rights reserved.