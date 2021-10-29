export default class Coin {
    constructor() {
        this.coin = document.querySelector("#coin");
        this.topPosition = this.coin.offsetTop;
        this.leftPosition = this.coin.offsetLeft;
        this.width = this.coin.offsetWidth;
        this.height = this.coin.offsetHeight;
        this.currentClassName = this.coin.className;
    }

    scroll() {
        this.coin.classList.toggle(this.currentClassName);
        this.currentClassName = "coin-scroll";
        this.coin.classList.toggle(this.currentClassName);
    }

    spin() {
        this.coin.classList.toggle(this.currentClassName);
        this.currentClassName = "coin-spin";
        this.coin.classList.toggle(this.currentClassName);
    }

    getDiv() {
        return this.coin;
    }

    getPositionX() {
        return this.coin.offsetLeft;
    }

    getPositionY() {
        return this.coin.offsetTop;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    consoleLog() {
        console.log(this);
    }
}