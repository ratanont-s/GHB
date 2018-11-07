$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
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
  $('a.link-share').popover({
    template: '<div class="popover popover-social" role="tooltip"><div class="arrow"></div><div class="popover-body p-0"></div></div>',
    placement: 'top',
    trigger: 'focus',
    html: true,
    content: "<ul class='list-inline'><li class='list-inline-item'>แชร์บอกเพื่อน</li><li class='list-inline-item'><a href='#'><i class='fab fa-facebook'></i></a></li><li class='list-inline-item'><a href='#'><i class='fas fa-envelope'></i></a></li><li class='list-inline-item'><a href='#'><i class='fab fa-line'></i></a></li><li class='list-inline-item'><a href='#'><i class='fab fa-instagram'></i></a></li><li class='list-inline-item'><a href='#'><i class='fab fa-twitter'></i></a></li></ul>"
  });
});