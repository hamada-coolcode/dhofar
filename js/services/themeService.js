// Theme Service - Manages application preferences (locale, theme/accent)
// Used across all HTML pages for consistent preference handling

const ThemeService = {
    defaultLocale: 'en',
    defaultTheme: 'dark',

    loadPreferences() {
        const savedLocale = localStorage.getItem('locale');
        const savedTheme = localStorage.getItem('accent');

        return {
            locale: savedLocale || this.defaultLocale,
            theme: savedTheme || this.defaultTheme,
        };
    },

    applyPreferences(locale, theme) {
        document.documentElement.setAttribute('data-theme', theme);
        if (locale === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.title = 'جمال ظفار';
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.title = 'The Beauty of Dhofar';
        }
    },

    setLocale(locale) {
        localStorage.setItem('locale', locale);
        window.i18n.setLocale(locale);
    },

    setTheme(theme) {
        localStorage.setItem('accent', theme);
        document.documentElement.setAttribute('data-theme', theme);
    },
};
