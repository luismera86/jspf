
// Datos el usuario 
const datosUsuario = document.getElementById('datosUsuario');
const nombreProyecto = document.getElementById('nombreProyecto').value;
const nombreInstalador = document.getElementById('nombreInstalador').value;
const usuarioTel = document.getElementById('usuarioTel').value;
const btnContinuar1 = document.getElementById('btnContinuar1');

btnContinuar1.addEventListener('click', () => { 
    datosUsuario.classList.remove('d-none');
    //datosUsuario.classList.add('d-none');
    
 })