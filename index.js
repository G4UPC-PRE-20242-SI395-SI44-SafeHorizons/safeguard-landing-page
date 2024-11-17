function loadPage(page) {
  fetch(page)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`No se pudo cargar la página: ${response.statusText}`);
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    })
    .catch((error) => console.error("Error al cargar la página:", error));
}

function onSubmit() {
  const input = document.getElementById("nameInput");
  const value = input.value;
  window.alert("Mensaje enviado, gracias " + value);
}
