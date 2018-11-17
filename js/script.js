$(document).ready(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open');
    $('body').toggleClass('open-offcanvas');
  })

  $(".section-for-you .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
  $("a.link-share").popover({
    template: '<div class="popover popover-social" role="tooltip"><div class="arrow"></div><div class="popover-body p-0"></div></div>',
    placement: "top",
    trigger: "focus",
    html: true,
    content: "<ul class='list-inline'><li class='list-inline-item'>แชร์บอกเพื่อน</li><li class='list-inline-item'><a href='#'><i class='fab fa-facebook'></i></a></li><li class='list-inline-item'><a href='#'><i class='fas fa-envelope'></i></a></li><li class='list-inline-item'><a href='#'><i class='fab fa-line'></i></a></li><li class='list-inline-item'><a href='#'><i class='fab fa-instagram'></i></a></li><li class='list-inline-item'><a href='#'><i class='fab fa-twitter'></i></a></li></ul>"
  });

  // Event slide
  $(".event-slide .event-slide-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  // Slick
  $('.card-result .card-img-top').slick({
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        arrows: true,
        dots: false
      }
    }]
  });

  // product-detail-slide
  $(".product-detail-slide").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  // neighborhoods-slide
  $('.neighborhoods-slide').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // collapse
  $('#collapseCalculated').on('show.bs.collapse', function () {
    // do something…
    $('.card-header i').addClass('fa-chevron-up')
    $('.card-header i').removeClass('fa-chevron-down')
  })
  $('#collapseCalculated').on('hide.bs.collapse', function () {
    // do something…
    $('.card-header i').addClass('fa-chevron-down')
    $('.card-header i').removeClass('fa-chevron-up')
  })
});