let dino = document.querySelector(".seo");
let block = document.querySelector(".block");
let points = document.querySelector(".points");
let result = document.querySelector(".finalPoints");
let btnReload = document.getElementById("reload");
let modal = document.getElementById("modal");

function pointsChecker(){
    !modal.classList.contains("end")? points.textContent = Number(points.textContent) + 1 : false
}

setInterval(()=>{
    
        if(dino.offsetLeft+15 >= block.offsetLeft && dino.offsetTop + dino.offsetHeight-10 >= block.offsetTop){
            console.log("Skok nieudany");
            modal.classList.add("end");
            block.style.animation = "none";
            result.textContent = points.textContent;
        }else false
    
},10)

setInterval(pointsChecker, 500);

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

btnReload.addEventListener("click", ()=>window.location.reload())
window.addEventListener("keydown", jump())