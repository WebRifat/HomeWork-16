let DarkModeBtn = document.querySelector('.DarkModeBtn');
let body = document.querySelector('body');
let heading = document.querySelector('h2');

function Darkmode () {

    body.classList.toggle("darkmode");
    

    if (body.classList.contains('darkmode')){

        heading.innerHTML = `DarkMode`;
        
    } else{


        heading.innerHTML = `LightMode`;

        

    }

}

DarkModeBtn.addEventListener('click', Darkmode);



// custom mouse 

let cursor = document.querySelector(".cursor");
let cursorSm =document.querySelector(".cursor-sm");



function CustomMouseCuror (event) {
    topValue = event.clientY;
    leftValue = event.clientX;


    cursor.style.top = `${topValue}px`
    cursor.style.left = `${leftValue}px`
    cursorSm.style.top = `${topValue}px`
    cursorSm.style.left = `${leftValue}px`

}





window.addEventListener("mousemove", CustomMouseCuror);
