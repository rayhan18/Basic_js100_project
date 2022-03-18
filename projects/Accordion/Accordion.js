
const questions = document.querySelectorAll('.question')


questions.forEach(function(question){
    const btn = question.querySelector('.question-btn')
   // console.log(btn ,'ddd')

    btn.addEventListener("click",function(){
 ///console.log(questions ,'ar')
  

 questions.forEach(function(item){
     if(item !==question){
         item.classList.remove('show-text')
     }
 })
 question.classList.toggle('show-text')
    })
})