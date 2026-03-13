// Carousel Component
const Carousel = {
    name: 'Carousel',
    props: ['language'],
    inject: ['language'],
    data() {
        return {
            slides: [
                {
                    id: 1,
                    key: 'khareef',
                    title: 'Khareef',
                    image: './images/index_slider/khareef.png',
                    thumbnail: './images/index_slider/khareef.png',
                    link: './pages/khareef.html'
                },
                {
                    id: 2,
                    key: 'mountains',
                    title: 'Mountains',
                    image: './images/index_slider/mountains.jpg',
                    thumbnail: './images/index_slider/mountains.jpg',
                    link: './pages/mountains.html'
                },
                {
                    id: 3,
                    key: 'deserts',
                    title: 'Deserts',
                    image: './images/index_slider/deserts.png',
                    thumbnail: './images/index_slider/deserts.png',
                    link: './pages/deserts.html'
                },
                {
                    id: 4,
                    key: 'coasts',
                    title: 'Coasts',
                    image: './images/index_slider/coasts.jpg',
                    thumbnail: './images/index_slider/coasts.jpg',
                    link: './pages/coasts.html'
                },
                {
                    id: 5,
                    key: 'urbanicities',
                    title: 'Urbanicities',
                    image: './images/index_slider/urbancities.png',
                    thumbnail: './images/index_slider/urbancities.png',
                    link: './pages/urbanicities.html'
                },
                {
                    id: 6,
                    key: 'natural_parks',
                    title: 'Natural Parks',
                    image: './images/index_slider/natural_parks.png',
                    thumbnail: './images/index_slider/natural_parks.png',
                    link: './pages/natural_parks.html'
                }
            ],
            isTransitioning: false,
            transitionTime: 500,
            buttonText: {
                en: 'LEARN MORE',
                ar: 'اقرأ المزيد'
            },
            slideTitles: {
                khareef: { en: 'Khareef', ar: 'الخريف' },
                mountains: { en: 'Mountains', ar: 'الجبال' },
                deserts: { en: 'Deserts', ar: 'الصحاري' },
                coasts: { en: 'Coasts', ar: 'السواحل' },
                urbanicities: { en: 'Urbanicities', ar: 'المدن' },
                natural_parks: { en: 'Natural Parks', ar: 'الحدائق الطبيعية' }
            }
        };
    },
    computed: {
        currentLang() {
            return this.language?.value || this.language || 'en';
        },
        translatedSlides() {
            const carouselTranslations = {
                en: {
                    khareef: {
                        heading: 'Welcome to <mark>Dhofar</mark>',
                        description: 'When the monsoon arrives in June, Dhofar transforms into a lush emerald wonderland. Mist-cloaked mountains, cascading waterfalls, and cool breezes turn every trail into a story and every view into a memory.'
                    },
                    mountains: {
                        heading: 'Majestic <br><mark>Mountains</mark>',
                        description: 'From the dramatic cliffs of Jebel Samhan to hidden wadis and caves, Dhofar\'s mountains host breathtaking viewpoints, rare wildlife, and timeless hiking routes.'
                    },
                    deserts: {
                        heading: 'Endless <br><mark>Deserts</mark>',
                        description: 'Golden dunes meet serene horizons in the Rub\' al Khali. Experience sandboarding by day and stargazing under pristine skies by night.'
                    },
                    coasts: {
                        heading: 'Azure <br><mark>Coasts</mark>',
                        description: 'Walk along powdery beaches, watch dolphins dance, and witness the thunder of Mughsail blowholes—Dhofar\'s coast is a sanctuary by the sea.'
                    },
                    urbanicities: {
                        heading: 'Vibrant <mark>Urbanicities</mark>',
                        description: 'Savor frankincense-scented souqs, modern cafés, and warm Omani hospitality. Salalah blends heritage with a contemporary rhythm.'
                    },
                    natural_parks: {
                        heading: 'Serene <br><mark>Natural <br>Parks</mark>',
                        description: 'Drift along Wadi Darbat, picnic at Ayn Razat, and scan the cliffs for eagles—Dhofar\'s natural parks are pure tranquility.'
                    }
                },
                ar: {
                    khareef: {
                        heading: 'مرحباً بكم في <mark>ظفار</mark>',
                        description: 'عندما يصل الخريف في يونيو، تتحول ظفار إلى أرض خضراء مورقة. جبال مغطاة بالضباب، شلالات متدفقة، ونسيم بارد يحول كل مسار إلى قصة وكل منظر إلى ذكرى.'
                    },
                    mountains: {
                        heading: 'جبال <br><mark>مهـيبة</mark>',
                        description: 'من المنحدرات الدراماتيكية لجبل سمحان إلى الأودية والكهوف المخفية، تضم جبال ظفار مناظر خلابة، وحياة برية نادرة، وطرق مشي خالدة.'
                    },
                    deserts: {
                        heading: 'صحاري <br><mark>لا متناهية</mark>',
                        description: 'تلتقي الكثبان الذهبية بالأفق serene في الربع الخالي. جرب التزلج على الرمال نهاراً وتأمل النجوم تحت سماء صافية ليلاً.'
                    },
                    coasts: {
                        heading: 'سواحل <br><mark>فيروزية</mark>',
                        description: 'تمشى على طول الشواطئ الرملية، شاهد الدلافين وهي ترقص، واشهد هدير فجوات مغسيل - ساحل ظفار هو ملاذ بجانب البحر.'
                    },
                    urbanicities: {
                        heading: '<mark>مدن</mark> نابضة بالحياة',
                        description: 'تذوق أسواق اللبان العطرة، والمقاهي العصرية، والضيافة العمانية الدافئة. صلالة تمزج التراث بإيقاع معاصر.'
                    },
                    natural_parks: {
                        heading: 'حدائق <br><mark>طبيعية</mark> هادئة',
                        description: 'تجول على طول وادي دربات، تنزه في عين رزات، وراقب المنحدرات بحثاً عن النسور - حدائق ظفار الطبيعية هي نقاء الهدوء.'
                    }
                }
            };
            return this.slides.map(slide => {
                const translation = carouselTranslations[this.language]?.[slide.key] || carouselTranslations.en[slide.key];
                return {
                    ...slide,
                    heading: translation.heading,
                    description: translation.description
                };
            });
        }
    },
    mounted() {
        this.setupCarousel();
        this.initTyping();
    },
    methods: {
        setupCarousel() {
            this.carouselEl = this.$el;
            this.sliderDom = this.$el.querySelector('.carousel__list');
            this.thumbnailDom = this.$el.querySelector('.carousel__thumbnail');
        },
        initTyping() {
            this.$nextTick(() => {
                const titleEl = this.sliderDom.querySelector('.carousel__list > .carousel__item:nth-child(1) .carousel__item__title');
                if (!titleEl || titleEl.dataset.typed === '1') return;

                const original = titleEl.innerHTML;
                titleEl.dataset.text = original;
                titleEl.dataset.typed = '1';

                // Clear title and start typing immediately
                const targetSpan = document.createElement('span');
                targetSpan.className = 'ti-target';
                titleEl.innerHTML = '';
                titleEl.appendChild(targetSpan);

                new TypeIt(targetSpan, {
                    speed: 50,
                    cursor: true,
                    lifeLike: true,
                    waitUntilVisible: false,
                })
                .type(original)
                .go();
            });
        },
        next() {
            if (this.isTransitioning) return;
            this.showSlider('next');
        },
        prev() {
            if (this.isTransitioning) return;
            this.showSlider('prev');
        },
        showSlider(type) {
            const sliderItems = this.sliderDom.querySelectorAll('.carousel__item');
            const thumbnailItems = this.thumbnailDom.querySelectorAll('.carousel__thumbnail__item');

            if (sliderItems.length === 0 || thumbnailItems.length === 0) return;

            if (type === 'next') {
                this.sliderDom.appendChild(sliderItems[0]);
                this.thumbnailDom.appendChild(thumbnailItems[0]);
                this.carouselEl.classList.add('next');
            } else {
                this.sliderDom.prepend(sliderItems[sliderItems.length - 1]);
                this.thumbnailDom.prepend(thumbnailItems[thumbnailItems.length - 1]);
                this.carouselEl.classList.add('prev');
            }

            this.isTransitioning = true;
            setTimeout(() => {
                this.carouselEl.classList.remove('next');
                this.carouselEl.classList.remove('prev');
                this.isTransitioning = false;
                
                // Reset typed flag and start typing on new slide
                const titleEl = this.sliderDom.querySelector('.carousel__list > .carousel__item:nth-child(1) .carousel__item__title');
                if (titleEl) {
                    titleEl.dataset.typed = '0';
                }
                this.initTyping();
            }, this.transitionTime);
        }
    },
    template: `
        <div class="carousel">
            <div class="carousel__list">
                <div v-for="(slide, index) in translatedSlides" :key="index" class="carousel__item">
                    <img :src="slide.image" :alt="slide.title">
                    <div class="carousel__item__content">
                        <div class="carousel__item__title" v-html="slide.heading"></div>
                        <div class="carousel__item__description">{{ slide.description }}</div>
                        <div class="carousel__item__buttons">
                            <a :href="slide.link"><button class="btn btn-outline">{{ buttonText[currentLang] }}</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Thumbnail -->
            <div class="carousel__thumbnail">
                <div v-for="(slide, index) in translatedSlides" :key="index" class="carousel__thumbnail__item">
                    <img :src="slide.thumbnail" :alt="slide.title">
                    <div class="carousel__thumbnail__item__content">
                        <div class="carousel__thumbnail__item__title">{{ slideTitles[slide.key][currentLang] }}</div>
                    </div>
                </div>
            </div>

            <!-- Arrows -->
            <div class="carousel__arrows">
                <button @click="prev" aria-label="Previous slide" class="btn btn-circle btn-sm">&lt;</button>
                <button @click="next" aria-label="Next slide" class="btn btn-circle btn-sm">&gt;</button>
            </div>
        </div>
    `
};
