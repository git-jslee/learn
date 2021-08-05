<?
//=========================================================
//리캡챠 확인
$response = $_POST["g-recaptcha-response"];
$url = 'https://www.google.com/recaptcha/api/siteverify';
$data = array(
	'secret' => '6LeWFsYbAAAAAK_KUu8Zrx4gCjynVxtNXVNm5IIw',
	'response' => $_POST["g-recaptcha-response"]
);
$options = array(
	'http' => array (
		'method' => 'POST',
		'content' => http_build_query($data)
	)
);
$context  = stream_context_create($options);
$verify = file_get_contents($url, false, $context);
$captcha_success=json_decode($verify);
if ($captcha_success->success==false) {
	echo "<p>스팸메일은 사절입니다.</p>";
} else if ($captcha_success->success==true) {
	//echo "<script>alert(\"ok\");</script>";
}
//=========================================================
// 문의 메일 발송하기
// Creator : cslee (foryou9974@naver.com)
// History :
//      Created Date : 20180821
//=========================================================
/*
 *  에러 메시지 화면에 출력하기
 */
//error_reporting(E_ALL);
//ini_set("display_errors", 1);
//header("content-type:text/html;charset=cp949");

//=========================================================
// Config
//=========================================================
//------------------------------------------------------
$MAIL_MailTemplateFile = "./contact_template.html";
$MAIL_SMTP_Host = 'smtp.office365.com';
$MAIL_SMTP_Username = 'web@creacorp.co.kr';
$MAIL_SMTP_Password = 'crea0425!@';
$MAIL_FromEmail = 'web@creacorp.co.kr';
$MAIL_FromEmailName = '한일파워텍';
$Q_TargetEmail = 'jypark@cwcc.co.kr';

//===============================================

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../../phpmailer.6.0.5/src/Exception.php';
require '../../phpmailer.6.0.5/src/PHPMailer.php';
require '../../phpmailer.6.0.5/src/SMTP.php';

// Check Refferd URL
//if(!(stristr($_SERVER['HTTP_REFERER'], 'index.html'))) {
	//die('<script>alert("ERR");</script>');
//}
$H_Corp = $_REQUEST['H_Corp'];			//회사명
$H_Team = $_REQUEST['H_Team'];			//회사소속
$H_Name = $_REQUEST['H_Name'];			//고객명
$H_Email = $_REQUEST['H_Email'];		//이메일
$H_Tel = $_REQUEST['H_Tel'];			//연락처

//$H_ContactType = $_REQUEST['H_ContactType'];	//문의유형
$H_Title = $_REQUEST['H_Title'];		//제목
$H_Content = $_REQUEST['H_Content'];	//내용

//if(!$H_Name || !$H_Email || !$H_ContactType || !$H_Content) {
//	echo('<script>alert("ERR!");</script>');
//    return;
//}
if(!$H_Name || !$H_Email || !$H_Content) {
	echo('<script>alert("ERR!");</script>');
    return;
}
$Q_Title = $H_Title;
$Q_CurrentTime = date('Y-m-d I H:i:s');
$Q_Content = '<pre>'.$H_Content.'</pre>';

if(!$Q_Title)
    $Q_Title = '[한일파워텍 홈페이지 문의]';

//switch ($H_ContactType) {
//    default :
//	case '1':$Q_ContactType = '제품문의'; break;
//	case '2':$Q_ContactType = '견적문의'; break;
//	case '3':$Q_ContactType = '기타문의'; break;
//}

// 발송 메일폼 로딩해서 문의 내용 입력
$handle = fopen($MAIL_MailTemplateFile, "r");
$template  = fread($handle, filesize($MAIL_MailTemplateFile));
fclose($handle);

$Q_Body = $template;
$Q_Body = str_replace('[CORP]', $H_Corp, $Q_Body);
$Q_Body = str_replace('[TEAM]', $H_Team, $Q_Body);
$Q_Body = str_replace('[NAME]', $H_Name, $Q_Body);
$Q_Body = str_replace('[EMAIL]', $H_Email, $Q_Body);
$Q_Body = str_replace('[TEL]', $H_Tel, $Q_Body);
//$Q_Body = str_replace('[CONTACTYPE]', $Q_ContactType, $Q_Body);
$Q_Body = str_replace('[TITLE]', $Q_Title, $Q_Body);
$Q_Body = str_replace('[CONTENT]', $Q_Content, $Q_Body);
$Q_Body = str_replace('[REGDATE]', $Q_CurrentTime, $Q_Body);
// END


$mail = new PHPMailer(true);                             // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 0;                                // Enable verbose debug output(0/1/2)
    $mail->isSMTP();                                     // Set mailer to use SMTP
    $mail->Host = $MAIL_SMTP_Host;  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                              // Enable SMTP authentication
    $mail->Username = $MAIL_SMTP_Username;               // SMTP username
    $mail->Password = $MAIL_SMTP_Password;               // SMTP password
    $mail->SMTPSecure = 'tls';                           // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    // S :: 한글깨짐 방지
    $mail->CharSet = "UTF-8";
    $mail->Encoding = "base64";
    // END

    //Recipients
    $mail->setFrom($MAIL_FromEmail, $MAIL_FromEmailName);

    $mail->addAddress($Q_TargetEmail);               // Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $Q_Title;
    $mail->Body    = $Q_Body;
    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

   $mail->send();
    //echo 'Message has been sent';
	//echo "<script>parent.ifun(\"발송\"); </script>";

    // 메일 발송후 홈페이지에 콜백
    die('<script>top.CS.SaveCallBack("OK");</script>');


} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    die('<script>top.CS.SaveCallBack("'.$mail->ErrorInfo.'");</script>');
}
?>
