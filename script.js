let display=document.getElementById("display");

let sound=true;



function clickEffect(){

if(sound){

let audio=new Audio(
"https://www.soundjay.com/buttons/sounds/button-16.mp3"
);

audio.play();

}


if(navigator.vibrate){

navigator.vibrate(30);

}

}




function append(value){

clickEffect();

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

let result=eval(display.value);

saveHistory(
display.value+" = "+result
);

display.value=result;


}

catch{

display.value="Error";

}

}




function scientific(type){

let v=Number(display.value);


if(type=="sin")
display.value=Math.sin(v*Math.PI/180);


if(type=="cos")
display.value=Math.cos(v*Math.PI/180);


if(type=="tan")
display.value=Math.tan(v*Math.PI/180);


if(type=="sqrt")
display.value=Math.sqrt(v);


if(type=="log")
display.value=Math.log10(v);


if(type=="ln")
display.value=Math.log(v);

}




function square(){

display.value=display.value**2;

}



function power(){

let p=prompt("Power");

display.value=Math.pow(display.value,p);

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

if(!list)return;


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




function showPage(page){

document
.querySelectorAll("section")
.forEach(x=>x.classList.add("hide"));


document.getElementById(page)
.classList.remove("hide");


showHistory();

}



function toggleTheme(){

document.body.style.background=
document.body.style.background=="white"
?"black"
:"white";

}



function toggleSound(){

sound=!sound;

}



showHistory();
