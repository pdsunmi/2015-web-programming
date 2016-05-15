// if mobile device, increase font size
var str = navigator.userAgent;
var device = "";
if (str.match(/(ipad)|(iphone)|(ipod)|(android)|(webos)/i))
    device = "mobileDevice";
else
    device = "desktopPC";

if (device == "mobileDevice") {
    document.body.style.fontSize = "150%";
}

document.getElementById("login_button").removeAttribute("disabled");
document.getElementById("reset").removeAttribute("disabled");

document.getElementById("login_button").onclick = checkUser;

function checkUser() {
    username_in = document.getElementById("username").value;
    password_in = document.getElementById("password").value;

    var localStorage = window.localStorage;
    if (!localStorage) {
    }
    else {
        numUsers = localStorage.numUsers;

        var login_success = false;
        if (numUsers != undefined) {
            for(var i=0;i<numUsers;i++) {
                username = localStorage["user"+i];
                password = localStorage["pass"+i];

                if (username == username_in && password== password_in) {
                    login_success = true;
                    break;
                 }
            }
        }

        if (login_success)
            alert("로그인 성공♡");
        else
            alert("아이디 또는 패스워드가 틀렸습니다.");
    }
}
