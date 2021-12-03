(function($) {

    'use strict';
     
//      const scrollColorElems = document.querySelectorAll("[data-humcolor]");
//     scrollColorElems.forEach((colorSections, i) => {
//       const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.humcolor;
  
//       ScrollTrigger.create({
//         trigger: colorSections,
//         start: "top 50%",
//         onEnter: () =>
//           gsap.to(".header__burger-line ", {
//             backgroundColor: colorSections.dataset.humcolor,
//             overwrite: "auto"
//           }),
//         onLeaveBack: () =>
//           gsap.to(".header__burger-line ", {
//             backgroundColor: prevBg,
//             overwrite: "auto"
//           })
//       });
//     });
// //
// $(window).on('scroll', function() {
// 	    $('.header__container').each(function(index, value) {
//             var navToggle = $('#chanlo').offset().top;
//             //black logo
//             if ($(window).scrollTop() >= navToggle){
//                 $('.navbar').removeClass('navbar--white');
//                 $('.navbar').addClass('navbar--blck');
//             } else {
//                 $('.navbar').removeClass('navbar--blck');
//                 $('.navbar').addClass('navbar--white');
//             }
//         });

//         $('.header__container').each(function(index, value) {
//             var navToggle = $('#chanlog').offset().top;
//             //white logo
//             if ($(window).scrollTop() >= navToggle){
//               $('.navbar').addClass('navbar--white');
//                 $('.navbar').removeClass('navbar--blck');
//             } else {
//               $('.navbar').addClass('navbar--blck');
//               $('.navbar').removeClass('navbar--white');
//             }
//         });
//     });
        // $('.header__container').each(function() {
        //     var navToggle = $('#chanlo')
        //     //black logo
        //     if ($(window).scrollTop() >= navToggle){
        //         $('.logo__img-primary').hide();
        //         $('.logo__img-secondary').show();
        //     } else {
        //         $('.logo__img-primary').show();
        //         $('.logo__img-secondary').hide();
        //     }
        // });

//         $('.header__container').each(function() {
//             var navToggles = $('#chanlog')
//             if ($(window).scrollTop() >= navToggles){
//                 $('.logo__img-primary').show();
//                 $('.logo__img-secondary').hide();
//             } else {
//                 // $('.logo__img-primary').hide();
//                 // $('.logo__img-secondary').show();
//             }
//         });
//     });
// let ch = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.white',
//         start: '100 top',
//         // toggleActions: 'restart reverse restart reverse ',
//     },
// });
// ch.from(".logo__img-secondary",1,{y:100, opacity: 0, ease:'power2.In',duration:0.5},"-=1");
// ch.to(".logo__img-primary",1,{y:100, opacity: 0, ease:'power2.In',duration:0.5},"-=1"); 
// let ch2 = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.black',
//         start: '100 top',
//         // toggleActions: 'restart reverse restart reverse ',
//     },
// });
// ch2.to(".logo__img-secondary",1,{y:100, opacity: 0, ease:'power2.In',duration:0.5},"-=1");
// ch2.from(".logo__img-primary",1,{y:100, opacity: 0, ease:'power2.In',duration:0.5},"-=1"); 


})(jQuery);