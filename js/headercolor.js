(function($) {

    'use strict';
     
     const scrollColorElems = document.querySelectorAll("[data-humcolor]");
    scrollColorElems.forEach((colorSections, i) => {
      const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.humcolor;
  
      ScrollTrigger.create({
        trigger: colorSections,
        start: "top 50%",
        onEnter: () =>
          gsap.to(".header__burger-line ", {
            backgroundColor: colorSections.dataset.humcolor,
            overwrite: "auto"
          }),
        onLeaveBack: () =>
          gsap.to(".header__burger-line ", {
            backgroundColor: prevBg,
            overwrite: "auto"
          })
      });
    });
//
$(window).on('scroll', function() {
	    $('.header__container').each(function(index, value) {
            var navToggle = $('#chanlo').offset().top
            //black logo
            if ($(window).scrollTop() >= navToggle){
                $('.navbar').removeClass('navbar--white');
                $('.navbar').addClass('navbar--blck ');
            } else {
                $('.navbar').addClass('navbar--white');
            }
        });

        $('.header__container').each(function(index, value) {
            var navToggled = $('#chanlog').offset().top;
            //white logo
            if ($(window).scrollTop() >= navToggled){
              $('.navbar').addClass('navbar--white');
                $('.navbar').removeClass('navbar--blck ');
            } else {
              $('.navbar').addClass('navbar--blck ');
            }
        });
    });
   
})(jQuery);