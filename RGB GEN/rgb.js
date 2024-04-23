//Program name: Simple RGB Color generator
//Program Author: Sheraz mehdi
//Date: April 23, 2024



//Getting html elements
let R = document.getElementById("redcolor");
let G = document.getElementById("greencolor");
let B = document.getElementById("bluecolor");
let rgbtext = document.getElementById("textrgb");
let colorpick = document.getElementById("colorrgb");


//function to generate rgb color
colorpick.addEventListener("input", function(){
    rgbred = R.value;
    rgbgreen = G.value;
    rgbblue = B.value;

let finalcolor = `rgb(${rgbred},${rgbgreen},${rgbblue})`;

    document.body.style.backgroundColor = finalcolor;
    rgbtext.innerHTML = finalcolor;
})

