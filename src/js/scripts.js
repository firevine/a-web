$(function(){

  navScroll = function() {
    var navLink = $('.header-nav a, .header-logo a');

    navLink.on('click', function(e) {
      e.preventDefault();
      var windowWidth = $(window).width();
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length && windowWidth >= 900) {
        $('html,body').animate({
          scrollTop: target.offset().top + -72
        }, 1000);
      } else if (target.length && windowWidth <= 900) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  }

  $('form input[placeholder]').auderoUnifiedPlaceholders();

  navScroll();

});