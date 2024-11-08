function decimalToBinary() {
    const container = document.querySelector('#decimalToBinary');
    const demo = container.querySelector('.demo');
    const input = container.querySelector('input');
    const negativeCheck = container.querySelector('input#negative-check');

    if (input.value.trim() == "") {
        demo.innerHTML = "Enter something";
        return;
    }

    if (isNaN(input.value.trim())) {
        demo.innerHTML = "Enter a numeric value";
        return;
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

    demo.innerHTML = binary.join('');
}

function binaryToDecimal() {
    const container = document.querySelector('#binaryToDecimal');
    const demo = container.querySelector('.demo');
    const input = container.querySelector('input');

    if (input.value.trim() == "") {
        demo.innerHTML = "Enter something";
        return;
    }

    if (isNaN(input.value.trim())) {
        demo.innerHTML = "Enter a numeric value";
        return;
    }

    if (/[2-9]/.test(input.value.trim())) {
        demo.innerHTML = "only 0 & 1";
        return;
    }

    let binary = input.value.split('');
    binary.reverse();
    let decimal = 0;
    let exponent = 1;

    binary.forEach(number => {
        if (number == 1) decimal += exponent;
        exponent *= 2;
        if (exponent == 1) exponent = 2;
    });

    demo.innerHTML = decimal;
}