let display = document.getElementById("display");

let sound = true;


// Button feedback
function clickEffect(){

    if(sound){
        // sound optional hai, error avoid karne ke liye
        let audio = new Audio(
            "https://www.soundjay.com/buttons/sounds/button-16.mp3"
        );

        audio.play().catch(()=>{});
    }


    if(navigator.vibrate){
        navigator.vibrate(30);
    }

}


// Add value
function append(value){

    clickEffect();

    display.value += value;

}


// Clear
function clearDisplay(){

    display.value = "";

}


// Delete last
function deleteLast(){

    display.value = display.value.slice(0,-1);

}


// Calculate
function calculate(){

    try{

        let expression = display.value;

        let result = eval(expression);


        saveHistory(
            expression + " = " + result
        );


        display.value = result;


    }
    catch{

        display.value = "Error";

    }

}


// Scientific functions

function scientific(type){

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



// Square
function square(){

    display.value =
    Number(display.value) ** 2;

}



// Power
function power(){

    let p = prompt("Enter power");

    display.value =
    Math.pow(Number(display.value), Number(p));

}



// History save

function saveHistory(data){

    let history =
    JSON.parse(localStorage.getItem("history")) || [];


    history.push(data);


    localStorage.setItem(
        "history",
        JSON.stringify(history)
    );


    showHistory();

}



// Show history

function showHistory(){

    let list =
    document.getElementById("historyList");


    if(!list) return;


    let history =
    JSON.parse(localStorage.getItem("history")) || [];


    list.innerHTML = "";


    history.reverse().forEach(item=>{

        list.innerHTML +=
        `<p>${item}</p>`;

    });

}



// Clear history

function clearHistory(){

    localStorage.removeItem("history");

    showHistory();

}



// Page navigation

function showPage(page){

    document
    .querySelectorAll("section")
    .forEach(section=>{

        section.classList.add("hide");

    });


    document
    .getElementById(page)
    .classList.remove("hide");


    showHistory();

}



// Theme

function toggleTheme(){

    document.body.classList.toggle("light");

}



// Sound

function toggleSound(){

    sound = !sound;

}



showHistory();
