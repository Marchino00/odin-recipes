function game() {
    let UPoint = 0;
    let CPoint = 0;
    for (let i = 1; i <= 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = getUserChoice();
        const result = playRound(playerSelection, computerSelection);
        UPoint += result.UPoint;
        CPoint += result.CPoint;
        console.log("User point: " + UPoint);
        console.log("Computer Point: " + CPoint);
        console.log("----------------" + "Round: " + i + "----------------");
    }

    if (UPoint > CPoint) {
        console.log("User Win: " + UPoint);
        console.log("Computer Lose " + CPoint);
    } else if( UPoint < CPoint){
        console.log("Computer Win: " + CPoint);
        console.log("User Lose " + UPoint);
    }else{
        console.log("Draw " + UPoint + "|" + CPoint);
    }
}

function playRound(playerSelection, computerSelection) {
    let UPoint = 0;
    let CPoint = 0;
        switch (computerSelection) {
        case "Rock":
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
        case "Paper":
            switch (playerSelection) {
                case "Rock":
                    console.log("Computer Win");
                    console.log("User Choice = " + playerSelection );
                    console.log("CP Choise = " + computerSelection);
                    CPoint++;
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
        case "Scissors":
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
    let UChoice = prompt("Insert Rock Paper or Scissors");
    switch (UChoice.toLocaleLowerCase()) {
        case "rock":
            UChoice = "Rock";
            break;
        case "paper":
            UChoice = "Paper";
            break;
        case "scissors":
            UChoice = "Scissors";
            break;
    
        default:
            console.log("Error input please retry");
            break;
    }
    return UChoice;
}

function getComputerChoice() { //Random choice CP
    randomNumber = Math.floor(Math.random() *3) + 1;
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
    
        default:
            break;
    }
    return CPChoice;
   
}

    game();
    