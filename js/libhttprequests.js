console.log("my http requests library /js/libhttprequests.js started declaring functions");
function myHttpRequest(myRequestMethod, myRequestPath, myRequestUnknownBoolean = true) {
var myRequestResponse;
  /* credit to W3Schools for the following script */
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       myRequestResponse = xhttp.responseText;
    }
};
xhttp.open(myRequestMethod, myRequestPath, myRequestUnknownBoolean);
xhttp.send();
return myRequestResponse;
}

function myGETRequest(myGETRequestPath, myGETRequestUnknownBoolean = true) {
 var myGETRequestResponse;
 myGETRequestResponse = myHttpRequest("GET", myGETRequestPath, myGETRequestUnknownBoolean);
 return myGETRequestResponse;
}
