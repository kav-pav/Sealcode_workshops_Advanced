$(function(){
    $('.button1').on('click', function(){
        $('div').animate({
            left : "+=100px"
        },"slow");
    });
    $('.button2').on('click', function(){
        $('div').animate({
            left: "-=100px"
        },"slow");
    });
});