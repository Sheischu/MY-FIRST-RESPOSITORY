document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".logo");
    const text = "My Personal Portfolio";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); 
        }
    }

    textElement.textContent = ""; 
    typeEffect();
});