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
        }
    }
}
 

function limpiarCaja() {
    document.querySelector("#amigo").value = "";
}
