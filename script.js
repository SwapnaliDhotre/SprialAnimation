const word = "coding is cool"
const ANIMATION_DURATION = 4000;

const character = word.split("").forEach((char, i) => {
    function createElement(offset){
        const div = document.createElement("div");
        div.innerText = char;
        div.classList.add("character");
        div.style.animationDelay = `-${i*(ANIMATION_DURATION/16) - offset}ms`
        return div;
    }
    document.getElementById("sprial").append(createElement(0));
    document.getElementById("sprial2").append(createElement(-1 * (ANIMATION_DURATION/2)));
    
});