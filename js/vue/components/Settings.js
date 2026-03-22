// Settings Modal Component
const Settings = {
	name: "Settings",
	props: ["isOpen", "currentLanguage", "currentAccent"],
	emits: ["close", "update:language", "update:accent"],
	data() {
		return {
			languages: [
				{ code: "en", nativeName: "English" },
				{ code: "ar", nativeName: "العربية" },
			],
		};
	},
	computed: {
		currentModalTitle() {
			return window.t("settings.title");
		},
		languageSectionTitle() {
			return window.t("settings.language");
		},
		themeSectionTitle() {
			return window.t("settings.theme");
		},
		accents() {
			return [
				{ id: "dark", name: window.t("settings.themes.dark") },
				{ id: "light", name: window.t("settings.themes.light") },
			];
		},
	},
	watch: {
		isOpen(newVal) {
			this.$nextTick(() => {
				const modal = this.$el;
				if (newVal) {
					modal.showModal();
				} else {
					modal.close();
				}
			});
		},
	},
	mounted() {
		this.$nextTick(() => {
			lucide.createIcons();
		});
	},
	updated() {
		this.$nextTick(() => {
			lucide.createIcons();
		});
	},
	methods: {
		selectLanguage(lang) {
			this.$emit("update:language", lang);
		},
		selectAccent(accent) {
			this.$emit("update:accent", accent);
		},
		closeModal() {
			this.$emit("close");
		},
	},
	template: `
        <dialog class="modal" :class="{'modal-open': isOpen}">
            <div class="modal-box bg-base-100">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="font-bold text-2xl">{{ currentModalTitle }}</h3>
                    <button @click="closeModal" class="btn btn-ghost btn-sm btn-circle">
                        <i data-lucide="x" class="h-5 w-5"></i>
                    </button>
                </div>

                <!-- Language Section -->
                <div class="mb-6">
                    <h4 class="text-sm font-semibold uppercase text-base-content/70 mb-3">{{ languageSectionTitle }}</h4>
                    <div class="grid grid-cols-2 gap-3">
                        <button
                            v-for="lang in languages"
                            :key="lang.code"
                            @click="selectLanguage(lang.code)"
                            :class="['btn', currentLanguage === lang.code ? 'btn-primary' : 'btn-outline']"
                        >
                            <span class="text-lg">{{ lang.nativeName }}</span>
                        </button>
                    </div>
                </div>

                <!-- Theme/Accent Section -->
                <div>
                    <h4 class="text-sm font-semibold uppercase text-base-content/70 mb-3">{{ themeSectionTitle }}</h4>
                    <div class="grid grid-cols-2 gap-3">
                        <button
                            v-for="accent in accents"
                            :key="accent.id"
                            @click="selectAccent(accent.id)"
                            :class="['btn', currentAccent === accent.id ? 'btn-primary' : 'btn-outline']"
                        >
                            {{ accent.name }}
                        </button>
                    </div>
                </div>
            </div>
            <form method="dialog" class="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    `,
};
