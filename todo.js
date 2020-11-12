const toDoForm = document.querySelector(".js-toDoForm"),
   toDoInput = toDoForm.querySelector("input"),
   toDoList = document.querySelector(".js-toDoList");

   const TODO_LS = "toDoList";

   

   let toDoArray = [];
   //const newId = toDoArray.length + 1;

  
   function deleteToDo(event){
        //html 파트 먼저 지우기 
        const btn = event.target;  //event.target으로 button태그를 받는다.
        const li = btn.parentNode;  //id값을 받는 속성은 parentNode이다.
        toDoList.removeChild(li); 

        //localStorage에서 지우기 
        const cleanToDo = toDoArray.filter(function(toDo){   //Array안의 true인 값들만 반환한다.
            toDo.id !== parseInt(li.id);   /*지워지고 남은 element들을 반환한다. li태그의 ID값은 문자열로 나타나기 
                                           때문에 숫자형으로 바꿔준다.*/
        })
      
        toDoArray = cleanToDo; 
        saveToDoList();
        
   }
 

   function saveToDoList(){
       localStorage.setItem(TODO_LS, JSON.stringify(toDoArray));
   }   

   function showToDoList(list){
       const li = document.createElement("li");
       const delBtn = document.createElement("button");
       const span = document.createElement("span");
       delBtn.innerText = "❌";
       delBtn.addEventListener("click", deleteToDo)
      
       
       span.innerText = list;

       li.id = toDoArray.length + 1;       
       li.appendChild(delBtn);
       li.appendChild(span);
       toDoList.appendChild(li);
       
       const toDoObj = {
           id : toDoArray.length +1,
           contents : list
       }
      
       toDoArray.push(toDoObj);
       saveToDoList();

   }

   function handleSubmit(event){
      event.preventDefault();
      const currentValue = toDoInput.value;
      //console.log(currentValue);
      showToDoList(currentValue);
      toDoInput.value = "";
   }
   
   
   function loadedToDo(){
       const loadedToDo = localStorage.getItem(TODO_LS);
       if(loadedToDo !== null){
          const parsedToDo = JSON.parse(loadedToDo);
          parsedToDo.forEach(function(toDo){
              showToDoList(toDo.contents);
          })
       }
   }


   function init(){
     loadedToDo();
     toDoForm.addEventListener("submit", handleSubmit);

   }

   init();