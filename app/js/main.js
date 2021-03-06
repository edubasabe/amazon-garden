var viewportWidth = $(window).width();

//-- Comprobacion si es mobile
function xsDevice() {
    if (viewportWidth <= 767) {
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
  $('#owl-testimonios').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });


  $('#owl-instalaciones').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
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
var nav5thLi = $('#navbar-primary .navbar-nav li:nth-child(5)');

$(document).on('ready', function(){


if ( xsDevice() ) {

  navPrimaryNav.append( $('#navbar-secondary .navbar-nav > li') );
  $('#navbar-primary .navbar-nav li:nth-child(5)').html('<hr>');
  $('.navbar-secondary').append( $('#navbar-primary button.btn.btn-primary') );

}


});
