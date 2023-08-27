// Area of Triangle A = 1/2 (base * height)
const inputs = document.querySelectorAll('.input');
const btnArea = document.querySelector('#btnArea');
const outputEl = document.querySelector('#output');

function calculateFormula(base, height) {
    const result = 0.5 * (base * height);
    return result
}
function calculateArea() {
    const result = calculateFormula(Number(inputs[0].value), Number(inputs[1].value));
    if (result) {
        outputEl.innerText = `The Area of triangle is ${result}cm2`;
    }
    else {
        outputEl.innerText = "Please enter base and height values";
    }
}


btnArea.addEventListener('click', calculateArea);