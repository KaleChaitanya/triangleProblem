const inputs = document.querySelectorAll('.angle');
const btnIsTringle = document.querySelector('.btnIsTriangle');
const output = document.querySelector('#output');

function calculateSum(angle1, angle2, angle3) {
    const sumOfTringle = angle1 + angle2 + angle3;
    return sumOfTringle;
}

function isTringle() {
    const sumOfTringle = calculateSum(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfTringle)
    if (sumOfTringle === 180) {
        output.innerText = "The angle performs a tringle."
    }
    else {
        output.innerText = "The angle not performs a tringle."
    }
    else{
        output.innerText = "Please enter all angle values."
    }
}


btnIsTringle.addEventListener('click', isTringle)