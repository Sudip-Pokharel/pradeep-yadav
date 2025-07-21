new Swiper('.swiper-service', {
  loop: true,
  autoplay: { delay: 3000 },
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '#custom-service-next',
    prevEl: '#custom-service-prev',
  },
  breakpoints: {
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

new Swiper('.swiper-international-relation', {
  loop: true,
  autoplay: { delay: 3000 },
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '#custom-internal-relation-next',
    prevEl: '#custom-internal-relation-prev',
  },
});

const menuOpenTrigger = document.getElementById('menu-open-trigger');
const menuCloseTrigger = document.getElementById('menu-close-trigger');
menuOpenTrigger.addEventListener('click', () => {
  document.querySelector('body').classList.toggle('menu-open');
})
menuCloseTrigger.addEventListener('click', () => {
  document.querySelector('body').classList.toggle('menu-open');
})
