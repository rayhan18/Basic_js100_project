///////message start/////////



function inputmsg(){
    // let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple','tomato','orange']
      let message = document.querySelector("#message").value
     let viewmsg =document.querySelector("#viewmsg")
      console.log(message)
     
      viewmsg.innerHTML = message
     // let colorTex=  parseInt(Math.random()*colors.length)
      viewmsg.style.color =' white'
      viewmsg.style.backgroundColor =' tomato'
      viewmsg.style.padding =' 10px'
    if(message === ''){
        alert('please enter msg')
    }
     
   }