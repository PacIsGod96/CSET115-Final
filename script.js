let player1 = true
let player2 = false
let player1Points = 0;
let player2Points = 0;
let ties = 0;
let playBtn = document.querySelector(`.play-Again-Btn`)
playBtn.style.visibility = `hidden`

function turn(event){
    let btnPressed = event.target
    if(player1 === true){
        btnPressed.textContent = `X`
        btnPressed.disabled = true
        btnPressed.style.color = `black`
        document.getElementsByClassName("turn")[0].textContent = `Players Turn: O`
        player1 =  false 
        player2 = true
    }else{
        btnPressed.textContent = `O`
        btnPressed.disabled = true
        btnPressed.style.color = `black`
        document.getElementsByClassName("turn")[0].textContent = `Players Turn: X`
        player1 = true
        player2 = false
    }
    winCheck();
}





function winCheck(){
    let a1 = document.getElementsByClassName("a1")[0].textContent
    let a2 = document.getElementsByClassName("a2")[0].textContent
    let a3 = document.getElementsByClassName("a3")[0].textContent
    let b1 = document.getElementsByClassName("b1")[0].textContent
    let b2 = document.getElementsByClassName("b2")[0].textContent
    let b3 = document.getElementsByClassName("b3")[0].textContent
    let c1 = document.getElementsByClassName("c1")[0].textContent
    let c2 = document.getElementsByClassName("c2")[0].textContent
    let c3 = document.getElementsByClassName("c3")[0].textContent




    const winCombos = [
        [a1, a2, a3], // column 1
        [b1, b2, b3], // column 2
        [c1, c2, c3], // column 3
        [a1, b1, c1], // row 1
        [a2, b2, c2], // row 2
        [a3, b3, c3], // row 3
        [a1, b2, c3], // diagonal 1
        [a3, b2, c1]  // diagonal 2
    ]

    for (let i = 0; i < winCombos.length; i++) {
        const [a, b, c] = winCombos[i];
        if (a === "X" && b === "X" && c === "X") {
            console.log("Player 1 Wins!");
            player1Points++;
            document.getElementsByClassName("p1-points")[0].textContent = player1Points;
            playBtn.style.visibility = `visible`
            winLock()
            return true; // A win condition is met
        } else if (a === "O" && b === "O" && c === "O") {
            console.log("Player 2 Wins!");
            player2Points++;
            document.getElementsByClassName("p2-points")[0].textContent = player2Points;
            playBtn.style.visibility = `visible`
            winLock()
            return true; // A win condition is met
        }

    }


    if(a1 !== "" && a2 !== "" && a3 !== "" &&
       b1 !== "" && b2 !== "" && b3 !== "" &&
       c1 !== "" && c2 !== "" && c3 !== ""){
        ties++;
        document.getElementsByClassName("points")[0].textContent = ties;
        playBtn.style.visibility = `visible`
    }
    return false; // No win condition found

}

function playAgain(){
    let btnContainer = document.querySelector(`.btns`)
    let resetBtns = btnContainer.querySelectorAll(`button`)
    for(let i = 0; i < resetBtns.length; i++){
        resetBtns[i].disabled = false
        resetBtns[i].textContent = ``
    }
    playBtn.style.visibility = `hidden`
}

function winLock(){
    let btnContainer = document.querySelector(`.btns`)
    let resetBtns = btnContainer.querySelectorAll(`button`)
    for(let i = 0; i < resetBtns.length; i++){
        resetBtns[i].disabled = true
    }
}