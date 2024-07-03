let numeroSecreto = 0;
let intentos = 0;
let maximoIntentos = 10;
let numerosSorteados = [];

condicionesIniciales();

// BOTÓN: Validar si el número insertado es igual al número secreto
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numerosSorteados.length == maximoIntentos) {
        asignarElementoHTML('p', 'Fin del juego, recargue la página');
        deshabilitarBoton('intentar');
        deshabilitarBoton('reiniciar');
    } else if (numeroSecreto === numeroUsuario) {
        asignarElementoHTML('p', `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        deshabilitarBoton('intentar');
        habilitarBoton('reiniciar');
    } else {
        asignarElementoHTML('p', `${numeroUsuario > numeroSecreto ? 'El número es menor' : 'El número es mayor'}`);
    }

    intentos++;
    limpiarCaja();
}

// BOTÓN: Reiniciar el juego
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    habilitarBoton('intentar');
    deshabilitarBoton('reiniciar');
}

// Condiciones iniciales del juego
function condicionesIniciales() {
    /*
    - Indicar mensaje de intervalo de números
    - Generar el número aleatorio
    - Inicializar el número de intentos.
    */
    asignarElementoHTML('h1', 'Juego del número secreto');
    asignarElementoHTML('p', `Indica un número del 1 al ${maximoIntentos}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

// Asignar al elemento HTMl un texto
function asignarElementoHTML(elemento, texto) {
    document.querySelector(elemento).innerHTML = texto;
}

// Limpiar la caja
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

// Generar número secreto
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * maximoIntentos) + 1;

    if (numerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

// Habilitar botón
function habilitarBoton(nombreBoton) {
    document.getElementById(nombreBoton).removeAttribute('disabled');
}

// Deshabilitar botón
function deshabilitarBoton(nombreBoton) {
    document.getElementById(nombreBoton).setAttribute('disabled', 'true');
}