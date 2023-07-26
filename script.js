const canvas = document.querySelector(".container");
const clearButton = document.getElementById("clear");


let sizeOfCanvas = 16;
let pixelColor = "black";

drawCanvas();



clearButton.addEventListener("click", () => {
    console.log();
    deleteCanvas();
    drawCanvas();
   
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