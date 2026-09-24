document.addEventListener('DOMContentLoaded', () => {
    const sliderList = document.querySelector('.slider__list');
    if (!sliderList) {
        return;
    }

    const items = Array.from(sliderList.querySelectorAll('.slider__item'));
    const counter = document.querySelector('[data-slider-current]');
    const prevButton = document.querySelector('[data-slider-prev]');
    const nextButton = document.querySelector('[data-slider-next]');

    let currentIndex = items.findIndex((item) => item.classList.contains('slider__item--active'));
    if (currentIndex === -1) {
        currentIndex = 0;
    }

    function showSlide(index) {
        items.forEach((item, itemIndex) => {
            item.classList.toggle('slider__item--active', itemIndex === index);
        });

        if (counter) {
            counter.textContent = String(index + 1);
        }
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            showSlide(currentIndex);
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % items.length;
            showSlide(currentIndex);
        });
    }

    showSlide(currentIndex);
});

document.addEventListener('DOMContentLoaded', () => {
    const THEME_STORAGE_KEY = 'leto2026-theme';
    const themeToggle = document.querySelector('.js-theme-toggle');
    const pageElement = document.body;
    const darkThemeClass = 'page--dark';

    function applyTheme(theme) {
        if (theme === 'dark') {
            pageElement.classList.add(darkThemeClass);
        } else {
            pageElement.classList.remove(darkThemeClass);
        }
    }

    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
        applyTheme(savedTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = pageElement.classList.contains(darkThemeClass);
            const nextTheme = isDark ? 'light' : 'dark';
            applyTheme(nextTheme);
            localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
        });
    }
});