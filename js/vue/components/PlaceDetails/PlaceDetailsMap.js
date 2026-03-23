// PlaceDetails Map - Google Maps embed
const PlaceDetailsMap = {
	name: "PlaceDetailsMap",
	props: {
		location: { type: String, required: true },
	},
	computed: {
		locationLabel() { return window.t("place.location"); },
	},
	template: `
        <div class="mb-6">
            <h3 class="text-xl font-semibold mb-3">{{ locationLabel }}</h3>
            <div class="rounded-xl overflow-hidden border border-base-300">
                <iframe :src="location" width="100%" height="300" style="border:0;"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full"></iframe>
            </div>
        </div>
    `,
};
