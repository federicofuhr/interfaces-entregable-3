import Character from './Character.js';
import Obstacle from './Obstacle.js';

document.addEventListener("DOMContentLoaded", init);

function init() {
    "use strict";

    let characterDiv = document.querySelector("#character");
    let character = new Character();
    let obstacle = new Obstacle();
    document.addEventListener("keydown", (e) => { character.action(e); })
    characterDiv.addEventListener("animationend", () => { character.defaultAnimation(); });

    let collision = setInterval(() => {
        if (checkCollision()) {
            //clearInterval(collision);
            console.log("chocaste capo");
        }
    }, 1);

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
            //debugger;
            if ((characterY1 >= obstacleY1) && (characterY2 <= obstacleY2)) {
                //debugger;
                return true;
            }
            return false;
        }
        return false;
    }
}