document.getElementById('getCatButton').addEventListener('click', getCatImage);

function getCatImage() {
  // Hacer la solicitud a la API
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
      // Obtener la URL de la imagen y establecerla en el elemento img
      const catImageElement = document.getElementById('catImage');
      catImageElement.src = data[0].url;
    })
    .catch(error => console.error('Error al obtener la imagen del gato:', error));
}
