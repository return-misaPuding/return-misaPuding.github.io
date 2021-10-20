console.log("my http requests library /js/libhttprequests.js started declaring functions");
var libhttprequestsDebugRequestInitLog;
var libhttprequestsDebugInitRequestResponseLog;
var libhttprequestsDebugRequestResponseLog;
var libhttprequestsDebugmyHttpRequestFunctionResponseLog;
var libhttprequestsDebug;
var libhttprequestsFunctionTestGlobalScopeOutput;
var myRequestResponse;
var myGETRequestResponse;
function libhttprequestsDebugOn() {
libhttprequestsDebug = true;
return libhttprequestsDebug;
}
function libhttprequestsDebugOff() {
libhttprequestsDebug = false;
  return libhttprequestsDebug;
}
function libhttprequestsFunctionTest() {
console.log ("you should see \" this text was stored in a (global scope/function scope) variable\" under this log");
libhttprequestsGlobalScopeOutput = "this text was stored in a global scope output";
console.log (libhttprequestsGlobalScopeOutput);
var libhttprequestsFunctionScopeOutput;
libhttprequestsFunctionScopeOutput = "this text was stored in a function scope variable";
console.log (libhttprequestsFunctionScopeOutput);
return libhttprequestsFunctionScopeOutput;
}
function myHttpRequest(myRequestMethod, myRequestPath, myRequestUnknownBoolean = true) {
  if (libhttprequestDebug) {
    libhttprequestsDebugRequestInitLog = "Debugging a" + myRequestMethod + "request to" + myRequestPath + ":";
  console.log(libhttprequestsDebugRequestInitLog);
    libhttprequestsDebugInitRequestResponseLog = "The initial value of myRequestResponse is" + myRequestResponse;
    console.log(libhttprequestsDebugInitRequestResponseLog);
  }
  /* credit for the following script to W3Schools */
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       myRequestResponse = xhttp.responseText;
      if (libhttprequestDebug) {
    libhttprequestsDebugRequestResponseLog = "The request response is:" + xhttp.responseText;
  console.log(libhttprequestsDebugRequestResponseLog);
  }
    }
};
xhttp.open(myRequestMethod, myRequestPath, myRequestUnknownBoolean);
xhttp.send();
libhttprequestsDebugmyHttpRequestFunctionResponseLog = "The myHttpRequest function should return this:" + myRequestResponse;
console.log(libhttprequestsDebugmyHttpRequestFunctionResponseLog);
return myRequestResponse;
}

function myGETRequest(myGETRequestPath, myGETRequestUnknownBoolean = true) {
 myGETRequestResponse = myHttpRequest("GET", myGETRequestPath, myGETRequestUnknownBoolean);
 return myGETRequestResponse;
}
