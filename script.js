const canvas = document.querySelector(".container");
const clearButton = document.getElementById("clear");
const eraserButton = document.getElementById("eraser");
const penButton = document.getElementById("pen");
const randomButton = document.getElementById("random");
const colorPicker = document.getElementById("colorPicker");
const pixelNumber = document.getElementById("pixelNumber");
const pixelNumberDisplay = document.getElementById("grid");
const gridButton = document.getElementById("border");


const root = document.querySelector(":root");

let sizeOfCanvas = 32;
let pixelColor = "dimgray";

drawCanvas();

clearButton.addEventListener("click", () => {
    deleteCanvas();
    drawCanvas();
   
})

eraserButton.addEventListener("click", () =>{
    pixelColor = "#FAF9F6";
})

penButton.addEventListener("click", () => {
    pixelColor = "dimgray";
})

randomButton.addEventListener("click", () => {
    pixelColor = "rgb(" + `${Math.floor((Math.random() * 255))}, ${Math.floor((Math.random() * 255))}, ${Math.floor((Math.random() * 255))}` + ")"; 
    
})

colorPicker.addEventListener("input", (e) => {
    pixelColor = e.target.value;
})

pixelNumber.addEventListener("input", (e)=> {
    sizeOfCanvas = e.target.value;
    pixelNumberDisplay.textContent = e.target.value + "x" + e.target.value;
    deleteCanvas();
    drawCanvas();
})


gridButton.addEventListener("click", () => {
    console.log(1);
    pixels.forEach(pixel => {
        pixel.style.border = 0;
    })
})




function drawCanvas(){

    let size = getComputedStyle(root).getPropertyValue("--canvasSize");
    for (let i = 0; i < sizeOfCanvas * sizeOfCanvas; i++){
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width = size/sizeOfCanvas + "px";
        pixel.style.height = size/sizeOfCanvas + "px";
        canvas.appendChild(pixel);
    }

    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel => {
    pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = pixelColor;
        })
    })

}


function deleteCanvas(){
    while(canvas.firstChild){
        canvas.removeChild(canvas.lastChild);
    }
}