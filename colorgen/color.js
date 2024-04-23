let redbtn;
let greenbtn;
let bluebtn;
let mangentabtn;
let aquabtn;

redbtn = document.getElementById("red");
greenbtn = document.getElementById("green");
bluebtn = document.getElementById("blue");
mangentabtn = document.getElementById("magenta");
aquabtn = document.getElementById("aqua");

redbtn.addEventListener('click', function(){
    document.body.style.background = "red";
})
greenbtn.addEventListener('click', function(){
    document.body.style.background = "green";
})
bluebtn.addEventListener('click', function(){
    document.body.style.background = "blue";
})
mangentabtn.addEventListener('click', function(){
    document.body.style.background = "magenta";
})
aquabtn.addEventListener('click', function(){
    document.body.style.background = "aqua";
})



