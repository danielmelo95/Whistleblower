function saveToLocalStorage(body) {
    localStorage.setItem("body", nodeToString(body));
    console.log(localStorage.getItem("body"));
    //createCookie(nodeToString(body));
}

function checkLocalStorage() {
    var localStorageConent = localStorage.getItem("body");
    if(localStorageConent == null){
        return null;
    }
    else{
        return localStorageConent;
    }
}


function createCookie(value) {
    var expires = "";
    var date = new Date();
    date.setTime(date.getTime() + (7*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();

    document.cookie = "body" + "=" + value + expires + "; path=/";
    console.log(decodeURIComponent(document.cookie));
}

function readCookie(name) {
    console.log("AAAA");
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    console.log(ca);
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) {
            console.log(c.substring(nameEQ.length), c.length);
            return c.substring(nameEQ.length, c.length);

        }
    }
    return null;
}

function getCookie(body) {
    var name = body + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    console.log(decodedCookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return "not empty";
        }
    }
    return "";
}