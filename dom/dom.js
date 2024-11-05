//get the value from html using id
//note: it have a property such as child and many more
const msg = document.getElementById("message");
console.log(msg)

//get the value from classname 
//mostly used in radio button and checkbox input type field
let btn = document.getElementsByName("language")
console.log(btn)

// getELementByTagName method accept a tag name and return live htmlcolelction of element
let heading = document.getElementsByTagName('h1');
console.log(heading);

//getElementByClassName method return an array-like of objects of the child element with a specified class name
let mssg = document.getElementsByClassName("message");
console.log(mssg)

// also you can get the id instead of document
//it used for various things like a same name in your code
// note: you must think creative but can understand with the functionality of your code.
let container = document.getElementById("container");
let fifthMessage = container.getElementsByClassName("message");
console.log(fifthMessage)

//query selector
let query_message = document.querySelector(".message")
//you can get all
let query_all_message = document.querySelectorAll(".message");
console.log(query_message)
console.log(query_all_message)

query_all_message[0].textContent = "Where do we know you"

