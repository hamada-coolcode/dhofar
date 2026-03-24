// Theme Service
// ===============
// A PURE SERVICE for managing theme (dark/light) preferences.
// 
// Responsibilities:
// - Read/write theme to localStorage (key: 'accent')
// - Apply theme to document element (data-theme attribute)
// - No Vue dependencies, no locale handling
//
// Usage: Call methods directly, e.g., ThemeService.load()

const ThemeService = {
    defaultTheme: 'dark',

    /**
     * Load theme preference from localStorage
     * @returns {string} Saved theme or default
     */
    load() {
        return localStorage.getItem('accent') || this.defaultTheme;
    },

    /**
     * Apply theme to the document
     * @param {string} theme - Theme name ('dark' or 'light')
     */
    apply(theme) {
        document.documentElement.setAttribute('data-theme', theme);
    },

    /**
     * Set theme in storage and apply to document
     * @param {string} theme - Theme name ('dark' or 'light')
     */
    set(theme) {
        localStorage.setItem('accent', theme);
        this.apply(theme);
    },
};
