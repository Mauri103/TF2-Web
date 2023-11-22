let valorPantalla = '';

function agregarNumero(numero) {
    valorPantalla += numero;
    actualizarPantalla();
}



function agregarNumero(numero) {
    valorPantalla += numero;
    actualizarPantalla();
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (/[0-9]/.test(key)) {
        agregarNumero(key);
    }
});

function agregarOperador(operador) {
    valorPantalla += ` ${operador} `;
    actualizarPantalla();
}

function limpiarPantalla() {
    valorPantalla = '';
    actualizarPantalla();
}

function borrarUltimo() {
    valorPantalla = valorPantalla.slice(0, -1);
    actualizarPantalla();
    
}


function calcularResultado() {
        const resultado = eval(valorPantalla);
        valorPantalla = resultado;
        actualizarPantalla();  
}

function actualizarPantalla() {
    const pantalla = document.getElementById('pantalla');
    pantalla.value = valorPantalla;
}
