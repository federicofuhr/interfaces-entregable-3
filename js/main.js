import Character from './Character.js';
import Obstacle from './Obstacle.js';
import Coin from './Coin.js';

document.addEventListener("DOMContentLoaded", init);

function init() {
    "use strict";

    let characterDiv = document.querySelector("#character");
    let character = new Character();
    let obstacle = new Obstacle(document.querySelector("#trunk-obstacle"));
    let obstacle2 = new Obstacle(document.querySelector("#trunk-obstacle2"));
    let coin = new Coin();
    let count = 0;
    document.addEventListener("keydown", (e) => {
        character.action(e);
    })
    document.addEventListener("keydown", (e) => {
        character.action(e);
    })
    characterDiv.addEventListener("animationend", () => {
        if (!character.isDead()) {
            character.defaultAnimation();
        }
    });

    let collision = setInterval(() => {
        //console.log("y1: ", character.getPositionY(), " y2: ", (character.getHeight()+ character.getPositionY()));
        for (let i = 0; i < obstacles.length; i++) {
            let obstacle = obstacles[i];
            if (checkCollision(obstacle)) {
                clearInterval(collision);
                stopGame();
                character.die();
            }   
        }
    }, 100);

    let obstacles = [];
    obstacles.push(obstacle);
    obstacles.push(obstacle2);

    /*FUNCIONES*/

    function checkCollision(obstacle) {
        let coinX1 = coin.getPositionX();
        let coinX2 = coin.getWidth() + coinX1;
        let coinY1 = coin.getPositionY();
        let coinY2 = coin.getHeight() + coinY1;
        let characterX1 = character.getPositionX();
        let characterX2 = character.getWidth() + characterX1;
        let characterY1 = character.getPositionY();
        let characterY2 = character.getHeight() + characterY1;
        let obstacleX1 = obstacle.getPositionX();
        let obstacleX2 = obstacle.getWidth() + obstacleX1;
        let obstacleY1 = obstacle.getPositionY();
        let obstacleY2 = obstacle.getHeight() + obstacleY1;
        if ((characterX2 >= coinX1) && (characterX1 <= coinX2)) {
            if ((characterY1 <= coinY1)) {
                count += 100;
                document.querySelector("#count").innerHTML = count;
                coin.spin();
                setTimeout(() => {
                    coin.scroll();
                }, 1000);
            }
        }
        if ((characterX2 >= obstacleX1) && (characterX1 <= obstacleX2)) {
            if ((characterY2 <= obstacleY2) && (characterY2 >= obstacleY1)) {
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
        for (let i = 0; i < obstacles.length; i++) {
            let obstacle = obstacles[i];
            obstacle.getDiv().style.animationPlayState = "paused";
            
        }        
    }
}