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
			forceUpdate: 0,
			sections: [
				{ key: "nav.khareef", link: "./khareef.html", videoLink: "./videos/khareef.mp4" },
				{ key: "nav.deserts", link: "./deserts.html", videoLink: "./videos/deserts.mp4" },
				{ key: "nav.coasts", link: "./coasts.html", videoLink: "./videos/coasts.mp4" },
				{ key: "nav.naturalParks", link: "./natural-parks.html", videoLink: "./videos/natural-parks.mp4" },
				{ key: "nav.ruins", link: "./ruins.html", videoLink: "./videos/ruins.mp4" },
			],
		};
	},
	computed: {
		currentLang() { return window.i18n.state.locale; },
		buttonText() { return window.t("section.explore"); },
		translatedSections() {
			return this.sections.map((section) => ({ ...section, title: window.t(section.key) }));
		},
	},
	methods: {
		t(key) { return window.t(key); },
		handleLocaleChange() {
			this.forceUpdate++;
		},
	},
	mounted() {
		window.addEventListener("localechange", this.handleLocaleChange);
	},
	beforeUnmount() {
		window.removeEventListener("localechange", this.handleLocaleChange);
	},
	template: `
        <div :key="forceUpdate">
            <section v-for="(section, index) in translatedSections" :key="index" class="relative w-full h-[calc(100vh-80px)] flex items-center justify-center p-0 overflow-hidden">
                <PlaceCategorySection :videoLink="section.videoLink" :title="section.title" :buttonText="buttonText" :link="section.link" />
            </section>
            <section class="explore-section relative w-full py-4 sm:py-8 lg:py-12 px-3 sm:px-6">
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
