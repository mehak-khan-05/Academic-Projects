let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector(".resetbtn")
let playAgain=document.querySelector(".newbtn")
let message=document.querySelector(".message")
let msg=document.querySelector("#msg")

let turnO =true

const win=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

const resetGame=()=>{
turnO=true
enablebox()
message.classList.add("hide")
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turnO){
            box.innerText="O"
            turnO=false
        
        }
        else{
            box.innerText="X"
            turnO=true
        }
        box.disabled=true

        checkWinner()
    })
})
const disablebox=()=>{
    for(let box of boxes){
        box.disbled=true
    }
}

const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""
    }
}


const showWinner=(winner)=>{
    msg.innerText=`And the winner is ${winner}`
    message.classList.remove("hide")
    disablebox()
}



const checkWinner=()=>{
  for(let pattern of win){
   
    let pos1=boxes[pattern[0]].innerText
    let pos2=boxes[pattern[1]].innerText
    let pos3=boxes[pattern[2]].innerText

    if(pos1!="" &&pos2!=""&&pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            console.log("winner",pos1)
            showWinner(pos1)
        }
    }
  }
}

playAgain.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)
