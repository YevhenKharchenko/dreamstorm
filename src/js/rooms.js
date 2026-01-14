import Swiper from 'swiper';
import 'swiper/css/bundle';

let roomsSwiper;

roomsSwiper = new Swiper('.rooms-swiper-container', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 0,
  spaceBetween: 54,
  speed: 500,
  allowTouchMove: true,
  grabCursor: true,
  breakpoints: {
    1440: {
      slidesPerView: 3,
      initialSlide: 1,
      spaceBetween: 0,
    },
  },
  on: {
    init(swiper) {
      document.querySelector('.rooms-swiper-container').classList.add('show');
    },
  },
});
