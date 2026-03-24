// Place Category Section Component - Video hero section for category pages
const PlaceCategorySection = {
    name: 'PlaceCategorySection',
    props: {
        videoLink: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        buttonText: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            default: '#',
        },
    },
    template: `
        <!-- Background Video -->
        <video
            :src="videoLink"
            autoplay
            muted
            loop
            playsinline
            class="absolute inset-0 w-full h-full object-cover"
        ></video>

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/30"></div>

        <!-- Content -->
        <div class="relative z-10 text-center">duration-300
            <div class="text-[6em] font-bold text-white mb-8 drop-shadow-lg">{{ title }}</div>
            <a :href="link" class="btn btn-outline btn-lg rounded-full px-[70px] py-[14px] text-white border-white hover:bg-white hover:text-black transition-all duration-300">
                {{ buttonText }}
            </a>
        </div>
    `,
};
