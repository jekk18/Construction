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
 
$(document).ready(function() { 
    $('.open-icon').click(function() {   
      $('.burger-menu').css( "display", "flex" ); 
  });

  $('.close-icon').click(function() {   
    $('.burger-menu').css( "display", "none" );
  });
});

$(document).ready(function() {
  $(document).mouseup(function(event) {
    var burgerMenu = $('.burger-menu'); 
    if (!burgerMenu.is(event.target) && !burgerMenu.has(event.target).length) {
      burgerMenu.hide();  
    }
  });
});
 
$(document).ready(function() { 
  var clonedMenu = $(".nav-ul").clone(); 
  clonedMenu.find('li').removeClass('active-menu');

  $(".burger-list").append(clonedMenu);

  clonedMenu.find('li').each(function() {
    if ($(this).children('.submenu').length > 0) {
      $(this).addClass('submenuArrow');
      $(this).append(`<div class="arrow-burger-list"></div>`);
    }
  });
});
$(document).ready(function() {
  $('.arrow-burger-list').click(function() { 
    $(this).closest('.nav-li').toggleClass('activeToggle'); 
    $('.nav-li').not($(this).closest('.nav-li')).removeClass('activeToggle');
  });
});
 

