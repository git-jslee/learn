<?php
  include($_SERVER['DOCUMENT_ROOT'].'/ko/inc/inc_head.php');
  include($_SERVER['DOCUMENT_ROOT'].'/ko/inc/inc_gnb.php');
?>
<section class="area_sub_title">
    <div class="sub_title">고객센터</div><!-- .sub_title -->
    <div class="sub_location">
        <p class="home"><a href="/ko/index.php">HOME</a></p><!-- .home -->
        <p class="dep1"><a href="/board/bbs/board.php?bo_table=notice_ko">고객센터</a></p><!-- .dep1 -->
        <p class="dep2"><a href="/ko/cs/inquiry.php">문의사항</a></p><!-- .dep2 -->
    </div><!-- .sub_location -->
</section>
<section class="tab_menu tab3 pc">
    <ul class="cf">
        <li><a href="/board/bbs/board.php?bo_table=notice_ko">공지사항</a></li>
        <li class="on"><a href="/ko/cs/inquiry.php">문의사항</a></li>
        <li><a href="/ko/cs/directions.php">오시는 길</a></li>
    </ul>
</section><!-- .tab_menu -->
<section class="sub_content">
    <article class="inquiry">
        <div class="inner">
            <div class="tit_wrap">
                <h3 data-aos="fade-up" data-aos-duration="1500">문의사항</h3>
                <p data-aos="fade-up" data-aos-duration="1500" class="des">모든 문의사항은 신속하게 답변 드리겠습니다.</p>
                <p class="ck_info" data-aos="fade-up" data-aos-duration="1500"><span>체크된 항목은 필수 입력항목입니다.</span></p><!-- .ck_info -->
            </div><!-- .tit_wrap -->
            <script src="https://www.google.com/recaptcha/api.js"></script>
            <form method="post" class="contact-frm" id="frm" name="frm" action="contact_ok.php" target="param" onsubmit="return false;">
                <div class="contact_wrap">
                    <div class="contact_tabel">
                        <div class="contact_input" data-aos="fade-up" data-aos-duration="1500" >
                            <p class="es_checked"><span>고객명 및 회사명</span></p><!-- .es_checked -->
                            <input type="text" id="H_Name" name="H_Name" required>
                        </div><!-- .contact_input -->
                        <div class="contact_input" data-aos="fade-up" data-aos-duration="1500" >
                            <p class="es_checked"><span>이메일</span></p><!-- .es_checked -->
                            <input type="text" id="H_Email" name="H_Email" required>
                        </div><!-- .contact_input -->
                        <div class="contact_input" data-aos="fade-up" data-aos-duration="1500" >
                            <p class="none_checked"><span>연락처</span></p><!-- .none_checked -->
                            <input type="text"  id="H_Tel" name="H_Tel" placeholder="' - ' 없이 입력해주세요.">
                        </div><!-- .contact_input -->
                    </div><!-- .contact_tabel -->
                </div><!-- .contact_wrap -->
                <div class="contact_wrap cw2">
                    <div class="contact_tabel">
                        <div class="contact_input" data-aos="fade-up" data-aos-duration="1500" >
                            <p class="es_checked"><span>제목</span></p><!-- .es_checked -->
                            <input type="text" id="H_Title" name="H_Title" required>
                        </div><!-- .contact_input -->
                        <div class="contact_input" data-aos="fade-up" data-aos-duration="1500" >
                            <p class="es_checked"><span>내용</span></p><!-- .es_checked -->
                            <textarea id="H_Content" name="H_Content" placeholder="문의내용을 입력해주세요. 자세히 적어주시면 더욱 상세한 답변을 전해드릴 수 있습니다." required></textarea>
                        </div><!-- .contact_input -->
                    </div><!-- .contact_tabel -->
                </div><!-- .contact_wrap -->
                <div class="contact_checked_boc" data-aos="fade-up" data-aos-duration="1500" >
                    <div class="contact_checked">
                        <input type="checkbox" name="agree" id="agree">
                        <label for="agree">개인정보 취급동의</label>
                        <!-- <a rel="#layer2" class="btn-example agBtn">상세보기</a> -->
                        <a class="btn-example agBtn">상세보기</a>
                        <div class="agCont">
                            <strong>개인정보 수집 및 이용 동의</strong>
                            <span>- 처리목적 : 서비스 제공관련 고객 상담, 문의사항 확인 및 처리, 고객 연락 등</span>
                            <span>- 처리(수집) 항목 : 고객명 및 회사명, 이메일, 연락처</span>
                            <span>- 보유기간 : 목적 달성 시까지</span>
                            <span>*상기의 개인정보 수집 및 이용을 거부하실 수 있으나, 거부하시는 경우 서비스 이용이 불가합니다.</span>
                        </div><!-- .agCont -->
                    </div><!-- .contact_checked -->
                    <button type="submit" form="frm" value="보내기" class="btn_submit" onClick="CS.Save();">S E N D</button>
                    <?php if (G5_IS_MOBILE) { ?>
                        <div class="not_robot">
                            <div class="g-recaptcha" data-sitekey="6LeWFsYbAAAAAK_KUu8Zrx4gCjynVxtNXVNm5IIw"></div>
                        </div>
                        <?php } else { ?>
                            <div class="not_robot">
                                <div class="g-recaptcha" data-sitekey="6LeWFsYbAAAAAK_KUu8Zrx4gCjynVxtNXVNm5IIw"></div>
                            </div>
                    <?php } ?>
                </div><!-- .contact_checked_boc -->
            </form>
            <iframe id="if" name="param"></iframe>
        </div><!-- .inner -->
    </article><!-- .inquiry -->
</section><!-- .sub_content -->
<?php
  include($_SERVER['DOCUMENT_ROOT'].'/ko/inc/inc_footer.php');
?>

