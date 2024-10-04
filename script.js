// Captura las teclas presionadas
document.addEventListener('keydown', function(event) {
    const key = event.key; // Obtiene la tecla presionada
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', 'Enter', 'Backspace', 'Escape', '%'];

    // Si la tecla es válida, procesa la entrada
    if (validKeys.includes(key)) {
        handleKeyInput(key);
    }
});

function handleKeyInput(key) {
    const display = document.getElementById('display');

    if (key >= '0' && key <= '9' || key === '.') {
        input(key);  // Si es un número o un punto decimal, lo añade al display
    } else if (key === '+') {
        input('+');
    } else if (key === '-') {
        input('-');
    } else if (key === '*') {
        input('*');
    } else if (key === '/') {
        input('/');  // Se asegura de que el teclado maneje '/' como división
    } else if (key === '%') {
        input('%');  // Para manejar porcentaje
    } else if (key === 'Enter') {
        calculate();  // Calcula el resultado al presionar "Enter"
    } else if (key === 'Backspace') {
        deleteDigit();  // Borra el último dígito al presionar "Backspace"
    } else if (key === 'Escape') {
        clearDisplay();  // Limpia el display al presionar "Escape"
    }
}

function input(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteDigit() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
    } catch (error) {
        display.value = 'Error';
    }
}
