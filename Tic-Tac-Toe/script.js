document.addEventListener('DOMContentLoaded', function(){
  const over = new Audio('over.mp3');
  const shine = new Audio('shine.mp3');
  let controller = new AbortController();
    const player = document.createElement('div');
    player.classList.add('player');
 const gameArena = document.getElementById('game-arena');   
     document.body.insertBefore(player,gameArena);

        let boxes = [
            [],
            [],
            []
        ]
 let turn = 'x' ;
  let check = [checker1, checker2, checker3, checker4, checker5, checker6, checker7, checker8];

  function removeEverything(){
           for(let i = 0 ; i < 3; i++){
         for(let j = 0 ; j < 3 ; j++){
            boxes[i][j].textContent = '';
            player.textContent = ''
            controller = new AbortController();
            initiateGame();
             }
          }
  }

  function gameOver(){
        // for(let i = 0 ; i < 3; i++){
        //   for(let j = 0 ; j < 3 ; j++){
        //     boxes[i][j].removeEventListener();
        //   }
        controller.abort();
     over.play();
        setTimeout(function(){
          removeEverything();
        }, 1000);
        // }
  }

 function checkGameover(){
    let bool ;
    for(let i = 0 ; i< check.length ; i++){
        bool = check[i]();
        if(bool) return bool ;
    }
 }
         function displayGameOver(turn){
          player.textContent = `Player ${turn} wins the game . `
          alert(`Player ${turn} wins the game . `)
          gameOver();
         }
       
         function chkdraw(){
          let chk = true ;
          for(let i = 0 ; i < boxes.length; i++){
               for(let j = 0 ; j< 3; j++){
                if(boxes[i][j].textContent === ''){
                  chk = false;
                  return chk ;
                }
               }
          }
          return chk ;
         }

 
    function append0and1(box){
        
        if(box.textContent === ''){
          shine.play();
             player.textContent = 'Player turn ' + `${turn}`
            let x = document.createElement('div');
        x.classList.add('text');
        console.log(box);
         turn = PlayerTurn(); 
        x.textContent = turn ;
            box.appendChild(x);
          let bool =  checkGameover();
          let draw = false ;
          if(bool) {
          displayGameOver(turn);
          }
          draw = chkdraw();
          if(draw && !bool){
            player.textContent = "NOBODY WON THE MATCH . "
            alert( "NOBODY WON THE MATCH . ")
            gameOver();
          }
        }
        
    }
    function checker8(){
            for(let i = 0 ; i < 3 ; i++){
              if( boxes[2][i].textContent === ''){
                return;
              }
            }
     let a = boxes[2][0].children[0];
            let b = boxes[2][1].children[0];
            let c = boxes[2][2].children[0]; 
    if( a.textContent === b.textContent && a.textContent === c.textContent ){
              console.log("overrrr!!!")  ;
              return true ;
        }
        }
        function checker7(){
             for(let i = 0 ; i < 3 ; i++){
              if( boxes[1][i].textContent === ''){
                return;
              }
            }
      let a = boxes[1][0].children[0];
            let b = boxes[1][1].children[0];
            let c = boxes[1][2].children[0]; 
    if( a.textContent === b.textContent && a.textContent === c.textContent ){
              console.log("overrrr!!!")  ;
              return true ;
        }

        }
           function checker6(){
              for(let i = 0 ; i < 3 ; i++){
              if( boxes[i][2].textContent === ''){
                return;
              }
            }
     let a = boxes[0][2].children[0];
            let b = boxes[1][2].children[0];
            let c = boxes[2][2].children[0]; 
    if( a.textContent === b.textContent && a.textContent === c.textContent ){
              console.log("overrrr!!!")  ;
              return true ;
        }
           }
    function checker5(){
         for(let i = 0 ; i < 3 ; i++){
              if( boxes[i][2-i].textContent === ''){
                return;
              }
            }
      let a = boxes[2][0].children[0];
            let b = boxes[1][1].children[0];
            let c = boxes[0][2].children[0]; 
    if( a.textContent === b.textContent && a.textContent === c.textContent ){
              console.log("overrrr!!!")  ;
              return true ;
        }
    }
    function checker4(){
        
        for(let i = 0 ; i < 3 ; i++){
              if( boxes[i][1].textContent === ''){
                return;
              }
            }
     let a = boxes[1][1].children[0];
            let b = boxes[0][1].children[0];
            let c = boxes[2][1].children[0]; 
    if( a.textContent === b.textContent && a.textContent === c.textContent ){
              console.log("overrrr!!!")  ;
              return true ;
        }

    }
    function checker3(){
        for(let i = 0 ; i < 3 ; i++){
              if( boxes[i][i].textContent === ''){
                return;
              }
            }
      let a = boxes[0][0].children[0];
            let b = boxes[1][1].children[0];
            let c = boxes[2][2].children[0]; 
    if( a.textContent === b.textContent && a.textContent === c.textContent ){
              console.log("overrrr!!!")  ;
              return true ;
        }
    }

    function checker2(){
        for(let i = 0 ; i < 3 ; i++){
              if( boxes[i][0].textContent === ''){
                return;
              }
            }
      let a = boxes[0][0].children[0];
            let b = boxes[1][0].children[0];
            let c = boxes[2][0].children[0]; 
    if( a.textContent === b.textContent && a.textContent === c.textContent ){
              console.log("overrrr!!!")  ;
              return true ;
        }
    }
        function checker1(x){
            
            for(let i = 0 ; i < 3 ; i++){
              if( boxes[0][i].textContent === ''){
                return;
              }
            }
            let a = boxes[0][0].children[0];
            let b = boxes[0][1].children[0];
            let c = boxes[0][2].children[0]; 
    if( a.textContent === b.textContent && a.textContent === c.textContent ){
              console.log("overrrr!!!")  ;
              return true ;
        }


        

    }

    function PlayerTurn(){
             if(turn === 'x'){
                turn = '0';
                return turn ;
             }else if(turn === '0'){
                turn = 'x';
                return turn ;
             }
    }

    
function press(box){
            console.log("hellloo");
            append0and1(box);
        }

    function initiateGame(){
          
     

    player.textContent = 'Player turn ' + `0`

        for(let i = 0 ; i < 3; i++){
            for(let j = 0 ; j < 3 ; j++){
            let   box = document.createElement('div');
            
              box.classList.add('button');
              box.style.top = `${i*150}px`;
              box.style.left = `${j*150}px`;
                      gameArena.appendChild(box);

                 box.addEventListener('click', function(){
                  press(boxes[i][j]);
                 }, {signal : controller.signal});
                 boxes[i].push(box);
            }
            
            
        }
        console.log(boxes);
    }
       
        initiateGame();
        
});