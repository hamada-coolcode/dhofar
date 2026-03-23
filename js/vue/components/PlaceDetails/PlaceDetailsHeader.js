// PlaceDetails Header - Hero image with title overlay
const PlaceDetailsHeader = {
	name: "PlaceDetailsHeader",
	props: {
		place: { type: Object, required: true },
		currentLang: { type: String, required: true },
	},
	template: `
        <div class="relative h-64 md:h-96">
            <img :src="place.image" :alt="place.name[currentLang]" class="w-full h-full object-cover"
                @error="$event.target.src = './images/placeholder.jpg'" />
            <div class="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-2">{{ place.name[currentLang] }}</h2>
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
                        <span>{{ place.state[currentLang] }}</span>
                    </div>
                </div>
            </div>
        </div>
    `,
};
