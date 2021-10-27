import Character from './Character.js';

document.addEventListener("DOMContentLoaded", init);

function init() {
    "use strict";

    let characterDiv = document.querySelector("#character");
    let character = new Character();
    document.addEventListener("keydown", (e) => { character.action(e); })
    characterDiv.addEventListener("animationend", () => { character.defaultAnimation(); });
}