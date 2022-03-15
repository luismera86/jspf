
// Datos el usuario 
const datosUsuario = document.getElementById('datosUsuario');
const btnContinuarItp = document.getElementById('btnContinuarItp');
const itp = document.getElementById('itp');
const btnContinuarCircuitos = document.getElementById('btnContinuarCircuitos');
const circuitosId = document.getElementById('circuitosId'); 


btnContinuarItp.addEventListener('click', () => { 
    
    datosUsuario.classList.add('d-none');
    itp.classList.remove('d-none');
    itp.classList.add('animate__animated', 'animate__backInRight');
    
})

btnContinuarCircuitos.addEventListener('click', () => { 
    itp.classList.add('d-none');
    circuitosId.classList.add('animate__animated', 'animate__backInRight');
    circuitosId.classList.remove('d-none');
 })

// Elegir interruptor termomagnetico principal 

const btnVolverDatoUsuario = document.getElementById('btnVolverDatoUsuario');
const btnMonofasica = document.getElementById('btnMonofasica');
const btnTtrifasica = document.getElementById('btnTtrifasica');
const urlJson = '../data/datos.json';

/**
 * En esta sección se utiliza de el fetch para cumplir con lo solicitado en el trabajo final y demostrar los conocimientos aprendidos en clase, ya que en este proyecto no hace falta utilizarlos.
 */

let intp = '';

btnMonofasica.addEventListener('click',  () => {
    fetch(urlJson)
    .then(respuesta => respuesta.json())
    .then((result) => {
        resultado.innerHTML = `<img class="imgResultado" src="./img/itm.png" alt="">  <p id="itpp">Instalar ${result[0].nombre} ${result[0].tipo} de ${result[0].amp} </p>`;
        intp = 'monofasica';
        Swal.fire({
            icon: 'warning',
            title: 'ATENCION!',
            imageUrl: 'img/subte2x6.jpg',
            imageWidth: '150px',
            html: '<div>Recuerde que el cable del medidor debe venir con un diametro no menor a 6mm</div>' + '<div>Colores: Celeste y Marrón</div>',
            confirmButtonText: 'ENTENDIDO'
        })
    })
})

btnTtrifasica.addEventListener('click', () => {
    fetch(urlJson)
    .then(respuesta => respuesta.json())
    .then((result) => {
        resultado.innerHTML = `<img class="imgResultado" src="./img/ittetrawebp.webp" alt="">  <p id="itpp">Instalar ${result[1].nombre} ${result[1].tipo} de ${result[1].amp} </p>`;
        intp = 'trifasica';
        Swal.fire({
            icon: 'warning',
            title: 'ATENCION!',
            imageUrl: 'img/subte4x6.webp',
            imageWidth: '150px',
            html: '<div>Recuerde que el cable del medidor debe venir con un diametro no menor a 6mm</div>' + '<div>Colores: Celeste, Marrón, Negro y Rojo</div>',
            confirmButtonText: 'ENTENDIDO',
        })
    })    
})

btnVolverDatoUsuario.addEventListener('click', () => { 
    itp.classList.add('d-none');
    datosUsuario.classList.add( 'animate__animated', 'animate__backInLeft')
    datosUsuario.classList.remove('d-none');
})

// Calculo de interruptores por circutio


const nCircuitosIl = document.getElementById('nCircuitosIl');
const btnSumaIl = document.getElementById('btnSumaIl');
const btnRestaIl = document.getElementById('btnRestaIl');
const nCircuitosTc = document.getElementById('nCircuitosTc');
const btnSumaTc = document.getElementById('btnSumaTc');
const btnRestaTc = document.getElementById('btnRestaTc');
const nCircuitosTce = document.getElementById('nCircuitosTce');
const btnSumaTce = document.getElementById('btnSumaTce');
const btnRestaTce = document.getElementById('btnRestaTce');
const btnCalcular = document.getElementById('btnCalcular');
const resultado1 = document.getElementById('resultado1');
const resultado2 = document.getElementById('resultado2');
const resultadol1 = document.getElementById('resultadol1');
const resultadol2 = document.getElementById('resultadol2');
const resultadol3 = document.getElementById('resultadol3');   
const btnCalcularIt = document.getElementById('btnCalcularIt');


let circuitosIl = 0;
let circuitosTc = 0;
let circuitosTce = 0;

btnSumaIl.addEventListener('click', () => {
    ++circuitosIl
    nCircuitosIl.innerText = circuitosIl;
    circuitosIl > 0 ? btnRestaIl.disabled = false : null;
})

btnRestaIl.addEventListener('click', () => {
    --circuitosIl
    nCircuitosIl.innerText = circuitosIl;
    circuitosIl <= 0 ? btnRestaIl.disabled = true : null;
    }
)


btnSumaTc.addEventListener('click', () => {
    ++circuitosTc
    nCircuitosTc.innerText = circuitosTc;
    circuitosTc > 0 ? btnRestaTc.disabled = false : null;
    }
)

