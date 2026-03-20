# Website Design Inspiration: Stelvio Style

## Overview
This document serves as a design reference for building a modern, clean, and elegant portfolio or agency website inspired by the Stelvio Framer template (https://stelvio.framer.website/). The design emphasizes minimalism, strong typography, subtle animations, and a focus on high-quality imagery. It's a structured piece of design showing a grid of case studies and elegant scrolling interactions.

---

## 1. Visual Design System

### Color Palette
- **Primary Background**: Stark white (#FFFFFF) or very light off-white (#FAFAFA)
- **Primary Text**: Deep black or very dark gray (#111111) for high contrast
- **Accent Colors**: Subtle grays for borders and secondary text (#888888, #EAEAEA)
- **Hover States**: Slight dimming of images or inversion of buttons

### Typography
- **Headings**: Elegant, high-contrast serif or sophisticated sans-serif (e.g., Playfair Display, Inter, or Helvetica Neue)
- **Body Text**: Clean, readable sans-serif (e.g., Inter, Roboto)
- **Hierarchy**: Extreme contrast between massive hero headings and small, detailed meta-text.

---

## 2. Layout Structure

### Header/Navigation
- **Fixed Top Navigation**: Simple, often transparent until scrolled.
- **Logo Placement**: Usually top left.
- **Menu/Links**: Top right. Often simple text links or a minimalist hamburger menu.

### Hero Section
- **Minimalist**: Focuses on a large, striking headline.
- **Subtext**: A brief, descriptive paragraph explaining the purpose or value proposition.
- **Imagery**: May feature a hero image or video, but often relies purely on strong typography initially.

### Case Studies / Project Grid (The Core)
- **Grid Layout**: Structured grid (often 2 or 3 columns).
- **Large Imagery**: Images take up maximum space to showcase work.
- **Hover Effects**: Images might zoom slightly, or metadata (client, year, role) might appear on hover.
- **Spacing**: Tightly packed grid with consistent, deliberate padding.

### Footer
- **Massive Typography**: Often features a huge "Let's Work Together" or "Contact Us" CTA.
- **Links**: Email, social links, and legal disclaimers neatly arranged at the very bottom.

---

## 3. Interactive Elements & Animations

### Scroll Animations
- **Parallax Imagery**: Images inside the grid cards move slightly slower or faster than the scroll.
- **Reveal on Scroll**: Text lines fade and slide up as they enter the viewport.
- **Smooth Scrolling**: Lenis or similar smooth scroll library for a buttery feel.

### Hover Effects
- **Image Hover**: Gentle scale effect (e.g., `transform: scale(1.05)`) within a hidden-overflow container.
- **Text Links**: Strikethrough, underline expansion, or simple color fade.
- **Custom Cursor**: Often a custom circular cursor that expands or changes text when hovering over actionable items.

---

## 4. Components Breakdown

### 1. The Header (`Header.tsx`)
- Fixed position.
- Blurs the background underneath it (glassmorphism if over images).

### 2. The Hero (`Hero.tsx`)
- Massive typography.
- Intro text.

### 3. The Project Grid (`ProjectGrid.tsx` & `ProjectCard.tsx`)
- Container for projects.
- Each card has an image, title, and category tags.

### 4. The Footer (`Footer.tsx`)
- Huge CTA.
- organized link lists.

---

## 5. Technology Stack (Recommended for React)

- **Framework**: Vite + React (or Next.js)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (essential for the smooth reveals and hover states)
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React

---

## 6. Implementation Notes

To replicate this specific style:
1. **Focus on Typography**: Choose fonts carefully. The interplay between massive headings and tiny detail text is crucial.
2. **High-Quality Assets**: The design relies heavily on beautiful imagery. Use high-res, well-composed photos.
3. **Restraint**: Don't over-animate. Animations should be subtle, smooth, and purposeful, enhancing the scrolling experience rather than distracting from the work.
4. **Grid Alignment**: Ensure perfect alignment within your grid system.

---

## Example Tailwind Config (Key aspects)
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        foreground: '#111111',
        muted: '#888888',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], 
      },
    },
  },
}
```
