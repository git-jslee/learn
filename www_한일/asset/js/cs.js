/**
* 함 수 명 : GetObject()
* 기    능 : 개체 가져오기
* 파라미터 : ObjectId -> ELEMENT ID
*/
function GetObject(ObjectId) {
    if (document.getElementById && document.getElementById(ObjectId)) {
        return document.getElementById(ObjectId);
    } else if (document.getElementByName && document.getElementByName(ObjectId)) {
        return document.getElementByName(ObjectId);
    } else if (document.all && document.all(ObjectId)) {
        return document.all(ObjectId);
    } else if (document.layers && document.layers[ObjectId]) {
        return document.layers[ObjectId];
    } else {
        return false;
    }
}

var COMMON = {
	Trim: function(value)  {
    	return value.replace(/^\s+|\s+$/g, "");
	},
	// 이메일 체크 함수
	EmailCheck: function(vEmail) {
    	var regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z]+(\.[_0-9a-zA-Z-]+){1,2}$/;
    	if (vEmail.length == 0) return false;
    	if (!vEmail.match(regExp)) return false;
    	return true;
	}
}

var _Process_OnWork = false;
var Process = {
    OnWork: function (v, vMsg) {
        if (v) {
            if (_Process_OnWork) {
                if (vMsg == undefined) vMsg = '서버에 요청중입니다.\n\n잠시만 기다려주세요';

                alert(vMsg);

                return (false);
            } else {
                _Process_OnWork = true;
            }
        } else {
            _Process_OnWork = false;
        }
        return (true);
    }
    // END COMMON
}

var CS = {
		Validate: function() {
			var bOK = true;
			var msg = '';
			if(bOK == true && COMMON.Trim(GetObject("H_Name").value).length == 0){
				bOK = false;
				msg = '고객명을 입력하세요.';
				GetObject("H_Name").focus();
			}

			if(bOK == true && COMMON.Trim(GetObject("H_Email").value).length == 0) {
				bOK = false;
				msg = '이메일을 입력하세요.';
				GetObject("H_Email").focus();
			}

			if(bOK == true && COMMON.EmailCheck(GetObject("H_Email").value) == false) {
				bOK = false;
				msg = '올바른 이메일을 입력하세요.';
				GetObject("H_Email").focus();
			}

      // if(bOK == true && COMMON.Trim(GetObject("H_Tel").value).length == 0) {
			// 	bOK = false;
			// 	msg = '연락처 입력하세요.';
			// 	GetObject("H_Tel").focus();
			// }
//			if(bOK == true && !GetObject("H_ContactType1").checked && !GetObject("H_ContactType2").checked && !GetObject("H_ContactType3").checked)
//			{
//				bOK = false;
//				msg = '문의유형을 선택하세요.';
//				GetObject("H_ContactType1").focus();
//			}
      if(bOK == true && COMMON.Trim(GetObject("H_Title").value).length == 0) {
        bOK = false;
        msg = '제목을 입력하세요.';
        GetObject("H_Title").focus();
      }

      if(bOK == true && COMMON.Trim(GetObject("H_Content").value).length == 0) {
        bOK = false;
        msg = '문의 내용을 입력하세요.';
        GetObject("H_Content").focus();
      }


			if(bOK == true && GetObject("agree").checked == false){
				bOK = false;
				msg = '개인정보 수집 및 이용에 대한 동의를 읽고 내용에 동의하셔야 문의 등록이 가능합니다.';
				GetObject("agree").focus();
			}
			if(bOK == false)
			{
				alert(msg);
			}
			return bOK;
		},
		Save: function() {
			if (!Process.OnWork(true)) { return; }
			if(CS.Validate()) {
				if(confirm('문의하시겠습니까?')) {
					//리캡챠 확인
					if (grecaptcha.getResponse() == ''){
						alert('자동등록방지를 확인해 주세요.');
						Process.OnWork(false);
					} else {
						$('.contact_area .black_layer').show();
						var f = document.frm;
						f.submit();
					}
				}
				else {
					Process.OnWork(false);
				}
			}
			else {
				Process.OnWork(false);
			}
			return false;
		},
		SaveCallBack: function(v) {
			if(v == 'OK') {
				alert('문의가 정상적으로 등록되었습니다.');
				top.location.reload(true);
			}
			else if(v) {
				alert(v);
			}
			else {
				alert('문의 등록 기능이 정상적으로 동작하진 않습니다.\n유선 문의 바랍니다.');
			}

		  Process.OnWork(false);

		}
	}
