class PrimaryCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  // Definimos el método que se llama cuando se actualiza el contenido
  connectedCallback() {
    this.render();
  }

  // Definimos los atributos observados
  static get observedAttributes() {
    return ["receta-id"];
  }

  // Método que se llama cuando se actualiza un atributo observado
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  // Obtenemos el valor del atributo receta-id
  get recetaId() {
    return parseInt(this.getAttribute("receta-id"));
  }

  // Establecemos el valor del atributo receta-id
  set recetaId(value) {
    this.setAttribute("receta-id", value);
  }

  async cargarRecetas() {
    // Cargar el archivo JSON que contiene las recetas
    try {
      const response = await fetch("../src/data/recetas.json");
      if (!response.ok) {
        throw new Error("Error al cargar las recetas");
      }
      const data = await response.json();
      // Asegurarse de que el resultado sea un array de recetas
      if (!Array.isArray(data.recetas)) {
        throw new Error(
          "El archivo de recetas no contiene un array de recetas"
        );
      }
      return data.recetas;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  styles = /* HTML */ ` <style>
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: var(--bg-color2);
      width: 95%;
      margin: 0 auto;

      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

      .card-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.2rem;
        padding: 1rem;

        .card-title-span {
          font-size: 1.3rem;
          font-weight: 200;
          font-variant: small-caps slashed-zero;
          letter-spacing: 0.3rem;
          font-family: var(--secondary-font);
        }

        .card-title {
          font-size: 1.3rem;
          margin: 2rem 0;
        }

        .card-description {
          font-size: 1.2rem;
          text-align: center;
          text-wrap: balance;
          margin: 0 auto 1rem auto;
          width: 90%;
        }
        .card-button {
          background-color: var(--bg-color);
          padding: 0.6rem 2.2rem;
          font-family: var(--secondary-font);
          font-size: 0.875rem;
          letter-spacing: 0.2rem;
          border: 1px solid var(--color4);
          color: var(--color4);

          &:hover {
            background-color: var(--color1);
            color: var(--bg-color);
            border: 1px solid transparent;
            cursor: pointer;
          }
        }
      }
      .card-image {
        width: 100%;
        height: 100%;
        padding: 0;
      }
    }

    @media only screen and (min-width: 768px) {
      .card {
        flex-direction: row;
        max-height: 500px;

        .card-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.2rem;
          padding: 0 1.5rem;

          .card-title-span {
            font-size: 1.3rem;
          }

          .card-title {
            font-size: 1.8rem;
          }

          .card-description {
            text-wrap: pretty;
            width: 100%;
          }
          .card-button {
            margin-top: 1.4rem;
          }
        }
        .card-image {
          max-width: 50%;
          min-height: 100%;
          object-fit: cover;
        }
      }
    }
  </style>`;

  handleEvent() {
    const $button = this.shadowRoot.querySelector("#card-button");
    $button.addEventListener("click", () => {
      window.location.href = "../src/pages/receta.html";
      console.log(this.recetaId);
      sessionStorage.setItem("receta-id", this.recetaId);
    });
  }

  async render() {
    // Cargar las recetas
    const recetas = await this.cargarRecetas();

    // Verificar si las recetas se cargaron correctamente
    if (recetas) {
      // Buscar la receta correspondiente por su ID
      const receta = recetas.find((receta) => receta.id === this.recetaId);

      // Verificar si se encontró la receta
      if (receta) {
        const { nombre, descripcion, imagen } = receta;

        this.shadowRoot.innerHTML = /* HTML */ `
          ${this.styles}
          <div class="card">
            <div class="card-header">
              <span class="card-title-span">RECETA DE LA SEMANA</span>
              <h2 class="card-title">${nombre}</h2>
              <p class="card-description">${descripcion}</p>
              <button id="card-button" class="card-button">VER RECETA</button>
            </div>
            <img class="card-image" src="${imagen}" alt="${nombre}" />
          </div>
        `;
        this.handleEvent("click", this);
      } else {
        // Manejo de error si no se encuentra la receta
        this.shadowRoot.innerHTML = /* HTML */ `
          ${this.styles}
          <div class="card">
            <h2>No se encontró la receta</h2>
          </div>
        `;
      }
    } else {
      // Manejo de error si no se pueden cargar las recetas
      this.shadowRoot.innerHTML = /* HTML */ `
        ${this.styles}
        <div class="card">
          <h2>Error al cargar las recetas</h2>
        </div>
      `;
    }
  }
}

customElements.define("primary-card", PrimaryCard);
