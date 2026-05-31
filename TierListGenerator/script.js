document.addEventListener('DOMContentLoaded', function(){
    const arena = document.getElementById('arena');
     const uploadBtn = document.getElementById('uploadBtn');
     const upload = document.getElementById('upload');
     const fileInput = document.getElementById('fileInput');
     const addDiv = document.getElementById('addDiv');
     const imgUploads = [] ;
     const lists = [];
     let i = 10 ;
    
     function defaultImgUploader(){
        for(let i = 0 ; i <= 4 ; i++){
            let img = document.createElement('img');
        img.classList.add('img');
        img.id = `img${i}` ;
        img.src =`i${i+1}.gif`;
        imgUploads.push(img);
        imgDropFunctionality(img);
        upload.appendChild(imgUploads[i]);
        }
       
     }

     function imgDropFunctionality(img){
          img.addEventListener('dragstart', (e)=>{
            e.dataTransfer.setData('text/plain', e.target.id);
          })

         
     }

     function addImg(){
        
          uploadBtn.addEventListener('click', function(){
            fileInput.click();
          })

          fileInput.addEventListener('change', function(e){
              for(let k = 0 ; k < e.target.files.length; k++){
                 const file = e.target.files[k];
            if(!file) return ;
            const imageUrl = URL.createObjectURL(file);
            console.log(imageUrl);
            const img = document.createElement('img');
            img.classList.add('img');
            img.src = imageUrl;
            img.id = `img${i}`;
            i++;
            imgDropFunctionality(img);

            upload.appendChild(img);
              }
           
          })
     }


             addImg();
             defaultImgUploader();
             tierListadder();

             function tierListadder(){
              addDiv.addEventListener('click', ()=>{
                appnedLists(0);
              })
             }


             appnedLists(1);

             function appnedLists(l){
             let  k = 4 ;
              if(l === 0){
                console.log('jjj');
                 k = 1 ;
              }
                for(let i = 0 ; i < k; i++){
                    let div = document.createElement('div');
                    let span = document.createElement('span');
                    span.classList.add('span')                   
                    div.classList.add('list');
                    // div.style.top = `${i*100}px`;
                    // div.style.left = `${0}px`;
                    span.textContent = i ;
                    span.setAttribute('contenteditable', "true");
                    spanTextChanger(span);
                    lists.push(div);
                    arena.appendChild(div);
                    div.appendChild(span);
                    dropFunction(div);
                }
             }

             // now here we are adding the drop functionality to every div . 

             function dropFunction(div){

              div.addEventListener('dragover', (e)=>{
                e.preventDefault();
              })
              div.addEventListener('drop',(e)=>{
                e.preventDefault();
                const id = e.dataTransfer.getData('text/plain');
                let img = document.getElementById(id);
                div.appendChild(img);

              })


              uploadDropFunctionality();
             }
  
            function uploadDropFunctionality(){
              /////////////////////// here now we will add event listener to our uplod section . 

              upload.addEventListener('dragover',(e)=>{
                e.preventDefault();
              })

              upload.addEventListener('drop',(e)=>{
                const id= e.dataTransfer.getData('text/plain');
                let img = document.getElementById(id);
                upload.appendChild(img);
              })
            }


            // span text changer will be written now 

            function spanTextChanger(span){
                span.addEventListener('click', function(){
                  
                })
            }
            
})