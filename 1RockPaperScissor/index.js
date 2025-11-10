
let computer_choice_text = document.getElementById("comp-choice");
let user_choice_text = document.getElementById("user-choice");

let choices_button = document.querySelectorAll("button");

let result = document.getElementById("result");

let choices = ["rock", "paper", "scissor"];

function computer_choice(){
    let random_choice = choices[Math.floor(Math.random()*3)];
    return random_choice;
}

choices_button.forEach(choice =>{
    choice.addEventListener("click", (button)=>{
        let mychoice = button.target.id;
        user_choice_text.innerHTML = mychoice;
        let gen_choice = computer_choice();
        computer_choice_text.innerHTML = gen_choice;
        // console.log(mychoice)
        // console.log(gen_choice)
        if(mychoice == gen_choice){
           result.innerHTML = "Draw";
        }else if(mychoice == "rock" && gen_choice == "paper" || mychoice == "paper" && gen_choice == "rock" ){
           
            result.innerHTML = "Paper Wins";

        }else if(mychoice == "rock" && gen_choice == "scissor" || mychoice == "scissor" && gen_choice == "rock" ){
           
            result.innerHTML = "Rock wins";
            
        }else if(mychoice == "paper" && gen_choice == "scissor" || mychoice == "scissor" && gen_choice == "paper" ){
        
            result.innerHTML = "Scissor Wins";
            
        }
    })
})

