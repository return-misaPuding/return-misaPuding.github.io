console.log("my http requests library /js/libhttprequests.js started declaring functions");
var libhttprequestsDebug;
var libhttprequestsFunctionTestGlobalScopeOutput;
var myRequestResponse;
var myGETRequestResponse;
function libhttprequestsDebugOn() {
libhttprequestsDebug = true;
return libhttprequestsDebug;
}
function libhttprequestsFunctionTest() {
console.log ("you should see \" this text was stored in a (global scope/function scope) variable\" under this log");
libhttprequestsGlobalScopeOutput = "this text was stored in a global scope output";
console.log (libhttprequestsGlobalScopeOutput);
var libhttprequestsFunctionScopeOutput;
libhttprequestsFunctionScopeOutput = "this text was stored in a function scope variable";
console.log (libhttprequestsFunctionScopeOutput);
}
function myHttpRequest(myRequestMethod, myRequestPath, myRequestUnknownBoolean = true) {
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
 myGETRequestResponse = myHttpRequest("GET", myGETRequestPath, myGETRequestUnknownBoolean);
 return myGETRequestResponse;
}
