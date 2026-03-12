// View Section Component
const ViewSection = {
    name: 'ViewSection',
    data() {
        return {
            sections: [
                { title: 'Khareef', link: './pages/khareef.html' },
                { title: 'Mountains', link: './pages/mountains.html' },
                { title: 'Deserts', link: './pages/deserts.html' },
                { title: 'Coasts', link: './pages/coasts.html' },
                { title: 'Urban', link: './pages/urbanicities.html' },
                { title: 'Natural Parks', link: './pages/natural_parks.html' }
            ]
        };
    },
    template: `
        <div>
            <section v-for="(section, index) in sections" :key="index">
                <div class="content">
                    <div class="content__title">{{ section.title }}</div>
                    <button><a :href="section.link">Explore</a></button>
                </div>
            </section>
        </div>
    `
};
