// PlaceDetails About - Description section
const PlaceDetailsAbout = {
	name: "PlaceDetailsAbout",
	props: {
		place: { type: Object, required: true },
		currentLang: { type: String, required: true },
	},
	computed: {
		aboutLabel() { return window.t("place.about"); },
	},
	template: `
        <div class="mb-8">
            <h3 class="text-xl font-semibold mb-3">{{ aboutLabel }}</h3>
            <p class="text-base-content/80 leading-relaxed">{{ place.description[currentLang] }}</p>
        </div>
    `,
};
