let toogleTheme = document.getElementById("toogle-theme");
let toogleIcon = document.getElementById("toogle-icon");
let toogleText = document.getElementById("toogle-text");
let toogleColors =document.getElementById("toogle-colors");
let rootStyles =document.documentElement.style;


toogleTheme.addEventListener("click",() =>{
    document.body.classList.toggle("dark")
    if(toogleIcon.src.includes("moon.svg")){
        toogleIcon.src="assets/icons/sun.svg"
        toogleText.textContent="Light Mode"
    }else{
        toogleIcon.src="assets/icons/moon.svg"
        toogleText.textContent="Dark Mode"
    }
});

toogleColors.addEventListener("click",(e) => {
   rootStyles.setProperty('--primary-color',e.target.dataset.color);
});

