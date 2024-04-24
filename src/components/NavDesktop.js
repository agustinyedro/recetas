class NavDesktop extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  styles = /*HTML*/ `
  <style>
    #nav{
        padding-top: 10px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap: 70px;
    
        a{
            text-decoration: none;
            position: relative;
            color: #2a2b2a;
            font-weight: bold;
            font-size: 20px;
        }
    
        a::after {
            content: ''; 
            position: absolute;
            left: 0; 
            bottom: -2px; 
            width: 0; 
            height: 2px; 
            background-color: #2a2b2a80; 
            transition: width 0.3s ease-in-out; 
        }
    
        a:hover::after {
            width: 100%; 
        }
    
        a:hover{
            color: #2a2b2a80;
        }
    
        #logo{
            width: 200px;
            transition: all 0.3s ease-in-out;
        
            &:hover{
                opacity: 0.7;
                cursor: pointer;
            }
        }
    }

    @media only screen and (max-width: 767px) {
        #nav{
            display: none;
        }
    }
    </style>
    `;

  connectedCallback() {
    this.shadowRoot.innerHTML = /*HTML*/ `
        
        ${this.styles}
        
        <nav id="nav">
            <a href="index.html">Inicio</a>
            <a href="pages/recetas.html">Recetas</a>
            <img id="logo" src="../src/assets/svg/Logo.svg" alt="Logo">
            <a href="pages/aboutme.html">Sobre mi</a>
            <a href="pages/contacto.html">Contacto</a>
        </nav>
        `;
  }
}

customElements.define("nav-desktop", NavDesktop);
