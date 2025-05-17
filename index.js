let boxesRef = document.querySelectorAll("#boxes");
let re=document.getElementById("reset");
    let hide=document.getElementById("hide")
    let na=document.getElementById("but")
    let turn = document.getElementById("turn")
    let naga=document.getElementById("naga")

let turn0=true;
let patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

naga.style.visibility="hidden";
turn.style.visibility="hidden"

boxesRef.forEach((box)=>{
box.addEventListener("click",()=>{
    if(turn0){  turn.style.visibility="visible"
       turn.innerHTML="o turn"
        box.innerHTML="x";
        turn0=false;
    }else{  turn.style.visibility="visible" 
        turn.innerHTML="x turn"
        box.innerHTML="o";
        turn0=true;}
        box.disabled=true;
        checkwinner();
        

}
)})
function disabled(){
    for(let box of boxesRef){
        box.disabled=true;
        turn.style.visibility="hidden"
    }
}
function checkwinner(){
   let iswin = false;
for(let pattern of patterns){
    
    let pat1=boxesRef[pattern[0]].innerHTML;
    let pat2=boxesRef[pattern[1]].innerHTML;
    let pat3=boxesRef[pattern[2]].innerHTML;
    if (pat1 !="" && pat2 !="" && pat3 !="" ) {
        if(pat1 === pat2 && pat2 === pat3){
            console.log("winner ",pat1)
            disabled()
            winner(pat1);
           iswin=true;
            return;
        }
       
    }
        if (!iswin) {
        const allBoxes = [...boxesRef].every((box) => box.innerText !== "");
          if (allBoxes) {
            hide.innerHTML="match draw  " ;
                   naga.style.visibility="visible";
                }
        }

    }
}
function winner(player){

   hide.innerHTML="Congratulations winner is  "+player ;
    naga.style.visibility="visible"
}
na.addEventListener("click",()=>{
    turn0=true;
    enable()
    naga.style.visibility="hidden"

    

})
let enable= ()=>{
    for(let box of boxesRef){
        box.disabled=false;
        turn.style.visibility="hidden"
        box.innerHTML=""
    }
}
re.addEventListener("click",()=>{
     turn0=true;
    enable()
     naga.style.visibility="hidden"
})
