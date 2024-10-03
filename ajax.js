function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            myFunction(this);
        }
    };
    xhttp.open("GET", "file.xml", true);
    xhttp.send();
}


function myFunc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            myFunc(this)
        }
    };
    xhttp.open("GET", "file.xml", true);
    xhttp.send();
}