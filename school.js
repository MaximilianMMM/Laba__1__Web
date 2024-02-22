document.addEventListener('DOMContentLoaded', function () {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const addButton = document.querySelector('.button__button');
    const sumOutput = document.getElementById('res1');
    const productOutput = document.getElementById('res2');

    addButton.addEventListener('click', function () {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const sum = num1 + num2;
        const product = num1 * num2;

        sumOutput.textContent = isNaN(sum) ? 'Введіть числа' : `Сума: ${sum}`;
        productOutput.textContent = isNaN(product) ? 'Введіть числа' : `Добуток: ${product}`;
    });
});