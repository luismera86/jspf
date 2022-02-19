
// Variables globales 

const formRegistro = document.getElementById('formRegistro');
const btnGuardar = document.getElementById('btn-guardar"');

let dastosImprimir = [];

// Funciones 

const nuevoRegistro = (nombreProyecto, nombreUsuario, telUsuario) => { //Toma los datos del formulario y los inserta en el array 'dastosImprimir'.
    let registro = {
        nombreProyecto: nombreProyecto,
        nombreUsuario: nombreUsuario,
        telUsuario: telUsuario,
    }
    dastosImprimir.push(registro);
    
    return registro;
}

const guardarDatos = (nombreProyecto) => {

    localStorage.setItem(nombreProyecto, JSON.stringify(dastosImprimir));
}


// const mostrarDOM = () => {
//     if (nombreProyecto) {
//         console.log('Si esta')
//     } else {
//         console.log('No estas');
//     }
// }
// document.addEventListener('DOMContentLoaded', mostrarDOM);
// Eventos

btnGuardar.addEventListener('onclick', (e) => { // Envía los datos del formulario al registro.
    e.preventDefault()
    let nombreProyecto = document.getElementById('nombreProyecto').value;
    let nombreUsuario = document.getElementById('nombreUsuario').value;
    let telUsuario = document.getElementById('telUsuario').value;

    nuevoRegistro(nombreProyecto, nombreUsuario, telUsuario);
    guardarDatos(nombreProyecto);

    formRegistro.reset();
    location.reload();
});


// Ciclos
