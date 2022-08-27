
const cardData=[
   
    {
        id:1,
        title:"Change color",
        link:"/ColorChange/colorChange.html",
       
    },
    {
        id:2,
        title:"Message",
        link:"/message/message.html",
       
    },
    {
        id:3,
        title:"Slider",
        link:"/Slider/slider.html",
       
    },
    {
        id:4,
        title:"Our reviews",
        link:"/Testmonial/TESTIMONIALS.html",
       
      
    },
    {
        id:5,
        title:"Counter",
        link:"/Counter/index.html",
       
       
    },
    {
        id:6,
        title:"Sidebar",
        link:"/Sidebar/sidebar.html",
       
       
    },
    {
        id:7,
        title:"Modal project",
        link:"/Modal/Modal.html",
       
       
    },
    {
        id:8,
        title:"General questions",
        link:"/Accordion/Accordion.html",
       
       
    },
    {
        id:9,
        title:"Video project",
        link:"/video/video.html",
       
       
    },
    {
        id:10,
        title:"About of Tabs",
        link:"/Tabs/tab.html",
       
        
    },
    {
        id:11,
        title:"Coundown timer",
        link:"/Coundown-timer/CoundownTimer.html",
       
       
    },
    {
        id:12,
        title:"Content generator",
        link:"/content-generator/content.html",
       
       
    },
    {
        id:12,
        title:"Todo List",
        link:"#",
       
       
    },
    {
        id:13,
        title:"Drag and drop img",
        link:"/Drack-drop/drakable.html",
       
       
    },
    {
        id:14,
        title:"Count timer",
        link:"/CountTimer/CountTimer.html", 
    },
    {
        id:15,
        title:"Digital clock",
        link:"/Clock/clock.html", 
    },
    {
        id:16,
        title:"Shopping cart",
        link:"/shopping_cart/shoppingCart.html", 
    },
    {
        id:17,
        title:"Code Editor",
        link:"/codeEditor/codeEditor.html", 
    },
]

//


const card = document.getElementById("projects")

function datainfo(item){
// let cardinfo =[item.title ,item.img,item.discription,item.link].join("")
let cardinfo=
    ` <div class="card mb-3 mx-2 bg-warning text-center " style="width: 12rem;">

<div class="card-body">
 <h2 class="text-white"> ${item.title}</h2>
 
  <a href=${item.link} class="btn btn-outline-secondary">Click me ${item.id}</a>
</div>
</div>
 `

 return cardinfo
}
function mycard(){
   card.innerHTML = cardData.map(datainfo)
}
mycard()

