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
      infinite: true,
      autoplay:true,
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
 
setTimeout(()=>{
  $('html').css('opacity', '1');  
},10)

if($(window).width() >= 992){ 

  ScrollReveal().reveal('.header', {
    delay: 200,
    duration: 400,
    distance: '100px',
    origin: 'top',
    reset: false,
    mobile: false,
  }); 
  ScrollReveal().reveal('.home-banner, .section-banner-0', {
    delay: 300,
    duration: 400,
    distance: '700px',
    origin: 'bottom',
    reset: false,
    mobile: false,
  }); 
  ScrollReveal().reveal('.home-post', {
    delay: 400,
    duration: 600,
    distance: '500px',
    origin: 'right',
    reset: false,
    mobile: false,
  }); 
  ScrollReveal().reveal('.banner-title', {
    delay: 700,
    duration: 600,
    distance: '0', 
    reset: false,
    mobile: false,
  }); 
  ScrollReveal().reveal('.about-left-text', {
    delay: 200,
    duration: 600,
    distance: '300px',
    origin: 'left',
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.left-company-side', {
    delay: 400,
    duration: 600, 
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.about-right-text', {
    delay: 200,
    duration: 600,
    distance: '300px',
    origin: 'right',
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.right-company-side', {
    delay: 500,
    duration: 600, 
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.our-services-section', {
    delay: 500,
    duration: 600,
    distance: '400px',
    origin: 'bottom',
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.our-services-text-box', {
    delay: 800,
    duration: 600,
    distance: '400px',
    origin: 'left',
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.our-slider-box', {
    delay: 900,
    duration: 600, 
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.project-section', {
    delay: 700,
    duration: 700, 
    distance: '100px',
    origin: 'bottom',
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.news-title', {
    delay: 500,
    duration: 500,   
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.news-component-item:nth-child(4n + 1), .news-page-item:nth-child(4n + 1), .project-list-item-01:nth-child(2n - 1)', {
    delay: 400,
    duration: 500, 
    distance: '100px',
    origin: 'bottom',  
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.news-component-item:nth-child(4n + 2), .news-page-item:nth-child(4n + 2), .project-list-item-01', {
    delay: 500,
    duration: 500, 
    distance: '150px',
    origin: 'bottom',  
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.news-component-item:nth-child(4n + 3), .news-page-item:nth-child(4n + 3)', {
    delay: 700,
    duration: 550, 
    distance: '200px',
    origin: 'bottom',  
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.news-component-item:nth-child(4n + 4), .news-page-item:nth-child(4n + 4)', {
    delay: 700,
    duration: 650, 
    distance: '250px',
    origin: 'bottom',  
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.footer-left', {
    delay: 300,
    duration: 350, 
    distance: '250px',
    origin: 'left',  
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.footer-right', {
    delay: 300,
    duration: 350, 
    distance: '250px',
    origin: 'right',  
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.breadcrumb', {
    delay: 300,
    duration: 350, 
    distance: '250px',
    origin: 'left',  
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.about-slider-box, .pagination', {
    delay: 300,
    duration: 350, 
    distance: '150px',
    origin: 'bottom',  
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.o-services-slider-box', {
    delay: 400,
    duration: 550, 
    distance: '250px',
    origin: 'bottom',  
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.n-left-side, .left-contact-form', {
    delay: 400,
    duration: 550, 
    distance: '250px',
    origin: 'left',  
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.n-right-text, .right-contact-info', {
    delay: 400,
    duration: 550, 
    distance: '250px',
    origin: 'right',  
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.service-page-title h1', {
    delay: 200,
    duration: 550, 
    distance: '50px',
    origin: 'bottom',  
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.service-page-title .text-1', {
    delay: 300,
    duration: 550, 
    distance: '50px',
    origin: 'left',  
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.project-filter-box, .search-form', {
    delay: 350,
    duration: 650, 
    distance: '100px',
    origin: 'bottom',  
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.project-detail-title', {
    delay: 350,
    duration: 350, 
    distance: '50px',
    origin: 'bottom',  
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.project-detail-absolute-ilustrator', {
    delay: 650,
    duration: 750,   
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.search-title', {
    delay: 250,
    duration: 250, 
    distance: '50px',
    origin: 'bottom',    
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.search-item, .services-page-box-01', {
    delay: 450,
    duration: 450, 
    distance: '100px',
    origin: 'bottom',    
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.submenu-page', {
    delay: 450,
    duration: 450, 
    distance: '100px',
    origin: 'bottom',    
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.submenu-box', {
    delay: 650,
    duration: 650, 
    distance: '300px',
    origin: 'bottom',    
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.send', {
    delay: 250,
    duration: 250, 
    distance: '50px',
    origin: 'bottom',    
    reset: false,
    mobile: false,
  });
  ScrollReveal().reveal('.map-section', {
    delay: 550,
    duration: 550, 
    distance: '150px',
    origin: 'bottom',    
    reset: false,
    mobile: false,
  });
}
