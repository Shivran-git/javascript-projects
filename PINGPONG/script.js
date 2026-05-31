document.addEventListener('DOMContentLoaded',function(){
    const arena = document.getElementById('game-arena');
    let h1 = document.getElementById('instruct');
    const net = document.getElementById('net');
      const stick1 = document.createElement('div');
         const stick2 = document.createElement('div');
         const ball = document.createElement('div');
         const scorecard = document.getElementById('scorecard');

const hit = new Audio('ball.mp3');
const alas = new Audio('alas.mp3');

const pos1 = {x: 10 , y : 180};
const pos2 = {x: 670, y : 180};
const posball = {x : 250, y : 160};


let score1  = document.createElement('div');
let score2  = document.createElement('div') ;
score1.classList.add('score');
score2.classList.add('score');
let x = 0 ;
let y = 0 ;
score1.innerHTML = `${x}`;
score2.innerHTML = `${y}`;
scorecard.appendChild(score1);
scorecard.appendChild(score2);

   let start = true ;
    function initiator(){
        document.addEventListener('keydown',function(e){
            if(e.key === "Enter"){
                console.log("Enter key");
                if(start === true){
                                   startGame();

                }
            }
        })
    }

    function drawSticks(){
        stick1.classList.add('stick');
        stick1.id = 'stick1';
        net.before(stick1);
        stick1.style.left = `${pos1.x}px`;
        stick1.style.top = `${pos1.y}px`;

        stick2.classList.add('stick');
        stick2.id = 'stick2';
        arena.appendChild(stick2);
        stick2.style.left = `${pos2.x}px`;
        stick1.style.top = `${pos2.y}px`;
        
    }
           
    
let dir ;
let move ;

// dir refers to stick1  ;
// move refers to stick 2 ;
    function gameLoop(){
        interval = setInterval(()=>{
    
                     if(dir === 'down' && pos2.y < 345){
                pos2.y += 8 ;
            }else if(dir === 'up' && pos2.y > 8){
                pos2.y -= 8 ;
            }
            

            if(move === 'down' && pos1.y < 345){
                pos1.y += 8 ;
            }else if(move === 'up' && pos1.y >8){
                pos1.y -= 8 ;
            }
       stick1.style.top = `${pos1.y}px`;
       stick2.style.top = `${pos2.y}px`;

       let bool = ballDirn();
       if(bool){
        start = true ;
        bool = false ;
        
        clearInterval(interval);
        h1.innerHTML = 'Press Enter to Continue .'
        if(posball.x > 600){
            x++;
            score1.innerHTML = `${x}`;
            alas.play();
        }
        if(posball.x < 0){
            y++;
            score2.innerHTML = `${y}`;
            alas.play();
        }
        if(x === 10){
            h1.innerHTML = 'Player 1 wins the game .';
            alert('Player 1 wins the game .')
           resetGame();
        }
        if(y === 10){
            h1.innerHTML = 'Player 2 wins the game' ;
            alert('Player 2 wins the game.')
            resetGame();
        }
       }
        posball.x += dx ;
    posball.y += dy ;
            ball.style.left = `${posball.x}px`;
            ball.style.top =  `${posball.y}px`;
            
        },20);
        
    }
    function resetGame(){
        setTimeout(()=>{
            x = 0 ;
            y = 0 ;
            score1.innerHTML = `${x}`;
            score2.innerHTML = `${y}`;
            h1.innerHTML = 'Press Enter to Restart the Game .';
        },100);
    }
let dx = 10 ;
let dy = 6 ;
    function ballDirn(){
        
        if(posball.x === pos1.x + 20 && posball.y >= pos1.y && posball.y <= pos1.y + 90 ){
            dx = 10 ;
            hit.play();
        }
        if(posball.x === pos2.x && posball.y >= pos2.y && posball.y <= pos2.y + 90 ){
            dx = -10 ;
            hit.play();
        }
        if(posball.x < 0 || posball.x > 700){
            console.log('game over');
            return true ;
        }

        // niche wale conditions are good . 
        if(posball.y >= 430){
            dy = -6 ;
            hit.play();
        }
        if(posball.y <= 10){
            dy = 6 ;
            hit.play();
        }
    }
    
    function sticksMotion(){
        document.addEventListener('keydown', (e)=>{
           
            if(e.key === 'ArrowDown'){
                dir = 'down';         
            }
            if(e.key === 'ArrowUp'){
                dir = 'up';
            }
        })

        document.addEventListener('keyup',(e)=>{
           if(e.key === 'ArrowDown' || e.key === 'ArrowUp'){
            dir = null ;
           }
        })

         document.addEventListener('keyup',(e)=>{
           if(e.key === 'w' || e.key === 's'){
            move = null ;
           }
        })

        document.addEventListener('keydown',(e)=>{
            if(e.key === 'w'){
                move = 'up';
            }
        })

        document.addEventListener('keydown', (e)=>{
            if(e.key === 's'){
                move = 'down';
            }
        })
    }
   // upper part defines the movement of the sticks as the keys are pressed . and now we will work towards the ball. 

   function drawBall(){
    ball.classList.add('ball');
    ball.style.left = `${posball.x}px`;
    ball.style.top = `${posball.y}px`;
    arena.appendChild(ball);

    
   }
   function moveball(){
    posball.x += 10 ;
    posball.y += 3 ;
   }

    function startGame(){
        start = false ;
              drawSticks();
              drawBall();
              sticksMotion();
              gameLoop();
              moveball();
              posball.x = 250;
        posball.y = 160;
        h1.innerHTML = "";
    }


    initiator();
    
})