// Show more paragraph

function toggleText() {
    var text = document.querySelectorAll(".deshide");
    var textInline = document.querySelectorAll(".cookieDes")[1];
  
    if (textInline.style.display === "inline") {
      textInline.style.display = "block";
    } else if (textInline.style.display === "block") {
      textInline.style.display = "inline";
    }
  
    for (let i = 0; i < text.length; i++) {
      var toggleButton = document.getElementById("toggleButton");
  
      if (text[i].style.display === "none") {
        text[i].style.display = "block";
        toggleButton.innerHTML = "Show less";
      } else {
        text[i].style.display = "none";
        toggleButton.innerHTML = "..Show more";
      }
    }
  }
  
  // Show the cookie details
  
  var cookie1 = document.querySelectorAll(".cookies");
  var cookieTable = document.querySelectorAll(".cookieDesTable");
  
  for (let i = 0; i < cookie1.length; i++) {
    cookie1[i].onclick = function() {
      var displayStyle = cookieTable[i].style.display;
      cookieTable[i].style.display = displayStyle === "none" ? "grid" : "none";
    }
  }
  

  
//show the first banner 
var getfv = localStorage.getItem("fv");

if(!getfv){
    document.getElementById("firstVisitBanner").style.display = "block";
    var defaultConsent = [{
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
        functionality_storage: "denied",
        personalization_storage: "denied",
        security_storage: "denied",
    }];

    localStorage.setItem("consent", JSON.stringify(defaultConsent));

}else if(getfv){
    document.getElementById("cookieButton").style.display = "block";
}

function setfv(){
    localStorage.setItem("fv", true);
}


// fv banner customize click open banner

function fvBannerOpen(){
    if(document.getElementById("cookieBanner").style.display === "none"){
        document.getElementById("cookieBanner").style.display = "block";
        document.getElementById("firstVisitBanner").style.display = "none";
    }
}


// fv button reject all

var fvBannerReject = document.getElementById("fv-btn-reject");

var fvConsentDenied = [{
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "denied",
    personalization_storage: "denied",
    security_storage: "denied",
}];

fvBannerReject.onclick = function(){
    localStorage.setItem("consent", JSON.stringify(fvConsentDenied));
    deshideBanner();
    setfv();
}

// fv button accept all

var fvBannerAccept = document.getElementById("fv-btn-accept");

var fvConsentGranted = [{
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
    analytics_storage: "granted",
    functionality_storage: "granted",
    personalization_storage: "granted",
    security_storage: "granted",
}];

fvBannerAccept.onclick = function(){
    localStorage.setItem("consent", JSON.stringify(fvConsentGranted));
    deshideBanner();
    setfv();
}


//get the cookies and update the toggle


function updateToggle(){
    var getConsent = JSON.parse(localStorage.getItem("consent"))

    var consentInput = [
        document.getElementById("functional"),
        document.getElementById("analytics"),
        document.getElementById("advertisement"),
    ]
    
    for(var i = 0; i < getConsent.length; i++){
        if(getConsent[i].functionality_storage == "granted"){
            consentInput[0].checked = true;
        }
        if(getConsent[i].analytics_storage == "granted"){
            consentInput[1].checked = true;
        }
        if(getConsent[i].ad_storage == "granted"){
            consentInput[2].checked = true;
        }
    }
}

updateToggle();



// open and close banner on cookie button

function cbcOpenClose(){
    if(document.getElementById("cookieBanner").style.display === "none"){
        document.getElementById("cookieBanner").style.display = "block";
        updateToggle();
    }else if(document.getElementById("cookieBanner").style.display === "block"){
        document.getElementById("cookieBanner").style.display = "none";
    }
}


// hide banner and show cookie button

function deshideBanner(){
    document.getElementById("cookieBanner").style.display = "none";
    document.getElementById("firstVisitBanner").style.display = "none";
    document.getElementById("cookieButton").style.display = "block";
}

/* window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

gtag('consent', 'default', getConsent[0]);
 */


//reject all the cookies

var mainBannerReject = document.getElementById("main-banner-reject");

var consentDenied = [{
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "denied",
    personalization_storage: "denied",
    security_storage: "denied",
}];

mainBannerReject.onclick = function(){
    var allInput = document.querySelectorAll(".switch input");
    for(var i = 1; i < allInput.length; i++){
        allInput[i].checked = false;
    }

    localStorage.setItem("consent", JSON.stringify(consentDenied));
    deshideBanner();
    setfv();
}


//custom cookies
var mainBannerCustom = document.getElementById("main-banner-custom");


mainBannerCustom.onclick = function(){

    var consentPref = [{
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
        functionality_storage: "denied",
        personalization_storage: "denied",
        security_storage: "denied",
    }];


    if(document.getElementById("advertisement").checked){
        consentPref[0].ad_storage = "granted";
        consentPref[0].ad_user_data = "granted";
        consentPref[0].ad_personalization = "granted";
    }

    if(document.getElementById("analytics").checked){
        consentPref[0].analytics_storage = "granted";
    }

    if(document.getElementById("functional").checked){
        consentPref[0].functionality_storage = "granted";
    }

    localStorage.setItem("consent", JSON.stringify(consentPref));
    deshideBanner();
    setfv();
}



//accept all the cookie
var mainBannerAccept = document.getElementById("main-banner-accept");

var consentGranted = [{
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
    analytics_storage: "granted",
    functionality_storage: "granted",
    personalization_storage: "granted",
    security_storage: "granted",
}];

mainBannerAccept.onclick = function(){
    var allInput = document.querySelectorAll(".switch input");
    for(var i = 0; i < allInput.length; i++){
        allInput[i].checked = true;
    }

    localStorage.setItem("consent", JSON.stringify(consentGranted));
    deshideBanner();
    setfv();
}


//banner close button

function bannerClose(){

    document.getElementById("cookieBanner").style.display = "none";

    var getfvforclose = localStorage.getItem("fv");

    if(getfvforclose == "true"){
        document.getElementById("firstVisitBanner").style.display = "none";
        document.getElementById("cookieButton").style.display = "block";
    }else{
        document.getElementById("firstVisitBanner").style.display = "block";
        document.getElementById("cookieButton").style.display = "none";
    }

    console.log(getfvforclose)
}




