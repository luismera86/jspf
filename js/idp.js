
const monofasica = document.getElementById('monofasica');
const trifasica = document.getElementById('trifasica');
const circuitoSuma = document.querySelector('.btn-suma');
const circuitoResta = document.querySelector('.btn-resta');
const nCircuitos = document.querySelector('.nCircuitos');
const resultado1 = document.querySelector('.resultado1');
const resultado2 = document.querySelector('.resultado2');

let circuitos = 0;

const sumaCircuitos = () => {
    ++circuitos
    nCircuitos.innerText = circuitos;
}

circuitoSuma.onclick = sumaCircuitos;

const restaCircuitos = () => {
        --circuitos
        nCircuitos.innerText = circuitos;
}

circuitoResta.onclick = restaCircuitos;

const restultMonofasica = () => {
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
    
    resultado1.innerHTML = '<img class="imgResultado" src="../img/idmono.webp" alt="">'
    let respuesta = 'DEBE INSTALAR' + ' ' + cantid + ' ' + 'INTERRUPTORES DIFERENCIAL BIPOLAR';
    resultado2.innerText = respuesta;
}

monofasica.onclick = restultMonofasica;

const restultTrifasica = () => {
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
    resultado1.innerHTML = '<img class="imgResultado" src="../img/idtetra.webp" alt="">'
    let respuesta = 'DEBE INSTALAR' + ' ' + cantid + ' ' + 'INTERRUPTORES DIFERENCIAL TETRAPOLAR';
    resultado2.innerText = respuesta;
}

trifasica.onclick = restultTrifasica;