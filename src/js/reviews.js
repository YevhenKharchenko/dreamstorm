import Swiper from 'swiper';
import 'swiper/css/bundle';

const reviewsLeftArrow = document.getElementById('reviewsLeftArrow');
const reviewsRightArrow = document.getElementById('reviewsRightArrow');

let reviewsSwiper;

reviewsSwiper = new Swiper('.reviews-swiper-container', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 0,
  spaceBetween: 20,
  speed: 500,
  allowTouchMove: true,
  grabCursor: true,
  breakpoints: {
    1440: {
      slidesPerView: 'auto',
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 20,
    },
  },

  on: {
    init(swiper) {
      document.querySelector('.reviews-swiper-container').classList.add('show');
      updateReviewsArrows(swiper);
    },
    slideChange(swiper) {
      updateReviewsArrows(swiper);
    },
  },
});

updateReviewsArrows(reviewsSwiper);

function updateReviewsArrows(swiper) {
  reviewsLeftArrow.disabled = swiper.isBeginning;
  reviewsRightArrow.disabled = swiper.isEnd;
}

reviewsLeftArrow.addEventListener('click', () => {
  reviewsSwiper.slidePrev();
});

reviewsRightArrow.addEventListener('click', () => {
  reviewsSwiper.slideNext();
});
