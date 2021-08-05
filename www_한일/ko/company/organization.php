<?php
  include($_SERVER['DOCUMENT_ROOT'].'/ko/inc/inc_head.php');
  include($_SERVER['DOCUMENT_ROOT'].'/ko/inc/inc_gnb.php');
?>
<section class="area_sub_title">
    <div class="sub_title">회사소개</div><!-- .sub_title -->
    <div class="sub_location">
        <p class="home"><a href="/ko/index.php">HOME</a></p><!-- .home -->
        <p class="dep1"><a href="/ko/company/company.php">회사소개</a></p><!-- .dep1 -->
        <p class="dep2"><a href="/ko/company/organization.php">조직도</a></p><!-- .dep2 -->
    </div><!-- .sub_location -->
</section>
<section class="tab_menu tab4 pc">
    <ul class="cf">
        <li><a href="/ko/company/company.php">회사개요</a></li>
        <li><a href="/ko/company/history.php">연혁</a></li>
        <li class="on"><a href="/ko/company/organization.php">조직도</a></li>
        <li><a href="/ko/company/certification.php">인증현황</a></li>
    </ul>
</section><!-- .tab_menu -->
<section class="sub_content">
    <article class="organization">
        <div class="inner">
            <h3 class="tit_content" data-aos="fade-up" data-aos-duration="1500"><span>ORGANIZATION</span><br>CHART</h3><!-- .tit_content -->
            <div class="org_wrap_pc pc">
                <div class="dep1">
                    <i class="bg" data-aos="zoom-in" data-aos-duration="500"></i><!-- .bg -->
                    <div class="text" data-aos="zoom-in" data-aos-duration="1500">
                        <p>대표이사</p>
                    </div><!-- .text -->
                </div><!-- .dep1 -->
                <div class="dep2" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
                    <div><p>관리</p></div>
                    <div><p>생산</p></div>
                    <div><p>연구개발</p></div>
                    <div><p>품질보증</p></div>
                    <div><p>소재사업</p></div>
                </div><!-- .dep2 -->
                <div class="dep3" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000">
                    <div><p>노무·경리</p></div>
                    <div><p>생산 1팀</p></div>
                    <div><p>외주협력</p></div>
                    <div><p>연구소</p></div>
                    <div><p>기술·개발</p></div>
                    <div><p>고객관리</p></div>
                    <div><p>품질보증</p></div>
                    <div><p>품질관리</p></div>
                </div><!-- .dep3 -->
            </div><!-- .org_wrap_pc -->
            <div class="org_wrap_mob mob">
                <div class="dep1" data-aos="fade-right">
                    <p>대표이사</p>
                </div><!-- .dep1 -->
                <div class="dep2" data-aos="fade-up" data-aos-easing="linear"  data-aos-duration="1000">
                    <p>관리</p>
                    <div class="dep3">
                        <p>노무·경리</p>
                    </div><!-- .dep3 -->
                </div><!-- .dep2 -->
                <div class="dep2" data-aos="fade-up" data-aos-easing="linear"  data-aos-duration="1000">
                    <p>생산</p>
                    <div class="dep3">
                        <p>생산 1팀</p>
                        <p>외주협력</p>
                    </div><!-- .dep3 -->
                </div><!-- .dep2 -->
                <div class="dep2" data-aos="fade-up" data-aos-easing="linear"  data-aos-duration="1000">
                    <p>연구개발</p>
                    <div class="dep3">
                        <p>연구소</p>
                        <p>기술·개발</p>
                        <p>고객관리</p>
                    </div><!-- .dep3 -->
                </div><!-- .dep2 -->
                <div class="dep2" data-aos="fade-up" data-aos-easing="linear"  data-aos-duration="1000">
                    <p>품질보증</p>
                    <div class="dep3">
                        <p>품질관리</p>
                        <p>품질보증</p>
                    </div><!-- .dep3 -->
                </div><!-- .dep2 -->
                <div class="dep2" data-aos="fade-up" data-aos-easing="linear"  data-aos-duration="1000">
                    <p>소재사업</p>
                </div><!-- .dep2 -->
            </div><!-- .org_wrap_mob -->
        </div><!-- .inner -->
    </article><!-- .organization -->
</section><!-- .sub_content -->
<?php
  include($_SERVER['DOCUMENT_ROOT'].'/ko/inc/inc_footer.php');
?>

