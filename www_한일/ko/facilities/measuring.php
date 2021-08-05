<?php
  include($_SERVER['DOCUMENT_ROOT'].'/ko/inc/inc_head.php');
  include($_SERVER['DOCUMENT_ROOT'].'/ko/inc/inc_gnb.php');
?>
<section class="area_sub_title">
    <div class="sub_title">주요설비</div><!-- .sub_title -->
    <div class="sub_location">
        <p class="home"><a href="/ko/index.php">HOME</a></p><!-- .home -->
        <p class="dep1"><a href="/ko/facilities/production.php">주요설비</a></p><!-- .dep1 -->
        <p class="dep2"><a href="/ko/facilities/measuring.php">측정설비</a></p><!-- .dep2 -->
    </div><!-- .sub_location -->
</section>
<section class="tab_menu tab2 pc">
    <ul class="cf">
        <li><a href="/ko/facilities/production.php">생산설비</a></li>
        <li class="on"><a href="/ko/facilities/measuring.php">측정설비</a></li>
    </ul>
</section><!-- .tab_menu -->
<section class="sub_content">
    <article class="measuring facilities">
        <div class="inner" data-aos="fade-up" data-aos-duration="1500">
            <table>
                <tr>
                    <th>구&nbsp;분</th>
                    <th>설비명</th>
                    <th>MAKER</th>
                    <th>비&nbsp;고</th>
                </tr>
                <tr>
                    <td rowspan="8">측&nbsp;정&nbsp;장&nbsp;비</td>
                    <td>3차원 측정기</td>
                    <td>덕인 / 헥사곤</td>
                    <td></td>
                </tr>
                <tr>
                    <!-- <td rowspan="8">자동차 부품</td> -->
                    <td>투영기</td>
                    <td>MITUTOYO</td>
                    <td></td>
                </tr>
                <tr>
                    <!-- <td rowspan="8">자동차 부품</td> -->
                    <td>형상 측정기</td>
                    <td>MITUTOYO</td>
                    <td></td>
                </tr>
                <tr>
                    <!-- <td rowspan="8">자동차 부품</td> -->
                    <td>조도 측정기</td>
                    <td>MITUTOYO</td>
                    <td>SJ - 400</td>
                </tr>
                <tr>
                    <!-- <td rowspan="8">자동차 부품</td> -->
                    <td>USB MICRO 현미경</td>
                    <td>DINO - LITE</td>
                    <td>10X - 200X</td>
                </tr>
                <tr>
                    <!-- <td rowspan="8">자동차 부품</td> -->
                    <td>MES SYSTEM 구축</td>
                    <td></td>
                    <td>스마트 공장 지원</td>
                </tr>
            </table>
        </div><!-- .inner -->
        <div class="kind_pd">
            <div class="tab_wrap" data-aos="fade-up" data-aos-duration="1500">
                <div class="inner">
                    <ul>
                        <li class="on">3차원 측정기</li>
                        <li>형상 / 조도 측정기</li>
                    </ul>
                </div>
            </div><!-- .tab_wrap -->
            <div class="pannel_wrap" data-aos="fade-up" data-aos-duration="1500">
                <div class="inner">
                    <div class="pannel slide on">
                        <ul>
                            <li><img src="../../asset/images/visual_eq2_01.png" alt="3차원 측정기"></li>
                            <li><img src="../../asset/images/visual_eq2_02.png" alt="3차원 측정기" class="w pw"></li>
                        </ul>
                    </div><!-- .pannel -->
                    <div class="pannel">
                        <ul>
                            <li><img src="../../asset/images/visual_eq2_03.png" alt="형상 / 조도 측정기"></li>
                        </ul>
                    </div><!-- .pannel -->
                </div><!-- .inner -->
            </div>
        </div><!-- .kind_pd -->
    </article><!-- .measuring -->
</section><!-- .sub_content -->
<?php
  include($_SERVER['DOCUMENT_ROOT'].'/ko/inc/inc_footer.php');
?>

