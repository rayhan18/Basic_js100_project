///////color change start/////////

(function(){
let changeColor = document.querySelector('#change')
const body = document.querySelector('body')
let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple','tomato','orange']

body.style.backgroundColor = 'white'
changeColor.addEventListener('click', changeBackground)

function changeBackground(){
let colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex]
}
})();