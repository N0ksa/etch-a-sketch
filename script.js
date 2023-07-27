const canvas = document.querySelector(".container");
const clearButton = document.getElementById("clear");
const eraserButton = document.getElementById("eraser");
const penButton = document.getElementById("pen");
const randomButton = document.getElementById("random");
const colorPicker = document.getElementById("colorPicker");
const pixelNumber = document.getElementById("pixelNumber");
const pixelNumberDisplay = document.getElementById("grid");
const gridButton = document.getElementById("border");
let pixels;

const root = document.querySelector(":root");

let sizeOfCanvas = 32;
let pixelColor = "dimgray";
let grid = true;

drawCanvas();


clearButton.addEventListener("click", () => {
   pixels.forEach(pixel => {
    pixel.style.backgroundColor = "#FAF9F6";
   })
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
        
    if (grid){
        gridButton.textContent = "SHOW GRID";
        root.style.setProperty("--pixel-border-width", 0);
        grid = false;
        pixels.forEach(pixel => {
            pixel.style.border = 0;
        })
    }else{
        gridButton.textContent = "HIDE GRID";
        root.style.setProperty("--pixel-border-width", 0.1);
        grid = true;
        pixels.forEach(pixel => {
            pixel.style.border = "1px solid black";
        })
    }

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

    pixels = document.querySelectorAll(".pixel");
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

    removeEventListener("mouseover", pixels);

}