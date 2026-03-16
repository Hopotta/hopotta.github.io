# Website Maintenance Log  
**Maintainer:** Hopotta  
**Date:** March 16, 2026  
**Version:** 1.6.0  

## 1. Dark Mode Implementation  
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

## 5. Files Modified  
- **New Files**: `assets/js/dark-mode.js`, `footer.html`  
- **Updated Files**: `header.html`, `index.html`, `perspective/index.html`, `paradox/index.html`, `posts/posts1.html`, `posts/posts2.html`, `perspective/perspective1.html`, `perspective/perspective2.html`, `paradox/paradox1.html`, `assets/css/site1.css`  

---

## Next Steps  
- Populate the `paradox` section with additional content.  
- Explore adding system preference detection (`prefers-color-scheme`) as default theme source.  
- Consider implementing skeleton loading states for dynamically fetched components.  
- Explore using templating engines (like Jekyll) if site complexity increases.  

**End of Log**
