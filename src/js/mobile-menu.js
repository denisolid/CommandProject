(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-mobile-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-mobile-close]'),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector('[data-mobile]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }

  /**
   * Scroll to section
   */
  function scrollToSection() {
    function smoothScroll(targetEl, duration) {
      let target = document.querySelector(targetEl);
      if (!target) {
        console.log('елемент куди скролити не знайдено:', targetEl);
        return;
      }
      let targetPosition = target.getBoundingClientRect().top;
      let startPosition = window.pageYOffset;
      let startTime = null;

      const ease = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      const animation = function (currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);

    };
    const links = document.querySelectorAll('a.scroll-to');
    if (links) {
      links.forEach(link => {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          const currentTarget = this.getAttribute('href');
          refs.modal.classList.contains('is-open') ? refs.modal.classList.remove('is-open') : null;
          smoothScroll(currentTarget, 1000);
        });
      });
    }
  }
  scrollToSection();

})();