
// Botones
let btnImprimir = document.getElementById('btnImprimir');
let btnGuardar = document.getElementById('btn-guardar');




// Registro de datos 

let id = 0;
function registrar() {
    ++id
    let nombreProyecto = document.getElementById('nombreProyecto').value;
    let datosUsuario = document.getElementById('datosUsuario').value;
    let telUsuario = document.getElementById('telUsuario').value;
    let usuario = {
        nombre_proyecto: nombreProyecto,
        nombre_usuario: datosUsuario,
        tel_usuario: telUsuario,
    }
    localStorage.setItem(`ID N° ${id}`, JSON.stringify(usuario));
}



function printLista() {
    let listaIde = document.getElementById('listaIde').value;
    let print = JSON.parse(localStorage.getItem(`ID N° ${listaIde}`))
    console.log(print.nombre_proyecto)
    let printP = document.getElementById('lista')
    let printP2 = document.getElementById('lista1')
    printP.innerText = `Nombre de Proyecto: ${print.nombre_proyecto}`
    printP2.innerText = `Nombre de Usuario: ${print.nombre_usuario}`
    
}
btnImprimir.onclick = printLista;





