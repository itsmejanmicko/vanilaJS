// return a parent element of your div
let txt = document.querySelector(".text");
console.log(txt.parentNode);

//also you can manipulate this property by
let txt_first = document.querySelector(".text");
console.log(txt.firstChild) //it will log the first element in your parent div
console.log(txt.childNodes)//it will log all the elements

let div = document.createElement("div");
div.innerHTML = "<p>Welcome to mobile legend</p>" //when creating a div and setting a property into p tag
console.log(div)
//also you an append the child and display in to your ui

document.body.appendChild(div); // it will shows a text on your browser with the value on innerhtml

//You can append child and add to the parent div
//whe are using the  title as our parent div

const title = document.getElementById("title");
const li = document.createElement("li");
li.innerHTML = "5 seconds till the enemy reaches the battlefield";

title.appendChild(li)