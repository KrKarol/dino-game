let dino = document.querySelector(".seo");
let block = document.querySelector(".block");
let points = document.querySelector(".points");

setInterval(()=>{
    if(dino.offsetLeft+15 >= block.offsetLeft && dino.offsetTop + dino.offsetHeight >= block.offsetTop){
        console.log("Skok nieudany");
        block.style.animation = "none";
        alert("Zdobyłeś/aś: " + points.textContent)
    }else false
},10)

setInterval(() => {
    points.textContent = Number(points.textContent) + 1;
}, 500);

function jump() {
    return function (e) {
        if (e.key == "ArrowUp") {
            if (dino.classList.contains("jump")) {
                return false;
            } else {
                dino.classList.add("jump");
            }

            setTimeout(() => {
                dino.classList.remove("jump");
            }, 500);
        }
    }
}


window.addEventListener("keydown", jump())