
//the difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends.
localStorage.setItem("name","ravi")

localStorage.getItem("name")

console.log(localStorage.getItem("name"));

const obj ={ name:"iphone",price:55,rating:4}
 const srt = JSON.stringify(obj);
localStorage.setItem("cart",srt)

const cartValues = localStorage.getItem("cart")
console.log(cartValues);
console.log(JSON.parse(cartValues))
