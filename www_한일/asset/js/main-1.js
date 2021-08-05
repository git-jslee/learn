$(function () {
    //메인슬라이드
    var mainSlider = new Swiper(".mainSlider", {
        loop: true,
        autoplay: true,
        speed: 2000,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar"
        },
        
    });

    // product,equipment 슬라이드
    $('.slide4').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });


    // 반응형 스크립트
    // $(window).resize(function () {
    //     var width = $(window).width();
    //     if (width>1024) {
    //         $('.tab_pd li').click(function(){
    //             var i = $(this).index();
    //             $(this).addClass('on').siblings().removeClass('on');
    //             $('.products .pannel_pd_pc > div').eq(i).addClass('on').siblings().removeClass('on');
    //             return false;
    //         });
    //         $('.tab_eq li').click(function(){
    //             var i = $(this).index();
    //             $(this).addClass('on').siblings().removeClass('on');
    //             $('.equipment .pannel_eq_pc > div').eq(i).addClass('on').siblings().removeClass('on');
    //             return false;
    //         });
    //     } else if (width>=768 && width<=1024) {
    //         $('.tab_pd li').click(function(){
    //             var i = $(this).index();
    //             $(this).addClass('on').siblings().removeClass('on');
    //             $('.pannel_pd_mob > div').eq(i).addClass('on').siblings().removeClass('on');
    //             return false;
    //         });
    //         $('.tab_eq li').click(function(){
    //             var i = $(this).index();
    //             $(this).addClass('on').siblings().removeClass('on');
    //             $('.pannel_eq_mob > div').eq(i).addClass('on').siblings().removeClass('on');
    //             return false;
    //         });
    //     } else if (width<768) {
    //         $('.tab_pd li').click(function(){
    //             var i = $(this).index();
    //             $(this).addClass('on').siblings().removeClass('on');
    //             $('.pannel_pd_mob > div').eq(i).addClass('on').siblings().removeClass('on');
    //             return false;
    //         });
    //         $('.tab_eq li').click(function(){
    //             var i = $(this).index();
    //             $(this).addClass('on').siblings().removeClass('on');
    //             $('.pannel_eq_mob > div').eq(i).addClass('on').siblings().removeClass('on');
    //             return false;
    //         });
    //     };
    // });

    $(window).trigger("resize"); //강제로 호출하는 함수

    
    // 메인페이지 각 아이템 마우스 오버시 박스 슬라이딩
    $(".wrap_notice .bundle").bind('mouseenter mouseleave', function(e) {
        var pageX = e.offsetX;
        var pageY = e.offsetY;
        var itemWn = (pageX * 100) / $(this).width();
        var itemHn = (pageY * 100) / $(this).height();
        var posX;
        var posY;
        var wSize = $(window).width();
        
        if(wSize>480) {
        if(e.type === 'mouseenter') {
            if(itemHn < itemWn) {
            if(itemWn > 90) {
            posX = 100;
            posY = 0;
            } else {
            posX = 0;
            posY = -100;
            }
            } else if (itemWn < itemHn) {
            if(itemHn > 90) {
            posX = 0;
            posY = 100;
            } else {
            posX = -100;
            posY = 0;
            }
            }
            $(this).find('.des').css({top:posY+'%', left:posX+'%'});
            $(this).find('.des').stop(true,true).animate({top:0, left:0}, 300);
        } else {
            if(itemHn < itemWn) {
            if(itemWn > 90) {
            posX = 100;
            posY = 0;
            } else {
            posX = 0;
            posY = -100;
            }
            } else if(itemWn < itemHn) {
            if(itemHn > 90) {
            posX = 0;
            posY = 100;
            } else {
            posX = -100;
            posY = 0;
            }
            }
            $(this).find('.des').stop(true,false).animate({top:posY+'%', left:posX+'%'}, 300);
        }
        } else {
            $(this).find('.des').css({top:'-100%', left:'-100%'});
        }
    });
    
    // .btn_top
    $(".btn_top").click(function(){
        $("body, html").animate({
            scrollTop: 0
        },500);
        return false;
    });

    //중력주조품
    $('.tab_gravity li').click(function(){
        var i = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.pannel_gravity .gravity_wrap').eq(i).addClass('on').siblings().removeClass('on');
        return false;
    });

    //생산설비
    $('.kind_pd .tab_wrap li').click(function(){
        var i = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.kind_pd .pannel_wrap .inner > div').eq(i).addClass('on').siblings().removeClass('on');
        return false;
    });
    $('.production .pannel_wrap .slide ul').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
    $('.measuring .pannel_wrap .slide ul').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
    //문의하기-상세보기
    $('.agBtn').click(function(){
        $('.agCont').stop().slideToggle();
        return false;
    });
});