export default class Character {
    /**
     * CONSTRUCTOR DE LA CLASE DEL PERSONAJE
     */
    constructor() {
        this.character = document.querySelector("#character");
        this.topPosition = character.offsetTop;
        this.leftPosition = character.offsetLeft;
        this.width = character.offsetWidth;
        this.height = this.character.offsetHeight;
        this.currentClassName = this.character.className;
        this.dead = false;
    }

    /**
     * RETORNA LA POSICION EN X
     */
    getPositionX() {
        return this.character.offsetLeft;
    }

    /**
     * RETORNA LA POSICION EN Y
     */
    getPositionY() {
        return this.character.offsetTop;
    }

    /**
     * RETORNA EL ANCHO DEL PERSONAJE
     */
    getWidth() {
        return this.width;
    }

    /**
     * RETORNA EL ALTO DEL PERSONAJE
     */
    getHeight() {
        return this.height;
    }

    /**
     * RETORNA UN BOOLEANO SI EL PERSONAJE MURIO
     */
    isDead() {
        return this.dead;
    }

    /**
     * EL ESTADO DEL PERSONAJE CAMBIA A MUERTO
     */
    setDead() {
        this.dead = true;
    }

    consoleLog() {
        console.log(this);
    }

    /**
     * CLASE QUE TIENE EL JUGADOR PARA LA ANIMACION DE CORRER
     */

    run() {
        this.character.classList.toggle(this.currentClassName);
        this.currentClassName = "character-running";
    }

    /**
     * CLASE QUE TIENE EL JUGADOR PARA LA ANIMACION DE SALTAR
     */
    jump() {
        this.character.classList.toggle(this.currentClassName);
        this.currentClassName = "character-jump";
        this.character.classList.toggle(this.currentClassName);
    }

    /**
     * CLASE QUE TIENE EL JUGADOR PARA LA ANIMACION DE DESLIZARSE Y BAJAR RAPIDO
     */
    slide() {
        this.character.classList.toggle(this.currentClassName);
        this.currentClassName = "character-slide";
        this.character.classList.toggle(this.currentClassName);
    }

    /**
     * CLASE QUE TIENE EL JUGADOR PARA LA ANIMACION DE MORIR
     */
    die() {
        this.setDead();
        this.character.classList.toggle(this.currentClassName);
        this.currentClassName = "character-die";
        this.character.classList.add(this.currentClassName);
        //this.character.classList.add()
    }

    /**
     * ANIMACION POR DEFECTO DEL PERSONAJE
     */
    defaultAnimation() {
        if (this.currentClassName != "character-running") {
            this.character.classList.toggle(this.currentClassName);
            this.currentClassName = "character-running";
            this.character.classList.toggle(this.currentClassName);
        }
    }

    /**
     * ASIGNACION DE BOTONES PARA LAS ACCIONES DEL PERSONAJE
     */
    action(event) {
        const key = event.key;
        switch (key) {
            case "z":
                this.jump();
                break;
            case "x":
                this.slide();
                break;

            default:
                break;
        }

    }
}