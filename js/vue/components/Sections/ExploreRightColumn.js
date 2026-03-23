// Explore Right Column Component
const ExploreRightColumn = {
	name: "ExploreRightColumn",
	components: {
		ExploreCardSmall,
	},
	computed: {
		currentLang() { return window.i18n.state.locale; },
		monsoonLabel() { return window.t("labels.monsoon"); },
		desertLabel() { return window.t("labels.desert"); },
		coastalLabel() { return window.t("labels.coastal"); },
		natureLabel() { return window.t("labels.nature"); },
	},
	template: `
        <div class="flex flex-col gap-2 w-full lg:w-[60%]">
            <ExploreCardSmall
                :title="t('section.seeAboutKhareef')"
                :label="monsoonLabel"
                link="./pages/khareef.html"
                icon="cloud-rain"
                color-class="green"
                gradient="from-green-600/70"
                image="./images/index_slider/khareef.png"
                height-class="h-[110px] sm:h-[140px] lg:h-[240px]"
            />
            <ExploreCardSmall
                :title="t('section.seeAboutDeserts')"
                :label="desertLabel"
                link="./pages/deserts.html"
                icon="sun"
                color-class="amber"
                gradient="from-amber-600/70"
                image="./images/index_slider/deserts.png"
                height-class="h-[100px] sm:h-[130px] lg:h-[180px]"
            />
            <div class="flex gap-2">
                <ExploreCardSmall
                    :title="t('section.seeAboutCoasts')"
                    :label="coastalLabel"
                    link="./pages/coasts.html"
                    icon="waves"
                    color-class="cyan"
                    gradient="from-cyan-600/70"
                    image="./images/index_slider/coasts.jpg"
                    height-class="flex-1 h-[100px] sm:h-[130px] lg:h-[180px]"
                />
                <ExploreCardSmall
                    :title="t('section.seeAboutNaturalParks')"
                    :label="natureLabel"
                    link="./pages/natural-parks.html"
                    icon="trees"
                    color-class="emerald"
                    gradient="from-emerald-600/70"
                    image="./images/index_slider/natural-parks.jpg"
                    height-class="flex-1 h-[100px] sm:h-[130px] lg:h-[180px]"
                />
            </div>
        </div>
    `,
	methods: {
		t(key) { return window.t(key) || key; },
	},
};
