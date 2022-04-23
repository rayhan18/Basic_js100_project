
const cardData=[
   
    {
        id:1,
        title:"Change color",
        link:"/projects/ColorChange/colorChange.html",
       
    },
    {
        id:2,
        title:"Message",
        link:"/projects/message/message.html",
       
    },
    {
        id:3,
        title:"slider",
        link:"/projects/Slider/slider.html",
       
    },
    {
        id:4,
        title:"our reviews",
        link:"/projects/Testmonial/TESTIMONIALS.html",
       
      
    },
    {
        id:5,
        title:"Counter",
        link:"/projects/Counter/index.html",
       
       
    },
    {
        id:6,
        title:"Sidebar",
        link:"/projects/Sidebar/sidebar.html",
       
       
    },
    {
        id:7,
        title:"Modal project",
        link:"/projects/Modal/Modal.html",
       
       
    },
    {
        id:8,
        title:"general questions",
        link:"/projects/Accordion/Accordion.html",
       
       
    },
    {
        id:9,
        title:"video project",
        link:"/projects/video/video.html",
       
       
    },
    {
        id:10,
        title:"About of Tabs",
        link:"/projects/Tabs/tab.html",
       
        
    },
    {
        id:11,
        title:"coundown timer",
        link:"/projects/Coundown-timer/CoundownTimer.html",
       
       
    },
    {
        id:12,
        title:"Content generator",
        link:"/projects/content-generator/content.html",
       
       
    },
    {
        id:12,
        title:"todo List",
        link:"#",
       
       
    },
    {
        id:13,
        title:"Drag and drop img",
        link:"/projects/Drack-drop/drakable.html",
       
       
    },
]




const card = document.getElementById("projects")

function datainfo(item){
// let cardinfo =[item.title ,item.img,item.discription,item.link].join("")
let cardinfo=
    ` <div class="card mb-3 mx-2 bg-warning text-center " style="width: 15rem;">

<div class="card-body">
 <h2 class="text-white"> ${item.title}</h2>
 
  <a href=${item.link} class="btn btn-outline-primary">Click me</a>
</div>
</div>
 `

 return cardinfo
}
function mycard(){
   card.innerHTML = cardData.map(datainfo)
}
mycard()

