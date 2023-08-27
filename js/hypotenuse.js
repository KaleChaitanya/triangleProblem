const inputs = document.querySelectorAll(".side");
const btnHypotenuse = document.querySelector("#btnHypotenuse");
const outputEl = document.querySelector("#output");

function calculateSum(a, b) {
    const sumOfSquare = (a * a + b * b);
    return sumOfSquare;
}

function calculateHypotenuse() {
    const sumOfSquare = calculateSum(Number(inputs[0].value), Number(inputs[1].value));
    const squareRoot = Math.sqrt(sumOfSquare);
    if (squareRoot) {
        outputEl.innerText = `The hypotenuse of a triangle is ${squareRoot}`;
    }
    else{
        outputEl.innerText = "Please enter length of tringle";
    }


}
btnHypotenuse.addEventListener("click", calculateHypotenuse);