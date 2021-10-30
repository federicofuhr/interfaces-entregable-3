export default class Obstacle {
    constructor(obstacleContainer) {
        this.obstacle = obstacleContainer;
        this.topPosition = this.obstacle.offsetTop;
        this.leftPosition = this.obstacle.offsetLeft;
        this.width = this.obstacle.offsetWidth;
        this.height = this.obstacle.offsetHeight;
    }

    /**
     * 
     * Retorna el div del html que contiene al obstaculo
     */
    getDiv() {
        return this.obstacle;
    }

    /**
     * 
     * Retorna la posicion del obstaculo en el eje X respecto al borde izquierdo de la pantalla
     */
    getPositionX() {
        return this.obstacle.offsetLeft;
    }

    /**
     * 
     * Retorna la posicion del obstaculo en el eje Y respecto al borde superior de la pantalla
     */
    getPositionY() {
        return this.obstacle.offsetTop;
    }

    /**
     * 
     * Retorna el ancho del div que contiene al obstaculo
     */
    getWidth() {
        return this.width;
    }

    /**
     * 
     * Retorna la altura del div que contiene al obstaculo
     */
    getHeight() {
        return this.height;
    }

    consoleLog() {
        console.log(this);
    }
}