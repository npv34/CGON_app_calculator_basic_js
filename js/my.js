function setInput(number) {
    document.getElementById('input').value += number;
}

function getResult() {
    let input = document.getElementById('input').value;
    document.getElementById('input').value = eval(input);
}

function clearInput() {
    document.getElementById('input').value = '';
}
