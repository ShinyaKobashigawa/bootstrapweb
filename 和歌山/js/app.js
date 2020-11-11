
$(function(){
    let topBtn = $('.page-top');
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500){
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    $('.page-top').on('click',function(){
    $('body, html').animate({scrollTop:0},500);
    });

    let iconBtn = $('.icon');
    iconBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500){
            iconBtn.fadeIn();
        } else {
            iconBtn.fadeOut();
        }
    });

});