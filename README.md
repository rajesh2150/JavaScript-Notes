# JavaScript-Notes
1.Arrays
	---find , map, filter

		.find -- based on condition gives first satisfying value or false gives undefined 
		.map -- gives new array with true values and original is not modified
 		.filter -- gives new array with true and false as undefined and original value is not modified 
	
	---spread, rest operator

		1.spread -- like copying of value ex:[...Array]
		2.rest -- passing more arguments and parameter takes as rest operator as ex: ...args and we can pass multiple rest operator 

2.Destructuring

	--Unpack values from arrays, or properties from objects, into distinct variables.
	Ex:
	const obj={firstName:'Rajesh",lastName:'K'}
	const {firstName} = obj

3.setTimeOut,setInterval

	Time functiions 
	setTimeOut--
		The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
	
	setInterval--
		The setInterval() method, offered on the Window and WorkerGlobalScope interfaces, repeatedly calls a function or executes a code 	snippet, with a fixed time delay between each call.

4.session,localStorage and cookies
		sessionStorage.setItem('name','rajesh k'),getItem,removeItem, clear()
		localStorage.setItem('key','valueString'),getItem,removeItem, clear()
		document.cookie='key : value','expires,
	

5.closures
	-- Combination of Function with its lexical environment.
6.Async and Await
	-- async  and await are keywords
7.CallBack
	--A callback function is a function passed into another function as an argument, which is then invoked inside 	the outer function to complete some kind of routine or action.

8.currying and hosting
	1.Currying
		--Currying is a transformation of functions that translates a function from callable as f(a, b, c) 		into callable as f(a)(b)(c).
		-- By 2 methods -- 1. using bind 2. using clouser
	2.Hoisting
		--JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration 	of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

9.terinary operator
	-- {condition ? true : false}
10.promises
	--The Promise object represents the eventual completion (or failure) of an asynchronous operation and its 	resulting value.
	--then().catch()

	ex: new Promise((resolve, reject)=> async code)

11.Ajax and Jquery and JSON
12.Functions 
	---call, bind, apply
