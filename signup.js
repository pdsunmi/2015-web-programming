// if mobile device, increase font size
var str = navigator.userAgent;
var device = "";
if (str.match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i))
    device = "mobileDevice";
else
    device = "desktopPC";

if (device == "mobileDevice") {
    document.body.style.fontSize = "150%";
    document.getElementById("dup_check").style.fontSize = "120%";
    document.getElementById("signup_button").style.fontSize = "120%";
    document.getElementById("reset2").style.fontSize = "120%";
}

// enable the disabled buttons
document.getElementById("dup_check").removeAttribute("disabled");
document.getElementById("signup_button").removeAttribute("disabled");
document.getElementById("reset2").removeAttribute("disabled");

document.getElementById("dup_check").onclick = duplicationCheck;
document.getElementById("signup_button").onclick = signup;

function duplicationCheck() {
    username_in = document.getElementById("username2").value;

    var localStorage = window.localStorage;
    if (!localStorage) {
        // local storage is not supported by this browser.
        // do nothing
    }
    else {
        numUsers = localStorage.numUsers;

        var duplicate = false;
        if (numUsers != undefined) {
            for(i=0;i<numUsers;i++) {
                username = localStorage["user"+i];
                if (username == username_in) {
                    duplicate = true;
                    break;
                 }
            }
        }

        if (duplicate)
            alert(username_in + " 는 중복된 아이디입니다. 다시 입력해 주세요");
        else
            alert(username_in + " 는 사용할 수 있는 아이디입니다.");
    }
}

function signup() {
    username_in = document.getElementById("username2").value;
    password_in1 = document.getElementById("pass1").value;

    var localStorage = window.localStorage;
    if (!localStorage) {
        // local storage is not supported by this browser.
        // do nothing
    }
    else {
        numUsers = localStorage.numUsers;
        if (numUsers == undefined) numUsers = "0";
        localStorage["user"+numUsers] = username_in;
        localStorage["pass"+numUsers] = password_in1;
        localStorage.numUsers = parseInt(numUsers) + 1;
        alert("회원가입에 성공했습니다!\n" + "회원 수: " + localStorage.numUsers);
    }
}
