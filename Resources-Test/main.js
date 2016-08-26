function supportsSVG() {
    return !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;  
}
if (!supportsSVG()) {
    
    $('.logo').css("background-image", "url(http://www.tinyfootprintcoffee.com/wp-content/uploads/2013/08/tiny-footprint-coffee-logo.png)");
}

$(document).ready(function() {
    if( navigator.appVersion.indexOf("MSIE 9") !== -1 ) {
        $('html').addClass('isIE9');
        //APP.Features.isIE9 = true;
        //return;
    }
    if( navigator.appVersion.indexOf("MSIE 8") !== -1 ) {
        $('html').addClass('isIE8');
    }
});
/* General Pinbin Functions
================================================== */

// masonry customization
jQuery(document).ready(function($) {
  $('#post-area').masonry({
    // options...
  isAnimated: true,
  animationOptions: {
    duration: 400,
    easing: 'linear',
    queue: false
  }
  });
});

$(document).ready(function() {

    $('.js-toggleMenu').click(function() {
       if( $('.menuSidebar').hasClass('isOpen') ) {
         $('.menuSidebar').removeClass('isOpen');
         $('body').removeClass('menuIsOpen');
       } else {
         $('.menuSidebar').addClass('isOpen');
         $('body').addClass('menuIsOpen');
       }
    });

    $('a[href=#top]').click(function() {
    $('html, body').animate({scrollTop:0}, 'slow');
    return false; 
    });

    $('#toTop').hide(0);
    $(document).scroll(function() {
        var top = $(document).scrollTop();
        if (top < 400) $('#toTop').hide(500);
        if (top > 400) $('#toTop').show(500);
    });

});


/* --------------------------------------------------------------------
Simple Modal
-------------------------------------------------------------------- */


function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function showModal() {
  tb_show('Important message','#TB_inline?height=300&width=450&inlineId=promo',false);
}

var visited = readCookie('mypopup');

/*if (!visited) {
  $(document).ready(function(){
    $('.modal').addClass('isOpen');
    $('body').addClass('modalIsOpen');

    $('.js-closeModal').on('click touchstart:not(touchmove)', function() {
        $('.modal').removeClass('isOpen');
        $('body').removeClass('modalIsOpen');
    });
    createCookie('mypopup','no',0);
  });
}*/

