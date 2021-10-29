export default class Character {
    constructor() {
        this.character = document.querySelector("#character");
        this.topPosition = character.offsetTop;
        this.leftPosition = character.offsetLeft;
        this.width = character.offsetWidth;
        this.height = this.character.offsetHeight;
        this.currentClassName = this.character.className;
        this.dead = false;
    }

    getPositionX() {
        return this.character.offsetLeft;
    }

    getPositionY() {
        return this.character.offsetTop;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    isDead() {
        return this.dead;
    }

    setDead() {
        this.dead = true;
    }

    consoleLog() {
        console.log(this);
    }

    run() {
        this.character.classList.toggle(this.currentClassName);
        this.currentClassName = "character-running";
    }

    jump() {
        this.character.classList.toggle(this.currentClassName);
        this.currentClassName = "character-jump";
        this.character.classList.toggle(this.currentClassName);
    }

    slide() {
        this.character.classList.toggle(this.currentClassName);
        this.currentClassName = "character-slide";
        this.character.classList.toggle(this.currentClassName);
    }

    die() {
        this.setDead();
        this.character.classList.toggle(this.currentClassName);
        this.currentClassName = "character-die";
        this.character.classList.add(this.currentClassName);
        //this.character.classList.add()
    }

    defaultAnimation() {
        if (this.currentClassName != "character-running") {
            this.character.classList.toggle(this.currentClassName);
            this.currentClassName = "character-running";
            this.character.classList.toggle(this.currentClassName);
        }
    }

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