const doc = document;

doc.addEventListener("click", (event) => {
  if (event.target.matches(".encrypt")) {
    setResultBody();
    const texto = doc.getElementById("input").value;
    const encriptado = btoa(texto);
    doc.getElementById("result").value = encriptado;
  } else if (event.target.matches(".decrypt")) {
    setResultBody();
    const texto = doc.getElementById("input").value;
    const desencriptado = atob(texto);
    doc.getElementById("result").value = desencriptado;
  } else if (event.target.matches(".copy")) {
    const texto = document.getElementById("result").value;
    navigator.clipboard
      .writeText(texto)
      .then(() => {
        alert("Texto copiado al portapapeles");
      })
      .catch((err) => {
        console.error("Error al copiar el texto: ", err);
        alert("Error al intentar copiar el texto");
      });
  }
});

function setResultBody() {
  doc.querySelector(".result").innerHTML = `<div class="result__input">
          <textarea readonly="readonly" id="result"></textarea>
        </div>
        <div class="result__buttom">
          <button class="copy">Copiar</button>
        </div>`;
}
