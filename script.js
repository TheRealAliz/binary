const input = document.querySelector('#entry');
const demo = document.querySelector('.demo');
const negativeCheck = document.querySelector('#negative-check');

window.addEventListener('load', () => {
    input.value = "";
    negativeCheck.checked = false;
})

input.addEventListener('input', show);
negativeCheck.addEventListener('input', show);

function show() {
    demo.innerHTML = convert();
}

function convert() {
    if (input.value.trim() == "") {
        return "Enter something";
    }

    if (isNaN(input.value.trim())) {
        return "Enter a numbric value";
    }

    let decimal = input.value.trim().replace("-","");
    let binary = [];

    while (decimal >= 2) {
        binary.push(Math.floor(decimal % 2));
        decimal /= 2;
    }

    if (decimal < 2) {
        binary.push(1);
    }

    if (negativeCheck.checked) {
        binary.push(0)
        if (input.value.charAt(0) == "-") {
            binary.forEach((value, index, binary) => {
                binary[index] = value == 0 ? 1 : 0;
            });
        }
    }

    binary.reverse();

    return binary.join('');
}