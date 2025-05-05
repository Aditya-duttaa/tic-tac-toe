let boxes=document.querySelectorAll(".box");
let rb=document.querySelector(".reset");
let n=document.querySelector(".new");
let m=document.querySelector(".me");
let mes=document.querySelector(".mess")
let turn=true;

const wp=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[6,4,2],[8,4,0]];
let x=true;
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("box clicked");
        if(turn){
            box.innerText="O";
            turn=false;
        }
        else{
            box.innerText="X";
            turn=true;
        }
        box.disabled=true;
        check();
    });
});

const res =()=>{
    turn=true;
    for(k of boxes){
        k.disabled=false;
        k.innerText="";
    }
    mes.classList.add("hide");
    x=true;
}
const win =(w) =>{
    for(b of boxes){
        b.disabled=true;
    }
    m.innerText=`The winner is ${w}`;
    x=false;
    mes.classList.remove("hide");
}
const check = () => {
    for(let p of(wp)){
        let a=boxes[p[0]].innerText;
        let b=boxes[p[1]].innerText;
        let c=boxes[p[2]].innerText;

        if(a!="" && b!="" && c!=""){
            if(a==b && b==c){
                console.log("winner",a);
                win(a);
            }
        }

    }
    let t=true;
    for(bx of boxes){
      if(bx.innerText==""){t=false;}
    }
    if(t && x){
       m.innerText=`Its a Tie`;
       mes.classList.remove("hide");
    }
}
rb.addEventListener("click",res);
n.addEventListener("click",res);
