
const monofasica = document.getElementById('monofasica')
const trifasica = document.getElementById('trifasica')
const resultado = document.querySelector('.resultado');

const restultMonofasica = () => {
    resultado.innerHTML = '<img class="imgResultado" src="../img/itm.png" alt="">  <p>INSTALAR INTERRUPTOR TERMOMAGNETICO BIPOLAR 32AMP</p>';
}
monofasica.onclick = restultMonofasica;

const resultTrifasica = () => {
    resultado.innerHTML = '<img class="imgResultado" src="../img/ittetrawebp.webp" alt="">  <p>INSTALAR INTERRUPTOR TERMOMAGNETICO TETRAPOLAR 32AMP</p>';
}

trifasica.onclick = resultTrifasica;


