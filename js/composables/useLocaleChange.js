// useLocaleChange Composable
// Provides reactive locale change handling for components

export const useLocaleChange = {
    data() {
        return {
            localeChangeCount: 0,
        };
    },
    mounted() {
        window.addEventListener("localechange", this.handleLocaleChange);
    },
    beforeUnmount() {
        window.removeEventListener("localechange", this.handleLocaleChange);
    },
    methods: {
        handleLocaleChange() {
            this.localeChangeCount++;
        },
    },
};
