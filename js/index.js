
// Datos de registro 

const nombreProyecto = document.getElementById('nombreProyecto').value;
const nombreUsuario = document.getElementById('nombreUsuario').value;
const telUsuario = document.getElementById('telUsuario').value;

let datosImprimir = [];

// Calulo de interruptor termomagético principal 

const btnMonofasica = document.getElementById('btnMonofasica')
const btnTtrifasica = document.getElementById('btnTtrifasica')

intp = '';

const restultMonofasica = () => {
    resultado.innerHTML = '<img class="imgResultado" src="./img/itm.png" alt="">  <p id="itpp">INSTALAR INTERRUPTOR TERMOMAGNETICO BIPOLAR 32AMP</p>';
    intp = 'monofasica';
    Swal.fire({
            icon: 'warning',
            title: 'ATENCION!',
            imageUrl: 'img/subte2x6.jpg',
            imageWidth: '150px',
            html: '<div>Recuerde que el cable del medidor debe venir con un diametro no menor a 6mm</div>' + '<div>Colores: Celeste y Marrón</div>',
            confirmButtonText: 'ENTENDIDO',
         })

    
}
btnMonofasica.onclick = restultMonofasica;

const resultTrifasica = () => {
    resultado.innerHTML = '<img class="imgResultado" src="./img/ittetrawebp.webp" alt="">  <p id="itpp">INSTALAR INTERRUPTOR TERMOMAGNETICO TETRAPOLAR 32AMP</p>';
    intp = 'trifasica';
    Swal.fire({
        icon: 'warning',
        title: 'ATENCION!',
        imageUrl: 'img/subte4x6.webp',
        imageWidth: '150px',
        html: '<div>Recuerde que el cable del medidor debe venir con un diametro no menor a 6mm</div>' + '<div>Colores: Celeste, Marrón, Negro y Rojo</div>',
        confirmButtonText: 'ENTENDIDO',
     })

    
}

btnTtrifasica.onclick = resultTrifasica;

// Calculo de Interruptor Diferencial 


const nCircuitos = document.getElementById('nCircuitos');
const btnSuma = document.getElementById('btnSuma');
const btnResta = document.getElementById('btnResta');
const btnCalcular = document.getElementById('btnCalcular');
const resultado1 = document.getElementById('resultado1');
const resultado2 = document.getElementById('resultado2');



const sumaCircuitos = () => {
    ++circuitos
    nCircuitos.innerText = circuitos;
    if (circuitos > 0 ) {
        btnResta.disabled = false;
}
}
btnSuma.onclick = sumaCircuitos;

const restaCircuitos = () => {
        --circuitos
        nCircuitos.innerText = circuitos;
        if(circuitos <= 0) {
            btnResta.disabled = true;
        }
}

btnResta.onclick = restaCircuitos;


function calculoIdp() {

    if (intp === 'monofasica') {
            
        respMonofasica();
     }else if(intp === 'trifasica') {
         respTrifasica();
     }
     Swal.fire({
        icon: 'warning',
        title: 'ATENCION!',
        html: '<div>Recuerde que no debe conectar más de 5 Interruptores Termomagnéticos por Interruptor Dirferencial Bipolar</div>' + '<div>----------</div>' + '<div>No debe conectar más de 5 Interruptores Termomagnéticos en cada fase en un Interruptor Dirferencial Tetrapolar</div>',
        confirmButtonText: 'ENTENDIDO',
     })

}

btnCalcular.onclick = calculoIdp;

let circuitos = 0;

const respTrifasica = () => {
    if (circuitos <= 15){
        cantid = '1';
    } if (circuitos >15){
        cantid = '2';
    }if (circuitos >30){
        cantid = '3';
    }if (circuitos >45){
        cantid = '4';
    }if (circuitos >60){
        cantid = '5';
    }
    resultado1.innerHTML = '<img class="imgResultado" src="./img/idtetra.webp" alt="">'
    let respuesta = 'DEBE INSTALAR' + ' ' + cantid + ' ' + 'INTERRUPTORES DIFERENCIAL TETRAPOLAR 40AMP';
    resultado2.innerText = respuesta;
}

const respMonofasica = () => {
    if (circuitos <= 5){
        cantid = '1';
    } if (circuitos >5){
        cantid = '2';
    }if (circuitos >10){
        cantid = '3';
    }if (circuitos >15){
        cantid = '4';
    }if (circuitos >20){
        cantid = '5';
    }  
    resultado1.innerHTML = '<img class="imgResultado" src="./img/idmono.webp" alt="">'
    let respuesta = 'DEBE INSTALAR' + ' ' + cantid + ' ' + 'INTERRUPTORES DIFERENCIAL BIPOLAR 40AMP';
    resultado2.innerText = respuesta;
}

// Calculo de interruptores por circutio

const list = () => {
    let circuitosIluminacion = document.querySelector('#circuitosIluminación').value
    let circuitosTomacorrientes = document.querySelector('#ircuitosTomacorrientes').value;
    let circuitosTomacorrientesEspeciales = document.querySelector('#circuitosTomacorrientesEspeciales').value;
    
    let resultadol1 = document.getElementById('resultadol1');
    let resultadol2 = document.getElementById('resultadol2');
    let resultadol3 = document.getElementById('resultadol3');    

    resultadol1.innerText = `${circuitosIluminacion} Interruptores Termomagnéticos Bipolar de 10 AMP`;
    resultadol2.innerText = `${circuitosTomacorrientes} Interruptores Termomagnéticos Bipolar de 16 AMP`;
    resultadol3.innerText = `${circuitosTomacorrientesEspeciales} Interruptores Termomagnéticos Bipolar de 20 AMP`;


}

// Registro de los datos 

const btnRegistro = document.getElementById('btnRegistro');



const registrarDatos = () => {
    
    const nombreProyecto = document.getElementById('nombreProyecto').value;
    const nombreUsuario = document.getElementById('nombreUsuario').value;
    const telUsuario = document.getElementById('telUsuario').value;
    const itpp = document.getElementById('itpp');
    datos = {
        nombreProyecto: nombreProyecto,
        nombreUsuario: nombreUsuario,
        telUsuario: telUsuario,
        itpp: itpp.innerText,
        idp: resultado2.innerText,
        resultadol1: resultadol1.innerText,
        resultadol2: resultadol2.innerText,
        resultadol3: resultadol3.innerText,
    }
    
    localStorage.setItem(nombreProyecto, JSON.stringify(datos));
    location.reload();
    
}

btnRegistro.onclick = registrarDatos;

