const body = document.querySelector("body");

const IMG_NUMBER = 5;

function showImage(imageNumber){
   const image = new Image();  //image 객체 생성
   image.src = `images/${imageNumber + 1}.jpg`
   body.appendChild(image);
   image.classList.add("bgImage");
}


function generateRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}


function init(){
  const randomNumber = generateRandom();
  showImage(randomNumber);
}

init();