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

  navToggle();
  modal();
  formToolTip();

});