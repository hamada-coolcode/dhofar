// Explore Card Large Component (About)
const ExploreCardLarge = {
	name: "ExploreCardLarge",
	props: {
		title: { type: String, default: null },
		subtitle: { type: String, default: null },
		description: { type: String, default: "" },
		link: { type: String, default: "#" },
		icon: { type: String, default: "compass" },
		color: { type: String, default: "primary" },
	},
	computed: {
		currentLang() { return window.i18n.state.locale; },
		resolvedTitle() {
			return this.title !== null ? this.title : window.t("explore.exploreDhofar");
		},
		resolvedSubtitle() {
			return this.subtitle !== null ? this.subtitle : window.t("explore.discoverMore");
		},
		learnMoreText() { return window.t("explore.learnMore"); },
	},
	template: `
        <div class="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl cursor-pointer h-[160px] sm:h-[200px] lg:h-[380px]">
            <div class="absolute inset-0 bg-[url('./images/about.webp')] bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"></div>
            <div class="absolute inset-0 bg-gradient-to-br from-primary/60 via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div class="relative z-10 h-full flex flex-col justify-center p-4 sm:p-5 lg:p-8">
                <div class="transform transition-all duration-500 group-hover:translate-x-2">
                    <div class="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div class="p-1.5 sm:p-2 rounded-lg bg-primary/20 backdrop-blur-sm">
                            <i :data-lucide="icon" class="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary"></i>
                        </div>
                        <span class="text-primary/90 text-[10px] sm:text-xs font-bold uppercase tracking-wider">{{ resolvedSubtitle }}</span>
                    </div>
                    <h3 class="text-lg sm:text-2xl lg:text-3xl font-black text-violet-500 mb-2 sm:mb-3 drop-shadow-lg">{{ resolvedTitle }}</h3>
                    <p v-if="description" class="mb-3 sm:mb-4 text-orange-200 text-xs sm:text-sm hidden lg:block">{{ description }}</p>
                    <a :href="link" class="btn btn-sm sm:btn-md btn-outline text-white border-2 border-white/60 hover:bg-white hover:text-primary font-semibold inline-flex items-center">
                        {{ learnMoreText }} <i data-lucide="arrow-right" class="h-4 w-4 ml-2"></i>
                    </a>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </div>
    `,
	mounted() { this.$nextTick(() => lucide.createIcons()); },
	updated() { this.$nextTick(() => lucide.createIcons()); },
};
