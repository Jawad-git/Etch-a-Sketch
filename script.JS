const container = document.querySelector(".container");
let i=0;
let j=0;
n= 5;

function CreateGrid (){
for (i = 0; i < 16; i++) {
    for (j=0; j<16; j++) {
        const element = document.createElement("div");
        element.classList.add('child');
        element.style.width= '6.25%';
        container.appendChild(element);
    }
}
colorGrid();
}





const butt1 = document.querySelector(".butt1");
butt1.addEventListener("click", () => {
    let n = prompt("enter the number of boxes");
    const container = document.querySelector(".container");
    reSize(n) })
//      container.innerHTML = '';
//     for (i = 0; i < n; i++) {
//         for (j = 0; j < n; j++) {
//             const element = document.createElement("div");
//             element.classList.add('child');
//             element.style.width= '3%';
//             container.appendChild(element);
//         }
//     }
//     colorGrid();

// })

function colorGrid (){
const elements = document.querySelectorAll(".child");
elements.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.classList.add("colorPixel");}
    );
});
}





function reSize (n){
container.innerHTML = '';
let size = (1/n) * 100;
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        const element = document.createElement("div");
        element.classList.add('child');
        element.style.width= `${size}%`;
        container.appendChild(element);
    }
}
colorGrid();
}


CreateGrid();