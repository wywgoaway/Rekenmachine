const inputValue = document.getElementById("user-input");

document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
            inputValue.innerText = "";
        }
        inputValue.innerText += e.target.innerHTML.trim();
    });
});

document.querySelectorAll(".operations").forEach(function (item) {
    item.addEventListener("click", function (e) {
        let lastValue = inputValue.innerText.slice(-1);

        if (!isNaN(lastValue) && e.target.innerHTML === "=") {
            inputValue.innerText = eval(inputValue.innerText);
        } else if (e.target.innerHTML === "AC") {
            inputValue.innerText = "0";
        } else if (e.target.innerHTML === "DEL") {
            inputValue.innerText = inputValue.innerText.slice(0, -1) || "0";
        } else {
            if (!isNaN(lastValue)) {
                inputValue.innerText += e.target.innerHTML;
            }
        }
    });
});
