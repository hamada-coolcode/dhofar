// View Section Component
const ViewSection = {
	name: "ViewSection",
	components: {
		PlaceCategorySection,
		ExploreHeader,
		ExploreLeftColumn,
		ExploreRightColumn,
	},
	data() {
		return {
			sections: [
				{ key: "nav.khareef", link: "./pages/khareef.html", videoLink: "./videos/khareef.mp4" },
				{ key: "nav.deserts", link: "./pages/deserts.html", videoLink: "./videos/deserts.mp4" },
				{ key: "nav.coasts", link: "./pages/coasts.html", videoLink: "./videos/coasts.mp4" },
			],
			localeChangeCount: 0,
		};
	},
	computed: {
		currentLang() { return window.i18n.state.locale; },
		buttonText() { this.localeChangeCount; return window.t("section.explore"); },
		translatedSections() {
			this.localeChangeCount;
			return this.sections.map((section) => ({ ...section, title: window.t(section.key) }));
		},
	},
	mounted() { window.addEventListener("localechange", this.handleLocaleChange); },
	beforeUnmount() { window.removeEventListener("localechange", this.handleLocaleChange); },
	methods: {
		handleLocaleChange() { this.localeChangeCount++; },
		t(key) { return window.t(key); },
	},
	template: `
        <div>
            <section v-for="(section, index) in translatedSections" :key="index" class="relative w-full h-[calc(100vh-80px)] flex items-center justify-center p-0 overflow-hidden">
                <PlaceCategorySection :videoLink="section.videoLink" :title="section.title" :buttonText="buttonText" :link="section.link" />
            </section>
            <section class="relative w-full py-4 sm:py-8 lg:py-12 px-3 sm:px-6 bg-gradient-to-b from-base-300 via-base-200 to-base-100">
                <div class="max-w-[1200px] mx-auto w-full">
                    <ExploreHeader />
                    <div class="flex flex-col lg:flex-row gap-2 sm:gap-3 lg:gap-4">
                        <ExploreLeftColumn />
                        <ExploreRightColumn />
                    </div>
                </div>
            </section>
        </div>
    `,
};
