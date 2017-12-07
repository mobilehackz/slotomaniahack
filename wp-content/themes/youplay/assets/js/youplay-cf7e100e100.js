/*
  Bootstrap - File Input
  ======================

  This is meant to convert all file input tags into a set of elements that displays consistently in all browsers.

  Converts all
  <input type="file">
  into Bootstrap buttons
  <a class="btn">Browse</a>

*/
(function($) {

$.fn.bootstrapFileInput = function() {

  this.each(function(i,elem){

    var $elem = $(elem);

    // Maybe some fields don't need to be standardized.
    if (typeof $elem.attr('data-bfi-disabled') != 'undefined') {
      return;
    }

    // Set the word to be displayed on the button
    var buttonWord = 'Browse';

    if (typeof $elem.attr('title') != 'undefined') {
      buttonWord = $elem.attr('title');
    }

    var className = '';

    if (!!$elem.attr('class')) {
      className = ' ' + $elem.attr('class');
    }

    // Now we're going to wrap that input field with a Bootstrap button.
    // The input will actually still be there, it will just be float above and transparent (done with the CSS).
    $elem.wrap('<a class="file-input-wrapper btn btn-default ' + className + '"></a>').parent().prepend($('<span></span>').html(buttonWord));
  })

  // After we have found all of the file inputs let's apply a listener for tracking the mouse movement.
  // This is important because the in order to give the illusion that this is a button in FF we actually need to move the button from the file input under the cursor. Ugh.
  .promise().done( function(){

    // As the cursor moves over our new Bootstrap button we need to adjust the position of the invisible file input Browse button to be under the cursor.
    // This gives us the pointer cursor that FF denies us
    $('.file-input-wrapper').mousemove(function(cursor) {

      var input, wrapper,
        wrapperX, wrapperY,
        inputWidth, inputHeight,
        cursorX, cursorY;

      // This wrapper element (the button surround this file input)
      wrapper = $(this);
      // The invisible file input element
      input = wrapper.find("input");
      // The left-most position of the wrapper
      wrapperX = wrapper.offset().left;
      // The top-most position of the wrapper
      wrapperY = wrapper.offset().top;
      // The with of the browsers input field
      inputWidth= input.width();
      // The height of the browsers input field
      inputHeight= input.height();
      //The position of the cursor in the wrapper
      cursorX = cursor.pageX;
      cursorY = cursor.pageY;

      //The positions we are to move the invisible file input
      // The 20 at the end is an arbitrary number of pixels that we can shift the input such that cursor is not pointing at the end of the Browse button but somewhere nearer the middle
      moveInputX = cursorX - wrapperX - inputWidth + 20;
      // Slides the invisible input Browse button to be positioned middle under the cursor
      moveInputY = cursorY- wrapperY - (inputHeight/2);

      // Apply the positioning styles to actually move the invisible file input
      input.css({
        left:moveInputX,
        top:moveInputY
      });
    });

    $('body').on('change', '.file-input-wrapper input[type=file]', function(){

      var fileName;
      fileName = $(this).val();

      // Remove any previous file names
      $(this).parent().next('.file-input-name').remove();
      if (!!$(this).prop('files') && $(this).prop('files').length > 1) {
        fileName = $(this)[0].files.length+' files';
      }
      else {
        fileName = fileName.substring(fileName.lastIndexOf('\\') + 1, fileName.length);
      }

      // Don't try to show the name if there is none
      if (!fileName) {
        return;
      }

      var selectedFileNamePlacement = $(this).data('filename-placement');
      if (selectedFileNamePlacement === 'inside') {
        // Print the fileName inside
        $(this).siblings('span').html(fileName);
        $(this).attr('title', fileName);
      } else {
        // Print the fileName aside (right after the the button)
        $(this).parent().after('<span class="file-input-name">'+fileName+'</span>');
      }
    });

  });

};

// Add the styles before the first stylesheet
// This ensures they can be easily overridden with developer styles
var cssHtml = '<style>'+
  '.file-input-wrapper { overflow: hidden; position: relative; margin-left: 0px !important; cursor: pointer; z-index: 1; }'+
  '.file-input-wrapper input[type=file], .file-input-wrapper input[type=file]:focus, .file-input-wrapper input[type=file]:hover { position: absolute; top: 0; left: 0; cursor: pointer; opacity: 0; filter: alpha(opacity=0); z-index: 99; outline: 0; }'+
  '.file-input-name { margin-left: 8px; }'+
  '.file-input-wrapper:before {margin-left: 5px; margin-right: 5px;}'+

  // some youplay styles
  '.youplay-checkbox.wpcf7-youplay-checkbox input[type=checkbox]+label:after {left: 0;}'+
  '.youplay-radio.wpcf7-youplay-radio input[type=radio]+label:after {left: 0;}'+
  '.youplay-checkbox.wpcf7-youplay-checkbox input[type=checkbox]+label:before {left: 4px;}'+
  '.youplay-radio.wpcf7-youplay-radio input[type=radio]+label:before {left: 7px;}'+
  '.wpcf7-form {padding-left: 0.5em;}'+
  '.wpcf7-list-item.first {margin-left: 0;}'+
  '.wpcf7-submit {margin-left: 5px !important;}'+
  '.youplay-input.has-error:after, .youplay-textarea.has-error:after {background: rgba(255, 42, 42, 0.25);}'+
  '.wpcf7-response-output.alert {border: none; padding: 15px;}'+
  '</style>';
$('link[rel=stylesheet]').eq(0).before(cssHtml);

})(jQuery);



