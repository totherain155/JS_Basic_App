 const clockContainer = document.querySelector(".js-clock"),
   clockTitle = clockContainer.querySelector("h1");

 

 // clockTitle.innerText = "99:99";  
  
     function getTime(){
        const day = new Date();
        const hour = day.getHours();
        const minute = day.getMinutes();
        const seconds = day.getSeconds();
        clockTitle.innerText = `${hour <10 ? `0${hour}` : hour}:${minute <10 ? `0${minute}` : minute}:${seconds < 10 ? `0${seconds}` : seconds}`

     }
  
    function init(){
        setInterval(getTime, 1000);
   
    }

    init();