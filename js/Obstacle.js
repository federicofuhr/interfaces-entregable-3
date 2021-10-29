export default class Obstacle {
    constructor() {
        this.obstacle = document.querySelector(".obstacle");
        this.topPosition = this.obstacle.offsetTop;
        this.leftPosition = this.obstacle.offsetLeft;
        this.width = this.obstacle.offsetWidth;
        this.height = this.obstacle.offsetHeight;
    }

    getDiv() {
        return this.obstacle;
    }

    getPositionX() {
        return this.obstacle.offsetLeft;
    }

    getPositionY() {
        return this.obstacle.offsetTop;
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