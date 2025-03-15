
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

// Lưu thông tin căn hộ
const properties = {
  apartment: {
    space: "185 m2",
    floor: "26th",
    rooms: 4,
    parking: "Yes",
    payment: "Bank",
    image: "assets/images/deal-01.jpg", // Thay bằng đường dẫn ảnh thật
    title: "Extra Info About Property",
    description_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.",
    description_2: "When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.",
  },
  villa: {
      space: "250 m2",
    floor: "28th",
    rooms: 5,
    parking: "Yes",
    payment: "Bank",
    image: "assets/images/deal-02.jpg", // Thay bằng đường dẫn ảnh thật
    title: "Detail Info About Villa",
    description_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.",
    description_2: "Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.",
  },
  penthouse: {
    space: "320 m2",
    floor: "34th",
    rooms: 6,
    parking: "Yes",
    payment: "Bank",
    image: "assets/images/deal-03.jpg", // Thay bằng đường dẫn ảnh thật
    title: "Extra Info About Penthouse",
    description_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.",
    description_2: "Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.",
  },
};

//Hàm để set thông tin căn hộ
function showProperty(propertyType) {
    const property = properties[propertyType];

    document.getElementById("space").textContent = property.space;
    document.getElementById("floor").textContent = property.floor;
    document.getElementById("rooms").textContent = property.rooms;
    document.getElementById("parking").textContent = property.parking;
    document.getElementById("payment").textContent = property.payment;
    document.getElementById("image-detail").src = property.image; 
    document.getElementById("detail-title").textContent = property.title; 
    document.getElementById("detail-desc-1").textContent = property.description_1; 
    document.getElementById("detail-desc-2").textContent = property.description_2;

    const buttons = document.querySelectorAll(".button-group .button-three");
    buttons.forEach(button => button.classList.remove("active"));
    const activeButton = document.querySelector(`.button-group .button-three[onclick="showProperty('${propertyType}')"]`);

    if (activeButton) {
      activeButton.classList.add('active');
  }
}

showProperty('apartment');