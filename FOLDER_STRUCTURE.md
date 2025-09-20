# Folder Structure

This document describes the folder organization for this Next.js application.

## Root Level
- `src/` - Main source code directory
- `public/` - Static assets served directly
- `components/` - Moved to `src/components/`

## Source Code (`src/`)

### `src/app/` 
Next.js 15 App Router directory containing:
- `layout.tsx` - Root layout component
- `page.tsx` - Home page component
- `globals.css` - Moved to `src/styles/globals.css`

### `src/components/`
Reusable React components:
- `Header.tsx` - Main navigation header
- `Layout.tsx` - Layout wrapper component
- `Dialog.tsx` - Modal dialog component

### `src/lib/`
Library code and configurations:
- `config.ts` - Application configuration constants

### `src/utils/`
Utility functions:
- `index.ts` - Common utility functions (formatting, etc.)

### `src/types/`
TypeScript type definitions:
- `index.ts` - Shared type definitions for the application

### `src/hooks/`
Custom React hooks:
- `index.ts` - Custom hooks (localStorage, window size, etc.)

### `src/styles/`
Stylesheets and styling-related files:
- `globals.css` - Global CSS styles

## Public Assets (`public/`)

### `public/icons/`
SVG icons and small graphics:
- `file.svg`
- `globe.svg`
- `next.svg`
- `vercel.svg`
- `window.svg`

### `public/images/`
Currently empty - intended for:
- Hero images
- Product screenshots
- User avatars
- Marketing images

### `public/` (root level images)
Current placeholder images:
- `casual-life-3d-round-check-mark-yellow.png`
- `3d-casual-life-young-woman-pointing-on-new-document-button.png`
- `3d-casual-life-young-man-rejoicing-success347x456.png`
- `vigilado-mintic.png`
- `vigilado-super.jpeg`
- `testimonial_two.jpg`

## Recommended Next Steps

1. **Move images**: Consider moving the placeholder images to `public/images/` and updating image references
2. **Add component subdirectories**: Organize components by feature (e.g., `ui/`, `forms/`, `layout/`)
3. **Add API routes**: Create `src/app/api/` for backend endpoints
4. **Add middleware**: Create middleware for authentication, redirects, etc.
5. **Add environment configuration**: Set up proper environment variables and configuration

## Benefits of This Structure

- **Scalability**: Easy to add new features and components
- **Maintainability**: Clear separation of concerns
- **TypeScript Support**: Proper type organization
- **Next.js Best Practices**: Follows recommended patterns
- **Developer Experience**: Easy to navigate and understand