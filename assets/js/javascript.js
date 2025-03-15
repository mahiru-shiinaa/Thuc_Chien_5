
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000, // Thời gian chuyển slide
      disableOnInteraction: false // Không tắt autoplay khi người dùng tương tác
  },
  pauseOnMouseEnter: true // Dừng khi di chuột vào slide
  });

  // Dùng để cài pixed cho header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) { // Điều chỉnh giá trị 100 nếu cần
        $('header').addClass('header-fixed');
    } else {
        $('header').removeClass('header-fixed');
    }
});