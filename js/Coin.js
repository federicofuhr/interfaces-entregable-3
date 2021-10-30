export default class Coin {
    /**
     * CONTRUCTOR DE LA CLASE MONEDA
     */
    constructor() {
        this.coin = document.querySelector("#coin");
        this.topPosition = this.coin.offsetTop;
        this.leftPosition = this.coin.offsetLeft;
        this.width = this.coin.offsetWidth;
        this.height = this.coin.offsetHeight;
        this.currentClassName = this.coin.className;
    }

    /**
     * CLASE QUE TIENE LA CLASE MONEDA PARA LA ANIMACION DE MOVERSE
     */
    scroll() {
        this.coin.classList.toggle(this.currentClassName);
        this.currentClassName = "coin-scroll";
        this.coin.classList.toggle(this.currentClassName);
    }

    /**
     * CLASE DE LA CLASE MONEDA PARA LA ANIMACION DE GIRAR CUANDO LA AGARRAN
     */
    spin() {
        this.coin.classList.toggle(this.currentClassName);
        this.currentClassName = "coin-spin";
        this.coin.classList.toggle(this.currentClassName);
    }

    /**
     * RETORNA LA MONEDA
     */
    getDiv() {
        return this.coin;
    }

    /**
     * RETORNA LA POSICION EN EL EJE X DE LA MONEDA
     */
    getPositionX() {
        return this.coin.offsetLeft;
    }

    /**
     * RETORNA LA POSICION EN EL EJE Y DE LA MONEDA
     */
    getPositionY() {
        return this.coin.offsetTop;
    }

    /**
     * RETORNA EL ANCHO DE LA MONEDA
     */
    getWidth() {
        return this.width;
    }

    /**
     * RETORNA EL ANCHO DE LA MONEDA
     */
    getHeight() {
        return this.height;
    }

    consoleLog() {
        console.log(this);
    }
}