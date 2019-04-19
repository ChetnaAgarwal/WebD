var arr = [[0,0,0],[0,0,0],[0,0,0]] 
var turn = "X"
var winner = false;
function disableAll(){
    document.getElementById("b11").disabled = true;
    document.getElementById("b12").disabled = true;
    document.getElementById("b13").disabled = true;
    document.getElementById("b21").disabled = true;
    document.getElementById("b22").disabled = true;
    document.getElementById("b23").disabled = true;
    document.getElementById("b31").disabled = true;
    document.getElementById("b32").disabled = true;
    document.getElementById("b33").disabled = true;
}
function tied(){
    var bool = checkIfAllDisabled();
        if(bool == true){
            document.getElementById("winnerMsg").innerHTML = "It's a tie....!!!!!!!!"
            document.getElementById("display").innerHTML = "GAME OVER"
            var tiedVal = document.getElementById("tied-score").innerHTML;
            document.getElementById("tied-score").innerHTML = parseInt(tiedVal,10) + 1;
            disableAll();
            document.getElementById("reset").disabled = false;
        }
}
function reset(){
    winner = false;
    arr = [[0,0,0],[0,0,0],[0,0,0]] 
    turn = "X"
    document.getElementById("display").innerHTML = "X's TURN"
    document.getElementById("winnerMsg").innerHTML ="";
    document.getElementById("b11").innerHTML = "";
    document.getElementById("b11").disabled = false;
    document.getElementById("b12").innerHTML = "";
    document.getElementById("b12").disabled = false;
    document.getElementById("b13").innerHTML = "";
    document.getElementById("b13").disabled = false;
    document.getElementById("b21").innerHTML = "";
    document.getElementById("b21").disabled = false;
    document.getElementById("b22").innerHTML = "";
    document.getElementById("b22").disabled = false;
    document.getElementById("b23").innerHTML = "";
    document.getElementById("b23").disabled = false;
    document.getElementById("b31").innerHTML = "";
    document.getElementById("b31").disabled = false;
    document.getElementById("b32").innerHTML = "";
    document.getElementById("b32").disabled = false;
    document.getElementById("b33").innerHTML = "";
    document.getElementById("b33").disabled = false;
}

function endGame(){
    document.getElementById("display").innerHTML = "GAME OVER"
    document.getElementById("winnerMsg").innerHTML = winner +" wins !!!!!!!!";
    if(winner == "X"){
        var p1Val = document.getElementById("p1-score").innerHTML;
        document.getElementById("p1-score").innerHTML = parseInt(p1Val,10) + 1;
    }else if(winner == "O"){
        var p2Val = document.getElementById("p2-score").innerHTML;
        document.getElementById("p2-score").innerHTML = parseInt(p2Val,10) + 1;
    }
    disableAll();
    document.getElementById("reset").disabled = false;
}

function containsPattern(){
    var l1 = arr[0][0]
    var l2 = arr[0][1] 
    var l3 = arr[0][2]
    var l4 = arr[1][0]
    var l5 = arr[1][1]
    var l6 = arr[1][2]
    var l7 = arr[2][0]
    var l8 = arr[2][1]
    var l9 = arr[2][2]
    if((l1 == l2) && (l2 == l3) && (l1 != 0)){
        winner= arr[0][0];
    }
    if(l4 == l5 && l5 == l6 && l4 != 0){
        winner=  l4;
    }
    if(l7 == l8 && l8 == l9 && l7 != 0){
        winner=  l7;
    }
    if(l1 == l4 && l4 == l7 && l1 != 0){
        winner=  l1;
    }
    if(l2 == l5 && l5 == l8 && l2 != 0){
        winner=  l2;
    }
    if(l3 == l6 && l6 == l9 && l3 != 0){
        winner=  l3;
    }
    if(l1 == l5 && l5 == l9 && l1 != 0){
        winner=  l1;
    }
    if(l3 == l5 && l5 == l7 && l3 != 0){
        winner=  l3;
    }
    return winner;
}
function disablePlayAgainButton(){
    document.getElementById("reset").disabled = true;
}
function checkIfAllDisabled(){
    return (document.getElementById("b11").disabled) &&
            (document.getElementById("b12").disabled) &&
            (document.getElementById("b13").disabled) &&
            (document.getElementById("b21").disabled) &&
            (document.getElementById("b22").disabled) &&
            (document.getElementById("b23").disabled) &&
            (document.getElementById("b31").disabled) &&
            (document.getElementById("b32").disabled) &&
            (document.getElementById("b33").disabled)
}
function change11(id){
    document.getElementById(id).innerHTML = turn;
    disablePlayAgainButton()
    arr[0][0] = turn
    document.getElementById(id).disabled = true;
    changeTurn();
    winner = containsPattern();
    if(winner){
        //console.log(winner);
        endGame()
    }
    else{
        tied()
    }
}
function change12(){
    document.getElementById("b12").innerHTML = turn;
    disablePlayAgainButton()
    arr[0][1] = turn
    document.getElementById("b12").disabled = true;
    changeTurn();
    var winner = containsPattern();
    if(winner){
        endGame()
    }
    else{
        tied()
    }
}
function change13(){
    document.getElementById("b13").innerHTML = turn;
    disablePlayAgainButton()
    arr[0][2] = turn
    document.getElementById("b13").disabled = true;
    changeTurn();
    var winner = containsPattern();
    if(winner){
        endGame()
    }
    else{
        tied()
    }
}
function change21(){
    document.getElementById("b21").innerHTML = turn;
    disablePlayAgainButton()
    arr[1][0] = turn
    document.getElementById("b21").disabled = true;
    changeTurn();
    var winner = containsPattern();
    if(winner){
        endGame()
    }
    else{
        tied()
    }
}
function change22(){
    document.getElementById("b22").innerHTML = turn;
    disablePlayAgainButton()
    arr[1][1] = turn
    document.getElementById("b22").disabled = true;
    changeTurn();
    var winner = containsPattern();
    if(winner){
        endGame()
    }
    else{
        tied()
    }
}
function change23(){
    document.getElementById("b23").innerHTML = turn;
    disablePlayAgainButton()
    arr[1][2] = turn
    document.getElementById("b23").disabled = true;
    changeTurn();
    var winner = containsPattern();
    if(winner){
        endGame()
    }
    else{
        tied()
    }
}
function change31(){
    document.getElementById("b31").innerHTML = turn;
    disablePlayAgainButton()
    arr[2][0] = turn
    document.getElementById("b31").disabled = true;
    changeTurn();
    var winner = containsPattern();
    if(winner){
        endGame()
    }
    else{
        tied()
    }
}
function change32(){
    document.getElementById("b32").innerHTML = turn;
    disablePlayAgainButton()
    arr[2][1] = turn
    document.getElementById("b32").disabled = true;
    changeTurn();
    var winner = containsPattern();
    if(winner){
        endGame()
    }
    else{
        tied()
    }
}
function change33(){
    document.getElementById("b33").innerHTML = turn;
    disablePlayAgainButton()
    arr[2][2] = turn
    document.getElementById("b33").disabled = true;
    changeTurn();
    var winner = containsPattern();
    if(winner){
        endGame()
    }
    else{
        tied()
    }
}
function changeTurn(){
    if(turn == "X"){
        turn = "O";
    }
    else{
        turn = "X";
    }
    if(turn == "X"){
        document.getElementById("display").innerHTML = "X's TURN : "
    }else{
        document.getElementById("display").innerHTML = "O's TURN : "
    }
}
