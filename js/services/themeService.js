// Theme Service - Manages application preferences (language, theme/accent)
// Used across all HTML pages for consistent preference handling

const ThemeService = {
    defaultLanguage: 'en',
    defaultTheme: 'dark',

    loadPreferences() {
        const savedLanguage = localStorage.getItem('language');
        const savedTheme = localStorage.getItem('accent');

        return {
            language: savedLanguage || this.defaultLanguage,
            theme: savedTheme || this.defaultTheme,
        };
    },

    applyPreferences(language, theme) {
        document.documentElement.setAttribute('data-theme', theme);
        if (language === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.title = 'جمال ظفار';
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.title = 'The Beauty of Dhofar';
        }
    },

    setLanguage(language) {
        localStorage.setItem('language', language);
        window.i18n.setLocale(language);
    },

    setTheme(theme) {
        localStorage.setItem('accent', theme);
        document.documentElement.setAttribute('data-theme', theme);
    },
};
