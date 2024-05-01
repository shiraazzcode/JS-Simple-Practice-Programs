//Program name: Simple quote generator
//Author: Sheraz mehdi
//Date: April 30, 2024


let quotebox = document.getElementById("quote");
let btn = document.getElementById("btn");

//array of quotes
let randomQuotes = [
    "There are good people who are dealt a bad hand by fate, and bad people who live long, comfortable, privileged lives. A small twist of fate can save or end a life; random chance is a permanent, powerful player in each of our lives, and in human history as well.",

    "It is necessary to fall in love... if only to provide an alibi for all the random despair you are going to feel anyway.",

    "Anyone who attempts to generate random numbers by deterministic means is, of course, living in a state of sin.",

    "Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence.",

    "Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",

    "Goals transform a random walk into a chase.",

    "Together we can change the world, just one random act of kindness at a time.",

    "I believe life is an intelligent thing: that things aren't random.",

    "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you."
];


//function that generates random quotes
function generateQuote(){
    let random = Math.floor(Math.random()*randomQuotes.length);
    quotebox.innerHTML = randomQuotes[random];
}

document.body.onload = generateQuote();
btn.addEventListener("click", generateQuote);
