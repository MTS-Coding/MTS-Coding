const textElement = document.getElementById("typewriter");
    const text = textElement.textContent;
    textElement.textContent = "";

    let i = 0;
    function typeEffect() {
        if (i < text.length) {
            textElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeEffect, 60);
        }
    }

    typeEffect();