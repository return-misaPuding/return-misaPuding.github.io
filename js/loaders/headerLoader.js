        /* credit for the following script to W3Schools */
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("headercontainer").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "/header/index.txt", true);
xhttp.send();
