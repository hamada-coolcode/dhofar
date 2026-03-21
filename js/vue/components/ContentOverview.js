// Content Overview Component - Renders place details modal
const PlaceDetails = {
	name: "PlaceDetails",
	inject: ["language"],
	props: {
		place: {
			type: Object,
			required: true,
		},
		isOpen: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["close"],
	data() {
		return {
			localeChangeCount: 0,
		};
	},
	computed: {
		currentLang() {
			return this.language?.value || this.language || "en";
		},
		aboutLabel() {
			this.localeChangeCount; // Make reactive to locale changes
			return window.t("place.about");
		},
		galleryLabel() {
			this.localeChangeCount; // Make reactive to locale changes
			return window.t("place.gallery");
		},
		locationLabel() {
			this.localeChangeCount; // Make reactive to locale changes
			return window.t("place.location");
		},
		openInMapsText() {
			this.localeChangeCount; // Make reactive to locale changes
			return window.t("place.openInMaps");
		},
		closeText() {
			this.localeChangeCount; // Make reactive to locale changes
			return window.t("place.close");
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
		handleClose() {
			this.$emit("close");
		},
	},
	template: `
        <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
            <!-- Backdrop -->
            <div
                class="fixed inset-0 bg-black/70 transition-opacity"
                @click="handleClose"
            ></div>

            <!-- Modal Content -->
            <div class="relative min-h-screen flex items-center justify-center p-4">
                <div class="relative bg-base-100 rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden">

                    <!-- Close Button -->
                    <button
                        @click="handleClose"
                        class="absolute top-4 right-4 z-10 btn btn-circle btn-sm bg-base-100/80 hover:bg-base-100 border-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <!-- Hero Image -->
                    <div class="relative h-64 md:h-96">
                        <img
                            :src="place.image"
                            :alt="place.name"
                            class="w-full h-full object-cover"
                            @error="$event.target.src = './images/placeholder.jpg'"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent"></div>

                        <!-- Title Overlay -->
                        <div class="absolute bottom-0 left-0 right-0 p-6">
                            <h2 class="text-4xl md:text-5xl font-bold text-white mb-2">
                                {{ place.name }}
                            </h2>
                            <div class="flex items-center gap-4 text-white/90">
                                <div class="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-warning" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span class="font-semibold">{{ place.rating }}</span>
                                </div>
                                <div class="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>{{ place.stateText }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="p-6 md:p-8">
                        <!-- Description -->
                        <div class="mb-8">
                            <h3 class="text-xl font-semibold mb-3">{{ aboutLabel }}</h3>
                            <p class="text-base-content/80 leading-relaxed">
                                {{ place.description }}
                            </p>
                        </div>

                        <!-- Gallery Carousel -->
                        <div v-if="place.gallery && place.gallery.length > 0" class="mb-8">
                            <h3 class="text-xl font-semibold mb-3">{{ galleryLabel }}</h3>
                            <div class="carousel w-full bg-base-200 rounded-xl p-4 gap-4">
                                <div
                                    v-for="(img, idx) in place.gallery"
                                    :key="idx"
                                    :id="'slide' + (idx + 1)"
                                    class="carousel-item relative w-full"
                                >
                                    <img :src="img" class="w-full rounded-lg" @error="$event.target.src = './images/placeholder.jpg'" />
                                    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                        <a :href="'#slide' + (idx === 0 ? place.gallery.length : idx)" class="btn btn-circle">❮</a>
                                        <a :href="'#slide' + (idx + 2 > place.gallery.length ? 1 : idx + 2)" class="btn btn-circle">❯</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Google Map -->
                        <div class="mb-6">
                            <h3 class="text-xl font-semibold mb-3">{{ locationLabel }}</h3>
                            <div class="rounded-xl overflow-hidden border border-base-300">
                                <iframe
                                    :src="place.location"
                                    width="100%"
                                    height="300"
                                    style="border:0;"
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                    class="w-full"
                                ></iframe>
                            </div>
                        </div>

                        <!-- Actions -->
                        <div class="flex gap-4 justify-end">
                            <a
                                :href="place.location"
                                target="_blank"
                                class="btn btn-outline gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                {{ openInMapsText }}
                            </a>
                            <button @click="handleClose" class="btn btn-primary">
                                {{ closeText }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
};
