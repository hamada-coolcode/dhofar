// Explore Left Column Component
const ExploreLeftColumn = {
	name: "ExploreLeftColumn",
	components: {
		ExploreCardLarge,
		ExploreCardSmall,
	},
	inject: ["language"],
	computed: {
		currentLang() { return this.language?.value || this.language || "en"; },
		ruinsLink() { return this.currentLang === "ar" ? "الآثار" : "Ruins"; },
	},
	template: `
        <div class="flex flex-col gap-2 w-full lg:w-[40%]">
            <ExploreCardLarge
                title="Explore Dhofar"
                subtitle="Discover More"
                description="Experience the beauty and culture of Oman's southern region"
                link="./pages/khareef.html"
                icon="compass"
                color="primary"
            />
            <ExploreCardSmall
                :title="t('section.seeAboutRuins')"
                :label="'Historical'"
                link="./pages/ruins.html"
                icon="castle"
                color-class="accent"
                gradient="from-accent/50"
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
