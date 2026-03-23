// PlaceDetails Actions - Buttons section
const PlaceDetailsActions = {
	name: "PlaceDetailsActions",
	props: {
		location: { type: String, required: true },
	},
	emits: ["close"],
	computed: {
		openInMapsText() { return window.t("place.openInMaps"); },
		closeText() { return window.t("place.close"); },
	},
	template: `
        <div class="flex gap-4 justify-end">
            <a :href="location" target="_blank" class="btn btn-outline gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {{ openInMapsText }}
            </a>
            <button @click="$emit('close')" class="btn btn-primary">{{ closeText }}</button>
        </div>
    `,
};
