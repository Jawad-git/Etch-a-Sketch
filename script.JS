const container = document.querySelector(".container");
let i=0;
let j=0;
for (i=0; i<16; i++) {
    for (j=0; j<16; j++) {
        const element = document.createElement("div");
        element.classList.add('child');
        element.textContent = "lol";
        container.appendChild(element);
    }
}