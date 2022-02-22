
const btnImprimir = document.getElementById('btnImprimir');
const btnEliminar = document.getElementById('btnEliminar ');


// Inserta los Nombres de los proyectos en una lista 

for (let i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);
    valor = JSON.parse(localStorage.getItem(key))
let menuProyectos = document.getElementById('menuProyectos');
menuProyectos.innerHTML += `<option id="list" value="${key}">${key}</option>`
}

function generarDatos() {
    proyecto = document.getElementById('menuProyectos').value;
    p = JSON.parse(localStorage.getItem(proyecto));
    np = document.getElementById('np');
    ni = document.getElementById('ni');
    nt = document.getElementById('nt');
    itmp = document.getElementById('itmp');
    idp = document.getElementById('idp');
    itmpc1 = document.getElementById('itmpc1');
    itmpc2 = document.getElementById('itmpc2');
    itmpc3 = document.getElementById('itmpc3');

    np.innerText = p.nombreProyecto;
    ni.innerText = p.nombreUsuario;
    nt.innerText = p.telUsuario;
    itmp.innerText = p.itpp;
    idp.innerText = p.idp;
    itmpc1.innerText = p.resultadol1;
    itmpc2.innerText = p.resultadol2;
    itmpc3.innerText = p.resultadol3;
    
}

generarDatos();

// Eliminar proyectos

function eliminaProyceto() {
    localStorage.removeItem(proyecto);
    location.reload();
}

    
