/* Audero Unified Placeholder 1.0.5 | Aurelio De Rosa (@AurelioDeRosa) | MIT/GPL-3.0 Licensed */
!function(a){"use strict";var b={overrideNative:!1,className:"",style:{color:"#A9A9A9"}},c={init:function(c){return(null===c||void 0===c)&&(c={}),c=a.extend(!0,{},b,c),"placeholder"in document.createElement("input")&&c.overrideNative===!1?void 0:this.filter(function(){return"undefined"!=typeof a(this).attr("placeholder")}).each(function(b,d){var e=a(d),f=e.attr("placeholder");e.attr({"data-audero-unp-text":f,"data-audero-unp-typed":"false"}),e.val(""),e.removeAttr("placeholder"),e.on("focus.auderoUnifiedPlaceholders",function(){var a=this;if(this.value===f)if(this.createTextRange){var b=this.createTextRange();b.move("character",0),b.select()}else this.setSelectionRange&&window.setTimeout(function(){try{if("INPUT"===a.nodeName&&"text"!==a.type){var b=a.type;a.type="text",a.setSelectionRange(0,0),a.type=b}else a.setSelectionRange(0,0)}catch(c){}},1)}).on("keydown.auderoUnifiedPlaceholders",function(){var b=a(this);b.removeClass(c.className);for(var d in c.style)b.css(d,"");b.val()===f&&"false"===b.attr("data-audero-unp-typed")?b.val(""):b.attr("data-audero-unp-typed","true")}).on("keyup.auderoUnifiedPlaceholders",function(){var b=a(this);""===b.val()&&b.trigger("blur.auderoUnifiedPlaceholders").trigger("focus.auderoUnifiedPlaceholders")}).on("blur.auderoUnifiedPlaceholders",function(){var b=a(this);""===b.val()&&b.attr("data-audero-unp-typed","false").val(f).addClass(c.className).css(c.style)}),e.blur()})},enable:function(){return this.each(function(){var b="",c=a(this);if("undefined"!=typeof c.attr("placeholder"))b=c.attr("placeholder");else{if("undefined"==typeof c.attr("data-audero-unp-text"))return;b=c.attr("data-audero-unp-text")}""===c.val()&&c.val(b)})},disable:function(){return this.each(function(){var b="",c=a(this);if("undefined"!=typeof c.attr("placeholder"))b=c.attr("placeholder");else{if("undefined"==typeof c.attr("data-audero-unp-text"))return;b=c.attr("data-audero-unp-text")}c.val()===b&&"false"===c.attr("data-audero-unp-typed")&&c.val("")})},reset:function(){return this.filter(function(){return"undefined"!=typeof a(this).attr("placeholder")||"undefined"!=typeof a(this).attr("data-audero-unp-text")}).val("").trigger("blur.auderoUnifiedPlaceholders")},destroy:function(){return this.trigger("keydown.auderoUnifiedPlaceholders").off("focus.auderoUnifiedPlaceholders keydown.auderoUnifiedPlaceholders blur.auderoUnifiedPlaceholders").each(function(b,c){var d=a(c);"undefined"!=typeof d.attr("data-audero-unp-text")&&"undefined"==typeof d.attr("placeholder")&&d.attr("placeholder",d.attr("data-audero-unp-text")),d.removeAttr("data-audero-unp-text data-audero-unp-typed")})}};a.fn.auderoUnifiedPlaceholders=function(b){return c[b]?c[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("Method "+b+" does not exist on jQuery.auderoUnifiedPlaceholders"):c.init.apply(this,arguments)}}(jQuery);
$(function(){

  var navToggle = function() {
    var navParentLink = $('.product-nav__with-children');
    var navArrowIcon = $('.product-nav--icon-arrow');
    var navChildren = $('.product-nav--children');

    navParentLink.bind('click', function(e){
      e.preventDefault();
      $(this).find(navArrowIcon).toggleClass('is-hidden');
      $(this).find(navArrowIcon).toggleClass('is-visible');
      $(this).parent().find(navChildren).toggleClass('is-active');
    });
  }


  var modal = function() {
    var modal = $('#modal');
    var modalTrigger = $('.modal-trigger');
    var modalClose = $('.modal-close');
    var modalOverlay = $('.modal-overlay');

    modalTrigger.bind('click', function(e){
      e.preventDefault();
      modal.toggleClass('is-active');
    });

    modalOverlay.bind('click', function(e){
      e.preventDefault();
      modal.toggleClass('is-active');
    });

    modalClose.bind('click', function(e){
      e.preventDefault();
      modal.toggleClass('is-active');
    });

  }

  var userAccountLinks = function() {
    var userAccountTrigger = $('.user-account--link');
    var userLinksBubble = $('.user-links');

    userAccountTrigger.on('click', function(e){
      e.preventDefault();
      $(this).parent().find(userLinksBubble).toggleClass('is-hidden');
      $(this).parent().find(userLinksBubble).toggleClass('is-visible');
    });
  }

  var formToolTip = function() {
    var toolTipTrigger = $('.form-item--has-tooltip .icon-info');
    var toolTipContainer = $('.form-tooltip');

    toolTipTrigger.bind('click', function(e){
      e.preventDefault();
      $(this).parent().find(toolTipContainer).toggleClass('is-active');
    });
  }

  $('form input[placeholder]').auderoUnifiedPlaceholders();

  navToggle();
  modal();
  formToolTip();

});