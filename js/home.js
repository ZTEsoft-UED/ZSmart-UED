$(document).ready(function(){
  $('.responsive').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: false,
    

    responsive: [
      {
        breakpoint:767,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          draggable: true,
        }
      }
    ]
  })
});
