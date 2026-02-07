const display = document.querySelector("#display");
const button = document.querySelectorAll("button");

button.forEach((btn) => {
    btn.addEventListener("click", () => {

        if (btn.id === "=") {
            display.value = eval(display.value);

        } else if (btn.id === "ac") {
            display.value = "";

        } else if (btn.id === "de") {
            display.value = display.value.slice(0, -1);

        } else if (btn.id === "%") {
            display.value = Number(display.value) / 100;

        } else {
            display.value += btn.id;
        }

    });
});

