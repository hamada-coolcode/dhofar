// Shared Preferences Mixin for Vue Apps
// Use this mixin in all page apps to avoid code duplication

const PreferencesMixin = {
    data() {
        return {
            locale: 'en',
            accent: 'dark',
            isSettingsOpen: false,
        };
    },
    provide() {
        return {
            locale: Vue.computed(() => this.locale),
        };
    },
    mounted() {
        this.loadPreferences();
    },
    methods: {
        loadPreferences() {
            const prefs = ThemeService.loadPreferences();
            this.locale = prefs.locale;
            this.accent = prefs.theme;
            this.applyPreferences();
        },
        applyPreferences() {
            ThemeService.applyPreferences(this.locale, this.accent);
        },
        openSettings() {
            this.isSettingsOpen = true;
        },
        closeSettings() {
            this.isSettingsOpen = false;
        },
        setLocale(locale) {
            this.locale = locale;
            ThemeService.setLocale(locale);
            this.applyPreferences();
        },
        setAccent(accent) {
            this.accent = accent;
            ThemeService.setTheme(accent);
            // Dispatch event for components that need to react to theme changes
            window.dispatchEvent(new CustomEvent('localechange', { detail: { locale: this.locale, theme: accent } }));
        },
    },
};
