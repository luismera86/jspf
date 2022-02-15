
const list = () => {
    let circuitosIluminacion = document.querySelector('#circuitosIluminación').value
    let circuitosTomacorrientes = document.querySelector('#ircuitosTomacorrientes').value;
    let circuitosTomacorrientesEspeciales = document.querySelector('#circuitosTomacorrientesEspeciales').value;
    let cuadroRespuesta = document.querySelector('.cuadroRespuesta');
    let cIluminacion = document.querySelector('.cIluminacion');
    let cTomaccorrientes = document.querySelector('.cTomaccorrientes');
    let cTomacorrientesEsp = document.querySelector('.cTomacorrientesEsp');

    cIluminacion.innerText = circuitosIluminacion;
    cTomaccorrientes.innerText = circuitosTomacorrientes;
    cTomacorrientesEsp.innerText = circuitosTomacorrientesEspeciales;
}

