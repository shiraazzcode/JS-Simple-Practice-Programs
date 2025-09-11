//Select counter value and buttons
let count = document.getElementById("count0");
let incbtn = document.getElementById("btn-inc");
let decbtn = document.getElementById("btn-dec");
let rebtn = document.getElementById("btn-re");

let countVal = 0;

//counter function
function mycounter(){
    incbtn.addEventListener("click", function(){
        countVal++;
        count.innerText = countVal;

    });
    decbtn.addEventListener("click", function(){
        countVal--;
        count.innerText = countVal;
    });
    rebtn.addEventListener("click", function(){
        countVal = 0;
        count.innerText = countVal;
    })
}

//calling counter function
mycounter();