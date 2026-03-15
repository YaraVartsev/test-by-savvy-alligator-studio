
// const swiper = new Swiper('.projects__slider', {
//   slidesPerView: 1,
//   spaceBetween: 20,
//   loop: true,

//   breakpoints: {
//     640: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//   },

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

let myImageSwiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
      },

      autoHeight: true,

      slidesPerView: 1,

      centeredSlides: true,

      loop: true,

      });

 let myTextSwiper = new Swiper(".mySwiper--text", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      autoHeight: true,

      slidesPerView: 1,

      centeredSlides: true,

      loop: true,
    });
    
    myImageSwiper.controller.control = myTextSwiper;
    myTextSwiper.controller.control = myImageSwiper;


    var swiper = new Swiper(".mySwiper__card", {
      direction: "vertical",

      autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
       },

       speed: 500,

      slidesPerView: 3.5,

      loop: false,

      slideToClickedSlide: false,

      grabCursor: true,

    });



    document.querySelectorAll('.card__short').forEach((item) => {
      item.addEventListener('click', () => {
        item.classList.toggle('card--inactive')
        item.parentNode.querySelector('.card__long').classList.toggle('card--inactive')
      })
    });
    document.querySelectorAll('.card__long').forEach((item) => {
      item.addEventListener('click', () => {
        item.classList.toggle('card--inactive')
        item.parentNode.querySelector('.card__short').classList.toggle('card--inactive')
      })
    });


    document.addEventListener('DOMContentLoaded', function(){
      const form = document.getElementById('form');
      form.addEventListener('submit', formSend);

      async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form)
      }
    });

