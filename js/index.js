
$(document).ready(function(){

    $('.collection').click(function() {
        $('.collection').css('color','black');
        $('.collection').css('background-color','white');
    });

    $('#switch-fr').click(function() {
        $('.en').hide();
        $('.fr').fadeIn(500);
        $('#switch-fr').css('font-weight','bold')
        $('#switch-en').css('font-weight','normal')
    });

    $('#switch-en').click(function() {
        $('.fr').hide();
        $('.en').fadeIn(500);
        $('#switch-en').css('font-weight','bold')
        $('#switch-fr').css('font-weight','normal')
    });

    $('.brand-philosophy').css('min-height',$( window ).height()-100);


    checkDivVisibility();
});


$(window).scroll(function () {
    checkDivVisibility();
});

function checkDivVisibility() {
        $('.row').each(function(){
        var pos = $(this).offset(),
            wX = $(window).scrollLeft(), wY = $(window).scrollTop(),
            wH = $(window).height(), wW = $(window).width(),
            oH = $(this).outerHeight(), oW = $(this).outerWidth();


        var fadeDelay = 400;
        // check the edges
        if (pos.left >= wX && pos.top >= wY &&
            oW + pos.left <= wX + wW && oH + pos.top <= wY + wH )
            {
                $(this).children( '.first' ).fadeIn(1000);
                $(this).children('.second').delay(1000).fadeIn(1000);
            }
        else
        if (((pos.left <= wX && pos.left + oW > wX) ||
            (pos.left >= wX && pos.left <= wX + wW)) &&
            ((pos.top <= wY && pos.top + oH > wY)   ||
                (pos.top  >= wY && pos.top  <= wY + wH)))
            {
                $(this).children( '.first' ).fadeIn(400);
                $(this).children('.second').delay(1000).fadeIn(400);
            }
        /*else{
            $(this).children().hide();
        }*/
    });
}