
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

    var MyLatLng = new google.maps.LatLng(35.6811673, 139.7670516);
    var Options = {
        zoom: 15,      //地図の縮尺値
        center: MyLatLng,    //地図の中心座標
        mapTypeId: 'roadmap'   //地図の種類
    };
    var map = new google.maps.Map(document.getElementById('map'), Options);
});

