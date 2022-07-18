let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");

let basket =JSON.parse(localStorage.getItem("data")) || [];
//console.log(basket)
 //console.log(products)

let celculation =()=>{
    let cartamount = document.getElementById('cartamount')
    cartamount.innerHTML = basket.map((x)=> x.item).reduce((prevalue ,curenvalue)=> prevalue + curenvalue ,0)
    //console.log('run celculation')
}
celculation()



let generetCartItem=()=>{
  if(basket.length !== 0){
    //console.log('not emty')
    return(ShoppingCart.innerHTML= basket.map((x)=>{
       // console.log(x)
        let{id ,item}= x
        let search =products.find((y)=> y.id === id) || []
       // console.log(search ,'dd')
        return `
         <h2 class="text-center">
         <div class='d-flex border  text-center mx-auto' style="width:320px">
         <img width="100" class="border-end" src=${search.img}/>
         <h4>${search.title}</h4>
         <h4 class="mx-3 bg-warning">TK.${search.price}</h4>
         <h1 onclick="deletItem(${id})" class="text-danger" style="cursor:pointer">X</h1>
         <div class="border p-2"> 
                 <button onclick="decrement(${id})" class="btn-outline-danger mx-2"> - </button>
                 <span id=${id}> ${item} </span>
                  <button onclick="increment(${id})" class="btn-outline-primary mx-2"> + </button>
                  </div>
                  <h4>  total-price ${item * search.price}</h4>
         </div>
        
         </h2>
        `
    }).join(" "))
  }
  else{
    ShoppingCart.innerHTML = ``
    label.innerHTML = `
     <h2>Cart is emty</h2>
     <a href="shoppingCart.html">
     <button>Go home</button>
     </a>
    `
   // console.log('is emty')
  }
}
generetCartItem()

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
     generetCartItem()
      // console.log(basket)
       update(selecteditemId)
       localStorage.setItem("data" ,JSON.stringify(basket))
}
let decrement=(id)=>{
    let selecteditemId = id
 let search =  basket.find((x)=> x.id === selecteditemId )

if(search.item == 0){
    return  false;
   
}
search.item -= 1
generetCartItem()
    //console.log(basket)
    update(selecteditemId)
    localStorage.setItem("data" ,JSON.stringify(basket))
    basket = basket.filter((x)=> x.item !== 0) 
   
}

let update=(id)=>{
    let search = basket.find((x)=> x.id === id)
    //console.log(search.item)
    generetCartItem()
    document.getElementById(id).innerHTML = search.item;
    celculation()
}

let deletItem =(id)=>{
    let selectId = id
    console.log(selectId)
    basket  = basket.filter((x)=> x.id !== selectId.id)
    generetCartItem()
    localStorage.setItem("data" ,JSON.stringify(basket))
}
deletItem()