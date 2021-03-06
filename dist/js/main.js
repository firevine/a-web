/* Audero Unified Placeholder 1.0.5 | Aurelio De Rosa (@AurelioDeRosa) | MIT/GPL-3.0 Licensed */
!function(a){"use strict";var b={overrideNative:!1,className:"",style:{color:"#A9A9A9"}},c={init:function(c){return(null===c||void 0===c)&&(c={}),c=a.extend(!0,{},b,c),"placeholder"in document.createElement("input")&&c.overrideNative===!1?void 0:this.filter(function(){return"undefined"!=typeof a(this).attr("placeholder")}).each(function(b,d){var e=a(d),f=e.attr("placeholder");e.attr({"data-audero-unp-text":f,"data-audero-unp-typed":"false"}),e.val(""),e.removeAttr("placeholder"),e.on("focus.auderoUnifiedPlaceholders",function(){var a=this;if(this.value===f)if(this.createTextRange){var b=this.createTextRange();b.move("character",0),b.select()}else this.setSelectionRange&&window.setTimeout(function(){try{if("INPUT"===a.nodeName&&"text"!==a.type){var b=a.type;a.type="text",a.setSelectionRange(0,0),a.type=b}else a.setSelectionRange(0,0)}catch(c){}},1)}).on("keydown.auderoUnifiedPlaceholders",function(){var b=a(this);b.removeClass(c.className);for(var d in c.style)b.css(d,"");b.val()===f&&"false"===b.attr("data-audero-unp-typed")?b.val(""):b.attr("data-audero-unp-typed","true")}).on("keyup.auderoUnifiedPlaceholders",function(){var b=a(this);""===b.val()&&b.trigger("blur.auderoUnifiedPlaceholders").trigger("focus.auderoUnifiedPlaceholders")}).on("blur.auderoUnifiedPlaceholders",function(){var b=a(this);""===b.val()&&b.attr("data-audero-unp-typed","false").val(f).addClass(c.className).css(c.style)}),e.blur()})},enable:function(){return this.each(function(){var b="",c=a(this);if("undefined"!=typeof c.attr("placeholder"))b=c.attr("placeholder");else{if("undefined"==typeof c.attr("data-audero-unp-text"))return;b=c.attr("data-audero-unp-text")}""===c.val()&&c.val(b)})},disable:function(){return this.each(function(){var b="",c=a(this);if("undefined"!=typeof c.attr("placeholder"))b=c.attr("placeholder");else{if("undefined"==typeof c.attr("data-audero-unp-text"))return;b=c.attr("data-audero-unp-text")}c.val()===b&&"false"===c.attr("data-audero-unp-typed")&&c.val("")})},reset:function(){return this.filter(function(){return"undefined"!=typeof a(this).attr("placeholder")||"undefined"!=typeof a(this).attr("data-audero-unp-text")}).val("").trigger("blur.auderoUnifiedPlaceholders")},destroy:function(){return this.trigger("keydown.auderoUnifiedPlaceholders").off("focus.auderoUnifiedPlaceholders keydown.auderoUnifiedPlaceholders blur.auderoUnifiedPlaceholders").each(function(b,c){var d=a(c);"undefined"!=typeof d.attr("data-audero-unp-text")&&"undefined"==typeof d.attr("placeholder")&&d.attr("placeholder",d.attr("data-audero-unp-text")),d.removeAttr("data-audero-unp-text data-audero-unp-typed")})}};a.fn.auderoUnifiedPlaceholders=function(b){return c[b]?c[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("Method "+b+" does not exist on jQuery.auderoUnifiedPlaceholders"):c.init.apply(this,arguments)}}(jQuery);
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