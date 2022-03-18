const arr =[1,2,3,4,5]
  let lergestnum=arr[0]
   for(let i=0; i <=arr.length; i++){
     if( arr[i] > lergestnum){
       lergestnum = arr[i]
     }
   }
   console.log(lergestnum)
    let v =[]
      v = Math.max(...arr)
     console.log(v)

     //object crud oparation
 //objet with key
     const todo={
       "books1":
       {
         id: 101,
         name:'learn c',
         isbn:'0123546987',
       },
       "books2":{
        id: 102,
        name:'learn c++',
        isbn:'0123546987',
      },
      "books3":{
        id: 103,
        name:'learn c',
        isbn:'0123546987',
      },
      "books4":{
        id: 104,
        name:'a',
        isbn:'d',
      },
     }

     //read object
     console.log(todo)
    //key
     Object.keys(todo).forEach(key=>{
       console.log(key)
     })
//value
 Object.values(todo).forEach(val=>{
  console.log(val.name,val.isbn)
 })

//entries
Object.entries(todo).forEach(entry=>{
  const [key,value] =entry
  console.log(key,value)
})



     //update
     const addbooks={
       id:105,
       name:'javascript',
       isbn:'012356478'
     }
    
          todo[addbooks.id] = addbooks
          console.log(todo)
          const trackId= "books4"
          const updateData={
            name:addbooks.name,
            isbn:addbooks.isbn
          }
     todo[trackId] ={
    ...todo[trackId],
         ...updateData
     }
     console.log(todo)
//add object
const books6={
  "books6":{
    id:6,
  name:'python',
  isbn:'012365478'
  }
  
}
//update data 
  function newtodo(oldobj,newobj){
    return  {...oldobj, ...newobj} 
      
  }
 console.log(newtodo(todo,books6)['books6']) 
console.log(updateData)
 //delete data obj
   let newpdatedobj = new newtodo(todo,books6)
   console.log(newpdatedobj)
 delete newpdatedobj.books4
 //edit
 newpdatedobj.books6.name = 'java'
 console.log(newpdatedobj)
     const d ={
       "ddd":{
        id:01,
        name:'kkkk'
       },

       "eee":{
        id:02,
        name:'eeee'
       },
     }
     console.log(d)
    delete d.eee
    console.log(d)
  // console.log(deletedata)
   console.log(newtodo(todo,books6))

console.log(todo)
 //  let adddatawithoutfunction={
//   ...todo, ...books6
//  }

//delet item

  console.log(newtodo)
//todo.push(books6.books6)
 
console.log(todo)
     /////unic id generator
     function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    }
    
    const students = {
      'ee9efd79-92bb-4d9f-a4dc-d340e63739b7': {
        id: 'ee9efd79-92bb-4d9f-a4dc-d340e63739b7',
        name: 'Md Al-amin',
        email: 'alamin@gmail.com',
      },
      '49350b1b-b450-418f-a840-c7aa53617a7f': {
        id: '49350b1b-b450-418f-a840-c7aa53617a7f',
        name: 'Akib Ahmed',
        email: 'akib@gmail.com',
      },
      '95a59656-e07a-44c8-920c-5c169976b748': {
        id: '95a59656-e07a-44c8-920c-5c169976b748',
        name: 'Elias Emon',
        email: 'elias@gmail.com',
      },
    };
    
    const std = {
      id: uuidv4(),
      name: 'Feroz Khan',
      email: 'firoz@gmail.com',
    };
    
    students[std.id] = std;
    
    const idToBeUpdated = '95a59656-e07a-44c8-920c-5c169976b748';
    const updatedData = {
      name: 'HM Azijul',
      email: 'azizul@gmail.com',
      
    };
    students[idToBeUpdated] = {
      ...students[idToBeUpdated],
      ...updatedData,
    };
    console.log(students)


    ///////
    const uk = [
      {
        id: 'ee9efd79-92bb-4d9f-a4dc-d340e63739b7',
        name: 'Md Al-amin',
        email: 'alamin@gmail.com',
      },
      {
        id: '49350b1b-b450-418f-a840-c7aa53617a7f',
        name: 'Akib Ahmed',
        email: 'akib@gmail.com',
      },
       {
        id: '95a59656-e07a-44c8-920c-5c169976b748',
        name: 'Elias Emon',
        email: 'elias@gmail.com',
      },
    ];
 const rows=[]
    for(let i=0 ;i <uk.length; i++ ){

      for(let j=0; j< 5;j++){

      }
    }