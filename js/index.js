// Botones
let btnImprimir = document.getElementById('btnImprimir');
let btnGuardar = document.getElementById('btn-guardar');

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
    menuProyectos.innerHTML += `<option value="${key}">${key}</option>`
}



const restultMonofasica = () => {
    resultado.innerHTML = '<img class="imgResultado" src="../img/itm.png" alt="">  <p>INSTALAR INTERRUPTOR TERMOMAGNETICO BIPOLAR 32AMP</p>';
}
monofasica.onclick = restultMonofasica;

const resultTrifasica = () => {
    resultado.innerHTML = '<img class="imgResultado" src="../img/ittetrawebp.webp" alt="">  <p>INSTALAR INTERRUPTOR TERMOMAGNETICO TETRAPOLAR 32AMP</p>';
}

trifasica.onclick = resultTrifasica;







