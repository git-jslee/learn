<?php
  include($_SERVER['DOCUMENT_ROOT'].'/ko/inc/inc_head.php');
  include($_SERVER['DOCUMENT_ROOT'].'/ko/inc/inc_gnb.php');
?>
<section class="area_sub_title">
    <div class="sub_title">회사소개</div><!-- .sub_title -->
    <div class="sub_location">
        <p class="home"><a href="/ko/index.php">HOME</a></p><!-- .home -->
        <p class="dep1"><a href="/ko/company/company.php">회사소개</a></p><!-- .dep1 -->
        <p class="dep2"><a href="/ko/company/organization.php">인증현황</a></p><!-- .dep2 -->
    </div><!-- .sub_location -->
</section>
<section class="tab_menu tab4 pc">
    <ul class="cf">
        <li><a href="/ko/company/company.php">회사개요</a></li>
        <li><a href="/ko/company/history.php">연혁</a></li>
        <li><a href="/ko/company/organization.php">조직도</a></li>
        <li class="on"><a href="/ko/company/certification.php">인증현황</a></li>
    </ul>
</section><!-- .tab_menu -->
<section class="sub_content">
    <article class="certification">
        <div class="inner">
            <h3 class="tit_content" data-aos="fade-up" data-aos-duration="1500"><span>certification</span> status</h3><!-- .tit_content -->
            <div class="list_certi">
                <ul>
                    <li data-aos="fade-up" data-aos-duration="1000"><img src="../../asset/images/visual_certification01.png" alt="인증서"></li>
                    <li data-aos="fade-up" data-aos-duration="1000"><img src="../../asset/images/visual_certification02.png" alt="인증서"></li>
                    <li data-aos="fade-up" data-aos-duration="1000"><img src="../../asset/images/visual_certification03.png" alt="인증서"></li>
                    <li data-aos="fade-up" data-aos-duration="1000"><img src="../../asset/images/visual_certification04.png" alt="인증서"></li>
                    <li data-aos="fade-up" data-aos-duration="1000"><img src="../../asset/images/visual_certification05.png" alt="인증서"></li>
                </ul>
            </div><!-- .list_certi -->
        </div><!-- .inner -->
    </article><!-- .certification -->
</section><!-- .sub_content -->
<?php
  include($_SERVER['DOCUMENT_ROOT'].'/ko/inc/inc_footer.php');
?>

