//storage types
//sessionStorage.setItem(key,value) remove/loose all data after refresh/close tab
//sessionStorage.getItem(key) gets data
//sessionStorage.removeItem(key) remove particular key data
//session.clear() removes all data


sessionStorage.setItem("name","Ravi") // for set data to sessionStorage 

const name =sessionStorage.getItem("name") // for get data from sessionStorage
console.log(name)

//cart
const cartItems={name:"Apple15Pro",price:100,rating:4}

sessionStorage.setItem("cartValue",JSON.stringify(cartItems)) // without stringify we can get error 
const cart = sessionStorage.getItem("cartValue")
console.log(cart)
const cartObject = sessionStorage.getItem("cartValue")
const valuesOfCart =JSON.parse(cartObject)
console.log(valuesOfCart.name,valuesOfCart.price,valuesOfCart.rating+"⭐")
