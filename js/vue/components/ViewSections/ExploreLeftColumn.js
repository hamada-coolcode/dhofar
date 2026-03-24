// Explore Left Column Component
const ExploreLeftColumn = {
	name: "ExploreLeftColumn",
	components: {
		ExploreCardLarge,
		ExploreCardSmall,
	},
	computed: {
		currentLang() { return window.i18n.state.locale; },
		ruinsLink() { return this.currentLang === "ar" ? "الآثار" : "Ruins"; },
		aboutDhofarText() { return window.t("explore.aboutDhofar"); },
		discoverMoreText() { return window.t("explore.discoverMore"); },
		aboutDhofarDescription() { return window.t("explore.aboutDhofarDescription"); },
		historicalLabel() { return window.t("labels.historical"); },
	},
	template: `
        <div class="flex flex-col gap-2 w-full lg:w-[40%]">
            <ExploreCardLarge
                :title="aboutDhofarText"
                :subtitle="discoverMoreText"
                :description="aboutDhofarDescription"
                link="./pages/about.html"
                icon="info"
                color="primary"
            />
            <ExploreCardSmall
                :title="t('section.seeAboutRuins')"
                :label="historicalLabel"
                link="./pages/ruins.html"
                icon="castle"
                color-class="accent"
                gradient="from-accent/50"
                image="./images/index_slider/ruins.jpg"
                :height-class="'h-[100px] sm:h-[130px] lg:h-[200px]'"
            />
        </div>
    `,
	methods: {
		t(key) {
			const value = window.t(key);
			return value || key;
		},
	},
};
