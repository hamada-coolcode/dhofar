// Preferences Mixin
// ==================
// MAIN CONTROLLER for application preferences in Vue components.
//
// This mixin orchestrates i18n and ThemeService to manage user preferences.
//
// Responsibilities:
// - Manage Vue reactive state (locale, accent, isSettingsOpen)
// - Provide locale to child components via Vue provide/inject
// - Coordinate between i18n service and ThemeService
// - Handle UI state for settings modal
//
// Usage: Add to Vue component: mixins: [PreferencesMixin]
//
// Dependencies (must be loaded before this mixin):
//   - Vue.js (global)
//   - i18n service (window.i18n)
//   - ThemeService (global)

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
            // Provide reactive locale to child components
            locale: Vue.computed(() => this.locale),
        };
    },

    mounted() {
        this.loadPreferences();
    },

    methods: {
        /**
         * Load preferences from services and apply them
         */
        loadPreferences() {
            this.locale = i18n.getLocale();
            this.accent = ThemeService.load();
            this.applyPreferences();
        },

        /**
         * Apply current preferences to the document via services
         */
        applyPreferences() {
            i18n.apply(this.locale);
            ThemeService.apply(this.accent);
        },

        /**
         * Open settings modal
         */
        openSettings() {
            this.isSettingsOpen = true;
        },

        /**
         * Close settings modal
         */
        closeSettings() {
            this.isSettingsOpen = false;
        },

        /**
         * Change application locale
         * @param {string} locale - Locale code ('en' or 'ar')
         */
        setLocale(locale) {
            this.locale = locale;
            i18n.setLocale(locale);
        },

        /**
         * Change application theme/accent
         * @param {string} accent - Theme name ('dark' or 'light')
         */
        setAccent(accent) {
            this.accent = accent;
            ThemeService.set(accent);
            // Dispatch event for components that need to react to theme changes
            window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: accent } }));
        },
    },
};
