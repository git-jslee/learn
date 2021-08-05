<?php
  include($_SERVER['DOCUMENT_ROOT'].'/ko/inc/inc_head.php');
  include($_SERVER['DOCUMENT_ROOT'].'/ko/inc/inc_gnb.php');
?>
<section class="area_sub_title">
    <div class="sub_title">고객센터</div><!-- .sub_title -->
    <div class="sub_location">
        <p class="home"><a href="/ko/index.php">HOME</a></p><!-- .home -->
        <p class="dep1"><a href="/board/bbs/board.php?bo_table=notice_ko">고객센터</a></p><!-- .dep1 -->
        <p class="dep2"><a href="/ko/cs/directions.php">오시는 길</a></p><!-- .dep2 -->
    </div><!-- .sub_location -->
</section>
<section class="tab_menu tab3 pc">
    <ul class="cf">
        <li><a href="/board/bbs/board.php?bo_table=notice_ko">공지사항</a></li>
        <li><a href="/ko/cs/inquiry.php">문의사항</a></li>
        <li class="on"><a href="/ko/cs/directions.php">오시는 길</a></li>
    </ul>
</section><!-- .tab_menu -->
<section class="sub_content">
    <article class="directions">
        <div class="inner">
            <div class="tit_wrap">
                <h3 data-aos="fade-up" data-aos-duration="1500">오시는길</h3>
                <p data-aos="fade-up" data-aos-duration="1500">한일 파워텍 찾아 오시는 길</p>
            </div><!-- .tit_wrap -->
            <div class="map_wrap">
                <div class="location loca1" data-aos="fade-up" data-aos-duration="1500">
                    <div class="text">
                        <p class="name">본사 / 김해공장</p><!-- .name -->
                        <address>경상남도 김해시 주촌면 골든루트로 80-80</address>
                        <p class="number">
                            <span><strong>Tel</strong> 055) 312-7013~4</span>
                            <span><strong>Fax</strong> 055) 312-7015</span> 
                        </p><!-- .number -->
                    </div><!-- .text -->
                    <div class="map"><a href="http://kko.to/8KegYIjfM" target="_blank"><img src="../../asset/images/visual_map01.png" alt="본사/김해공장"></a></div><!-- .map -->
                </div><!-- .location.loca1 -->
                <div class="location loca2" data-aos="fade-up" data-aos-duration="1500">
                    <div class="text">
                        <p class="name">2공장</p><!-- .name -->
                        <address>경상남도 김해시 주촌면 골든루트로 66번길 48-5, 12동, 13동</address>
                        <p class="number">
                            <span><strong>Tel</strong> 055) 312-7013~4</span>
                            <span><strong>Fax</strong> 055) 312-7015</span> 
                        </p><!-- .number -->
                    </div><!-- .text -->
                    <div class="map"><a href="http://kko.to/xQu7YUj4p" target="_blank"><img src="../../asset/images/visual_map02.png" alt="2공장"></a></div><!-- .map -->
                </div><!-- .location.loca2 -->
                <div class="location loca3" data-aos="fade-up" data-aos-duration="1500">
                    <div class="text">
                        <p class="name">소재사업부</p><!-- .name -->
                        <address>경상남도 김해시 진례면 서부로 397-4</address>
                        <p class="number">
                            <span><strong>Tel</strong> 055) 284-2200</span>
                        </p><!-- .number -->
                    </div><!-- .text -->
                    <div class="map"><a href="http://kko.to/k1J5YIj4o" target="_blank"><img src="../../asset/images/visual_map03.png" alt="소재사업부"></a></div><!-- .map -->
                </div><!-- .location.loca3 -->
            </div><!-- .map_wrap -->
        </div><!-- .inner -->
    </article><!-- .directions -->
</section><!-- .sub_content -->
<?php
  include($_SERVER['DOCUMENT_ROOT'].'/ko/inc/inc_footer.php');
?>

