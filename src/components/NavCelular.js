class NavCelular extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  styles = /* HTML */ `
    <style>
      #burger-nav {
        display: none;
      }

      @media only screen and (max-width: 767px) {
        #burger-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;

          img {
            width: 100px;
            height: 100px;
          }
        }
        #burger {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          z-index: 200;

          span {
            margin: 5px;
            background-color: #2a2b2a;
            width: 50px;
            height: 5px;
            display: block;
            transition: all 0.3s ease-in-out;
          }
        }

        .burger-x span:nth-child(1) {
          transform: rotate(45deg) translate(16px, 5px);
        }
        .burger-x span:nth-child(2) {
          opacity: 0;
        }
        .burger-x span:nth-child(3) {
          transform: rotate(-45deg) translate(16px, -5px);
        }

        #nav-bar-burger {
          position: absolute;
          top: 0;
          left: 0;
          width: 80%;
          height: 100vh;
          background-color: #ffffff99;
          z-index: 150;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding-top: 20px;
          transition: transform 0.4s ease-in-out;
          transform: translateX(0);

          &.hidden {
            transform: translateX(-100%); /* Se desplaza fuera de la pantalla */
          }

          .a {
            text-align: center;
            width: 200px;
            border: 1px solid #2a2b2a;
            font-size: 2rem;
            color: #2a2b2a;
            text-decoration: none;

            &:hover:nth-child(1) {
              background-color: #ff8c70;
              box-shadow: 4px 4px 0 #2a2b2a;
              color: #fff;
            }
            &:hover:nth-child(2) {
              background-color: #f74639;
              box-shadow: 4px 4px 0 #2a2b2a;
              color: #fff;
            }
            &:hover:nth-child(3) {
              background-color: #d56638;
              box-shadow: 4px 4px 0 #2a2b2a;
              color: #fff;
            }
            &:hover:nth-child(4) {
              background-color: #003811;
              box-shadow: 4px 4px 0 #2a2b2a;
              color: #fff;
            }
          }
        }

        #nav-bar-burger-redes-sociales img {
          width: 50px;
          padding: 0 10px;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    </style>
  `;

  handleEvent(event) {
    const burger = this.shadowRoot.getElementById("burger");
    const navBar = this.shadowRoot.getElementById("nav-bar-burger");

    burger.addEventListener("click", () => {
      console.log("hola");
      navBar.classList.toggle("hidden");
      navBar.classList.toggle("active");
      burger.classList.toggle("burger-x");
    });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* HTML */ `
      ${this.styles}

      <div id="burger-nav">
        <img id="logo" src="../src/assets/svg/Logo.svg" alt="Logo" />
        <div id="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav id="nav-bar-burger" class="hidden">
          <a class="a" href="../src/index.html">Inicio</a>
          <a class="a" href="../src/pages/recetas.html">Recetas</a>
          <a class="a" href="../src/pages/aboutme.html">Sobre mi</a>
          <a class="a" href="../src/pages/contacto.html">Contacto</a>
          <div id="nav-bar-burger-redes-sociales">
            <a href=""
              ><img src="../src/assets/svg/instagram.svg" alt="logo-instagram"
            /></a>
            <a href=""
              ><img src="../src/assets/svg/logo-github.svg" alt="logo-github"
            /></a>
          </div>
        </nav>
      </div>
    `;
    this.handleEvent("click", this);
  }
}

customElements.define("nav-celular", NavCelular);
