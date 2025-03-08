let amigos = []

//Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
function agregarAmigo() {
    let amigoAgregado = (document.getElementById("amigo").value);
    console.log(amigoAgregado);
    //Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
    if (amigoAgregado == "") {
        alert("¡Por favor, inserte un nombre!");
    //Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().    
    } else {
        if (amigos.includes(amigoAgregado)) {
            alert(`El nombre ${amigoAgregado} ya esta en la lista`);
        }else {
            amigos.push(amigoAgregado);
            console.log(amigos);
            //Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
            limpiarCaja();
            ActualizarLista();
        }
    }
}
 

//Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
function ActualizarLista() {
    let lista = (document.getElementById("listaAmigos"));
    //Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
    lista.innerHTML = "";
//Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
for(let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
//Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
    }
}

ActualizarLista();


function limpiarCaja() {
    document.querySelector("#amigo").value = "";
}
