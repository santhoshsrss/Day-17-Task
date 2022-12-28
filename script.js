//! ---------------------------CALLBACK HELL TASK---------------------------------------

let timer = 10;
 let input_timer = document.getElementById('getthevalue') 
 setTimeout(()=>{
  input_timer.innerHTML = timer--;
  input_timer.className = "timercooldown"
  setTimeout(()=>{
    input_timer.innerHTML = timer--;
    setTimeout(()=>{
      input_timer.innerHTML = timer--;
      setTimeout(()=>{
        input_timer.innerHTML = timer--;
        setTimeout(()=>{
          input_timer.innerHTML = timer--;
          setTimeout(()=>{
            input_timer.innerHTML = timer--;
            setTimeout(()=>{
              input_timer.innerHTML = timer--;
              setTimeout(()=>{
                input_timer.innerHTML = timer--;
                setTimeout(()=>{
                  input_timer.innerHTML = timer--;
                  setTimeout(()=>{
                    input_timer.innerHTML = timer--;
                    setTimeout(()=>{
                      input_timer.innerHTML = timer--;
                      setTimeout(()=>{
                        input_timer.style.color = 'red'
                        input_timer.style.backgroundColor = 'skyblue'
                        input_timer.innerHTML = "HAPPY CHIRSTMAS";
                      
                        
                       },1000)
                    
                     },1000)
                  
                   },1000)
                
                 },1000)
              
               },1000)
            
             },1000)
          
           },1000)
        
         },1000)
      
       },1000)
    
     },1000)
  
   },1000)

 },1000)
