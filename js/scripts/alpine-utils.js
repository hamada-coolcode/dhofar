
document.addEventListener("alpine:init", () => {
    Alpine.data('dhofar', () => ({
        theme: "light",
        language: "en",
        get english() { return this.language === "en" },
        get arabic() { return this.language === "ar" },

        switchTheme() {
            if (this.theme === "dark") {
                this.theme = "light";
            } else {
                this.theme = "dark";
            }
        },

        switchLanguage() {
            if (this.english) {
                this.language = "ar";
            } else {
                this.language = "en";
            }
            this.switchDirection()
        },

        switchDirection() {
            this.$root.setAttribute(
                "dir",
                this.english ? "ltr" : "rtl",
            )
        }
    }))
});
