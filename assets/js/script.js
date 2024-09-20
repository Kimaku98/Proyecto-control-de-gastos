let listaNombresGastos = [];
let listaDescripcionGastos = [];
let listaValoresGastos = [];

function clickBoton() {

    let nombreGasto = document.getElementById('nombreGasto').value;
    let descripcionGastos = document.getElementById('descripcionGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    if (valorGasto >=150) {
        alert("¡¡¡Este gasto del mes es superior al habitual!!!");
    }

    listaNombresGastos.push(nombreGasto);
    listaDescripcionGastos.push(descripcionGastos);
    listaValoresGastos.push(valorGasto);

    console.log(listaNombresGastos);
    console.log(listaDescripcionGastos);
    console.log(listaValoresGastos);
    actualizarListaGastos();
    
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
  
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => {
      const valorGasto = Number(listaValoresGastos[posicion]);
      const descripcion = listaDescripcionGastos[posicion];
      htmlLista += `<li>${elemento} -Descripción: ${descripcion} - USD ${valorGasto.toFixed(2)}
                    <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                    <button onclick="editarGasto(${posicion});">Editar</button>
                    </li>`;
      totalGastos += Number(valorGasto);
    });
  
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
  }

function limpiar(){

    document.getElementById('nombreGasto').value = '';
    document.getElementById('descripcionGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto(posicion){
    
    listaNombresGastos.splice(posicion, 1);
    listaDescripcionGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    actualizarListaGastos();
}

function editarGasto(posicion) {

    const nombreActual = listaNombresGastos[posicion];
    const descripcionActual = listaDescripcionGastos[posicion];
    const valorActual = listaValoresGastos[posicion];

    const nuevoNombre = prompt("", nombreActual);
    const nuevaDescripcion = prompt("", descripcionActual);
    const nuevoValor = prompt("", valorActual);

    if (nuevoNombre && nuevaDescripcion && nuevoValor) {

        listaNombresGastos[posicion] = nuevoNombre;
        listaDescripcionGastos[posicion] = nuevaDescripcion;
        listaValoresGastos[posicion] = Number(nuevoValor);

        actualizarListaGastos();
    }
}