// Theme Service - Manages application preferences (language, theme/accent)
// Used across all HTML pages for consistent preference handling

const ThemeService = {
    defaultLanguage: 'en',
    defaultAccent: 'dark',

    loadPreferences() {
        const savedLanguage = localStorage.getItem('language');
        const savedAccent = localStorage.getItem('accent');

        return {
            language: savedLanguage || this.defaultLanguage,
            accent: savedAccent || this.defaultAccent,
        };
    },

    applyPreferences(language, accent) {
        document.documentElement.setAttribute('data-theme', accent);
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

    setAccent(accent) {
        localStorage.setItem('accent', accent);
    },
};
