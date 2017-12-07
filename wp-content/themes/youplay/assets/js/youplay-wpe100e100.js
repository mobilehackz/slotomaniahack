!function( $ ) {
  var $window = $(window);

  // fix for full height banners
  var $banners = $('.youplay-banner.full');

  function resizeBanners() {
    $banners.css('height', $window.height());
  }
  resizeBanners();
  $window.on('resize', resizeBanners);

  // fix widgets area select bars
  $('.side-block select').each(function() {
    $(this).wrap('<div class="youplay-select">');
  });
  // fix widget area rss
  $('.widget_rss cite, .widget_rss .rss-date').addClass('date');


  // update navbar products count
  $(document.body).on('added_to_cart', function(e, a) {
    var count = parseInt($(a['div.widget_shopping_cart_content']).find('.cart_contents_count').text()) || 0;
    var $count = $('.nav_products_count');

    $count[count?'show':'hide']();
    $count.html(count);
  });


  /* fix BuddyPress alerts */
  $('.bp-template-notice, #message').each(function() {
    var $alert = $(this);
    $alert.addClass('alert');
    $alert.attr('id', '');

    if($alert.hasClass('updated')) {
      $alert.addClass('alert-success');
      $alert.removeClass('updated');
    } else if ($alert.hasClass('warning')) {
      $alert.addClass('alert-warning');
      $alert.removeClass('warning');
    } else if ($alert.hasClass('error')) {
      $alert.addClass('alert-danger');
      $alert.removeClass('error');
    } else if ($alert.hasClass('info')) {
      $alert.addClass('alert-info');
      $alert.removeClass('info');
    }

    $alert.children('p').addClass('m-0');
  });

}( jQuery );


/* BuddyPress autocomplete */
/*!
 * jQuery plugin: autoCompletefb(AutoComplete Facebook)
 * @requires jQuery v1.2.2 or later
 * using plugin:jquery.autocomplete.js
 *
 * Credits:
 * - Idea: Facebook
 * - Guillermo Rauch: Original MooTools script
 * - InteRiders <http://interiders.com/>
 *
 * Copyright (c) 2008 Widi Harsojo <wharsojo@gmail.com>, http://wharsojo.wordpress.com/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
jQuery.fn.autoCompletefb = function(options)
{
  var tmp = this;
  var settings =
  {
    ul         : tmp,
    urlLookup  : [""],
    acOptions  : {},
    foundClass : ".friend-tab",
    inputClass : ".send-to-input"
  }

  if(options) jQuery.extend(settings, options);

  var acfb =
  {
    params  : settings,
    removeFind : function(o){
      acfb.removeUsername(o);
      jQuery(o).unbind('click').parent().remove();
      jQuery(settings.inputClass,tmp).focus();
      return tmp.acfb;
    },
    removeUsername: function(o){
      var newID = o.parentNode.id.substr( o.parentNode.id.indexOf('-')+1 );
      jQuery('#send-to-usernames').removeClass(newID);
    }
  }

  jQuery(settings.foundClass+" img.p").click(function(){
    acfb.removeFind(this);
  });

  jQuery(settings.inputClass,tmp).autocomplete(settings.urlLookup,settings.acOptions);
  jQuery(settings.inputClass,tmp).result(function(e,d,f){
    var f = settings.foundClass.replace(/\./,'');
    var d = String(d).split(' (');
    var un = d[1].substr(0, d[1].length-1);
    
    /* Don't add the same user multiple times */
    if( 0 === jQuery('#un-' + un, tmp).length ) {    
      var ln = '#link-' + un;
      var l = jQuery(ln).attr('href');
      var v = jQuery('<li class="'+f+'" id="un-'+un+'"><span><a href="'+l+'">'+d[0]+'</a></span> <span class="p">X</span></li>');
      
      jQuery(settings.inputClass,tmp).parents('li:eq(0)').before(v);
      jQuery('#send-to-usernames').addClass(un);
      
      jQuery('.p',v).click(function(){
        acfb.removeFind(this);
      });
    } 
      
    jQuery(settings.inputClass,tmp).val('');

  });

  jQuery(settings.inputClass,tmp).focus();
  return acfb;
}