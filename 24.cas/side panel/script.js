let textButton = document.getElementById("text_btn");
let colorButton = document.getElementById("color_btn");
let colorPicker = document.getElementById("color");
let textInput = document.getElementById("text_input");
let textShowing = document.getElementById("some_text");

textButton.addEventListener("click", () => {
    let text = textInput.value;
    textShowing.innerText = text;
})

colorButton.addEventListener("click", () => {
    let color = colorPicker.value;
    textShowing.style.backgroundColor = color;
})