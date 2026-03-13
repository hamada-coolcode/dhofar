// Settings Modal Component
const Settings = {
    name: 'Settings',
    props: ['isOpen', 'currentLanguage', 'currentAccent'],
    emits: ['close', 'update:language', 'update:accent'],
    data() {
        return {
            languages: [
                { code: 'en', name: 'English', nativeName: 'English' },
                { code: 'ar', name: 'Arabic', nativeName: 'العربية' }
            ],
            accents: [
                { id: 'dark', name: { en: 'Dark', ar: 'داكن' }, icon: "night" },
                { id: 'light', name: { en: 'Light', ar: 'فاتح' }, icon: "sun" },
            ],
            modalTitles: {
                en: 'Settings',
                ar: 'الإعدادات'
            },
            sectionTitles: {
                en: { language: 'Language', accent: 'Theme' },
                ar: { language: 'اللغة', accent: 'السمة' }
            }
        };
    },
    computed: {
        currentModalTitle() {
            return this.modalTitles[this.currentLanguage] || this.modalTitles.en;
        },
        currentSectionTitles() {
            return this.sectionTitles[this.currentLanguage] || this.sectionTitles.en;
        }
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
            this.$emit('update:language', lang);
        },
        selectAccent(accent) {
            this.$emit('update:accent', accent);
        },
        closeModal() {
            this.$emit('close');
        },
        handleBackdropClick(event) {
            if (event.target === event.currentTarget) {
                this.closeModal();
            }
        }
    },
    template: `
        <div v-if="isOpen" class="settings-modal" @click="handleBackdropClick">
            <div class="settings-modal-box bg-base-100 rounded-box shadow-xl p-6 w-11/12 max-w-2xl">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="font-bold text-2xl">{{ currentModalTitle }}</h3>
                    <button @click="closeModal" class="btn btn-ghost btn-sm btn-circle">
                        <i data-lucide="x" class="h-5 w-5"></i>
                    </button>
                </div>

                <!-- Language Section -->
                <div class="mb-6">
                    <h4 class="text-sm font-semibold uppercase text-base-content/70 mb-3">{{ currentSectionTitles.language }}</h4>
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
                    <h4 class="text-sm font-semibold uppercase text-base-content/70 mb-3">{{ currentSectionTitles.accent }}</h4>
                    <div class="grid grid-cols-2 gap-3">
                        <button
                            v-for="accent in accents"
                            :key="accent.id"
                            @click="selectAccent(accent.id)"
                            :class="['btn', currentAccent === accent.id ? 'btn-primary' : 'btn-outline']"
                            :aria-label="accent.name[currentLanguage]"
                        >
                            {{ accent.name[currentLanguage] }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `
};
