// PlaceDetails Gallery - Image carousel
const PlaceDetailsGallery = {
	name: "PlaceDetailsGallery",
	props: {
		images: { type: Array, required: true },
		currentSlideIndex: { type: Number, required: true },
		placeName: { type: String, required: true },
	},
	emits: ["next", "prev", "go"],
	computed: {
		galleryLabel() { return window.t("place.gallery"); },
	},
	methods: {
		getSlideClass(idx) {
			return idx === this.currentSlideIndex ? "bg-primary w-4" : "bg-base-300 hover:bg-base-content/50";
		},
	},
	template: `
        <div class="mb-8">
            <h3 class="text-xl font-semibold mb-3">{{ galleryLabel }}</h3>
            <div class="carousel w-full bg-base-200 rounded-xl overflow-hidden">
                <div v-for="(img, idx) in images" :key="idx" class="carousel-item w-full"
                    :class="{ 'hidden': idx !== currentSlideIndex }">
                    <img :src="img" :alt="placeName" class="w-full h-64 md:h-80 object-cover"
                        @error="$event.target.src = './images/placeholder.jpg'" />
                </div>
            </div>
            <div class="flex justify-center gap-2 mt-4">
                <button @click="$emit('prev')" class="btn btn-circle btn-sm">❮</button>
                <button @click="$emit('next')" class="btn btn-circle btn-sm">❯</button>
            </div>
            <div class="flex justify-center gap-2 mt-3">
                <button v-for="(img, idx) in images" :key="idx" @click="$emit('go', idx)"
                    class="w-2 h-2 rounded-full transition-all" :class="getSlideClass(idx)"></button>
            </div>
        </div>
    `,
};
