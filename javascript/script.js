$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        const icon = $(this).find('i');
        icon.toggleClass('fa-bars');
        icon.toggleClass('fa-x'); 
    });
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
        slidesPerView: 1,
        spaceBetween:18
    },
    768: {
        slidesPerView: 1,
        spaceBetween:18
    },
    1188: {
        slidesPerView: 1,
        spaceBetween:18
    }
  }
});