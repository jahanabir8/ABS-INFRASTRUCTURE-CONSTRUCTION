// mobile menu 
$(".menu__section .menu__bar").click(function(){
    $(".mobile__menu").toggleClass("open");
  })

  $(".drop__resource").click(function(){
    //   alert("hello")
    $(".dropdown__resource").slideToggle("slow");
   
  });

  $(window).scroll(function(){
    // sticky navbar on scroll script
    if(this.scrollY > 20){
        $('.mobile__menu').addClass("open__up");
    }else{
        $('.mobile__menu').removeClass("open__up");
    }
   
});

  

// header bar
$(window).scroll(function(){
    // sticky navbar on scroll script
    if(this.scrollY > 20){
        $('.menu__section').addClass("sticky");
    }else{
        $('.menu__section').removeClass("sticky");
    }
    
    // scroll-up button start
    if(this.scrollY > 500){
        $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
    }
});

$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
  });
//   scroll-up button end



// slider area

function mainSlider() {
    var BasicSlider = $('.slider-active');

    BasicSlider.on('init', function (e, slick) {
        var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    });

    BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });

    BasicSlider.slick({
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        fade: true,
        arrows: false,
        responsive: [
            { breakpoint: 767, settings: { dots: false, arrows: false } }
        ]
    });

    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function () {
                $this.removeClass($animationType);
            });
        });
    }
}
mainSlider();

// accordion section start here
$(document).ready(function(){

    $(".accordion__display__one").click(function(){
        $(".accordion__hidden__one").toggle("slow");
        $("#firsticon__for__one").toggleClass('fa-long-arrow-alt-up');
    })

    $(".accordion__display__two").click(function(){
        $(".accordion__hidden__two").toggle("slow");
        $("#firstsicon__for__two").toggleClass('fa-long-arrow-alt-up');
    })

    $(".accordion__display__three").click(function(){
        $(".accordion__hidden__three").toggle("slow");
        $("#firstsicon__for__three").toggleClass('fa-long-arrow-alt-up');

    })

    $(".accordion__display__four").click(function(){
        $(".accordion__hidden__four").toggle("slow");
        $("#firstsicon__for__four").toggleClass('fa-long-arrow-alt-up');

    })

    $(".accordion__display__five").click(function(){
        $(".accordion__hidden__five").toggle("slow");
        $("#firstsicon__for__five").toggleClass('fa-long-arrow-alt-up');

    })

    $(".accordion__display__six").click(function(){
        $(".accordion__hidden__six").toggle("slow");
        $("#firstsicon__for__six").toggleClass('fa-long-arrow-alt-up');

    })

})
// accordion section end 

//   client section start
var swiper = new Swiper(".mySwiper.first", {
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }
  });

  var swiper = new Swiper(".mySwiper.second", {
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    }, 
    breakpoints: {
        992: {
            slidesPerView: 4,
        },
        576: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 2,
        },
    },
  });



//   gallery page start here
$('.gallerys').magnificPopup({
    type:'image',
    delegate: 'a',
    gallery: {
      enabled: true
    },
  });
//   gallery page end here