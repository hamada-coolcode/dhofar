// View Section Component
const ViewSection = {
	name: "ViewSection",
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
		currentLang() {
			return window.i18n.state.locale;
		},
		translatedSections() {
			this.localeChangeCount; // Make reactive to locale changes
			return this.sections.map((section) => ({
				...section,
				title: window.t(section.key),
			}));
		},
		buttonText() {
			this.localeChangeCount; // Make reactive to locale changes
			return window.t("section.explore");
		},
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
		t(key) {
			return window.t(key);
		},
	},
	template: `
        <div>
            <!-- Full-screen video sections -->
            <section v-for="(section, index) in translatedSections" :key="index" class="relative w-full h-[calc(100vh-80px)] flex items-center justify-center p-0 overflow-hidden">
                <PlaceCategorySection :videoLink="section.videoLink" :title="section.title" :buttonText="buttonText" :link="section.link" />
            </section>

            <!-- Explore More Section - Flexbox Layout -->
            <section class="relative w-full py-4 sm:py-8 lg:py-12 px-3 sm:px-6 bg-gradient-to-b from-base-300 via-base-200 to-base-100">
                <div class="max-w-[1200px] mx-auto w-full">
                    <!-- Section Header -->
                    <div class="text-center mb-4 sm:mb-6 lg:mb-8">
                        <div class="inline-flex items-center gap-2 mb-2">
                            <i data-lucide="compass" class="h-5 w-5 sm:h-6 sm:w-6 text-primary animate-pulse"></i>
                            <span class="text-primary text-xs sm:text-sm font-semibold uppercase tracking-widest">Discover</span>
                        </div>
                        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">{{ t('section.explore') }}</h2>
                        <p class="text-base-content/60 text-xs sm:text-sm">Discover the hidden gems of Dhofar</p>
                    </div>

                    <!-- Flex Grade 1: Main container with 40% / 60% split -->
                    <div class="flex flex-col lg:flex-row gap-2 sm:gap-3 lg:gap-4">
                        
                        <!-- Flex Grade 2 - First Element (40% width) -->
                        <div class="flex flex-col gap-2 w-full lg:w-[40%]">
                            
                            <!-- Flex Grade 3 - About (66% of space) -->
                            <div class="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl cursor-pointer h-[160px] sm:h-[200px] lg:h-[380px]">
                                <div class="absolute inset-0 bg-[url('./images/index_slider/khareef.png')] bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"></div>
                                <div class="absolute inset-0 bg-gradient-to-br from-primary/60 via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                                <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                <div class="relative z-10 h-full flex flex-col justify-center p-4 sm:p-5 lg:p-8">
                                    <div class="transform transition-all duration-500 group-hover:translate-x-2">
                                        <div class="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                            <div class="p-1.5 sm:p-2 rounded-lg bg-primary/20 backdrop-blur-sm group-hover:bg-primary/40 transition-colors duration-300">
                                                <i data-lucide="compass" class="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary"></i>
                                            </div>
                                            <span class="text-primary/90 text-[10px] sm:text-xs font-bold uppercase tracking-wider">Discover More</span>
                                        </div>
                                        <h3 class="text-lg sm:text-2xl lg:text-3xl font-black text-white mb-2 sm:mb-3 drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300">Explore Dhofar</h3>
                                        <p class="text-white/80 mb-3 sm:mb-4 text-xs sm:text-sm hidden lg:block line-clamp-2">Experience the beauty and culture of Oman's southern region</p>
                                        <button class="btn btn-sm sm:btn-md btn-outline text-white border-2 border-white/60 hover:bg-white hover:text-primary font-semibold transition-all duration-300 group-hover:pr-6">
                                            Learn More
                                            <i data-lucide="arrow-right" class="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-2"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </div>

                            <!-- Flex Grade 3 - Ruins (33% of space) -->
                            <div class="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg cursor-pointer h-[100px] sm:h-[130px] lg:h-[200px]">
                                <div class="absolute inset-0 bg-[url('./images/index_slider/khareef.png')] bg-cover bg-center transition-all duration-700 group-hover:scale-110"></div>
                                <div class="absolute inset-0 bg-gradient-to-br from-accent/50 via-black/60 to-transparent opacity-85 group-hover:opacity-70 transition-opacity duration-500"></div>
                                <div class="relative z-10 h-full flex flex-col justify-end p-3 sm:p-4 lg:p-5">
                                    <div class="transform transition-all duration-500 group-hover:translate-y-[-8px]">
                                        <div class="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                                            <div class="p-1 rounded-md sm:rounded-lg bg-accent/20 backdrop-blur-sm">
                                                <i data-lucide="castle" class="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-accent"></i>
                                            </div>
                                            <span class="text-accent/90 text-[9px] sm:text-xs font-bold uppercase tracking-wider">Historical</span>
                                        </div>
                                        <h3 class="text-xs sm:text-sm lg:text-base font-bold text-white mb-1.5 sm:mb-2 drop-shadow-md">{{ t('section.seeAboutRuins') }}</h3>
                                        <a :href="'./pages/ruins.html'" class="inline-flex items-center gap-1.5 sm:gap-2 text-accent hover:text-white font-semibold text-[10px] sm:text-xs transition-all duration-300 group-hover:gap-3">
                                            {{ t('nav.ruins') }}
                                            <i :data-lucide="currentLang == 'en' ? 'arrow-right' : 'arrow-left'" class="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-300 group-hover:translate-x-2"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div class="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                                        <i data-lucide="external-link" class="h-3 w-3 sm:h-4 sm:w-4 text-white"></i>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <!-- Flex Grade 2 - Second Element (60% width) -->
                        <div class="flex flex-col gap-2 w-full lg:w-[60%]">
                            
                            <!-- Flex Grade 3 - Khareef (40% of space) -->
                            <div class="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg cursor-pointer h-[110px] sm:h-[140px] lg:h-[240px]">
                                <div class="absolute inset-0 bg-[url('./images/index_slider/khareef.png')] bg-cover bg-center transition-all duration-700 group-hover:scale-110"></div>
                                <div class="absolute inset-0 bg-gradient-to-r from-green-600/70 via-green-900/50 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
                                <div class="relative z-10 h-full flex flex-col justify-end p-3 sm:p-4 lg:p-5">
                                    <div class="transform transition-all duration-500 group-hover:translate-y-[-8px]">
                                        <div class="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                                            <div class="p-1 rounded-md sm:rounded-lg bg-green-400/20 backdrop-blur-sm">
                                                <i data-lucide="cloud-rain" class="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-green-400"></i>
                                            </div>
                                            <span class="text-green-300 text-[9px] sm:text-xs font-bold uppercase tracking-wider">Monsoon</span>
                                        </div>
                                        <h3 class="text-xs sm:text-sm lg:text-base font-bold text-white mb-1.5 sm:mb-2 drop-shadow-md">{{ t('section.seeAboutKhareef') }}</h3>
                                        <a :href="'./pages/khareef.html'" class="inline-flex items-center gap-1.5 sm:gap-2 text-green-300 hover:text-white font-semibold text-[10px] sm:text-xs transition-all duration-300 group-hover:gap-3">
                                            {{ t('nav.khareef') }}
                                            <i :data-lucide="currentLang == 'en' ? 'arrow-right' : 'arrow-left'" class="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-300 group-hover:translate-x-2"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div class="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                                        <i data-lucide="external-link" class="h-3 w-3 sm:h-4 sm:w-4 text-white"></i>
                                    </div>
                                </div>
                            </div>

                            <!-- Flex Grade 3 - Deserts (50% of space) -->
                            <div class="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg cursor-pointer h-[100px] sm:h-[130px] lg:h-[180px]">
                                <div class="absolute inset-0 bg-[url('./images/index_slider/deserts.png')] bg-cover bg-center transition-all duration-700 group-hover:scale-110"></div>
                                <div class="absolute inset-0 bg-gradient-to-br from-amber-600/70 via-orange-900/60 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
                                <div class="relative z-10 h-full flex flex-col justify-end p-3 sm:p-4 lg:p-5">
                                    <div class="transform transition-all duration-500 group-hover:translate-y-[-6px]">
                                        <div class="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                                            <div class="p-1 rounded-md sm:rounded-lg bg-amber-400/20 backdrop-blur-sm">
                                                <i data-lucide="sun" class="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-amber-400 animate-spin-slow"></i>
                                            </div>
                                            <span class="text-amber-300 text-[9px] sm:text-xs font-bold uppercase tracking-wider">Desert</span>
                                        </div>
                                        <h3 class="text-[10px] sm:text-xs lg:text-sm font-bold text-white mb-1.5 sm:mb-2 drop-shadow-md">{{ t('section.seeAboutDeserts') }}</h3>
                                        <a :href="'./pages/deserts.html'" class="inline-flex items-center gap-1.5 sm:gap-2 text-amber-300 hover:text-white font-semibold text-[10px] sm:text-xs transition-all duration-300 group-hover:gap-3">
                                            {{ t('nav.deserts') }}
                                            <i :data-lucide="currentLang == 'en' ? 'arrow-right' : 'arrow-left'" class="h-2.5 w-2.5 sm:h-3 sm:w-3 transition-transform duration-300 group-hover:translate-x-2"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div class="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                                        <i data-lucide="external-link" class="h-3 w-3 sm:h-4 sm:w-4 text-white"></i>
                                    </div>
                                </div>
                            </div>

                            <!-- Flex Grade 3 - Coasts & Natural Parks Row -->
                            <div class="flex gap-2">
                                <!-- Coasts (50% of row) -->
                                <div class="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg cursor-pointer h-[100px] sm:h-[130px] lg:h-[180px] flex-1">
                                    <div class="absolute inset-0 bg-[url('./images/index_slider/coasts.jpg')] bg-cover bg-center transition-all duration-700 group-hover:scale-110"></div>
                                    <div class="absolute inset-0 bg-gradient-to-br from-cyan-600/70 via-blue-900/60 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
                                    <div class="relative z-10 h-full flex flex-col justify-end p-3 sm:p-4 lg:p-5">
                                        <div class="transform transition-all duration-500 group-hover:translate-y-[-6px]">
                                            <div class="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                                                <div class="p-1 rounded-md sm:rounded-lg bg-cyan-400/20 backdrop-blur-sm">
                                                    <i data-lucide="waves" class="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-cyan-400"></i>
                                                </div>
                                                <span class="text-cyan-300 text-[9px] sm:text-xs font-bold uppercase tracking-wider">Coastal</span>
                                            </div>
                                            <h3 class="text-[10px] sm:text-xs lg:text-sm font-bold text-white mb-1.5 sm:mb-2 drop-shadow-md">{{ t('section.seeAboutCoasts') }}</h3>
                                            <a :href="'./pages/coasts.html'" class="inline-flex items-center gap-1.5 sm:gap-2 text-cyan-300 hover:text-white font-semibold text-[10px] sm:text-xs transition-all duration-300 group-hover:gap-3">
                                                {{ t('nav.coasts') }}
                                                <i :data-lucide="currentLang == 'en' ? 'arrow-right' : 'arrow-left'" class="h-2.5 w-2.5 sm:h-3 sm:w-3 transition-transform duration-300 group-hover:translate-x-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div class="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                                            <i data-lucide="external-link" class="h-3 w-3 sm:h-4 sm:w-4 text-white"></i>
                                        </div>
                                    </div>
                                </div>

                                <!-- Natural Parks (50% of row) -->
                                <div class="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg cursor-pointer h-[100px] sm:h-[130px] lg:h-[180px] flex-1">
                                    <div class="absolute inset-0 bg-[url('./images/khareef/darbat_wadi/index.jpg')] bg-cover bg-center transition-all duration-700 group-hover:scale-110"></div>
                                    <div class="absolute inset-0 bg-gradient-to-br from-emerald-600/70 via-green-900/60 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
                                    <div class="relative z-10 h-full flex flex-col justify-end p-3 sm:p-4 lg:p-5">
                                        <div class="transform transition-all duration-500 group-hover:translate-y-[-6px]">
                                            <div class="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                                                <div class="p-1 rounded-md sm:rounded-lg bg-emerald-400/20 backdrop-blur-sm">
                                                    <i data-lucide="trees" class="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-emerald-400"></i>
                                                </div>
                                                <span class="text-emerald-300 text-[9px] sm:text-xs font-bold uppercase tracking-wider">Nature</span>
                                            </div>
                                            <h3 class="text-[10px] sm:text-xs lg:text-sm font-bold text-white mb-1.5 sm:mb-2 drop-shadow-md">{{ t('section.seeAboutNaturalParks') }}</h3>
                                            <a :href="'./pages/khareef.html'" class="inline-flex items-center gap-1.5 sm:gap-2 text-emerald-300 hover:text-white font-semibold text-[10px] sm:text-xs transition-all duration-300 group-hover:gap-3">
                                                {{ t('nav.khareef') }}
                                                <i :data-lucide="currentLang == 'en' ? 'arrow-right' : 'arrow-left'" class="h-2.5 w-2.5 sm:h-3 sm:w-3 transition-transform duration-300 group-hover:translate-x-2"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div class="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                                            <i data-lucide="external-link" class="h-3 w-3 sm:h-4 sm:w-4 text-white"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    `,
};
