// $(function() {

//   $('.slider__inner').slick({
//     dots: true,
//     arrows: false,
//   });


// });


 let myImageSwiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      autoHeight: true,

      slidesPerView: 1,

      centeredSlides: true,

      loop: true,

      // controller:{
      //   control: myTextSwiper,
      // }

      // breakpoints: {
      //   480: {
      //     slidesPerView: 1,
      //   },
      //   1280: {
      //     slidesPerView: 2,
      //   }
      // }



      
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

      // controller:{
      //   control: myTextSwiper,
      // }

    });
    
    myImageSwiper.controller.control = myTextSwiper;
    myTextSwiper.controller.control = myImageSwiper;