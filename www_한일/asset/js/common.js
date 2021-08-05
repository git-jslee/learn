$(function(){
    // 모바일메뉴
    $('.btn_mob').click(function(){
        $(this).toggleClass('on');
        $('.snb_mob').toggleClass('on');
        $('.bg_black').fadeToggle(300);
        $('.snb_mob .lnb').slideUp(300);
        return false;
    });
    $('.bg_black').click(function(){
        $('.btn_mob, .snb_mob').removeClass('on');
        $('.bg_black').fadeOut(300);
        return false;
    });
    $('.snb_mob .dep1').click(function(){
        if($(this).hasClass('on')){
            slideUp();
        } else {
            slideUp();
            $(this).addClass('on').next().stop().slideDown();
        };
        function slideUp(){
            $('.snb_mob .dep1').removeClass('on').next().stop().slideUp();
        };
        return false;
    });

    //pc 메인메뉴
    $('.gnb .dep1').mouseenter(function(){
        // $('header').addClass('on');
        $('.gnb .lnb').stop().slideUp(200);
        $(this).next('.gnb .lnb').stop().slideDown(200);
    });
    $('header, .gnb .lnb').mouseleave(function(){
        // $('header').removeClass('on');
        $('.gnb .lnb').stop().slideUp(200);
    });

    //pc 사이트맵
    $('.utill .btn_siteMap').click(function(){
        $(this).toggleClass('on');
        $('header').toggleClass('on');
        $('.siteMap').fadeToggle(200);
    });
    $('.siteMap ul li').click(function(){
        $('.siteMap').fadeOut(200);
        $('header, .utill .btn_siteMap').removeClass('on');
    });

    //스크롤 했을 때
    $(window).scroll(function(){
        var st=$(window).scrollTop(); //스크롤 위치
        var bt=$(document).height()-$(window).height();
        if(st>=50){
            $('header, .btn_mob, .siteMap').addClass('scOn');
        }else{
            $('header, .btn_mob, .siteMap').removeClass('scOn');
        };
    });



    // 반응형 스크립트
    $(window).resize(function () {
        var width = $(window).width();
        if (width>1024) {
            
        } else if (width>=768 && width<=1024) {
            
        } else if (width<768) {
            
        }
    });

    $(window).trigger("resize"); //강제로 호출하는 함수
});

//헤더
window.onload = function(){
    const thisLocation = window.location.href;
    const headerSertor = document.querySelector('header');
    if(thisLocation.match('index.php')){
      
    }else{
      headerSertor.classList.add("sub");
    }
};