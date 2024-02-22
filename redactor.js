document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".button__button");
    const input = document.getElementById("text");
    const output = document.getElementById("result");

    button.addEventListener("click", function() {
        const text = input.value;
        const length = text.length;
        output.textContent = `Кількість символів у тексті: ${length}`;
    });
});
