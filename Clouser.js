function add(a){ //clouser 	-- Combination of Function with its lexical environment.
  return function(b){
    return a+b
  }
}

const value = add(20)(2)
console.log(value) //22
