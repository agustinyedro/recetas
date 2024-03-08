// ...

// Supongamos que 'rutaDelJson' es la ubicación del archivo JSON
const rutaDelJson = 'recetas.json';
const recetasPorPagina = 10;  // Número de recetas por página
let paginaActual = 1;

// ...

function mostrarRecetas(recetas) {
  const recetasContainer = document.getElementById('recetas-container');
  const paginationContainer = document.getElementById('pagination-container');

  // Calcular el índice de inicio y fin para las recetas en la página actual
  const inicio = (paginaActual - 1) * recetasPorPagina;
  const fin = inicio + recetasPorPagina;

  // Obtener las recetas para la página actual
  const recetasPagina = recetas.slice(inicio, fin);

  // Limpiar el contenedor de recetas y paginación
  recetasContainer.innerHTML = '';
  paginationContainer.innerHTML = '';

  // Crear un enlace para cada receta en la página actual
  recetasPagina.forEach(function (receta) {
    const enlaceReceta = document.createElement('a');
    enlaceReceta.classList.add('receta-link');
    enlaceReceta.href = 'receta.html?nombre=' + encodeURIComponent(receta.nombre);
    enlaceReceta.innerHTML = '<div class="receta"><h2>' + receta.nombre + '</h2></div>';
    recetasContainer.appendChild(enlaceReceta);
  });

  // Crear enlaces de paginación
  const totalPaginas = Math.ceil(recetas.length / recetasPorPagina);
  for (let i = 1; i <= totalPaginas; i++) {
    const enlacePagina = document.createElement('a');
    enlacePagina.href = '#';
    enlacePagina.textContent = i;
    enlacePagina.addEventListener('click', function () {
      paginaActual = i;
      mostrarRecetas(recetas);
    });
    paginationContainer.appendChild(enlacePagina);
  }
}

// ...

// Cargar el JSON y mostrar las recetas
fetch(rutaDelJson)
  .then(response => response.json())
  .then(data => {
    mostrarRecetas(data.recetas);
  })
  .catch(error => console.error('Error al cargar el JSON:', error));
