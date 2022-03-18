//image slider

function slider(){
  console.log("soagjk")
    const imgName=[
      "bb3","bb4","bb6","bb7"
  ]
  const buttons = document.querySelectorAll('.btn')
  const imgSelectDiv = document.querySelector('.img-container')
  console.log(buttons)
   let counter = 0
   buttons.forEach(function(button){
     button.addEventListener('click',function(e){
     if ( button.classList.contains('btn-left')){
       counter--
        if(counter < 0){
        counter =  imgName.length - 1
        
        }
        imgSelectDiv.style.backgroundImage =`url('../images/${imgName[counter]}'}.jpg`
       
     }
     console.log(imgSelectDiv)
     if(button.classList.contains('btn-right')){
       counter++
       if(counter > imgName.langth -1){
         counter = 0
        
       }
       console.log(imgSelectDiv)
       imgSelectDiv.style.backgroundImage =`url('../images/${imgName[counter]}.jpg')`
     }
     })
   })
  };