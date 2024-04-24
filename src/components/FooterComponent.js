class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  styles = /* css */ `
    .footer{
        background-color: white;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        /*dark:bg-gray-900*/
        margin: 1rem;

        .footer-content{
            width: 100%;
            max-width: 1280px;
            margin: 0 auto;
           
            
            .footer-logo{
                display: flex;
                align-items:center;
                margin-bottom: 1rem;
                padding: 1rem;
                
                .footer-logo-tamaño{
                    height: 4rem;
                }
            }

            ul {
                display: flex;
                flex-wrap: nowrap;
                align-items: center;
                justify-content: space-evenly;
                margin-bottom: 1.5rem; /* Ajusta este valor según sea necesario */
                font-size: 0.875rem; /* Equivalente a text-sm en Tailwind CSS */
                font-weight: 500; /* Equivalente a font-medium en Tailwind CSS */
                color: #6b7280; /* Equivalente a text-gray-500 en Tailwind CSS */
                list-style-type: none;
                padding: 0;
                
                li {
                    
                    
    
                    a {
                        text-decoration: none;
                        transition: text-decoration 0.2s ease-in-out;
                        color: inherit; /* Hereda el color del padre */
    
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
    
    .hr-styles {
      margin: 1.5rem auto;
      border-color: #edf2f7; /* Color del borde gris */
      width: 90%;
    }
    
    .text-copyright {
        font-size: 0.875rem; /* Equivalente a text-sm en Tailwind CSS */
        color: #6b7280; /* Equivalente a text-gray-500 en Tailwind CSS */
        text-align: left; /* Por defecto, el texto se alinea a la izquierda */
        margin: 0 0.875rem;
        

        a{
          text-decoration: none;
          transition: text-decoration 0.2s ease-in-out;

          &:hover{
            text-decoration: underline;
        }
      }
    }

    .footer-redes-sociales{
        display: flex;
        margin-top: 1rem; /* Ajusta este valor según sea necesario */

        .item-primero{
          color: #6b7280;
          transition: color 0.2s ease-in-out; /

          .svg-tamanio{
            width: 1rem;
            height: 1rem;
        }
        }

        .item{
          color: #6b7280;
          transition: color 0.2s ease-in-out;
          margin-left: 1.25rem;

          .svg-tamanio{
            width: 1rem;
            height: 1rem;
        }
        }
    
        .item-primero:hover, .item:hover {
          color: #111827; /* Equivalente a    text-gray-900 en Tailwind CSS */
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
    }
    /* Estilos específicos para dispositivos con una resolución igual o mayor a "mediana" */
    /* sm */
    @media screen and (min-width: 768px) {
        /* Estilos que deseas aplicar para dispositivos con una resolución igual o mayor a "pequeña" */
        /* Por ejemplo: */
        /* sm:flex sm:items-center sm:justify-between */
        .footer-content-sm {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .footer-logo{
              margin-bottom: 0;
          }

          .text-copyright {
            text-align: center; /* Equivalente a sm:text-center en Tailwind CSS */
          }
          .footer-redes-sociales{
            justify-content: center; 
            margin-top: 0; 
          }
        }
       
        .hr-styles {
            margin-left: auto; /* Margen izquierdo automático */
            margin-right: auto; /* Margen derecho automático */

        }
    }
    
    `;
  render() {
    this.shadowRoot.innerHTML = /* html */ `
    <style>
        ${this.styles}
    </style>

<footer class="footer">
<div class="footer-content">
  <div class="footer-content-sm">
    <a href="../index.html" class="footer-logo">
      <img
        src="../public/img/Logo.svg"
        class="footer-logo-tamaño"
        alt="Logo"
      />
    </a>
    <ul class="footer-items">
      <li>
        <a href="#" class="footer-item">About</a>
      </li>
      <li>
        <a href="#" class="footer-item">Privacy Policy</a>
      </li>
      <li>
        <a href="#" class="footer-item">Licensing</a>
      </li>
      <li>
        <a href="#" class="footer-hover">Contacto</a>
      </li>
    </ul>
  </div>

  <hr class="hr-styles" />

  <div class="footer-content-sm">
    <span class="text-copyright"
      >© 2023
      <a href="./index.html">laCocinaDelMercado™</a>
      . Todos los derechos reservados.
    </span>
    <div class="footer-redes-sociales">
      <a href="#" class="item-primero">
        <svg
          class="svg-tamanio"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 8 19"
        >
          <path
            fill-rule="evenodd"
            d="M6.135 3H8V0H6.135a4.147 4.          147 0 0 0-4.142 4.142V6H0v3h2v9.        938h3V9h2.021l.592-3H5V3.591A.6.          6 0 0 1 5.592 3h.543Z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="sr-only">Facebook page</span>
      </a>
      <a href="#" class="item">
        <svg
          class="svg-tamanio"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 21 16"
        >
          <path
            d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
          />
        </svg>
        <span class="sr-only">Discord community</span>
      </a>
      <a href="#" class="item">
        <svg
          class="svg-tamanio"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 17"
        >
          <path
            fill-rule="evenodd"
            d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="sr-only">Twitter page</span>
      </a>
      <a href="#" class="item">
        <svg
          class="svg-tamanio"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="sr-only">GitHub account</span>
      </a>
      <a href="#" class="item">
        <svg
          class="svg-tamanio"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="sr-only">Dribbble account</span>
      </a>
    </div>
  </div>
</div>
</footer>
        `;
  }
}

customElements.define("footer-component", FooterComponent);