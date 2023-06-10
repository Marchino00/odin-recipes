function game() {
    let UPoint = 0;                                 // inizializata User and Computer point
    let CPoint = 0;
    for (let i = 1; i <= 5; i++) {
        console.log("----------------" + "Round: " + i + "----------------");
        const computerSelection = getComputerChoice();          //Call function computer choice
        const playerSelection = getUserChoice();                //Call function User choice
        const result = playRound(playerSelection, computerSelection);
        UPoint += result.UPoint;                    //return User point
        CPoint += result.CPoint;                    //return Computer point
        console.log("User point: " + UPoint);
        console.log("Computer Point: " + CPoint);
    }

    if (UPoint > CPoint) {
        console.log("User Win: " + UPoint);                 // Check how win after 5 round
        console.log("Computer Lose " + CPoint);
    } else if( UPoint < CPoint){
        console.log("Computer Win: " + CPoint);
        console.log("User Lose " + UPoint);
    }else{
        console.log("Draw " + UPoint + "|" + CPoint);
    }
}

function playRound(playerSelection, computerSelection) {
    let UPoint = 0;                             // inizializata User and Computer point local
    let CPoint = 0;
        switch (computerSelection) {                    //Comparison to Computer and User choice
        case "Rock":                                    // ROCK case Computer
            switch (playerSelection) {
                case "Rock":
                    console.log("Draw ");
                    console.log("User Choice = " + playerSelection );
                    console.log("CP Choise = " + computerSelection);
                    break;
                case "Paper":
                    console.log("User Win ");
                    console.log("User Choice = " + playerSelection );
                    console.log("CP Choise = " + computerSelection);
                    UPoint++;
                    break;
                case "Scissors":
                    console.log("Computer Win ");
                    console.log("User Choice = " + playerSelection );
                    console.log("CP Choise = " + computerSelection);
                    CPoint++;
                    break;
                default:
                    console.log("Error");
                    break;
            }
            break;
        case "Paper":                                   // PAPER case Computer
            switch (playerSelection) {
                case "Rock":
                    console.log("Computer Win");
                    console.log("User Choice = " + playerSelection );
                    console.log("CP Choise = " + computerSelection);
                    CPoint++;
                    break;
                case "Paper":
                    console.log("Draw ");
                    console.log("User Choice " + playerSelection );
                    console.log("CP Choise " + computerSelection);
                    break;
                case "Scissors":
                    console.log("User Win ");
                    console.log("User Choice = " + playerSelection );
                    console.log("CP Choise = " + computerSelection);
                    UPoint++;
                    break;
                default:
                    console.log("Error");
                    break;
            }
            break;
        case "Scissors":                                // SCISSORS case Computer
            switch (playerSelection) {
                case "Rock":
                    console.log("User Win");
                    console.log("User Choice = " + playerSelection );
                    console.log("CP Choise = " + computerSelection);
                    UPoint++;
                    break;
                case "Paper":
                    console.log("Computer Win");
                    console.log("User Choice = " + playerSelection );
                    console.log("CP Choise = " + computerSelection);
                    CPoint++;
                    break;
                case "Scissors":
                    console.log("Draw "); 
                    console.log("User Choice = " + playerSelection );
                    console.log("CP Choise = " + computerSelection);
                    break;
                default:
                    console.log("Error");
                    break;
            }
            break;
    
        default:
            console.log("Error");
            break;
    }//fine switch
    return {UPoint, CPoint};
}//fine playround

function getUserChoice() { //Input choice User
    let i = 0;
    while (i <= 5) {
        let UChoice = prompt("Insert Rock Paper or Scissors");          //Prompt to take user choice
        UChoice = UChoice.toLocaleLowerCase();
        if (!(UChoice == "rock" || UChoice ==  "paper" || UChoice == "scissors")) {
            console.log("error, Insert Rock Paper of Scissors");
        } else{
            switch (UChoice) {                          // set user choice lower case
                case "rock":
                    UChoice = "Rock";                   // set user choice first char in upper case                                  
                    i++;
                    break;
                case "paper":
                    UChoice = "Paper";
                    i++;
                    break;
                case "scissors":
                    UChoice = "Scissors";
                    i++;
                    break;
            
                default:
                    console.log("Error input please retry");
                    break;
            }
            return UChoice;
        }
    }//fine while
}

function getComputerChoice() { //Random choice CP
    randomNumber = Math.floor(Math.random() *3) + 1;                //Function random for Coputer choice
    let CPChoice = "";
    switch (randomNumber) {
        case 1:
            CPChoice = "Rock";
            break;
        case 2:
            CPChoice = "Paper";
            break;
        case 3:
            CPChoice = "Scissors";
            break;
    }
    return CPChoice;
   
}

game();
    