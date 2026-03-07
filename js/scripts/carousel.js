// Lightweight carousel wiring for index.html
// Matches markup in index.html + styles in css/index/carousel.css

(() => {
    const carouselDom = document.querySelector('.carousel');
    if (!carouselDom) return;

    const nextDom = document.getElementById('carousel__next');
    const prevDom = document.getElementById('carousel__prev');

    const sliderDom = carouselDom.querySelector('.carousel__list');
    const thumbnailDom = carouselDom.querySelector('.carousel__thumbnail');

    if (!nextDom || !prevDom || !sliderDom || !thumbnailDom) return;

    const timeRunning = 500; // should match CSS animation durations (~0.5s)

    let runTimeOut;

    function showSlider(type) {
        const sliderItems = sliderDom.querySelectorAll('.carousel__item');
        const thumbnailItems = thumbnailDom.querySelectorAll('.carousel__thumbnail__item');

        if (sliderItems.length === 0 || thumbnailItems.length === 0) return;

        if (type === 'next') {
            sliderDom.appendChild(sliderItems[0]);
            thumbnailDom.appendChild(thumbnailItems[0]);
            carouselDom.classList.add('next');
        } else {
            sliderDom.prepend(sliderItems[sliderItems.length - 1]);
            thumbnailDom.prepend(thumbnailItems[thumbnailItems.length - 1]);
            carouselDom.classList.add('prev');
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);

    }

    nextDom.addEventListener('click', () => showSlider('next'));
    prevDom.addEventListener('click', () => showSlider('prev'));
})();