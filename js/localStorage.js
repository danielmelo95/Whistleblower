function saveToLocalStorage(body) {
    localStorage.setItem("body", nodeToString(body));
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
