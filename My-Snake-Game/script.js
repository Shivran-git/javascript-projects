document.addEventListener('DOMContentLoaded', function(){
    const gameArena = document.getElementById('game-arena');
    const arenaSize = 600;
    const cellSize = 20 ;
    let score = 0 ;
    let gameStarted = false ; // Game status 
    let food = {x : 400, y: 200} // x , y = 15,10  cell coordinates in pixels . 
    let snake = [{x:160, y:200}, {x:140, y:200}, {x:120, y:200}] ;  // {head, body, tail}
    const myAudio = new Audio('co2.mp3');
    let dx = cellSize;
    let dy = 0 ;
    let interval ;
    let gameSpeed = 100 ;
    let restart;
    const over = new Audio('over.mp3');
     const eat = new Audio('alas.mp3');

    const hello = new Audio('hello.mp3');
         function updateSnake(){
            const newHead = {x : snake[0].x + dx , y : snake[0].y + dy};            
            
            snake.unshift(newHead);   //Added a new head to the 0th index of the snake  . 

            // check the collision with food 
            if(newHead.x === food.x && newHead.y === food.y){
                moveFood();
                score +=10 ;
                eat.play();
                scoreBoard.textContent = `${score}`;
                if(gameSpeed > 50){
                    clearInterval(interval);
                 gameSpeed = gameSpeed - 10 ;
                 gameLoop();
              
                }
            }else{
             snake.pop(); // this would remove the tail 
            }
         }

     function moveFood(){

        let x ; let y ;

        do{
             x =  Math.floor(Math.random() * 29) ;
          food.x = x*20;
          y =  Math.floor(Math.random() * 27) ;
          food.y = y*20;
        }while(snake.some(snakeCell => snakeCell.x === x && snakeCell.y === y))
         
     }
            

    function changeDirection(e){

        console.log("key is pressed .", e)
        if(e.key === 'ArrowUp' && dy === 0 ){
            dx = 0 ;
            dy = -cellSize ;
        }else if(e.key === 'ArrowDown' && dy === 0){
            dx = 0 ;
            dy = cellSize;
        }else if(e.key === 'ArrowLeft' && dx === 0){
            dx = -cellSize;
            dy = 0 ;
        }else if(e.key === 'ArrowRight' && dx === 0){
            dx = cellSize;
            dy = 0 ;
        }
         
    }
    function drawDiv(x,y, className){
                const divElement = document.createElement('div');
                divElement.classList.add(className);
                divElement.style.top = `${y}px`;
                divElement.style.left = `${x}px`;
                return divElement;
    }

    function drawFoodAndSnake(){
        gameArena.innerHTML = '' ;

        snake.forEach((snakeCell)=>{
            if(snakeCell === snake[0]){
                const snakeHead = drawDiv(snakeCell.x, snakeCell.y, 'head');
                gameArena.appendChild(snakeHead);
            }else{
             const snakeElement = drawDiv(snakeCell.x,snakeCell.y,'snake');
            gameArena.appendChild(snakeElement);
            }
           
        })


        const foodItems = drawDiv(food.x, food.y, 'food');
        gameArena.appendChild(foodItems);
    }
        
    function isGameOver(){
        // wall collison checker
           if(snake[0].x < 0 || snake[0].x > 580 || snake[0].y < 0 || snake[0].y >  540){
            return true ;
           }

           // snake collision checker 

           for(let i = 1 ; i < snake.length ; i++){
            if(snake[0].x === snake[i].x && snake[0].y === snake[i].y){
                          return true;
            }
           }

    }

       function gameLoop(){
       interval =  setInterval(()=>{
        let bool = isGameOver();
        if(bool){
            gameStarted = false;
                       // over.play();
                  
            clearInterval(interval);
           
            hello.pause();
            alert("Your score is " + score);
            
        }
        updateSnake();
          drawFoodAndSnake();
        }, gameSpeed);
       }
    function runGame(){
        if (!gameStarted){
            gameStarted = true ;
          //
            // co2.play();
            drawFoodAndSnake();
            document.addEventListener('keydown', changeDirection);
            
             gameLoop() ; 
        }
    }

let scoreBoard;
    function initiateGame(){

         scoreBoard = document.createElement('div');
        scoreBoard.id = 'score-board';
        document.body.insertBefore(scoreBoard,gameArena);
        scoreBoard.textContent = '0';

        const startButton = document.createElement('button');
        startButton.textContent = 'Start Game';
        startButton.classList.add('start-button');

        //   restart = document.createElement('button');
        //     restart.classList.add('start-button');
        //     restart.textContent = 'Restart';


        //     restart.addEventListener('click', function restart(){
                
        //         runGame();
        //     })
        
        startButton.addEventListener('click', function startGame(){
            startButton.style.display = 'none' ;
             
            runGame();
        })



        document.body.appendChild(startButton);
    }
    
    initiateGame();
});