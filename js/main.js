import Character from './Character.js';
import Obstacle from './Obstacle.js';

document.addEventListener("DOMContentLoaded", init);

function init() {
    "use strict";

    let characterDiv = document.querySelector("#character");
    let character = new Character();
    let obstacle = new Obstacle();
    document.addEventListener("keydown", (e) => {
        character.action(e);
    })
    characterDiv.addEventListener("animationend", () => {
        if (!character.isDead()) {
            character.defaultAnimation();
        }
    });

    let collision = setInterval(() => {
        if (checkCollision()) {
            clearInterval(collision);
            stopGame();
            character.die();
        }
    }, 50);

    /*FUNCIONES*/

    function checkCollision() {
        let characterX1 = character.getPositionX();
        let characterX2 = character.getWidth() + characterX1;
        let characterY1 = character.getPositionY();
        let characterY2 = character.getHeight() + characterY1;
        let obstacleX1 = obstacle.getPositionX();
        let obstacleX2 = obstacle.getWidth() + obstacleX1;
        let obstacleY1 = obstacle.getPositionY();
        let obstacleY2 = obstacle.getHeight() + obstacleY1;
        if ((characterX2 >= obstacleX1) && (characterX1 <= obstacleX2)) {
            if ((characterY1 >= obstacleY1) && (characterY2 <= obstacleY2)) {
                return true;
            }
            return false;
        }
        return false;
    }

    function stopGame() {
        let backgroundLayers = document.querySelectorAll(".scene");
        for (let i = 0; i < backgroundLayers.length; i++) {
            backgroundLayers[i].classList.add("stop");
        }
        let trunk = document.querySelector("#trunk-obstacle");
        trunk.style.animationPlayState = "paused";
        
    }
}