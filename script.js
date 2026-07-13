let display=document.getElementById("display");

let historyText=document.getElementById("history");



function append(value){

display.value+=value;

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

let exp=display.value;

let result=eval(exp);


historyText.innerHTML=exp;


saveHistory(exp+" = "+result);


display.value=result;


}

catch{

display.value="Error";

}

}




function scientific(type){

let value=Number(display.value);



if(type=="sin")

display.value=Math.sin(value*Math.PI/180);



if(type=="cos")

display.value=Math.cos(value*Math.PI/180);



if(type=="tan")

display.value=Math.tan(value*Math.PI/180);



if(type=="sqrt")

display.value=Math.sqrt(value);



if(type=="log")

display.value=Math.log10(value);



if(type=="ln")

display.value=Math.log(value);


}



function square(){

display.value=
Number(display.value)**2;

}



function power(){

let p=prompt("Power");

display.value=
Math.pow(display.value,p);

}





function saveHistory(data){

let h=
JSON.parse(localStorage.getItem("history"))||[];


h.push(data);


localStorage.setItem(
"history",
JSON.stringify(h)
);


showHistory();

}




function showHistory(){

let list=document.getElementById("historyList");


let h=
JSON.parse(localStorage.getItem("history"))||[];


list.innerHTML=h.reverse()
.map(x=>`<p>${x}</p>`)
.join("");

}




function clearHistory(){

localStorage.removeItem("history");

showHistory();

}



document.getElementById("theme").onclick=()=>{

document.body.classList.toggle("light");

};




showHistory();
