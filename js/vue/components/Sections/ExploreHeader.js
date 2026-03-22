// Explore Header Component
const ExploreHeader = {
	name: "ExploreHeader",
	template: `
        <div class="text-center mb-4 sm:mb-6 lg:mb-8">
            <div class="inline-flex items-center gap-2 mb-2">
                <i data-lucide="compass" class="h-5 w-5 sm:h-6 sm:w-6 text-primary animate-pulse"></i>
                <span class="text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest">Discover</span>
            </div>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">Explore</h2>
            <p class="text-base-content/60 text-xs sm:text-sm">Discover the hidden gems of Dhofar</p>
        </div>
    `,
	mounted() {
		this.$nextTick(() => lucide.createIcons());
	},
	updated() {
		this.$nextTick(() => lucide.createIcons());
	},
};
