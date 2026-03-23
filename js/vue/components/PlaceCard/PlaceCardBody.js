// Place Card Body - Content with title, location, and button
const PlaceCardBody = {
	name: "PlaceCardBody",
	props: {
		place: { type: Object, required: true },
		currentLang: { type: String, required: true },
		exploreText: { type: String, required: true },
	},
	template: `
        <div class="card-body text-center">
            <h3 class="card-title text-2xl font-bold justify-center">{{ place.name[currentLang] }}</h3>
            <div class="flex items-center justify-center gap-2 text-base-content/70">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="text-sm">{{ place.state[currentLang] }}</span>
            </div>
            <div class="card-actions justify-center mt-4">
                <button class="btn btn-primary btn-sm rounded-full px-6">
                    <span>{{ exploreText }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>
        </div>
    `,
};
