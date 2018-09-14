$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
          $('body').addClass('change_image')
       }
       if ($(this).scrollTop() < 50) {
          $('body').removeClass('change_image')
       }
    });
 });