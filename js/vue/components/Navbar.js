// Navbar Component
const Navbar = {
    name: 'Navbar',
    props: ['onSettingsClick'],
    inject: ['language'],
    data() {
        return {
            isMenuOpen: false,
            siteTitle: {
                en: 'The Beauty of Dhofar',
                ar: 'جمال ظفار'
            }
        };
    },
    computed: {
        currentLang() {
            return this.language?.value || this.language || 'en';
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
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    },
    template: `
        <nav class="navbar bg-base-100 shadow-sm fixed top-0 left-0 right-0 z-[var(--z-navbar)]" :style="{ height: 'var(--navbar-height)' }">
            <div class="flex-none">
                <label for="navbar-drawer" class="btn btn-circle swap swap-rotate btn-ghost">
                    <input type="checkbox" v-model="isMenuOpen" />
                    <i data-lucide="menu" class="swap-off w-40 h-10"></i>
                    <i data-lucide="x" class="swap-on h-8 w-8"></i>
                </label>
            </div>
            <div class="flex-1">
                <a class="btn btn-ghost text-xl" href="./index.html">
                    <i data-lucide="tent" class="h-6 w-6 mr-2"></i>
                    {{ siteTitle[currentLang] }}
                </a>
            </div>
            <div class="flex-none">
                <button @click="onSettingsClick" class="btn btn-square btn-ghost">
                    <i data-lucide="settings" class="h-5 w-5"></i>
                </button>
            </div>
        </nav>
    `
};
