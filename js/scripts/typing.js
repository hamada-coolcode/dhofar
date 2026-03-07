
(function () {
    const ACTIVE_SELECTOR = '.carousel__list > .carousel__item:nth-child(1) .carousel__item__title';

    function runTypingOnActive() {
        const titleEl = document.querySelector(ACTIVE_SELECTOR);
        if (!titleEl) return;

        if (titleEl.dataset.typed === '1') return;

        const original = (titleEl.dataset.text || titleEl.innerHTML).trim();
        titleEl.dataset.text = original;

        // Create a target span for TypeIt
        titleEl.innerHTML = '<span class="ti-target"></span>';
        const target = titleEl.querySelector('.ti-target');
        if (!target) return;

        const placeholders = ['Lorem ipsum', 'Typing...', 'Loading title', 'Preparing...', 'Please wait'];
        const ph = placeholders[Math.floor(Math.random() * placeholders.length)];

        const ti = new TypeIt(target, {
            speed: 40,
            cursor: true,
            lifeLike: true,
            waitUntilVisible: false,
        });

        // Type placeholder, delete, then type real title
        ti.type(ph)
            .pause(2000)
            .delete(ph.length)
            .pause(150)
            .type(original)
            .go();

        titleEl.dataset.typed = '1';
    }

    // Observe active slide change (carousel rotates children)
    function observeActive() {
        const list = document.querySelector('.carousel__list');
        if (!list) return;
        const obs = new MutationObserver(() => {
            clearTimeout(observeActive._t);
            observeActive._t = setTimeout(runTypingOnActive, 50);
        });
        obs.observe(list, { childList: true });
    }

    document.addEventListener('DOMContentLoaded', () => {
        runTypingOnActive();
        observeActive();
    });
})();
