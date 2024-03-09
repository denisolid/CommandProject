document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        // Настройки Swiper
        slidesPerView: 1, // Отображаем по одному слайду
        spaceBetween: 20, // Отступ между слайдами
        loop: true, // Зацикливание слайдов
        breakpoints: {
            // Для широких экранов шире 768px
            768: {
                slidesPerView: 2, // Отображаем по два слайда в ряду
                spaceBetween: 20,
            },
            1280: {
                slidesPerView: 3, // Отображаем по два слайда в ряду
                spaceBetween: 25,
            },
        },
        // Добавьте другие настройки, если необходимо
    });
});
