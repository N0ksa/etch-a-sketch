const canvas = document.querySelector(".container");

for (let i = 0; i < 16; i++){
    for (let j = 0; j < 16; j++){
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width = 500/16 + "px";
        pixel.style.height = 500/16 + "px";
        canvas.appendChild(pixel);
    }

}