const btn = document.getElementById("btn");


function changeColor() {
    const inputColor = document.getElementById('inputColor').value;
    if (inputColor === "red") {
        document.body.style.backgroundColor = 'red'
    } else if(inputColor === "blue") {
        document.body.style.backgroundColor = 'blue'
    } else if (inputColor === "green") {
        document.body.style.backgroundColor = 'green'
    } else if (inputColor === "black") {
        document.body.style.backgroundColor = 'black'
    } else if (inputColor === "white") {
        document.body.style.backgroundColor = 'white'
    } else {
        alert('you can only choose colors: red, blue, green, black or white')
    }
}

btn.addEventListener('click', changeColor)