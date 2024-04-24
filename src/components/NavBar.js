import "./NavRedesSociales.js";
import "./NavDesktop.js";
import "./NavCelular.js";

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  style = /* HTML */ `
    <style>
      hr {
        width: 98%;
        text-align: center;
        margin: 20px auto;
      }
      @media only screen and (max-width: 767px) {
        .header hr {
          margin: 0 auto 15px auto;
        }
      }
    </style>
  `;
  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* HTML */ `
      ${this.style}
      <nav-redes-sociales></nav-redes-sociales>

      <nav-desktop></nav-desktop>

      <nav-celular></nav-celular>

      <hr />
    `;
  }
}

customElements.define("nav-bar", NavBar);
