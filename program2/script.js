//Pyramid pattern in javascript
//using for loop


//Pattern 1
let i;
let j;
for(i = 0; i <= 10; i++){ //outer loop
    document.write("*")
    for(j = 0; j <= i; j++){  //inner loop
        document.write("*");
    }
    document.write("<br>"); // breaks line
}

document.write("<br>");

//Pattern 2
for(i = 0; i <= 5; i++){ //outer loop
    document.write("*")
    for(j = 0; j <= 10; j++){  //inner loop
        document.write("*");
    }
    document.write("<br>"); // breaks line
}


document.write("<br>");

//Pattern 3
for(i = 0; i <= 10; i++){ //outer loop
    document.write("#");
    for(j = 0; j <= i-1; j++){  //inner loop
        document.write("#");
    }
    document.write("<br>"); // breaks line
}
