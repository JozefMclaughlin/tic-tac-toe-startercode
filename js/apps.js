console.log("loaded");




 // finding variables
var currentTurn = document.body.children[1];
var turn_count = 1;
var boxes = document.getElementsByTagName("td");
var resetbtn = document.getElementById("reset");
var winner = 0

// On click targets box

for (var i = 0; i < boxes.length; i++) {
  box = boxes[i]
  box.addEventListener("click", function(event){
    if (this.innerHTML != "") {
      alert("Invalid move, pick again")
    }
    else {
      if (turn_count % 2 != 0) {
        this.classList.add("X");
        this.innerHTML= "X";
        } else {
        this.classList.add("O");
        this.innerHTML= "O";
        }
      wincheck()
      if (winner == 0) {
        updateturn(currentTurn);
      }
    }
  });
}
// updates turn number and changes text
function updateturn(turn){
  turn_count = turn_count + 1
   if (turn_count % 2 != 0) {
    turn.innerHTML = "It is X's turn";
  } else {
    turn.innerHTML = "It is O's turn";
  }
}

resetbtn.addEventListener("click", function(event){
    Reset()
  });
function Reset(){
  turn_count = 0;
  updateturn(currentTurn);
  for (var i = 0; i < boxes.length; i++) {
    box=boxes[i];
    box.innerHTML = "";
    box.classList.remove("X", "O");
    winner = 0;
  }
}
//WIP check for winner and inform if there is one
function wincheck(){
  if (turn_count % 2 != 0) {
    winconditions("X")
  } else {
    winconditions("O")
  }
}

function winconditions(player) {
  // Horizontal check
  for (var i = 0; i < 9; i+= 3) {
    if (boxes[i].innerHTML == player && boxes[i+1].innerHTML == player && boxes[i+2].innerHTML == player) {
      displayWinner(player);
    }
  }
  // Vertical check
  for (var i = 0; i < 3; i++) {
    if (boxes[i].innerHTML == player && boxes[i+3].innerHTML == player && boxes[i+6].innerHTML == player) {
      displayWinner(player);
    }
  }
  if (boxes[0].innerHTML == player && boxes[4].innerHTML == player && boxes[8].innerHTML == player) {
    displayWinner(player) }
  if (boxes[2].innerHTML == player && boxes[4].innerHTML == player && boxes[6].innerHTML == player) {
      displayWinner(player); }
}


function displayWinner(player){
  currentTurn.innerHTML = player + " has won";
  winner = 1
}
