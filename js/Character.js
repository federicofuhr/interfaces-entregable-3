export default class Character {
    constructor() {
        this.character = document.querySelector("#character");
        this.topPosition = character.offsetTop;
        this.leftPosition = character.offsetLeft;
        this.width = character.offsetWidth;
        this.currentClassName = "character-running";
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
        console.log("entro al slide");
        this.character.classList.toggle(this.currentClassName);
        this.currentClassName = "character-slide";
        this.character.classList.toggle(this.currentClassName);
    }

    defaultAnimation() {
        if (this.currentClassName != "character-running") {
            this.character.classList.toggle(this.currentClassName);
            this.currentClassName = "character-running";
            this.character.classList.toggle(this.currentClassName);
        }
    }

    action(event) {
        console.log(event);
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