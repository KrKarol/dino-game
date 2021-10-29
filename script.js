let dino = document.querySelector(".seo");
let block = document.querySelector(".block");


console.log(block.offsetLeft);

window.addEventListener("keydown", newFunction())

setInterval(()=>{
    if(dino.offsetLeft+20 >= block.offsetLeft ){
        console.log("bam");
        console.log(block.offsetLeft)
        block.style.animation = "none";
        alert("zgon")
    }
},10)

function newFunction() {
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
