let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const enableBoxes = ()=> {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = ()=>{
    turnO = "O";
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = ()=> {
    for (let box of boxes){
        box.disabled = true;
    }
}

turnO = "O";
boxes.forEach( (box) =>{   // Alternate turns 
    box.addEventListener("click",() => {
        if (turnO == "O"){
            box.innerText = "O";
            turnO = "X";
        }
        else{
            box.innerText = "X";
            turnO = "O";
        }
        box.disabled = true;
        checkWinner();
    })
});

const showWinner=(winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}!`;
    msgContainer.classList.remove("hide");
      document.getElementById("winnerText").innerText =
    `Player ${winner} Wins! 🎉`;

  document.getElementById("winnerPopup").style.display = "flex";
    disableBoxes();
}

function closePopup() {
  document.getElementById("winnerPopup").style.display = "none";
  resetGame();
}

const checkWinner = () =>{    // This is a arrow function which checks the winning condition
    for (let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val === pos2val && pos2val === pos3val){
                console.log("WINNER",pos1val);
                showWinner(pos1val);
            }
        }
    }
}

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);