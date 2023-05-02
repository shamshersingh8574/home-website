$(window).on('load', function () {
  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 100,
    itemHight: 100,
    itemMargin: 10,
    asNavFor: '#slider',
    minItems: 2,
    maxItems: 3
  });

  $('#slider').flexslider({
    // animation: "slide",
    controlNav: false,
    animationLoop: true,
    slideshow: false,
    sync: "#carousel",
    arrows: false,
    minItems: 2,
    maxItems: 3
  });
});
// navbar
$(document).ready(function () {
  $(document).on('click', '.navabar-normal-icons , .navabar-cross-icons , .nav a', function () {
    $(".nav").toggleClass("main");
    $(".navabar-normal-icons").toggleClass("navbarIcon-1");
    $(".navabar-cross-icons").toggleClass("navbarIcon-2");
    $("body").addClass('oerflow-hidden');
  });
  $(document).on('click', '.navabar-cross-icons , .nav a', function () {
    $("body").removeClass('oerflow-hidden');
  })
});

