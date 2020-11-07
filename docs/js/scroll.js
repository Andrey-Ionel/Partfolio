$.fn.scrollBottom = function(scroll){
  if(typeof scroll === 'number'){
    window.scrollTop(0,$(document).height() - $(window).height() - scroll);
    return $(document).height() - $(window).height() - scroll;
  } else {
    return $(document).height() - $(window).height() - $(window).scrollTop();
  }
}

$(window).scroll(function(){
if($(window).scrollBottom()<250){
    $('#scroll-h').css({opacity: 0}
    );
} else {
            $('#scroll-h').css({opacity: 1}
    );

        }

})

$(window).scroll(function(){
if($(window).scrollBottom()<90){
    $('.up').css({opacity: 1}
    );
} else {
            $('.up').css({opacity: 0}
    );

        }

})

$(window).scroll(function(){
if($(window).scrollBottom()<1400 && $(window).scrollBottom()>500){
      $('.projects-text').css({opacity: 1}
    );
}
else {
            $('.projects-text').css({opacity: 0}
    );

        }

})