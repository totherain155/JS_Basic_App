const body = document.querySelector("body");


function showImage(imageNumber){
   const image = new Image();
   image.src = `images/${imageNumber + 1}.jpg`
   image.classList.add("bgImage");
   body.appendChild(image);
}

function generateRandom(){
    const number = Math.floor(Math.random() * 5);
    return number;
}


function init(){
 const randomNumber = generateRandom();
 showImage(randomNumber);

}

init();