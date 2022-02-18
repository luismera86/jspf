// Botones
let btnImprimir = document.getElementById('btnImprimir');
let btnGuardar = document.getElementById('btn-guardar');
let btnItc = document.getElementById('btnItc');

// Variables globales
const monofasica = document.getElementById('monofasica')
const trifasica = document.getElementById('trifasica')
const resultado = document.querySelector('.resultado');

let nombreProyecto = '';


// Registro de datos en LocalSotorage (Simulando una base de datos)


function registrar() {
    let nombreProyecto = document.getElementById('nombreProyecto').value;
    let datosUsuario = document.getElementById('datosUsuario').value;
    let telUsuario = document.getElementById('telUsuario').value;
    
    let usuario = {
        nombre_proyecto: nombreProyecto,
        nombre_usuario: datosUsuario,
        tel_usuario: telUsuario,
    }
    localStorage.setItem(nombreProyecto, JSON.stringify(usuario));
    
}



// Inserta los Nombres de los proyectos en una lista 

for (let i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        valor = localStorage.getItem(key);
    let menuProyectos = document.getElementById('menuProyectos');
    menuProyectos.innerHTML += `<option id="list" value="${key}">${key}</option>`
}

// Sección Calculo de Interruptor Termomagnético principal 

function restultMonofasica() {
    const rMono = 'INSTALAR INTERRUPTOR TERMOMAGNETICO BIPOLAR 32AMP'
    resultado.innerHTML = `<img class="imgResultado" src="../img/itm.png" alt="">  <p>${rMono}</p>`;
}

function resultTrifasica() {
    const rTrif = 'INSTALAR INTERRUPTOR TERMOMAGNETICO TETRAPOLAR 32AMP'
    resultado.innerHTML = `<img class="imgResultado" src="../img/ittetrawebp.webp" alt="">${rTrif}<p></p>`;
}



function itpRegisto() {
    let nRegistro = document.getElementById('menuProyectos').value;
    let itp = {
        
        resultado: resultado,
    }
    localStorage.setItem(nRegistro, JSON.stringify(itp))
    console.log(nRegistro);
    
    
}

console.log(nombreProyecto);