/* Some corrections for Contact Form plugin (change form inputs styles) */
!function( $ ) {
    "use strict"

  var $window = $(window);
  var uniqID = 734;

  // all inputs
  var $input = $('input.wpcf7-text, input.wpcf7-number, input.wpcf7-date, input.wpcf7-quiz');
  var $textarea = $('textarea.wpcf7-textarea');
  var $select = $('select.wpcf7-select');
  var $checkbox_radio = $('.wpcf7-checkbox [type=checkbox], input.wpcf7-acceptance, .wpcf7-radio [type=radio]');
  var $file = $('input.wpcf7-file');
  var $submit = $('input.wpcf7-submit');

  // set youplay styles
  $input.each(function() {
    var $parent = $(this).parent('.wpcf7-form-control-wrap');
    if(!$parent.length) {
        $parent = $(this).wrap('<div>').parent();
    }
    $parent.css('display', 'inline-block').addClass('youplay-input');
  })

  $textarea.each(function() {
    var $parent = $(this).parent('.wpcf7-form-control-wrap');
    $parent.css('display', 'inline-block').addClass('youplay-textarea');
  })

  $select.each(function() {
    var $parent = $(this).parent('.wpcf7-form-control-wrap');
    $parent.css({
        display: 'inline-block',
        width: 'auto'
    }).addClass('youplay-select');
  })

  $checkbox_radio.each(function() {
    var is = $(this).is('[type=checkbox]')?'checkbox':'radio';
    var id = ++uniqID;
    var text = $(this).next('span').html() || '&nbsp;';
    var label = $('<label>')
    $(this).next('span').remove();
    $(this).parent().addClass('youplay-' + is + ' wpcf7-youplay-' + is);
    $(this).attr('id', 'youplay-' + is + '-id' + id);
    label.insertAfter(this).attr('for', 'youplay-' + is + '-id' + id).html(text);
  })

  $file.bootstrapFileInput();

  $submit.each(function() {
    var className = $(this).attr('class') + ' btn';
    if(!/btn-/g.test(className)) {
      className += ' btn-default';
    }
    $(this).after('<button type="submit" class="' + className + '">' + $(this).val() + '</button>')
    $(this).remove();
  })


    // add Bootstrap Alert classes to response output
    $( function() {
        $( 'div.wpcf7' ).on( 'invalid.wpcf7', function() {
            $( this ).find( 'div.wpcf7-response-output' ).addClass('alert alert-warning' );
        });
        $( 'div.wpcf7' ).on( 'spam.wpcf7', function() {
            $( this ).find( 'div.wpcf7-response-output' ).addClass('alert alert-warning' );
        });
        $( 'div.wpcf7' ).on( 'mailsent.wpcf7', function() {
            $( this ).find( 'div.wpcf7-response-output' ).addClass('alert alert-success' );
        });
        $( 'div.wpcf7' ).on( 'mailfailed.wpcf7', function() {
            $( this ).find( 'div.wpcf7-response-output' ).addClass('alert alert-danger' );
        });
    });

    // WPCF7 Function Override: Adjusted for Bootstrap Help Block Output and Status Class
    $.fn.wpcf7NotValidTip = function( message ) {
        return this.each( function() {
            var $into = $( this );
            $into.addClass( 'has-error' );
            $into.find( 'span.wpcf7-not-valid-tip' ).remove();
            $into.before( '<span class="help-block wpcf7-not-valid-tip">' + message + '</span>' );
            $into.slideDown( 'fast' );

            if ( $into.is( '.use-floating-validation-tip *' ) ) {
                $( '.wpcf7-not-valid-tip', $into ).mouseover( function() {
                    $( this ).wpcf7FadeOut();
                });

                $( ':input', $into ).focus( function() {
                    $( '.wpcf7-not-valid-tip', $into ).not( ':hidden' ).wpcf7FadeOut();
                });
            }
        });
    };

    // WPCF7 Function Override: Different DOM Element is required
    $.fn.wpcf7RefillQuiz = function( quiz ) {
        return this.each( function() {
            var form = $( this );

            $.each( quiz, function( i, n ) {
                form.find( ':input[name="' + i + '"]' ).clearFields();
                form.find( ':input[name="' + i + '"]' ).siblings( 'p.wpcf7-quiz-label' ).text( n[0] );
                form.find( 'input:hidden[name="_wpcf7_quiz_answer_' + i + '"]' ).attr( 'value', n[1] );
            });
        });
    };

    // WPCF7 Function Override: Adjusted for Bootstrap Alert classes and Status Class
    $.fn.wpcf7ClearResponseOutput = function() {
        return this.each(function() {
            $( this ).find( 'div.alert' ).hide().empty().removeClass( 'wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked alert-warning alert-success alert-danger' ).removeAttr( 'role' );
            $( this ).find( '.has-error' ).removeClass( 'has-error' );
            $( this ).find( 'span.wpcf7-not-valid-tip' ).remove();
            $( this ).find( 'img.ajax-loader' ).css({ visibility: 'hidden' });
        });
    };
}( jQuery );