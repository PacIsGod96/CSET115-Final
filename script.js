let player1 = true; //created a varibale to tell when it is player 1's turn and is preset to true 
let player2 = false; //created a varibale to tell when it is player 2's turn and is preset to false 
let player1Points = 0; //created variable to track player 1's points and is preset to 0
let player2Points = 0; //created variable to track player 2's points and is preset to 0
let ties = 0; //created a variable to track the amount of ties and is preset to 0
let playBtn = document.querySelector(`.play-Again-Btn`); //created a variable that garbs the play again button 
playBtn.style.visibility = `hidden`; //the play button is preset to hidden when game starts 
let resetBtn = document.querySelector(`.resetGame`); //created a variable that grabs the reset button 
resetBtn.style.visibility = `hidden`; //the reset button is preset to hidden when game starts 
function turn(event){ //created a function that will run each time one of the square buttons are pressed 
    let btnPressed = event.target; // created a variable to grab the spefic button that was pressed/when it was pressed
    if(player1 === true){ //created a varibale to see if it is player 1's turn 
        btnPressed.textContent = `X`; //will make the text content of the button that was pressed to X
        btnPressed.disabled = true; //will disbable the button that was pressed so the second plaer cant replace it 
        btnPressed.style.color = `black`; //when the button is diabled it turns the text colot to gray this will turn the text color back to black
        document.getElementsByClassName("turn")[0].textContent = `Players Turn: O`; //This is grabbing the text content in the Class "turn" and changes it to player 2's turn (O)
        player1 =  false ; //makes player 1's turn false to mark that there turn is over 
        player2 = true; //makes player 2's turn true to mark that it is player 2's turn 
    }else{ //else if it is player 2's turn 
        btnPressed.textContent = `O`; //will make the text content of the button that was pressed to O
        btnPressed.disabled = true; //will disbable the button that was pressed so the second plaer cant replace it 
        btnPressed.style.color = `black`; //when the button is diabled it turns the text colot to gray this will turn the text color back to black
        document.getElementsByClassName("turn")[0].textContent = `Players Turn: X`; //This is grabbing the text content in the Class "turn" and changes it to player 2's turn (X)
        player1 = true; //makes player 1's turn true to mark that it is their turn
        player2 = false; //makes player 2's turn false to mark that player 2's turn is over 
    }
    winCheck(); //runs the winCheck function
}

function winCheck(){ //a function to check if there is a winner or if it is a tie
    let a1 = document.getElementsByClassName("a1")[0].textContent; //grabs the top left corner buttons text 
    let a2 = document.getElementsByClassName("a2")[0].textContent; //grabs left middle buttons text
    let a3 = document.getElementsByClassName("a3")[0].textContent; //grabs the bottom left corner buttons text
    let b1 = document.getElementsByClassName("b1")[0].textContent; //grabs the top middle buttons text
    let b2 = document.getElementsByClassName("b2")[0].textContent; //grabs the middle buttons text
    let b3 = document.getElementsByClassName("b3")[0].textContent; //grabs the bottom middle buttons text
    let c1 = document.getElementsByClassName("c1")[0].textContent; //grabs the top right corner buttons text
    let c2 = document.getElementsByClassName("c2")[0].textContent; //grabs the middle right buttons text
    let c3 = document.getElementsByClassName("c3")[0].textContent; //grabs the bottom right buttons text

    const winCombos = [ //makes an array for the row,column, and diagonal sections 
        [a1, a2, a3], // column 1
        [b1, b2, b3], // column 2
        [c1, c2, c3], // column 3
        [a1, b1, c1], // row 1
        [a2, b2, c2], // row 2
        [a3, b3, c3], // row 3
        [a1, b2, c3], // diagonal 1
        [a3, b2, c1]  // diagonal 2
    ]; 

    for (let i = 0; i < winCombos.length; i++) { //a for loop to grab an array inside of the main array for the letters 
        const [a, b, c] = winCombos[i]; // this will place each index from the array into another array 
        if (a === "X" && b === "X" && c === "X") { //this will check to see if each index cotains an X
            player1Points++; //will add a point to player 1's score
            document.getElementsByClassName("p1-points")[0].textContent = player1Points; //this will grab player 1's text and updates it with the live score 
            playBtn.style.visibility = `visible`; //this will makes the play again button appear 
            resetBtn.style.visibility = `visible`; //this will make the reset button appear 
            winLock(); //will run the winLock function 
            return true; // A win condition is met
        } else if (a === "O" && b === "O" && c === "O") { //this will check to see if each index cotains an O
            player2Points++; //will add a point to player 2's score
            document.getElementsByClassName("p2-points")[0].textContent = player2Points; //this will grab player 2's text and updates it with the live score 
            playBtn.style.visibility = `visible`; //this will makes the play again button appear 
            resetBtn.style.visibility = `visible`; //this will make the reset button appear 
            winLock(); //will run the winLock function 
            return true; // A win condition is met
        }

    }

    if(a1 !== "" && a2 !== "" && a3 !== "" &&
       b1 !== "" && b2 !== "" && b3 !== "" &&
       c1 !== "" && c2 !== "" && c3 !== ""){  //if none of the players win then this test to make sure that all of the buttons are filed and not empty 
        ties++; //will add a point to tie score 
        document.getElementsByClassName("points")[0].textContent = ties; //this will grab ties text and updates it with the live score 
        playBtn.style.visibility = `visible`; //this will makes the play again button appear 
        resetBtn.style.visibility = `visible`; //this will make the reset button appear 
    }
    return false; // No win condition found

}

