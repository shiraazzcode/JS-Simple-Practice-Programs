// //Getting text and buttons
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");
let msecs = document.getElementById("msecs");

let stopbtn = document.getElementById("stopbtn");
let resetbtn = document.getElementById("resetbtn");
let startbtn = document.getElementById("startbtn");

startbtn.addEventListener("click", function(){
let timerid = setInterval(startwatch, 10);
})

let count1 = 0;
let count2 = 0;
let count3 = 0;
function startwatch(){
count1++;
msecs.innerHTML = count1;
if(msecs.innerHTML == 100){
    count1 = 0;
    msecs.innerHTML = count1;
    count2++;
    secs.innerHTML = count2;
    if(secs.innerHTML == 60){
        count2 = 0;
        secs.innerHTML = count2;
        count3++;
        mins.innerHTML = count3;

    }
}
}




