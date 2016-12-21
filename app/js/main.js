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


//-- Owl Carousel
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


//-- Mover menu 2 al 1 en Mobile
var navPrimaryNav = $('#navbar-primary .navbar-nav');
var navSecondaryLi = $('#navbar-secondary .navbar-nav > li');


$(document).on('ready', function(){


if ( xsDevice() ) {

  navPrimaryNav.append( $('#navbar-secondary .navbar-nav > li') );
}


});
