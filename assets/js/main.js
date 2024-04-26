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
              slidesToShow: 3,
              slidesToScroll: 1
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
        variableWidth: true,
        arrows: true, 
        prevArrow: $('#prev-project'),
        nextArrow: $('#next-project'),
        responsive: [
          {
            breakpoint: 1620,
            settings: {   
            variableWidth: false, 
            }
          }
        ]
      });
      $('.about-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1, 
        variableWidth: true,
        arrows: false,  
      });
      $('.o-services-slider').slick({
        infinite: false, 
        slidesToShow: 4,
        slidesToScroll: 2,    
        dots: false,
        arrows: true, 
        prevArrow: $('#prev'),
        nextArrow: $('#next'),
          responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,   
              }
            },
            {
              breakpoint: 1420,
              settings: {
                arrows: false, 
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 991,
              settings: {
                arrows: false, 
                slidesToShow: 2,
                slidesToScroll: 1
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
  });

  $(document).ready(function() { 
    $('.count h4').each(function () { 
      var h4Text = $(this).text();
      var number = h4Text.match(/\d+/)[0];
      var char = h4Text.match(/\D+/)[0];
        var countValue = parseInt(number);  
         
        $(this).prop('Counter', 0).animate({
            Counter: countValue
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now) + char);
            }
        });
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