btnRestaTc.addEventListener('click', () => {
    --circuitosTc
    nCircuitosTc.innerText = circuitosTc;
    circuitosTc <= 0 ? btnRestaTc.disabled = true : null;
    }
)


btnSumaTce.addEventListener('click', () => {
    ++circuitosTce
    nCircuitosTce.innerText = circuitosTce;
    circuitosTce > 0 ? btnRestaTce.disabled = false : null;
    }
)

btnRestaTce.addEventListener('click', () => {
    --circuitosTce
    nCircuitosTce.innerText = circuitosTce;
    circuitosTce <= 0 ? btnRestaTce.disabled = true : null;
    }
)

let circuitos = 0;

btnCalcularIt.addEventListener('click', () => {

    circuitosIl > 0 ? resultadol1.innerText = `${circuitosIl} Interruptores Termomagnéticos Bipolar de 10 AMP` : resultadol1.innerText = '';
    circuitosTc > 0 ? resultadol2.innerText = `${circuitosTc} Interruptores Termomagnéticos Bipolar de 16 AMP` : resultadol2.innerText = '';
    circuitosTce > 0 ? resultadol3.innerText = `${circuitosTce} Interruptores Termomagnéticos Bipolar de 20 AMP` : resultadol3.innerText = '';
    
    
    circuitos = circuitosIl + circuitosTc + circuitosTce

    console.log(circuitos);

})

const btnVolverItp = document.getElementById('btnVolverItp');
const btnContinuarIdp = document.getElementById('btnContinuarIdp');
const btnContinuarIdpResult = document.getElementById('btnContinuarIdpResult');



btnVolverItp.addEventListener('click', () => { 
    circuitosId.classList.add('d-none');
    itp.classList.add( 'animate__animated', 'animate__backInLeft')
    itp.classList.remove('d-none');
 })

 btnContinuarIdpResult.addEventListener('click', () => { 
    circuitosId.classList.add('d-none');
    idpResult.classList.add( 'animate__animated', 'animate__backInLeft')
    idpResult.classList.remove('d-none');
  })


// Calculo de Interruptor Diferencial 

btnCalcular.addEventListener('click', () => {
    intp === 'monofasica' ? respMonofasica() : null;
    intp === 'trifasica' ? respTrifasica() : null;
    intp === '' ? 
    Swal.fire({
        icon: 'warning',
        title: 'ATENCION!',
        html: '<div>Debe seleccionar un tipo de Interruptor Principal </div>',
        confirmButtonText: 'ENTENDIDO',
    }) :
    Swal.fire({
        icon: 'warning',
        title: 'ATENCION!',
        html: '<div>Recuerde que no debe conectar más de 5 Interruptores Termomagnéticos por Interruptor Dirferencial Bipolar</div>' + '<div>----------</div>' + '<div>No debe conectar más de 5 Interruptores Termomagnéticos en cada fase en un Interruptor Dirferencial Tetrapolar</div>',
        confirmButtonText: 'ENTENDIDO',
    });

})

const respTrifasica = () => {
    circuitos <= 15 ? cantid = '1' : null;
    circuitos >15 ? cantid = '2' : null;
    circuitos >30 ? cantid = '3' : null;
    circuitos >45 ? cantid = '4' : null;
    circuitos >60 ? cantid = '5' : null;

    resultado1.innerHTML = '<img class="imgResultado" src="./img/idtetra.webp" alt="">'
    let respuesta = `DEBE INSTALAR ${cantid} INTERRUPTORES DIFERENCIAL BIPOLAR 40AMP`;
    resultado2.innerText = respuesta;
}

const respMonofasica = () => {
    circuitos <= 5 ? cantid = '1' : null;
    circuitos >5 ? cantid = '2' : null;
    circuitos >10 ? cantid = '3': null;
    circuitos >15 ? cantid = '4' : null;
    circuitos >20 ? cantid = '5' : null;

    resultado1.innerHTML = '<img class="imgResultado" src="./img/idmono.webp" alt="">';
    let respuesta = `DEBE INSTALAR ${cantid} INTERRUPTORES DIFERENCIAL BIPOLAR 40AMP`;
    resultado2.innerText = respuesta;
}

const idpResult = document.getElementById('idpResult');
const btnVolverCircuitosId = document.getElementById('btnVolverCircuitosId');


btnVolverCircuitosId.addEventListener('click', () => { 
    circuitosId.classList.add( 'animate__animated', 'animate__backInLeft')
    idpResult.classList.add('d-none');
    circuitosId.classList.remove('d-none');
 })

// Registro de los datos 

const btnRegistro = document.getElementById('btnRegistro');


btnRegistro.addEventListener('click', () => {
    
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
    Swal.fire({
        title: 'LOS DATOS FUERON REGISTRADOS CON EXITO',
        text: 'PUEDE ACCEDER E IMPRIMIR SUS PROYECTOS EN EL MENU PRINCIPAL EN "LISTA DE PROYECTOS"',
        confirmButtonText: 'ENTENDIDO',
    }).then((result) => { 
        
        location.reload();
    
    })
    
    localStorage.setItem(nombreProyecto, JSON.stringify(datos));
    
} )
