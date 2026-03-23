// PlaceDetails Modal - Main wrapper component
const PlaceDetailsModal = {
	name: "PlaceDetailsModal",
	props: {
		place: { type: Object, required: true },
		isOpen: { type: Boolean, default: false },
	},
	emits: ["close"],
	data() {
		return { currentSlideIndex: 0 };
	},
	computed: {
		currentLang() { return window.i18n.state.locale; },
		allImages() {
			const images = [this.place.image];
			if (this.place.gallery && this.place.gallery.length > 0) {
				images.push(...this.place.gallery);
			}
			return images;
		},
		hasGallery() {
			return this.allImages.length > 1;
		},
	},
	methods: {
		handleClose() { this.$emit("close"); },
		nextSlide() {
			if (!this.hasGallery) return;
			this.currentSlideIndex = (this.currentSlideIndex + 1) % this.allImages.length;
		},
		prevSlide() {
			if (!this.hasGallery) return;
			this.currentSlideIndex = (this.currentSlideIndex - 1 + this.allImages.length) % this.allImages.length;
		},
		goToSlide(index) { this.currentSlideIndex = index; },
	},
	watch: {
		isOpen(newVal) { if (newVal) this.currentSlideIndex = 0; },
	},
	template: `
        <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-black/70 transition-opacity" @click="handleClose"></div>
            <div class="relative min-h-screen flex items-center justify-center p-4">
                <div class="relative bg-base-100 rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden">
                    <button @click="handleClose" class="absolute top-4 right-4 z-10 btn btn-circle btn-sm bg-base-100/80 hover:bg-base-100 border-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <place-details-header :place="place" :current-lang="currentLang"></place-details-header>
                    <div class="p-6 md:p-8">
                        <place-details-about :place="place" :current-lang="currentLang"></place-details-about>
                        <place-details-gallery 
                            v-if="hasGallery" 
                            :images="allImages" 
                            :current-slide-index="currentSlideIndex"
                            :place-name="place.name[currentLang]"
                            @next="nextSlide" 
                            @prev="prevSlide" 
                            @go="goToSlide"
                        ></place-details-gallery>
                        <place-details-map :location="place.location"></place-details-map>
                        <place-details-actions :location="place.location" @close="handleClose"></place-details-actions>
                    </div>
                </div>
            </div>
        </div>
    `,
};
