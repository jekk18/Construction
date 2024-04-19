$(document).ready(function(){ 
    $('.home-banner-slider').slick({  
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        arrows: false,
        dots: false,
    });
    $('.our-services-slider').slick({
        infinite: true, 
        slidesToShow: 5,
        slidesToScroll: 2,   
        variableWidth: true,
        dots: false,
        arrows: true, 
        prevArrow: $('#prev-arrow'),
        nextArrow: $('#next-arrow'),
          responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,  
                arrows: false,   
              }
            },
            {
              breakpoint: 1200,
              settings: {
                arrows: false, 
                slidesToShow: 2
              }
            },
            {
              breakpoint: 991,
              settings: {
                arrows: false, 
                slidesToShow: 3
              }
            },
            {
              breakpoint: 574,
              settings: {
                arrows: false, 
                slidesToShow: 1,
                slidesToScroll: 1,  
              }
            }
          ]  
      });
      $('.project-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        // centerMode: true,
        variableWidth: true
      });
  });

  



$(document).ready(function() {
    $('.search-btn').click(function() {
        $('.search').toggleClass('search-active');
    });
});
$(document).ready(function() { 
    const targetElement = $('.header');
    const toggleClassName = 'active-header';
 
    $(window).on('scroll', function() { 
        if (window.scrollY > 5) { 
            targetElement.toggleClass(toggleClassName, true);
        } else { 
            targetElement.toggleClass(toggleClassName, false);
        }
    });
});

