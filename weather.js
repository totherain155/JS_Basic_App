
const weather = document.querySelector(".js-weather");

const API_KEY ='37e21d954ac3fbf6e079b260a6df38d3';
const LS_COORDS = 'coords';

function getWeather(lat, lng){
   fetch(
       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}
      `
   //데이터를 얻을 때 사용하는 방법이다.
   ).then(function(response){
      return response.json();
   })
   .then(function(json){
       const temperature = json.main.temp;
       const place = json.name;
       weather.innerText = `${temperature} @ ${place}`;

   });
    
}

function saveCoords(coordsObj){
    localStorage.setItem(LS_COORDS, JSON.stringify(coordsObj))
}


function handleGeoSuccess(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
      latitude,
      longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoErrors(){
    console.log('you can not find your location')
}

function askForCoords(){
     navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoErrors);
       
}

function loadCoords(){
 const loadedCoords = localStorage.getItem(LS_COORDS);
 if(loadedCoords === null ){
     askForCoords();
 }else{
     const parsedCoords = JSON.parse(loadedCoords);
     getWeather(parsedCoords.latitude, parsedCoords.longitude);
 }
}


function init(){
   loadCoords();

}


init();