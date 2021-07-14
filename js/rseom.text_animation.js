/*******************************************
 Typing Animation By. Rseom
 *******************************************/
var rseom_animation_typing = [
    { text : "안녕하세요" },
    { text : "Hello" },
    { text : "สวัสดี ครับ" },
    { text : "こんにちは" },
    { text : "您好" },
    { text : "Bonjour" },
    { text : "Hola" },
    { text : "Ola" },
    { text : "Ciao" },
    { text : "Guten Tag" },
    { text : " Xin chào" }
]; // <br>로 엔터 구분

function rseom_animation(setting, callback) {
    if(typeof setting.typing=='undefined' || setting.typing.length===0) {
        setting.typing = rseom_animation_typing;
        // return false;
    }

    if(!setting.typingSpeed) {
        setting.typingSpeed = 100; // 타이핑 시간
    }
    if(!setting.typingWait) {
        setting.typingWait = 2000; // 타이핑 후 대기시간
    }
    setting.rowNum = setting.typing.length; // 문장 수
    setting.rowNow = 0; // 현재 입력중인 문장 번호
    if(!setting.typingBox) {
        setting.typingBox = $('#typingBox');
    }

    setting.ti_i = 0; // 현재 글자 위치
    setting.ti_str = ''; // 입력될 글자

    if(!setting.mode) {
        setting.mode = 'one'; // one(한번만 진행하고 끝), repeat(반복)
    }

    typingStart(); // 타이핑 효과 시작

    function typingStart() {
        if(setting.rowNum>0) { // 문장이 있을때에만 실행
            if(setting.rowNow>=setting.rowNum) { // 입력해야 할 문장 번호가 문장 수 보다 많을 경우 초기화
                setting.rowNow = 0;
            }
            typingInsert(); // 입력 애니메이션 실행
        }
    }

    function typingInsert() {
        var len = setting.typing[setting.rowNow].text.length; // 글자 수 확인
        ani1 = setInterval(function() { // 반복
            if(setting.typing[setting.rowNow].text.substr(setting.ti_i, 4)=='<br>') { // <br>인지 검색
                setting.ti_i += 4;
                setting.ti_str = setting.typing[setting.rowNow].text.substr(0, setting.ti_i); // <br> 가져옴
            } else {
                setting.ti_str = setting.typing[setting.rowNow].text.substr(0, ++setting.ti_i); // 다음 글자까지 가져옴
            }
            setting.typingBox.html(setting.ti_str);
            if(setting.ti_i>len) { // 글자수를 넘었는지 확인
                ani2 = setTimeout(function() {
                    typingDelete(); // 삭제 애니메이션
                }, setting.typingWait);
                clearInterval(ani1); // 반복 종료
            }
        }, setting.typingSpeed);
    }

    function typingDelete() { // 삭제 애니메이션
        if(setting.mode==='one') {
            if(setting.rowNow+1>=setting.rowNum) { // 입력해야 할 문장 번호가 문장 수 보다 많을 경우 초기화
                if(typeof(callback)=='function') {
                    callback();
                }
                return false;
            }
        }
        ani3 = setInterval(function() { // 반복
            if(setting.ti_i>=4 && setting.typing[setting.rowNow].text.substr(setting.ti_i-4, 4)=='<br>') { // <br> 확인
                setting.ti_i -= 4;
                setting.ti_str = setting.typing[setting.rowNow].text.substr(0, setting.ti_i); // <br> 제거
            } else {
                setting.ti_str = setting.typing[setting.rowNow].text.substr(0, --setting.ti_i); // 현재 글자수가 4보다 작으면 (<br> 아님)
            }
            setting.typingBox.html(setting.ti_str);
            if(setting.ti_i<0) { // 다 제거했으면 반복 종료
                setting.rowNow++; // 다음 문장 이동준비
                typingStart();
                clearInterval(ani3);
            }
        }, setting.typingSpeed/2);
    }
}
/*
$(document).ready(function() {
    // 애니메이션을 위한 변수
    var typingSpeed = 100; // 타이핑 시간
    var typingWait = 2000; // 타이핑 후 대기시간

    var rowNum = typing.length; // 문장 수
    var rowNow = 0; // 현재 입력중인 문장 번호

    var typingBox = $('#typingBox');

    var ti_i = 0; // 현재 글자 위치
    var ti_str = ''; // 입력될 글자

    typingStart(); // 타이핑 효과 시작

    function typingStart() { // 현재 문장 번호를 확인하는 변수
        if(rowNum>0) { // 문장이 있을때에만 실행
            if(rowNow>=rowNum) { // 입력해야 할 문장 번호가 문장 수 보다 많을 경우 초기화
                rowNow = 0;
            }
            typingInsert(); // 입력 애니메이션 실행
        }
    }
    function typingInsert() { // 입력 애니메이션
        var len = typing[rowNow].text.length; // 글자 수 확인
        ani1 = setInterval(function() { // 반복
            if(typing[rowNow].text.substr(ti_i, 4)=='<br>') { // <br>인지 검색
                ti_i += 4;
                ti_str = typing[rowNow].text.substr(0, ti_i); // <br> 가져옴
            } else {
                ti_str = typing[rowNow].text.substr(0, ++ti_i); // 다음 글자까지 가져옴
            }
            typingBox.html(ti_str);
            if(ti_i>len) { // 글자수를 넘었는지 확인
                ani2 = setTimeout(function() {
                    typingDelete(); // 삭제 애니메이션
                }, typingWait);
                clearInterval(ani1); // 반복 종료
            }
        }, typingSpeed);
    }
    function typingDelete() { // 삭제 애니메이션
        ani3 = setInterval(function() { // 반복
            if(ti_i>=4 && typing[rowNow].text.substr(ti_i-4, 4)=='<br>') { // <br> 확인
                ti_i -= 4;
                ti_str = typing[rowNow].text.substr(0, ti_i); // <br> 제거
            } else {
                ti_str = typing[rowNow].text.substr(0, --ti_i); // 현재 글자수가 4보다 작으면 (<br> 아님)
            }
            typingBox.html(ti_str);
            if(ti_i<0) { // 다 제거했으면 반복 종료
                rowNow++; // 다음 문장 이동준비
                typingStart();
                clearInterval(ani3);
            }
        }, typingSpeed/2);
    }
})
*/