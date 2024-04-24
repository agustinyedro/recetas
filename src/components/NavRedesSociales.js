class NavRedesSociales extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  styles = /* HTML */ `
    <style>
      #nav-redes-sociales {
        max-width: 100vw;
        height: 40px;
        background-color: var(--rosa);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0 20px;
        gap: 20px;

        & img {
          width: 25px;
          &:hover {
            opacity: 0.7;
          }
        }
      }
      @media only screen and (max-width: 767px) {
        #nav-redes-sociales {
          display: none;
        }
      }
    </style>
  `;

  connectedCallback() {
    this.shadowRoot.innerHTML = /* HTML */ ` ${this.styles}

      <nav id="nav-redes-sociales">
        <a href=""
          ><img src="../src/assets/svg/instagram.svg" alt="logo-instagram"
        /></a>
        <a href=""
          ><img src="../src/assets/svg/logo-github.svg" alt="logo-github"
        /></a>
      </nav>`;
  }
}

customElements.define("nav-redes-sociales", NavRedesSociales);
