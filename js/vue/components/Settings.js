// Settings Modal Component
const Settings = {
    name: 'Settings',
    props: ['isOpen', 'currentLanguage', 'currentTheme', 'currentAccent'],
    emits: ['close', 'update:language', 'update:theme', 'update:accent'],
    data() {
        return {
            languages: [
                { code: 'en', name: 'English', nativeName: 'English' },
                { code: 'ar', name: 'Arabic', nativeName: 'العربية' }
            ],
            themes: [
                { id: 'light', name: { en: 'Light', ar: 'فاتح' }, icon: 'sun' },
                { id: 'dark', name: { en: 'Dark', ar: 'داكن' }, icon: 'moon' }
            ],
            accents: [
                { id: 'red', name: { en: 'Red', ar: 'أحمر' }, color: '#c52f21' },
                { id: 'pink', name: { en: 'Pink', ar: 'وردي' }, color: '#d92662' },
                { id: 'fushcia', name: { en: 'Fushcia', ar: 'فوشيا' }, color: '#c1208b' },
                { id: 'purple', name: { en: 'Purple', ar: 'أرجواني' }, color: '#9236a4' },
                { id: 'violet', name: { en: 'Violet', ar: 'بنفسجي' }, color: '#7540bf' },
                { id: 'indigo', name: { en: 'Indigo', ar: 'نيلي' }, color: '#524ed2' },
                { id: 'blue', name: { en: 'Blue', ar: 'أزرق' }, color: '#2060df' },
                { id: 'azure', name: { en: 'Azure', ar: 'أزرق سماوي' }, color: '#01aaff' },
                { id: 'cyan', name: { en: 'Cyan', ar: 'سماوي' }, color: '#047878' },
                { id: 'jade', name: { en: 'Jade', ar: 'يشب' }, color: '#007a50' },
                { id: 'green', name: { en: 'Green', ar: 'أخضر' }, color: '#398712' },
                { id: 'lime', name: { en: 'Lime', ar: 'ليموني' }, color: '#a5d601' },
                { id: 'yellow', name: { en: 'Yellow', ar: 'أصفر' }, color: '#f2df0d' },
                { id: 'amber', name: { en: 'Amber', ar: 'عنبري' }, color: '#ffbf00' },
                { id: 'pumpkin', name: { en: 'Pumpkin', ar: 'برتقالي داكن' }, color: '#ff9500' },
                { id: 'orange', name: { en: 'Orange', ar: 'برتقالي' }, color: '#d24317' },
                { id: 'sand', name: { en: 'Sand', ar: 'رملي' }, color: '#ccc6b4' },
                { id: 'grey', name: { en: 'Grey', ar: 'رمادي' }, color: '#ababab' },
                { id: 'zinc', name: { en: 'Zinc', ar: 'زنك' }, color: '#646b79' },
                { id: 'slate', name: { en: 'Slate', ar: 'أزرق رمادي' }, color: '#525f7a' }
            ],
            modalTitles: {
                en: 'Settings',
                ar: 'الإعدادات'
            },
            sectionTitles: {
                en: { language: 'Language', theme: 'Theme', accent: 'Accent Color' },
                ar: { language: 'اللغة', theme: 'السمة', accent: 'لون التمييز' }
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
        selectTheme(theme) {
            this.$emit('update:theme', theme);
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
        },
        getContrastColor(hexColor) {
            // Convert hex to RGB
            const r = parseInt(hexColor.slice(1, 3), 16);
            const g = parseInt(hexColor.slice(3, 5), 16);
            const b = parseInt(hexColor.slice(5, 7), 16);
            // Calculate luminance
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            // Return white for dark colors, black for light colors
            return luminance > 0.5 ? '#000000' : '#ffffff';
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

                <!-- Theme Section -->
                <div class="mb-6">
                    <h4 class="text-sm font-semibold uppercase text-base-content/70 mb-3">{{ currentSectionTitles.theme }}</h4>
                    <div class="grid grid-cols-2 gap-3">
                        <button
                            v-for="theme in themes"
                            :key="theme.id"
                            @click="selectTheme(theme.id)"
                            :class="['btn', currentTheme === theme.id ? 'btn-primary' : 'btn-outline']"
                        >
                            <i :data-lucide="theme.icon" class="h-5 w-5 mr-2"></i>
                            {{ theme.name[currentLanguage] }}
                        </button>
                    </div>
                </div>

                <!-- Accent Color Section -->
                <div>
                    <h4 class="text-sm font-semibold uppercase text-base-content/70 mb-3">{{ currentSectionTitles.accent }}</h4>
                    <div class="grid grid-cols-5 sm:grid-cols-10 gap-2">
                        <button
                            v-for="accent in accents"
                            :key="accent.id"
                            @click="selectAccent(accent.id)"
                            class="btn btn-sm w-full h-10 p-0 relative"
                            :style="{ backgroundColor: accent.color }"
                            :class="currentAccent === accent.id ? 'ring-2 ring-offset-2 ring-primary' : ''"
                            :aria-label="accent.name[currentLanguage]"
                        >
                            <i v-if="currentAccent === accent.id"
                                data-lucide="check"
                                class="h-4 w-4"
                                :style="{ color: getContrastColor(accent.color) }"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `
};
