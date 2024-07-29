let boxs=document.querySelectorAll(".box")
let reset=document.querySelector("#reset-btn")
let new_game=document.querySelector("#new-game")
let Msg=document.querySelector("#msg")
let msgVJ=document.querySelector(".msg-container")
let trun0=true;


const winpattern=[ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("hi please touch me");
        if(trun0){
            box.innerHTML="x";
            trun0=false;
            
        }
        else{
            box.innerHTML="o";
            trun0=true;
        }
        box.disabled=true;

        checkpattern();
    });

});


const showwinner= (winner)=>{
    Msg.innerHTML=`congratulation winner is ${winner}`;
    msgVJ.classList.remove("hide");
};

const checkpattern= () =>{
    for(let pattern of winpattern){

    let val1=boxs[pattern[0]].innerHTML;
    let val2=boxs[pattern[1]].innerHTML;
    let val3=boxs[pattern[2]].innerHTML;
    // console.log(val1,val2,val3)

    if(val1 !="" && val2 !="" && val3 !="")
        {
         if(val1===val2 && val2===val3)
            {
             console.log("winner",val1);
             showwinner(val1);
            }
        }
    }
   
}