let player1 = true
let player2 = false
function turn(event){
    let btnPressed = event.target
    if(player1 === true){
        btnPressed.textContent = `X`
        btnPressed.disabled = true
        btnPressed.style.color = `black`
        player1 =  false 
        player2 = true
    }else{
        btnPressed.textContent = `O`
        btnPressed.disabled = true
        btnPressed.style.color = `black`
        player1 = true
        player2 = false
    }
}


const winCombos = [
    [A1, A2, A3], // column 1
    [B1, B2, B3], // column 2
    [C1, C2, C3], // column 3
    [A1, B1, C1], // row 1
    [A2, B2, C2], // row 2
    [A3, B3, C3], // row 3
    [A1, B2, C3], // diagonal 1
    [A3, B2, C1]  // diagonal 2
]

function winCheck(){

}

function playAgain(){
    
}