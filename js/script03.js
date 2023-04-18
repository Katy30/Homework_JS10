/*Створити блок на сторінці який переміщужться на 10рх в сторону стрілки яку натиснули */

let div=document.getElementById('block');
let xPosition = 0, yPosition = 0;
function moveBlock(event) {
    if (event.key === "ArrowRight") {
        xPosition += 10;
    } else if (event.key === "ArrowLeft") {
        xPosition -= 10;
    } else if (event.key === "ArrowUp") {
        yPosition -= 10;
    } else if (event.key === "ArrowDown") {
        yPosition += 10;
    }

    div.style.left = xPosition + "px";
    div.style.top = yPosition + "px";
}

document.addEventListener("keydown", moveBlock);
