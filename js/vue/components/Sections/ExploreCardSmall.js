// Explore Card Small Component (Generic)
const ExploreCardSmall = {
	name: "ExploreCardSmall",
	props: {
		title: { type: String, required: true },
		label: { type: String, required: true },
		link: { type: String, required: true },
		icon: { type: String, default: "castle" },
		colorClass: { type: String, default: "accent" },
		image: { type: String, default: "./images/index_slider/khareef.png" },
		gradient: { type: String, default: "from-accent/50" },
		heightClass: { type: String, default: "h-[100px] sm:h-[130px] lg:h-[200px]" },
	},
	template: `
        <div class="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg cursor-pointer" :class="heightClass">
            <div :class="'absolute inset-0 bg-[url(\\''+image+'\\')] bg-cover bg-center transition-all duration-700 group-hover:scale-110'"></div>
            <div :class="'absolute inset-0 bg-gradient-to-br '+gradient+' via-black/60 to-transparent opacity-85 group-hover:opacity-70 transition-opacity duration-500'"></div>
            <div class="relative z-10 h-full flex flex-col justify-end p-3 sm:p-4 lg:p-5">
                <div class="transform transition-all duration-500 group-hover:translate-y-[-8px]">
                    <div class="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                        <div class="p-1 rounded-md sm:rounded-lg bg-white/10 backdrop-blur-sm">
                            <i :data-lucide="icon" :class="'h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-'+colorClass+'-400'"></i>
                        </div>
                        <span :class="'text-'+colorClass+'-300 text-[9px] sm:text-xs font-bold uppercase tracking-wider'">{{ label }}</span>
                    </div>
                    <h3 class="text-xs sm:text-sm lg:text-base font-bold text-white mb-1.5 sm:mb-2 drop-shadow-md">{{ title }}</h3>
                    <a :href="link" :class="'inline-flex items-center gap-1.5 sm:gap-2 text-'+colorClass+'-300 hover:text-white font-semibold text-[10px] sm:text-xs transition-all duration-300 group-hover:gap-3'">
                        <span class="truncate">{{ link.split('/').pop().replace('.html','') }}</span>
                        <i data-lucide="arrow-right" class="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-300 group-hover:translate-x-2"></i>
                    </a>
                </div>
            </div>
            <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="p-2 rounded-full bg-white/20 backdrop-blur-sm"><i data-lucide="external-link" class="h-3 w-3 sm:h-4 sm:w-4 text-white"></i></div>
            </div>
        </div>
    `,
	mounted() { this.$nextTick(() => lucide.createIcons()); },
	updated() { this.$nextTick(() => lucide.createIcons()); },
};
