// Settings Theme Section
const SettingsTheme = {
	name: "SettingsTheme",
	props: {
		currentAccent: { type: String, required: true },
		accents: { type: Array, required: true },
	},
	emits: ["update:accent"],
	computed: {
		themeSectionTitle() { return window.t("settings.theme"); },
	},
	methods: {
		selectAccent(accent) { this.$emit("update:accent", accent); },
		getButtonClass(accentId) {
			return this.currentAccent === accentId ? "btn-primary" : "btn-outline";
		},
	},
	template: `
        <div>
            <h4 class="text-sm font-semibold uppercase text-base-content/70 mb-3">{{ themeSectionTitle }}</h4>
            <div class="grid grid-cols-2 gap-3">
                <button v-for="accent in accents" :key="accent.id" @click="selectAccent(accent.id)"
                    :class="['btn', getButtonClass(accent.id)]">
                    {{ accent.name }}
                </button>
            </div>
        </div>
    `,
};
