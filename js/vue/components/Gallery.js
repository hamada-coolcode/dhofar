// Places Gallery Component - Main container with staggered grid layout
const PlacesGallery = {
	name: "PlacesGallery",
	props: {
		category: {
			type: String,
			default: "all", // all, khareef, deserts, coasts, reserves, ruins
		},
	},
	emits: ["card-click"],
	data() {
		return {
			allPlaces: PlacesData.places,
		};
	},
	computed: {
		currentLang() { return window.i18n.state.locale; },
		filteredPlaces() {
			if (this.category === "all") {
				return this.allPlaces;
			}
			return this.allPlaces.filter((place) => place.category === this.category);
		},
	},
	methods: {
		handleCardClick(place) {
			this.$emit("card-click", place);
		},
	},
	template: `
        <div class="w-full py-16 px-4">
            <div v-if="filteredPlaces.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <place-card
                    v-for="(place, index) in filteredPlaces"
                    :key="place.id"
                    :place="place"
                    :index="index"
                    @click="handleCardClick(place)"
                ></place-card>
            </div>
            <div v-else class="text-center py-20">
                <p class="text-xl text-base-content/60">No places found in this category.</p>
            </div>
        </div>
    `,
};
