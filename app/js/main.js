var viewportWidth = $(window).width();
//-- Comprobacion si es mobile
function xsDevice() {
    if (viewportWidth <= 480) {
        return true;
    }
}

//-- Alto de Imagen a la seccion
// function heightToSection(sectionId) {
//   var sectionBgImage = $(sectionId + ' .bg-image').height();
//   console.log(sectionBgImage);
//       if (!xsDevice()) {
//         $(sectionId).css('height', sectionBgImage + 'px');
//       }
// }

//
//
// heightToSection('#puertas');
// heightToSection('#panama');
$(document).on('ready', function(){
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:1
          }
      }
  });
});
