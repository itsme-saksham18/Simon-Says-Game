let gameSequence=[];
let userSequence=[];
let btns=["red", "blue", "green", "yellow"];
let level=0;
let start=false;
let h3=document.querySelector("h3");
document.addEventListener("keypress", function(){
    if(start==false)
    {
        start=true;
    }
    levelUp();
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(
        ()=>{
            btn.classList.remove("flash");
        },250
    );

}

function userFlash(btn){
    btn.classList.add("user");
    setTimeout(
        ()=>{
            btn.classList.remove("user");
        },250
    );

}

function levelUp(){
    userSequence=[];
    level++;
    h3.innerText=`Level ${level}`;
    let randomIdx=Math.floor(Math.random()*4);
    let randomColor=btns[randomIdx];
    let randomBtn=document.querySelector(`#${randomColor}`);
    gameSequence.push(randomColor);
    gameFlash(randomBtn);
}

function btnPress() {
    console.log(this);
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSequence.push(userColor);
    console.log(userSequence);
    CheckAns(userSequence.length - 1)
}

let allBtns=document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function CheckAns(idx){
    
    if(userSequence[idx]===gameSequence[idx])
    {
        if(userSequence.length== gameSequence.length)
        {
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h3.innerHTML=`Game Over! Your score was <b>${level}</b> Press Any Key To Start`;
        gameOver();
        reset();
    }
}

function reset(){
    start=false;
    gameSequence=[];
    userSequence=[];
    level=0;
};
let bod=document.querySelector('body');
function gameOver(){
    bod.classList.add('b');
    setTimeout(()=>{
        bod.classList.remove('b');
    },1000);

}