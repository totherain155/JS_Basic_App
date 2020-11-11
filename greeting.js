const form = document.querySelector(".js-form"),
   input = form.querySelector("input"),
   greetings = document.querySelector(".js-greetings");

const LS_NAME = "user";
const SHOW_CLASS = "showing"

function saveName(name){
   localStorage.setItem(LS_NAME, `${name}`)

}

function handleSubmit(event){
   event.preventDefault();
   const currentValue = input.value;
   showYourName(currentValue);
   form.classList.remove(SHOW_CLASS);
   saveName(currentValue);


}

function askForName(){
    form.classList.add(SHOW_CLASS);  
    form.addEventListener("submit", handleSubmit);   
      
}


function showYourName(name){
   greetings.classList.add(SHOW_CLASS);
   greetings.innerText = `welcome ${name}`

}


function loadName(){
    const currentName = localStorage.getItem(LS_NAME);
    if(currentName === null){
        askForName();
    }else{
        showYourName(currentName);
    }

}   



function init(){
    loadName();

}


init();