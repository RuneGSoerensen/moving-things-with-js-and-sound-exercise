
const dodger = document.querySelector("#dodger");
const movementSound = document.querySelector("#movementSound");
const gameOverSound = document.querySelector("#gameoverSound")
dodger.style.bottom = "100px";

function playGameOverSound() {
    movementSound.currentTime = 0;
    gameOverSound.play();
}

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
    if (left <= 1) {
        playGameOverSound();
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 10}px`;
    }
    if (left >= 360) {
        playGameOverSound();
    }
}
function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
  
    if (bottom < 360) {
      dodger.style.bottom = `${bottom + 10}px`;
    }
    if (bottom >= 360) {
        playGameOverSound();
    }
}

function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
  
    if (bottom > 0) {
      dodger.style.bottom = `${bottom - 10}px`;
    }
    if (bottom < 1) {
        playGameOverSound();
    }
}

function playSoundOnMovement() {
    movementSound.currentTime = 0;
    movementSound.play();
}




document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
        playSoundOnMovement();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
        playSoundOnMovement();
    }
    if (e.key === "ArrowUp") {
        moveDodgerUp();
        playSoundOnMovement();
    }
    if (e.key === "ArrowDown") {
        moveDodgerDown();
        playSoundOnMovement();
    }
});

