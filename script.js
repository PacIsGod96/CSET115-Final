let player1 = true
let player2 = false
function turn(event){
    let btnPressed = event.target
    if(player1 === true){
        btnPressed.textContent = `X`
        player1 =  false 
        player2 = true
    }else{
        btnPressed.textContent = `O`
        player1 = true
        player2 = false
    }
}