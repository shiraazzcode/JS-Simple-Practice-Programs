//Program name : Background color changer
//Author: Sheraz Mehdi
//Date : 1 March, 2024

//Elements selected to perform some action
let color = document.getElementById("color");
let btn = document.getElementById("btn");


//Add event listener to the button, and each time button is clicked the background color will change.
//To do this, first create an array of colors


//Array of colors
let colors = ['Red', 'Blue', 'Orange', 'Yellow', 'Brown', 'Magenta', 'Green', 'Black',];


btn.addEventListener("click", function(){
    /**when the button clicked the randomColor function is called, that gives random number, which is then used as an index of colors array.
     it will change every time button is clicked and so the color will change.**/
    

    let ColorNow = colors[randomColor()];
    document.body.style.backgroundColor = ColorNow;
    color.innerHTML = ColorNow;
    color.style.color = ColorNow;
    document.getElementById("heading").style.color = ColorNow;
    

});
 

//function to chose random color when clicked
function randomColor(){
    //using math random method
    let num = Math.random() * colors.length;
    let rnum = Math.floor(num);
    return rnum;
}
