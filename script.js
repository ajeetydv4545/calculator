const display = document.getElementById("display");


function appendValue(value){

    display.value += value;

}



function clearDisplay(){

    display.value="";

}



function deleteLast(){

    display.value = display.value.slice(0,-1);

}



function calculate(){

    try{

        display.value = eval(display.value);

    }

    catch{

        display.value="Error";

    }

}



function scientific(type){

    let value = Number(display.value);


    if(type==="sin"){

        display.value = Math.sin(value * Math.PI / 180);

    }


    else if(type==="cos"){

        display.value = Math.cos(value * Math.PI / 180);

    }


    else if(type==="tan"){

        display.value = Math.tan(value * Math.PI / 180);

    }


    else if(type==="sqrt"){

        display.value = Math.sqrt(value);

    }


    else if(type==="log"){

        display.value = Math.log10(value);

    }

}



function power(){

    let value = Number(display.value);

    display.value = value * value;

}



// Keyboard support

document.addEventListener("keydown",(e)=>{


    if(
        e.key >= "0" &&
        e.key <= "9" ||
        "+-*/.".includes(e.key)
    ){

        appendValue(e.key);

    }


    if(e.key==="Enter"){

        calculate();

    }


    if(e.key==="Backspace"){

        deleteLast();

    }


    if(e.key==="Escape"){

        clearDisplay();

    }


});
