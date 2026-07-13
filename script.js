const display=document.getElementById("display");


const previous=document.getElementById("previous");


let buttons=document.querySelectorAll("button");



buttons.forEach(button=>{


button.onclick=()=>{


let value=button.innerText;



if(value==="AC"){

display.value="";

previous.innerHTML="";

}



else if(value==="="){

try{

previous.innerHTML=display.value;

display.value=eval(display.value);

}

catch{

display.value="Error";

}

}



else if(value==="×"){

display.value+="*";

}



else if(value==="÷"){

display.value+="/";

}



else if(value==="−"){

display.value+="-";

}



else if(value==="±"){

display.value=
display.value * -1;

}



else{

display.value+=value;

}


}


});
