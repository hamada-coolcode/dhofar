// Place Card Component - Main wrapper with 3D hover effect
const PlaceCard = {
	name: "PlaceCard",
	components: { PlaceCardImage, PlaceCardBody },
	props: {
		place: { type: Object, required: true },
		index: { type: Number, default: 0 },
	},
	data() { return {}; },
	computed: {
		currentLang() { return window.i18n.state.locale; },
		exploreText() { return window.t("place.explore"); },
	},
	methods: { handleClick() { this.$emit("click", this.place); } },
	template: `
        <div class="hover-3d cursor-pointer" style="animation-delay: {{ index * 100 }}ms" @click="handleClick">
            <div class="card bg-base-100 shadow-xl w-full h-full">
                <place-card-image :place="place" :current-lang="currentLang"></place-card-image>
                <place-card-body :place="place" :current-lang="currentLang" :explore-text="exploreText"></place-card-body>
            </div>
            <div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div>
        </div>
    `,
};
