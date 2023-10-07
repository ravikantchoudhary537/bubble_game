let audioTouch = new Audio("Message - 1 Second ! Notification.mp3");
let gameoveraudio = new Audio("mixkit-cartoon-failure-piano-473.wav");
let isgameover = false;
function bubblegenarate(){
let bubblestring = "";
for(var i=1;i<218;i++){
    let randomnumber = Math.floor(Math.random()*10);
    bubblestring += `<div class="elem">${randomnumber}</div>`;
}
document.querySelector(".game-area").innerHTML = bubblestring;
}

function timerfun(){
    let timer = 60;
    setInterval(function(){
        if(timer>0){
            
            timer--;
            document.getElementById("timer").innerText = timer;
        }
        else{
            if(timer==0){
                gameoveraudio.play();
                timer--;
            }
            clearInterval();
            gameoverstring =`<div class='gameoverstring'><h1 class='game-over'>Game Over</h1>
            <br><button id = 'restart'>Restart</button></div>`; ;
            let gamearea=document.querySelector(".game-area");
            gamearea.innerHTML =gameoverstring; 
            gamearea.style.backgroundColor = "white";
            document.getElementById('restart').addEventListener('click',function(){
                    location.reload();
            })
        }
    },1000)
}


let hit;
function hitfun(){
   hit = Math.floor(Math.random()*10);
   document.getElementById("hit").innerText = hit;
}

let score= 0;
function scoreadd(){
    score += 10;
    document.getElementById('score').innerText = score;
}

document.querySelector('.game-area').addEventListener('click',function(e){
        let targetelem = Number(e.target.innerText);
        
        if(hit===targetelem){
            hitfun();
            bubblegenarate();
            scoreadd();
            audioTouch.play();
            
        }
})

bubblegenarate();
timerfun();
hitfun();