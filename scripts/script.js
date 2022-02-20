//Constants and variables.
const console = document.getElementById('console');
const divsNumber = document.getElementById('divsNumber');
const timeInterval = document.getElementById('timeInterval');

const startX = 525;
const startY = 400;
const radius = 100;

let divsArray = [];

//Buttons.
const test = document.getElementById('test');
const create = document.getElementById('create');
const animate = document.getElementById('animate');

test.addEventListener('click', filledInputs);
create.addEventListener('click', createDivs);
animate.addEventListener('click', animateDivs);

function filledInputs() {
    divsNumber.value = 20;
    timeInterval.value = 200;
}

//Create divs function.
function createDivs() {
    const number = parseInt(divsNumber.value);
   
    for (let i = 0; i < number; i++) {
        let currentX = Math.round(startX + radius * Math.cos(2 * Math.PI * i / number));
        let currentY = Math.round(startY + radius * Math.sin(2 * Math.PI * i / number));
        let coordinates = `top: ${currentY}px; left: ${currentX}px;`;

        let circle = document.createElement('div');
        circle.setAttribute('class', 'circle');
        circle.setAttribute('style', coordinates);
        circle.setAttribute('id', `circle ${i}`);
        console.appendChild(circle);

        divsArray.push(circle);
    }
}

//Animate divs function.
function animateDivs() {
    const number = parseInt(divsNumber.value);
    const time = parseInt(timeInterval.value);

    let start = 0;
    let degree = 2 * Math.PI / 75;

    const colors = ['red', 'darkorange', 'darkolivegreen', 'gold', 'chartreuse', 'aqua', 'blue', 'violet', 'white', 'brown', 'crimson', 'khaki', 'cornflowerblue', 'coral'];

    for (let i = 0; i < divsArray.length; i++) {
        let circle = document.getElementById(`circle ${i}`);
        
        setInterval(function() {
            start += ((degree * (i + 360/number)/ number), 50);
            circle.style.left = startX + radius * Math.cos(start) + 'px';
            circle.style.top = startY + radius * Math.sin(start) + 'px';    
        }, time);
        
        setInterval(function() {
            let color = colors.shift();
            divsArray[i].style.background = color;
            colors.push(color);
        }, time);
    }
}
