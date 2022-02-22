
const btnImprimir = document.getElementById('btnImprimir');


// Inserta los Nombres de los proyectos en una lista 

for (let i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);
    valor = JSON.parse(localStorage.getItem(key))
let menuProyectos = document.getElementById('menuProyectos');
menuProyectos.innerHTML += `<option id="list" value="${key}">${key}</option>`
}

function generarDatos() {
    poryecto = document.getElementById('menuProyectos').value;
    p = JSON.parse(localStorage.getItem(poryecto));
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

// Imprimir los datos 

function imprim1(datosImprimir){
    let printContents = document.getElementById('datosImprimir').innerHTML;
            w = window.open();
            w.document.write(printContents);
            w.document.close(); // necessary for IE >= 10
            w.focus(); // necessary for IE >= 10
            w.print();
            w.close();
            return true;
}

//btnImprimir.onclick = imprim1;