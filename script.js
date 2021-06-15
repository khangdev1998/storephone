  /* Demo purposes only */
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

// CAROUSEL
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:30,
  dots: true,
  nav:true,
  navText: ['<i class="fas fa-angle-left nav-menu"></i>', '<i class="fas fa-angle-right nav-menu"></i>'],
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed:1000,
  smartSpeed: 1000,
  autoplayHoverPause: true,
  responsive:{
      0:{
          items:1
      },
      600:{ 
          items:2
      },
      750:{ 
        items:3
      },
      1000:{
          items:4
      }
  }
})

// SCROLL BACK TO TOP 

$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('#scroll').fadeIn(); 
      } else { 
          $('#scroll').fadeOut(); 
      } 
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
});