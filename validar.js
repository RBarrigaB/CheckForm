// Se crea la funcion validar del formulario
function validar() {
    // Se crean variables que almacenarán los valores ingresados por el usuario para validarlos
    // de acuerdo a criterios pre establecidos
    var nombre;
    var apellidos;
    var correo;
    var usuario;
    var clave;
    var telefono;

    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    correo = document.getElementById("correo").value;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("pass").value;
    telefono = document.getElementById("telefono").value;

    // Se verifica que los input no vengan vacíos y que cumplan con requisitos específicos
    if (nombre === "") {
        alert("Por favor, debe ingresar un nombre");
        return false;
    }

    else if (nombre.length > 30) {
        alert("El nombre es muy largo");
        return false;
    }

    else if (/\d/.test(nombre)) {
        alert("Por favor, ingrese un nombre que contenga solamente letras");
        return false;
    }

    if (apellidos === "") {
        alert("Por favor, debe ingresar sus apellidos");
        return false;
    }

    else if (apellidos.length > 80) {
        alert("Los apellidos son demasiado largos");
        return false;
    }

    else if (/\d/.test(apellidos)) {
        alert("Por favor, ingrese apellidos que contengan solamente letras");
        return false;
    }

    if (correo === "") {
        alert("Debe ingresar un correo");
        return false;
    }
    else if (correo.length > 100) {
        alert("El correo es demasiado largo");
    }

    if (!correo.includes("@")) {

        alert("Correo inválido. Ingrese un @ en la dirección de correo");
    }

    if (!correo.includes(".")) {
        alert(" El correo " + correo + " es inválido." + "Ingrese un punto después de @")
    }

    if (usuario.length > 20) {
        alert("Ingrese un usuario con menos de 20 caracteres")
    }

    if (telefono.length > 20) {
        alert("Número de teléfono demasiado largo")
    }
    else if (!(/^\d+$/.test(telefono))) {
        alert("Por favor, ingrese un número de teléfono en formato '91111111'");
        return false;
    }

    alert("Registro realizado correctamente !" + "\n\n" + "Gracias por registrarte: " + nombre +" "+ apellidos + "\n\n" + "Tu usuario es: " + usuario +"\n"+ "Tu contraseña es: " + clave);
}
