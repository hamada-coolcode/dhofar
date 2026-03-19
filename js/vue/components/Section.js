// View Section Component
const ViewSection = {
	name: "ViewSection",
	inject: ["language"],
	data() {
		return {
			sections: [
				{
					title: { en: "Khareef", ar: "الخريف" },
					link: "./pages/khareef.html",
					videoLink: "./videos/khareef.mp4",
				},
				{
					title: { en: "Deserts", ar: "الصحاري" },
					link: "./pages/deserts.html",
					videoLink: "./videos/deserts.mp4",
				},
				{
					title: { en: "Coasts", ar: "السواحل" },
					link: "./pages/coasts.html",
					videoLink: "./videos/coasts.mp4",
				},
			],
			buttonText: {
				en: "Explore",
				ar: "استكشف",
			},
		};
	},
	computed: {
		currentLang() {
			return this.language?.value || this.language || "en";
		},
	},
	template: `
        <div>
            <section v-for="(section, index) in sections" :key="index" class="relative w-full h-[calc(100vh-80px)] flex items-center justify-center p-0">
                <!-- Background Video -->
                <video
                    :src="section.videoLink"
                    autoplay
                    muted
                    loop
                    playsinline
                    class="absolute inset-0 w-full h-full object-cover"
                ></video>

                <!-- Overlay -->
                <div class="absolute inset-0 bg-black/30"></div>

                <!-- Content -->
                <div class="relative z-10 text-center">
                    <div class="text-[6em] text-white mb-8">{{ section.title[currentLang] }}</div>
                    <a :href="section.link" class="btn btn-outline btn-lg rounded-full px-[70px] py-[14px] text-white border-white hover:bg-white hover:text-black">
                        {{ buttonText[currentLang] }}
                    </a>
                </div>
            </section>
        </div>
    `,
};
