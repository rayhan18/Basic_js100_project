const shop = document.getElementById('shop')
console.log(shop)
//const item = document.getElementById('item')
//console.log(item)


//const basket =[]
let basket =JSON.parse(localStorage.getItem("data")) || [];
let getShop=()=>{
 return( shop.innerHTML = products.map((product)=>{
   
    const {id , price,title,desc,img } =product
    const search = basket.find((x)=> x.id === id) || []
    return `
        <div  id="producct-id ${id}" class="col-md-3 mb-3 d-flex">
          
            <div class="card " style="width: 13rem;">
                <img class="imgsize" src=${img} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">  ${desc}</p>
                  <p class="card-text">  Price Tk.${price}</p>
                 
                 <div class="border p-2"> 
                 <button onclick="decrement(${id})" class="btn-outline-danger mx-2"> - </button>
                 <span id=${id}> ${search.item === undefined? 0 : search.item} </span>
                  <button onclick="increment(${id})" class="btn-outline-primary mx-2"> + </button>
                  </div>
                 
                </div>
              </div>
         </div>
`
    
 }).join("")); 
}
getShop()


const increment=(id)=>{
    let selecteditemId = id
    let search =  basket.find((x)=> x.id === selecteditemId )
     if(search === undefined){
       basket.push({
           id:selecteditemId,
           item:1
       })
     }else{
       search.item += 1
     }
      
      // console.log(basket)
       update(selecteditemId)
       localStorage.setItem("data" ,JSON.stringify(basket))
}
const decrement=(id)=>{
    let selecteditemId = id
 let search =  basket.find((x)=> x.id === selecteditemId )
//   if(search.id === 0){
//     basket.push({
//         id:selecteditemId,
//         item:1,
       
//     })
    
//   }else{
//     search.item -= 1
//   }
if(search.item == 0){
    return  false;
   
}
search.item -= 1
    //console.log(basket)
    update(selecteditemId)
    localStorage.setItem("data" ,JSON.stringify(basket))
    basket = basket.filter((x)=> x.item !== 0) 
   
}

const update=(id)=>{
    const search = basket.find((x)=> x.id === id)
    //console.log(search.item)
    document.getElementById(id).innerHTML = search.item;
    celculation()
}

let celculation =()=>{
    let cartamount = document.getElementById('cartamount')
    cartamount.innerHTML = basket.map((x)=> x.item).reduce((prevalue ,curenvalue)=> prevalue + curenvalue ,0)
    console.log('run celculation')
}
celculation()