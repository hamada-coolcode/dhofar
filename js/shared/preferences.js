// Shared Preferences Mixin for Vue Apps
// Use this mixin in all page apps to avoid code duplication

const PreferencesMixin = {
    data() {
        return {
            language: 'en',
            accent: 'dark',
            isSettingsOpen: false,
        };
    },
    provide() {
        return {
            language: Vue.computed(() => this.language),
        };
    },
    mounted() {
        this.loadPreferences();
    },
    methods: {
        loadPreferences() {
            const prefs = ThemeService.loadPreferences();
            this.language = prefs.language;
            this.accent = prefs.accent;
            this.applyPreferences();
        },
        applyPreferences() {
            ThemeService.applyPreferences(this.language, this.accent);
        },
        openSettings() {
            this.isSettingsOpen = true;
        },
        closeSettings() {
            this.isSettingsOpen = false;
        },
        setLanguage(lang) {
            this.language = lang;
            ThemeService.setLanguage(lang);
            this.applyPreferences();
        },
        setAccent(accent) {
            this.accent = accent;
            ThemeService.setAccent(accent);
            this.applyPreferences();
        },
    },
};
