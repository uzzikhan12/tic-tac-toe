let btn = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let newGame = document.querySelector(".new-game");
let msg = document.querySelector("#msg");

// let blue = turnO.classList.add("navy-blue");
let turnO = true;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let resetGame = () => {
    turnO = true;
    enableBoxes();
    newGame.classList.add("hide");
}

btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(turnO){
            btn.innerText = "O";
            turnO = false;
        }else{
            btn.innerText = "X";
            turnO = true;
        }
        btn.disabled = true;
        chechWinner();
     });
});

let disableBoxes = () => {
    for(let btns of btn){
        btns.disabled = true;
    }
}

let enableBoxes = () => {
    for(let btns of btn){
        btns.disabled = false;
        btns.innerText = "";
    }
}

let showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    newGame.classList.remove("hide");
    disableBoxes();
}

let chechWinner = () => {
    for (let pattern of winPatterns) {
       let pos1Val = btn[pattern[0]].innerText;
       let pos2Val = btn[pattern[1]].innerText;
       let pos3Val = btn[pattern[2]].innerText;

       if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if (pos1Val === pos2Val && pos2Val === pos3Val){
            // console.log("winner", pos1Val);
            showWinner(pos1Val);
        }
       }
    }
};


newGameBtn.addEventListener("click" ,resetGame);
resetBtn.addEventListener("click" ,resetGame);