function playAgain(){ //a function that runs when the play again buttons is pressed
    let btnContainer = document.querySelector(`.btns`); //created variable that grabs the class that contains all of the buttons 
    let resetBtns = btnContainer.querySelectorAll(`button`); //created a variable that grabs all of the buttons that are in the .btns class
    for(let i = 0; i < resetBtns.length; i++){ //a for loop that will go through each button 
        resetBtns[i].disabled = false; //will enable that button to be ready for the next round/game
        resetBtns[i].textContent = ``; //will clear the text of that button fot the next game/round 
    }
    playBtn.style.visibility = `hidden`; //will make the play button invisible
    resetBtn.style.visibility = `hidden`; //will make the reset button invisible 
}

function winLock(){ //a function that will lock all of the buttons when a player wins 
    let btnContainer = document.querySelector(`.btns`); //created variable that grabs the class that contains all of the buttons 
    let resetBtns = btnContainer.querySelectorAll(`button`); //created a variable that grabs all of the buttons that are in the .btns class
    for(let i = 0; i < resetBtns.length; i++){ //a for loop that will go through each button 
        resetBtns[i].disabled = true; //will disable all of the buttons till the b=next round/game
    }
}

function resetGame(){ //a function that will run wen the resetbuton is pressed
    let btnContainer = document.querySelector(`.btns`); //created variable that grabs the class that contains all of the buttons 
    let resetBtns = btnContainer.querySelectorAll(`button`); //created a variable that grabs all of the buttons that are in the .btns class
    player1Points = 0; //will reset the points of player 1 to 0
    player2Points = 0; //will reset the points of player 2 to 0
    ties = 0; //will reset tie to 0
    document.getElementsByClassName(`p1-points`)[0].textContent = player1Points; //this will grab player 1's text and updates it with the live score 
    document.getElementsByClassName(`p2-points`)[0].textContent = player2Points; //this will grab player 2's text and updates it with the live score 
    document.getElementsByClassName(`points`)[0].textContent = ties; //this will grab ties text and updates it with the live score 
    for(let i = 0; i < resetBtns.length; i++){ //a for loop that will go through each button 
        resetBtns[i].disabled = false; //will enable that button to be ready for the next round/game
        resetBtns[i].textContent = ``; //will clear the text of that button fot the next game/round 
    }
    playBtn.style.visibility = `hidden`; //will make the play button invisible
    resetBtn.style.visibility = `hidden`;  //will make the reset button invisible 
}