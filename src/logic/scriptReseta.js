// Supongamos que 'rutaDelJson' es la ubicación del archivo JSON
const rutaDelJson = "recetas.json";

// Cargar el JSON
fetch(rutaDelJson)
  .then((response) => response.json())
  .then((recetasJSON) => {
    // Obtener el nombre de la receta desde la URL
    const params = new URLSearchParams(window.location.search);
    const nombreReceta = params.get("nombre");

    // Buscar la receta correspondiente en el JSON
    const receta = recetasJSON.recetas.find((r) => r.nombre === nombreReceta);

    // Obtener el contenedor de detalles en el HTML
    const detalleReceta = document.getElementById("detalle-receta");

    // Crear un elemento div para la receta
    const recetaDiv = document.createElement("div");
    recetaDiv.classList.add("recetas");

    // Agregar el nombre de la receta como encabezado
    const nombreRecetaDetalle = document.createElement("h2");
    nombreRecetaDetalle.textContent = receta.nombre;
    recetaDiv.appendChild(nombreRecetaDetalle);

    // Agregar la lista de ingredientes
    receta.ingredientes.forEach((ingrediente) => {
      const ingredienteItem = document.createElement("div");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "ingredientesCheckbox"; // Nombre único para cada checkbox
      checkbox.value = ingrediente; // Valor del checkbox

      const label = document.createElement("label");
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(ingrediente));

      ingredienteItem.appendChild(label);
      recetaDiv.appendChild(ingredienteItem);
    });

    // Agregar los pasos y las imágenes
    receta.pasos.forEach((paso) => {
      const pasoDiv = document.createElement("div");
      pasoDiv.classList.add("paso");

      const pasoDescripcion = document.createElement("p");
      pasoDescripcion.textContent = `${paso.numero} ${paso.descripcion}`;
      pasoDiv.appendChild(pasoDescripcion);

      // Verificar si hay una imagen asociada al paso
      if (paso.imagen) {
        const imagen = document.createElement("img");
        imagen.src = paso.imagen;
        imagen.alt = `Imagen del paso ${paso.numero}`;
        pasoDiv.appendChild(imagen);
      }

      // Agregar pasoDiv al recetaDiv
      recetaDiv.appendChild(pasoDiv);
    });

    // Agregar la receta al contenedor de detalles
    detalleReceta.appendChild(recetaDiv);
  })
  .catch((error) => console.error("Error al cargar el JSON:", error));
