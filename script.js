const display = document.getElementById("display");
const previous = document.getElementById("previous");

let sound = true;


// =======================
// BASIC FUNCTIONS
// =======================


function append(value){

    buttonFeedback();

    display.value += value;

}



function clearDisplay(){

    buttonFeedback();

    display.value = "";

    previous.innerHTML = "";

}



function deleteLast(){

    buttonFeedback();

    display.value =
    display.value.slice(0,-1);

}




function calculate(){

    buttonFeedback();


    try{

        let expression = display.value;


        let result = eval(expression);



        previous.innerHTML =
        expression;



        display.value = result;



        saveHistory(
            expression + " = " + result
        );



    }

    catch{

        display.value = "Error";

    }

}



// =======================
// SCIENTIFIC FUNCTIONS
// =======================


function scientific(type){


    buttonFeedback();


    let value = Number(display.value);



    switch(type){


        case "sin":

            display.value =
            Math.sin(value * Math.PI / 180);

            break;



        case "cos":

            display.value =
            Math.cos(value * Math.PI / 180);

            break;



        case "tan":

            display.value =
            Math.tan(value * Math.PI / 180);

            break;



        case "sqrt":

            display.value =
            Math.sqrt(value);

            break;



        case "log":

            display.value =
            Math.log10(value);

            break;



        case "ln":

            display.value =
            Math.log(value);

            break;


    }

}




function square(){

    buttonFeedback();

    display.value =
    Number(display.value) ** 2;

}




function power(){

    buttonFeedback();


    let exponent =
    prompt("Enter power");



    if(exponent !== null){

        display.value =
        Math.pow(
            Number(display.value),
            Number(exponent)
        );

    }

}





// =======================
// HISTORY SYSTEM
// =======================



function saveHistory(data){


    let history =
    JSON.parse(
        localStorage.getItem("history")
    ) || [];



    history.push(data);



    localStorage.setItem(
        "history",
        JSON.stringify(history)
    );



    showHistory();

}




function showHistory(){


    let list =
    document.getElementById("historyList");



    if(!list)
    return;



    let history =
    JSON.parse(
        localStorage.getItem("history")
    ) || [];



    list.innerHTML = "";



    history
    .slice()
    .reverse()
    .forEach(item=>{


        list.innerHTML +=
        `<p>${item}</p>`;


    });



}





function clearHistory(){


    localStorage.removeItem("history");


    showHistory();


}







// =======================
// PAGE NAVIGATION
// =======================


function showPage(page){


    document
    .querySelectorAll("section")
    .forEach(section=>{


        section.classList.add("hide");


    });



    document
    .getElementById(page)
    .classList.remove("hide");



    if(page==="historyPage"){

        showHistory();

    }


}






// =======================
// THEME
// =======================


function toggleTheme(){


    document.body.classList.toggle("light");



    localStorage.setItem(

        "theme",

        document.body.classList.contains("light")
        ?
        "light"
        :
        "dark"

    );


}




// Load saved theme

if(
    localStorage.getItem("theme")
    ===
    "light"
){

    document.body.classList.add("light");

}







// =======================
// SOUND + VIBRATION
// =======================


function toggleSound(){

    sound = !sound;

}




function buttonFeedback(){


    if(sound){


        let audio =
        new Audio(
        "https://www.soundjay.com/buttons/sounds/button-16.mp3"
        );


        audio.play()
        .catch(()=>{});


    }



    if(navigator.vibrate){

        navigator.vibrate(30);

    }


}






// =======================
// KEYBOARD SUPPORT
// =======================


document.addEventListener(
"keydown",
function(e){



    if(
        (e.key >= "0" && e.key <= "9")
        ||
        "+-*/.".includes(e.key)

    ){

        append(e.key);

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





showHistory();
