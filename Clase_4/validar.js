function validar_documento() {
    let archivo = document.getElementById("nombre");
    let extensiones = ["jpg", "png"];
    let nombre_archivo = archivo.value;
    let nombre_extensiones = nombre_archivo.split(".")[1];
    let se_puede = false;

    for (const i in extensiones[1] == nombre_extensiones) {
        se_puede = true;
    }

    if (se_puede) {
        alert("Documento permitido");
    } else {
        alert("Documento no permitido");
    }
}