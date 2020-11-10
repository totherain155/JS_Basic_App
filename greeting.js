const form = document.querySelector(".js-form"),
   input = form.querySelector("input"),
   greeting = document.querySelector(".js-greetings");

   const USER_LS = "tempUser",
       SHOWING_CN = "showing";

   function saveName(name){
      localStorage.setItem(USER_LS, name);
   }

   
   function handleSubmit(event){
      event.preventDefault();
      const currentValue = input.value;
      ShowYourName(currentValue);
      form.classList.remove(SHOWING_CN); //showYourName함수 속이 아닌 이곳에 포함시켜 보았다. 
      saveName(currentValue);
   }

   function askForName(){
      form.classList.add(SHOWING_CN);
      form.addEventListener("submit", handleSubmit);

   }    


   function ShowYourName(name){
      //form.classList.remove(SHOWING_CN);
      greeting.classList.add(SHOWING_CN);
      greeting.innerText = `Good to see you ${name}!!`

   }


   function loadName(){
      const currentUser = localStorage.getItem(USER_LS);
      if(currentUser === null){
          askForName();  // localStorage가 비어있다면 이름을 물어보자.
      }else{
          ShowYourName(currentUser); // localStorage에 이름이 있다면 화면에 표시한다.
      }
   }



   function init(){
      loadName();

   }

   init();