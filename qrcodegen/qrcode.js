//Program name : QR CODE Generator
//Author/Creator : SHERAZ Mehdi
//Date : Monday, April 8, 2024


//Select tags from html
let qrinput = document.getElementById("qrinput");
let qrbtn = document.getElementById("qrbtn");
let qrimg = document.getElementById("qrimg");

//function to generate QR CODE
qrbtn.addEventListener("click", function(){
    let inputval = qrinput.value;
    
    if(!inputval){ //it checks if input is null or 
        //not.
        alert("null value, please enter valid url");

    }else{
    console.log(inputval);
    //Take url from goqr.me website to generate 
    //different urls.
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${inputval}`;
    arimg.alt = `QR Code for ${inputval}` 
    }
});