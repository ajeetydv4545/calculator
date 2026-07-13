const display=document.getElementById("display");



function appendValue(value){

display.value += value;

}



function clearDisplay(){

display.value="";

}



function deleteLast(){

display.value=
display.value.slice(0,-1);

}



function calculate(){

try{

let expression=display.value;

let result=eval(expression);


saveHistory(expression+" = "+result);


display.value=result;


}

catch{

display.value="Error";

}

}





function scientific(type){

let value=Number(display.value);


switch(type){


case "sin":

display.value=Math.sin(value*Math.PI/180);

break;


case "cos":

display.value=Math.cos(value*Math.PI/180);

break;


case "tan":

display.value=Math.tan(value*Math.PI/180);

break;



case "sqrt":

display.value=Math.sqrt(value);

break;



case "log":

display.value=Math.log10(value);

break;



case "ln":

display.value=Math.log(value);

break;



}


}





function square(){

let value=Number(display.value);

display.value=value*value;

}



function cube(){

let value=Number(display.value);

display.value=value*value*value;

}




function power(){

let base=Number(display.value);

let exp=prompt("Enter power");

display.value=Math.pow(base,exp);

}




function saveHistory(data){

let history=
JSON.parse(localStorage.getItem("history")) || [];


history.push(data);


localStorage.setItem(
"history",
JSON.stringify(history)
);


showHistory();

}




function showHistory(){

let list=document.getElementById("historyList");


let history=
JSON.parse(localStorage.getItem("history")) || [];


list.innerHTML="";


history.reverse().forEach(item=>{


list.innerHTML+=
`<p>${item}</p>`;


});


}




function clearHistory(){

localStorage.removeItem("history");

showHistory();

}





function toggleTheme(){

document.body.classList.toggle("light");


let theme=
document.body.classList.contains("light")
?"light":"dark";


localStorage.setItem(
"theme",
theme
);


}




if(localStorage.getItem("theme")=="light"){

document.body.classList.add("light");

}



showHistory();





document.addEventListener(
"keydown",
(e)=>{


if(
(e.key>="0" && e.key<="9")
||
"+-*/.".includes(e.key)
){

appendValue(e.key);

}



if(e.key=="Enter"){

calculate();

}



if(e.key=="Backspace"){

deleteLast();

}



if(e.key=="Escape"){

clearDisplay();

}



});
