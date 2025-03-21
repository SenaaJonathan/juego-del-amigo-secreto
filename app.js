let amigos = []

//Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
function agregarAmigo() {
    let amigoAgregado = (document.getElementById("amigo").value.trim());
    let botonReiniciar = document.getElementById("reiniciar");
    //Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
    if (amigoAgregado == "") {
        alert("¡Por favor, digite un nombre!");
    //Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().    
    } else {
        if (amigos.includes(amigoAgregado)) {
            alert(`El nombre ${amigoAgregado} ya esta en la lista`);
        }else {
            amigos.push(amigoAgregado);
            //Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
            limpiarCaja();
            ActualizarLista();
        }
    }
    botonReiniciar.removeAttribute("disabled"); 
}
 
//Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
function ActualizarLista() {
    let lista = (document.getElementById("listaAmigos"));
    //Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
    lista.innerHTML = "";
    //Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
    for(let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        //Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

//Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
function sortearAmigo() {
    if (amigos.length === 0) {
        alert ("No hay amigos disponibles para sortear, ingrese al menos uno.");
        return;
    } else {
        //Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        //Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
        let amigoSorteado = amigos[indiceAleatorio];
        //Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
    }
}

//Reiniciamos el juego limpiando los valores del array, la lista en pantalla, el resultado y el imput
function reiniciarSorteo() { 
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";

    //Volvemos a deshabilitar el boton de reinicio
    document.getElementById("reiniciar").setAttribute("disabled", "true");

}

function limpiarCaja() {
    document.querySelector("#amigo").value = "";
}