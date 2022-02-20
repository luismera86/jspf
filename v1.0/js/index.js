// Botones
const btnImprimir = document.getElementById('btnImprimir');
const btnGuardar = document.getElementById('btn-guardar');
const btnItpGuardar = document.getElementById('btnItpGuardar');
const monofasica = document.getElementById('monofasica')
const trifasica = document.getElementById('trifasica')


// Variables globales

const resultado = document.querySelector('.resultado');


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
        valor = JSON.parse(localStorage.getItem(key))
    let menuProyectos = document.getElementById('menuProyectos');
    menuProyectos.innerHTML += `<option id="list" value="${key}">${key}</option>`
}

// Sección Calculo de Interruptor Termomagnético principal 


function restultMonofasica() {
    let rMono = 'INSTALAR INTERRUPTOR TERMOMAGNETICO BIPOLAR 32AMP'
    resultado.innerHTML = `<img class="imgResultado" src="../img/itm.png" alt="">  <p id="itpResult">${rMono}</p>`;
    itpResult = rMono;
    console.log(itpResult);
}
monofasica.onclick = restultMonofasica;

function resultTrifasica() {
    let rTrif = 'INSTALAR INTERRUPTOR TERMOMAGNETICO TETRAPOLAR 32AMP'
    resultado.innerHTML = `<img class="imgResultado" src="../img/ittetrawebp.webp" alt=""><p id="itpResult">${rTrif}</p>`;
    itpResult = rTrif;
    console.log(itpResult);
}
trifasica.onclick = resultTrifasica


function itpRegisto() {
    let nRegistro = document.getElementById('menuProyectos').value;
    let itp = {
        
        itpResult: itpResult,
        
    }
    localStorage.setItem(nRegistro, JSON.stringify(itp))

    //itp = JSON.parse(localStorage.getItem('itp'))
    
}
btnItpGuardar.onclick = itpRegisto













