const canvas = document.querySelector(".container");
const clearButton = document.getElementById("clear");
const eraserButton = document.getElementById("eraser");
const penButton = document.getElementById("pen");
const randomButton = document.getElementById("random");
const colorPicker = document.getElementById("colorPicker");


let sizeOfCanvas = 32;
let pixelColor = "dimgray";

drawCanvas();
clearButton.addEventListener("click", () => {
    deleteCanvas();
    drawCanvas();
   
})

eraserButton.addEventListener("click", () =>{
    pixelColor = "#FAF9F6";
    console.log(pixelColor);
})

penButton.addEventListener("click", () => {
    pixelColor = "dimgray";
})

randomButton.addEventListener("click", () => {
    pixelColor = "rgb(" + `${Math.floor((Math.random() * 255))}, ${Math.floor((Math.random() * 255))}, ${Math.floor((Math.random() * 255))}` + ")"; 
    console.log(pixelColor);
})

colorPicker.addEventListener("input", (e) => {
    pixelColor = e.target.value;
})












function drawCanvas(){
    for (let i = 0; i < sizeOfCanvas * sizeOfCanvas; i++){
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width = 500/sizeOfCanvas + "px";
        pixel.style.height = 500/sizeOfCanvas + "px";
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