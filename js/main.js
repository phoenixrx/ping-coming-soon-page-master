function validarEmail(valor) {
  re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  if (!re.exec(valor.toLowerCase())) {
    const columnas = document.querySelectorAll(".invi");
    columnas.forEach((columna, indice) => {
      cambiarColumna(indice);
      function cambiarColumna(indice) {
        columnas[indice].classList.remove("invi");
        columnas[indice].classList.add("visi");
      }
    });
  } else {
    const columnas = document.querySelectorAll(".visi");
    columnas.forEach((columna, indice) => {
      cambiarColumna(indice);
      function cambiarColumna(indice) {
        columnas[indice].classList.remove("visi");
        columnas[indice].classList.add("invi");
      }
    });
  }
}
