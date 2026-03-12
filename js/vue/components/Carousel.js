// Carousel Component
const Carousel = {
    name: 'Carousel',
    data() {
        return {
            slides: [...carouselSlides],
            isTransitioning: false,
            transitionTime: 500
        };
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
            // Initialize TypeIt on first slide title
            this.$nextTick(() => {
                const titleEl = this.sliderDom.querySelector('.carousel__item:nth-child(1) .carousel__item__title');
                if (!titleEl || titleEl.dataset.typed === '1') return;

                const original = titleEl.innerHTML;
                titleEl.dataset.text = original;

                // Create target span for TypeIt
                titleEl.innerHTML = '<span class="ti-target"></span>';
                const target = titleEl.querySelector('.ti-target');
                if (!target) return;

                const placeholders = ['Lorem ipsum', 'Typing...', 'Loading title', 'Preparing...', 'Please wait'];
                const ph = placeholders[Math.floor(Math.random() * placeholders.length)];

                new TypeIt(target, {
                    speed: 40,
                    cursor: true,
                    lifeLike: true,
                    waitUntilVisible: false,
                })
                .type(ph)
                .pause(2000)
                .delete(ph.length)
                .pause(150)
                .type(original)
                .go();

                titleEl.dataset.typed = '1';
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
                
                // Re-init typing animation for new active slide
                this.initTyping();
            }, this.transitionTime);
        }
    },
    template: `
        <div class="carousel">
            <div class="carousel__list">
                <div v-for="(slide, index) in slides" :key="index" class="carousel__item">
                    <img :src="slide.image" :alt="slide.title">
                    <div class="carousel__item__content">
                        <div class="carousel__item__title" v-html="slide.heading"></div>
                        <div class="carousel__item__description">{{ slide.description }}</div>
                        <div class="carousel__item__buttons">
                            <a :href="slide.link"><button class="btn">LEARN MORE</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Thumbnail -->
            <div class="carousel__thumbnail">
                <div v-for="(slide, index) in slides" :key="index" class="carousel__thumbnail__item">
                    <img :src="slide.thumbnail" :alt="slide.title">
                    <div class="carousel__thumbnail__item__content">
                        <div class="carousel__thumbnail__item__title">{{ slide.title }}</div>
                    </div>
                </div>
            </div>

            <!-- Arrows -->
            <div class="carousel__arrows">
                <button @click="prev" aria-label="Previous slide">&lt;</button>
                <button @click="next" aria-label="Next slide">&gt;</button>
            </div>

            <!-- Progress bar -->
            <div class="time" aria-hidden="true"></div>
        </div>
    `
};
