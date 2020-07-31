class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            'Copyright &copy; Fernando Bautista Morales 2020.';
    }
}
customElements.define("mi-footer", MiFooter);