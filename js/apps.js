console.log("loaded");




 // finding variables
var square = document.body.children[2];
var currentTurn = document.body.children[1];
var turn_count = 1;
var boxes = document.getElementsByTagName("td");
var resetbtn = document.getElementById("reset");

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

      updateturn(currentTurn);
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
  }
}
//WIP check for winner and inform if there is one
function wincheck(){
  switch (expression) {
    case expression:
    break;
    default:
  }
}
