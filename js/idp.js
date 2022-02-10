
const monofasica = document.getElementById('monofasica');
const trifasica = document.getElementById('trifasica');
const circuitoSuma = document.querySelector('.btn-suma');
const circuitoResta = document.querySelector('.btn-resta');
const nCircuitos = document.querySelector('.nCircuitos');

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
