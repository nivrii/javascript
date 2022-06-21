const btnClick = document.getElementById("button");
btnClick.addEventListener("click", printName);

function printName() {
    var text = document.getElementById('input').value;
    document.querySelector('p').innerHTML = "Hello ${text}, welcome to the bootcamp"
}
