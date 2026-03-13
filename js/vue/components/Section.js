// View Section Component
const ViewSection = {
    name: 'ViewSection',
    inject: ['language'],
    data() {
        return {
            sections: [
                { title: { en: 'Khareef', ar: 'الخريف' }, link: './pages/khareef.html' },
                { title: { en: 'Mountains', ar: 'الجبال' }, link: './pages/mountains.html' },
                { title: { en: 'Deserts', ar: 'الصحاري' }, link: './pages/deserts.html' },
                { title: { en: 'Coasts', ar: 'السواحل' }, link: './pages/coasts.html' },
                { title: { en: 'Urban', ar: 'المدن' }, link: './pages/urbanicities.html' },
                { title: { en: 'Natural Parks', ar: 'الحدائق الطبيعية' }, link: './pages/natural_parks.html' }
            ],
            buttonText: {
                en: 'Explore',
                ar: 'استكشف'
            }
        };
    },
    computed: {
        currentLang() {
            return this.language?.value || this.language || 'en';
        }
    },
    template: `
        <div>
            <section v-for="(section, index) in sections" :key="index">
                <div class="content">
                    <div class="content__title">{{ section.title[currentLang] }}</div>
                    <button><a :href="section.link">{{ buttonText[currentLang] }}</a></button>
                </div>
            </section>
        </div>
    `
};
