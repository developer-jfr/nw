let swiper = new Swiper(".slider-1", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
  });


  let scLanguage = new Swiper(".slider-4", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
        nextEl: '.sc-video-left',
        prevEl: '.sc-video-right',
      }
  });


  let scSwiper = new Swiper(".slider-2", {
    slidesPerView: 5,
    loop: true,
    spaceBetween: 20,
    grabCursor: true,
      breakpoints: {
        300: {
          slidesPerView: 3.1,
          spaceBetween: 20
        },
        1000: {
          slidesPerView: 20
        }
      }
  });



  let doctorsSwiper = new Swiper(".doctors", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 50,
    grabCursor: true,
    breakpoints: {
      300: {
        slidesPerView: 1.2,
        
        spaceBetween: 10
      },
      600: {
        slidesPerView: 2
      },
      1000: {
        slidesPerView: 3
      }
    }
  });