# Website Maintenance Log  
**Maintainer:** Hopotta  
**Date:** March 20, 2026  
**Version:** 1.6.0  

## 1. Major Update: Dark Mode Implementation  
- **Global Dark Mode Support**: Introduced a site-wide dark mode feature with a sun/moon toggle button positioned in the header next to "Hopotta's Log".  
- **SVG Icon Animation**: Designed elegant sun and moon SVG icons with smooth 30-degree rotation animation on hover for polished interaction feedback.  
- **Theme Persistence**: Implemented localStorage-based preference saving to maintain user theme selection across sessions.  
- **Smooth Transitions**: Added 0.3s color and background transitions throughout the site for seamless theme switching.  
- **Excluded Pages**: The `report/AnnualReport2025/` section remains dark-mode only by design.  

## 2. Component Modularization  
- **Global Footer Component**: Extracted footer into a shared `footer.html` component loaded dynamically via fetch, ensuring consistent branding across all pages.  
- **Annual Report Entry**: Relocated the Annual Report 2025 link from a temporary banner in the header to the footer for a cleaner, less intrusive placement.  
- **Code Maintainability**: Removed duplicate footer code from all individual pages, centralizing footer management for easier future updates.  

## 3. Layout Optimization  
- **Sticky Footer Fix**: Resolved excessive whitespace between content and footer on index pages by adjusting flexbox layout strategy—using `body { min-height: 100vh }` instead of `main { flex: 1 }` to eliminate unwanted gaps while keeping footer at viewport bottom.  
- **Consistent Spacing**: Applied layout fixes across all three index pages (`/`, `/perspective/`, `/paradox/`) and article pages for uniform appearance.  

## 4. Article Dark Mode Adaptation  
- **posts2.html Text Colors**: Updated hardcoded text colors in Figure captions and legend labels to use CSS variables (`var(--text-secondary)`, `var(--text-content)`) for proper dark mode rendering.  
- **Chart SVG Optimization**: Added dark mode CSS classes to all chart elements (axes, titles, labels, lines, data points) with optimized color values for improved readability in dark theme—brighter lines (#5DA9E9, #E97D7D) and lighter text (#e5e5e5, #c0c0c0).  
- **perspective2.html Bubble Fix**: Removed inline `background: #ffffff` style from dialogue bubbles and refined collapsed text colors to maintain visual hierarchy (#999/#888 for collapsed vs #e5e5e5 for body text in dark mode).  

## 5. Theme Toggle SVG Animation Enhancement  
- **Smooth Sun-Moon Transition Animation**: Implemented fluid 600ms animation for theme switching using `requestAnimationFrame` for 60fps performance.
  - **Sun → Moon**: Sun rays fade out (0-300ms) → Sun center circle shrinks and fades (0-360ms) → Moon crescent fades in (240-600ms)
  - **Moon → Sun**: Moon fades out (0-360ms) → Sun center circle expands and fades in (240-600ms) → Sun rays fade in (300-600ms)
- **Simplified SVG Design**: Removed complex multi-moon elements, using original clean sun (circle + 8 rays) and moon crescent path design.
- **Hover Color Optimization**: Fixed light mode hover state—icon now highlights to darker black (#000) instead of white (#fff) for better visibility on light background. Dark mode hover remains white (#fff).
- **Animation States**: Added CSS classes (`.sun-mode`, `.moon-mode`, `.animating`) for precise animation control and state management.
- **Click Prevention**: Disabled button clicks during animation to prevent state conflicts.

---

## Next Steps  
- Populate the `paradox` section with additional content.  
- ~~Explore adding system preference detection (`prefers-color-scheme`) as default theme source.~~ (Implemented in dark-mode.js)
- Consider implementing skeleton loading states for dynamically fetched components.  
- Explore using templating engines (like Jekyll) if site complexity increases.  

**End of Log**
