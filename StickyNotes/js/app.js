// Datos de prueba
let notas = [];

// Variable para almacenar el índice de la nota que se está editando
let indexEdicion = -1;

if (localStorage.getItem('notas')) {
    notas = JSON.parse(localStorage.getItem('notas'));
}

// Función para mostrar las notas en la interfaz
function mostrarNotas() {
    const contenedorNotas = document.getElementById('contenedor');
    contenedorNotas.innerHTML = '';

    notas.forEach((nota, index) => {
        const elemento = document.createElement('div');
        elemento.className = 'nota';
        elemento.innerHTML = `
            <div class="texto">${nota}</div>
            <div class="botones">
            <div class="delete-button" onclick="eliminarNota(${index})"><img class="icono" src="recursos/delete_8532468.png" alt="" srcset="">
            </div>
            <div class="edit-button" onclick="editarNota(${index})"><img class="icono" src="recursos/write_5828638.png" alt="" srcset="">
            </div>
            </div>
        `;
        contenedorNotas.appendChild(elemento);
    });

    // Guardar las notas en localStorage
    localStorage.setItem('notas', JSON.stringify(notas));
}

// Función para agregar o editar una nota
function añadirOEditarNota() {
    const nuevaNota = document.getElementById('new-note').value;
    if (nuevaNota.trim() !== '') {
        if (indexEdicion === -1) {
            // Agregar nueva nota
            notas.push(nuevaNota);
        } else {
            // Editar nota existente
            notas[indexEdicion] = nuevaNota;
            indexEdicion = -1; // Restablecer el índice de edición
        }

        mostrarNotas();
        document.getElementById('new-note').value = '';
    }
}

// Función para editar una nota
function editarNota(index) {
    document.getElementById('new-note').value = notas[index];
    indexEdicion = index;
}

// Función para eliminar una nota
function eliminarNota(index) {
    notas.splice(index, 1);
    mostrarNotas();
}

// Mostrar las notas iniciales
mostrarNotas();