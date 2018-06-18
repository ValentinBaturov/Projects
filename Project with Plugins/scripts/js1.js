// $(function(){
//   alert('hello')
// });

$(document).ready(function(){
sliders();
// activeButton();

});

var sliders = function() {
  $('.your-class').slick({
    // setting-name: setting-value
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '.nextA',
  prevArrow: '.prevA',
  adaptiveHeight: true

  });

  $('.fade').slick({
    slidesToShow: 1,
    dots: false,
    arrows: false,

    autoplay: true,
    autoplaySpeed: 5000,

    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

}



  // var header = document.getElementsByClass("navOl");
  // var btns = header.getElementsByClass("hButton");
  // for (var i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener("click", function() {
  //     var current = document.getElementsByClass("active");
  //     current[0].className = current[0].className.replace(" active", "");
  //     this.className += " active";
  //   });
  // }
//   var activeButton = function() {
//   //
//   // var header = $('.navOl');
//   // var actHeader = $('.hButton');
//   //
//   // for (var i = 0; i < hButton.length; i++) {
//   //   actHeader[i].click(function() {
//   //     var current = $('.active');
//   //     current[0].className = current[0].className.replace(" active", "");
//   //     this.className += " active";
//   //   });
//   // }
// }
