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

let result=eval(display.value);

saveHistory(display.value+" = "+result);

display.value=result;

}

catch{

display.value="Error";

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

let exponent=prompt("Power value:");

display.value=Math.pow(base,exponent);

}




function toggleTheme(){

document.body.classList.toggle("light");


let mode=document.body.classList.contains("light");


localStorage.setItem(
"theme",
mode?"light":"dark"
);

}



if(localStorage.getItem("theme")==="light"){

document.body.classList.add("light");

}



function scientific(type){

let value=Number(display.value);


if(type==="sin")
display.value=Math.sin(value*Math.PI/180);


if(type==="cos")
display.value=Math.cos(value*Math.PI/180);


if(type==="tan")
display.value=Math.tan(value*Math.PI/180);


if(type==="sqrt")
display.value=Math.sqrt(value);


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



showHistory();





document.addEventListener(
"keydown",
function(e){


if(
(e.key>="0" && e.key<="9")
||
"+-*/.".includes(e.key)
)

appendValue(e.key);



if(e.key==="Enter")
calculate();



if(e.key==="Backspace")
deleteLast();



}
);
