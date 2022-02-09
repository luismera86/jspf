
const monofasica = document.getElementById('monofasica')
const trifasica = document.getElementById('trifasica')
const resultado = document.querySelector('.resultado');
const res = document.querySelectorAll('div');

const restultMonofasica = () => {
    resultado.innerText = 'INSTALAR INTERRUPTOR TERMOMAGNETICO BIPOLAR 32AMP';
}
monofasica.onclick = restultMonofasica;

const resultTrifasica = () => {
    resultado.innerText = 'INSTALAR INTERRUPTOR TERMOMAGNETICO TETRAPOLAR 32AMP';
}

trifasica.onclick = resultTrifasica;




