// Place Card Component - Individual card with 3D hover effect
const PlaceCard = {
	name: "PlaceCard",
	inject: ["language"],
	props: {
		place: {
			type: Object,
			required: true,
		},
		index: {
			type: Number,
			default: 0,
		},
	},
	data() {
		return {
			localeChangeCount: 0,
		};
	},
	computed: {
		currentLang() {
			this.localeChangeCount; // Make reactive to locale changes
			return this.language?.value || this.language || "en";
		},
		starRating() {
			return Math.round(this.place.rating);
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
		handleClick() {
			this.$emit("click", this.place);
		},
	},
	template: `
        <div 
            class="hover-3d cursor-pointer"
            style="animation-delay: {{ index * 100 }}ms"
            @click="handleClick"
        >
            <div class="card bg-base-100 shadow-xl w-full h-full">
                <figure class="relative h-48 overflow-hidden">
                    <img
                        :src="place.image"
                        :alt="place.name[currentLang]"
                        class="w-full h-full object-cover"
                        @error="$event.target.src = './images/placeholder.jpg'"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    <!-- Rating Badge -->
                    <div class="absolute top-3 right-3 badge badge-lg bg-warning text-warning-content gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {{ place.rating }}
                    </div>
                </figure>

                <div class="card-body text-center">
                    <h3 class="card-title text-2xl font-bold justify-center">
                        {{ place.name[currentLang] }}
                    </h3>
                    <div class="flex items-center justify-center gap-2 text-base-content/70">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span class="text-sm">{{ place.state[currentLang] }}</span>
                    </div>

                    <div class="card-actions justify-center mt-4">
                        <button class="btn btn-primary btn-sm rounded-full px-6">
                            <span>Explore</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- 8 empty divs needed for the 3D effect -->
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    `,
};
