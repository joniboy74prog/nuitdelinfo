const canvas = document.getElementById("ttrCanvas");
const ctx = canvas.getContext("2d");
let modalOverlay = document.getElementById("modalOverlay");
let directions = document.getElementById("directions");
let playButton = document.getElementById("playButton");
let mainSong = document.getElementById("mainSong");
let applause = document.getElementById("endApplause");
let startModal = document.getElementById("startGameModal");
let endModal = document.getElementById("endGameModal");
let scoreDisplay = document.getElementById("score");
let comboCount = document.getElementById("comboCount");
let comboText = document.getElementById("comboText");
let pauseIcon = document.getElementById("pauseIcon");
let score = 0;
let combo = 0;
let pause = false;
let restart = false;
let ended = false;
let leftPressed = false;
let downPressed = false;
let upPressed = false;
let rightPressed = false;
let dirSty = window.getComputedStyle(directions).getPropertyValue("display");
let arrowArray = [];
let arrowDrawTimeout;
let hitObjects = [
  [2.1,1],
  [4.1,1],
  [6.1,4],
  [8.1,4],
  [10.1,2],
  [12.1,2],
  [14.1,3],
  [16.1,3],
  [18.1,1],
  [18.35,2],
  [18.6,4],
  [18.85,3],
  [19.35,1],
  [19.35,2],
  [19.6,4],
  [19.6,3],
  [20.1,4],
  [20.35,3],
  [20.6,1],
  [20.85,2],
  [21.35,4],
  [21.35,3],
  [21.6,1],
  [21.6,2],
  [22.1,1],
  [22.35,2],
  [22.6,4],
  [22.85,3],
  [23.35,1],
  [23.35,2],
  [23.6,4],
  [23.6,3],
  [24.1,4],
  [24.35,3],
  [24.6,2],
  [24.85,1],
  [25.35,1],
  [25.35,3],
  [25.6,4],
  [25.6,2],
  [26.1,4],
  [26.35,3],
  [26.6,1],
  [26.85,2],
  [27.35,4],
  [27.35,3],
  [27.6,1],
  [27.6,2],
  [28.1,1],
  [28.35,2],
  [28.6,4],
  [28.85,3],
  [29.35,1],
  [29.35,2],
  [29.6,4],
  [29.6,3],
  [30.1,4],
  [30.35,3],
  [30.6,1],
  [30.85,2],
  [31.35,4],
  [31.35,3],
  [31.6,1],
  [31.6,2],
  [32.1,1],
  [32.35,2],
  [32.6,3],
  [32.85,4],
  [33.35,4],
  [33.35,2],
  [33.6,1],
  [33.6,3],
  [34.1,1],
  [34.1,3],
  [34.6,4],
  [35.1,2],
  [35.6,4],
  [36.1,4],
  [36.6,1],
  [37.1,3],
  [37.6,1],
  [38.1,1],
  [38.6,4],
  [39.1,2],
  [39.6,4],
  [40.1,4],
  [40.1,2],
  [40.6,1],
  [41.1,3],
  [41.6,1],
  [42.1,1],
  [42.1,3],
  [42.6,4],
  [43.1,2],
  [43.6,4],
  [44.1,4],
  [44.1,2],
  [44.6,1],
  [45.1,3],
  [45.6,1],
  [46.1,4],
  [46.1,2],
  [46.6,1],
  [46.6,3],
  [47.1,4],
  [47.35,2],
  [47.6,4],
  [47.85,2],
  [48.1,4],
  [50.1,1],
  [50.1,4],
  [50.35,3],
  [50.6,2],
  [50.85,1],
  [50.85,4],
  [51.1,2],
  [51.35,1],
  [51.35,4],
  [51.6,2],
  [51.6,3],
  [52.1,2],
  [52.1,3],
  [52.35,4],
  [52.6,1],
  [52.85,2],
  [52.85,3],
  [53.1,4],
  [53.35,2],
  [53.35,3],
  [53.6,1],
  [53.6,4],
  [54.1,1],
  [54.1,4],
  [54.35,2],
  [54.6,3],
  [54.85,1],
  [54.85,4],
  [55.1,3],
  [55.35,1],
  [55.35,4],
  [55.6,2],
  [55.6,3],
  [56.1,2],
  [56.1,3],
  [56.35,1],
  [56.35,4],
  [56.6,2],
  [56.6,3], 
  [56.85,1],
  [56.85,4],
  [57.1,2],
  [57.1,3],
  [57.35,1],
  [57.35,4],
  [57.6,2],
  [57.6,3],
  [58.1,1],
  [58.1,4],
  [58.35,2],
  [58.6,3],
  [58.85,1],
  [58.85,4],
  [59.1,3],
  [59.35,1],
  [59.35,4],
  [59.6,2],
  [59.6,3],
  [60.1,2],
  [60.1,3],
  [60.35,1],
  [60.6,4],
  [60.85,2],
  [60.85,3],
  [61.1,1],
  [61.35,2],
  [61.35,3],
  [61.6,1],
  [61.6,4],
  [62.1,1],
  [62.1,4],
  [62.35,3],
  [62.6,2],
  [62.85,1],
  [62.85,4],
  [63.1,2],
  [63.1,3],
  [63.35,1],
  [63.35,4],
  [63.6,2],
  [63.6,3],
  [64.1,2],
  [64.1,3],
  [64.35,1],
  [64.35,4],
  [64.6,2],
  [64.6,3],
  [64.85,1],
  [64.85,4],
  [65.1,2],
  [65.1,3],
  [65.35,1],
  [65.35,4],
  [65.6,2],
  [65.725,3],
  [65.85,2],
  [65.975,3],
  [66.1,1],
  [66.1,4]
];
let nxtObj = 0;

window.onload = drawStaticArrows;
document.getElementById("redirectButton").onclick = popupDirections;
playButton.onclick = gameStart;
document.getElementById("playAgainButton").onclick = playAgain;
document.getElementById("muteIcon").onclick = toggleMute;
pauseIcon.onclick = gamePause;
document.getElementById("restartIcon").onclick = gameRestart;
document.getElementById("mainSong").onended = songEnd;
document.getElementById("endApplause").onended = gameEnd;
document.addEventListener("keydown", handleKeyPress);
document.addEventListener("keyup", handleKeyPress);

function drawStaticArrows() {
  let leftImg = document.getElementById("left");
  let leftSX = 1.5 * (canvas.width / 8);
  let downImg = document.getElementById("down");
  let downSX = 2.75 * (canvas.width / 8);
  let upImg = document.getElementById("up");
  let upSX = 4.0 * (canvas.width / 8);
  let rightImg = document.getElementById("right");
  let rightSX = 5.25 * (canvas.width / 8);

  let img;
  let sx;
  let sy = 40;
  let width = 75;
  let height = 75;
  ["left", "down", "up", "right"].forEach(dir => {
    switch (dir) {
      case "left":
        img = leftImg;
        sx = leftSX;
        break;
      case "down":
        img = downImg;
        sx = downSX;
        break;
      case "up":
        img = upImg;
        sx = upSX;
        break;
      case "right":
        img = rightImg;
        sx = rightSX;
    }
    ctx.drawImage(img, sx, sy, width, height);
  });
}

function popupDirections() {
  startModal.style.display = "none";
  directions.style.zIndex = 10;
  if (dirSty === "none") {
    directions.style.display = "flex";
  }
}

function gameStart() {
  modalOverlay.style.visibility = "hidden";
  playButton.style.display = "none";
  directions.style.zIndex = 0;
  if (dirSty === "none") {
    directions.style.display = "none";
  }
  mainSong.play();
  arrowDraw();
  setInterval(draw, 1);
}

function arrowDraw() {
  if (ended || restart) {
    return;
  } else {
    if (!pause) {
      if (mainSong.currentTime >= hitObjects[nxtObj][0]){
        console.log(mainSong.currentTime);
        let nextArrow = arrowCreate(hitObjects[nxtObj][1]);
        arrowArray.push(nextArrow);
        arrowArray[arrowArray.length - 1].drawArrow();
        arrowArray.forEach(arrow => (arrow.dy = -4));
        nxtObj++;
      }
      arrowDrawTimeout = setTimeout(arrowDraw, 10);
    } else {
      for (let i = 0; i < arrowArray.length; i++) {
        arrowArray[i].dy = 0;
      }
      arrowDrawTimeout = setTimeout(arrowDraw, 10);
    }
  }
}

function arrowCreate(num) {
  switch (num) {
    case 1:
      return new ArrowSprite("left");
    case 2:
      return new ArrowSprite("down");
    case 3:
      return new ArrowSprite("up");
    case 4:
      return new ArrowSprite("right");
  }
}

function gamePause() {
  pause = !pause;
  if (pause) {
    mainSong.pause();
    pauseIcon.src = "./assets/play.png";
  } else {
    mainSong.play();
    pauseIcon.src = "./assets/pause.png";
  }
}

function gameRestart() {
  restarting();
  if (restart === true) {
    restart = false;
    playButton.style.display = "flex";
    startModal.style.display = "flex";
    modalOverlay.style.visibility = "visible";
  }
}

function restarting() {
  clearTimeout(arrowDrawTimeout);
  restart = true;
  pause = false;
  clearNumbers();
  mainSong.pause();
  mainSong.currentTime = 0;
  arrowArray = arrowArray.map(arrow => {
    arrow.y = canvas.height;
    arrow.dy = 0;
  });
  arrowArray = [];
}

function clearNumbers() {
  score = 0;
  scoreDisplay.innerHTML = "Score: " + `${score}`;
  combo = 0;
  comboCount.innerHTML = "";
  nxtObj = 0;
}

function songEnd() {
  ended = true;
  if (ended === true) {
    applause.play();
  }
}

function gameEnd() {
  modalOverlay.style.visibility = "visible";
  endModal.style.display = "flex";
}

function playAgain() {
  modalOverlay.style.visibility = "hidden";
  endModal.style.display = "none";
  clearNumbers();
  ended = false;
  gameStart();
}

function toggleMute() {
  mainSong.muted = !mainSong.muted;
}

function handleKeyPress(e) {
  switch (e.keyCode) {
    case 37:
      leftPressed = !leftPressed;
      break;
    case 68:
      leftPressed = !leftPressed;
      break;
    case 38:
      upPressed = !upPressed;
      break;
    case 74:
        upPressed = !upPressed;
        break;
    case 39:
      rightPressed = !rightPressed;
      break;
    case 75:
      rightPressed = !rightPressed;
      break;
    case 40:
      downPressed = !downPressed;
      break;
    case 70:
      downPressed = !downPressed;
      break;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawStaticArrows();

  for (let i = 0; i < arrowArray.length; i++) {
    if (combo > 0) {
      comboText.style.visibility = "visible";
    } else {
      comboText.style.visibility = "hidden";
    }

    if (leftPressed) {
      if (
        arrowArray[i].x === 84.375 &&
        arrowArray[i].y < 28 &&
        arrowArray[i].y > 1
      ) {
        if (arrowArray[i].combo === true) {
          combo += 1;
          arrowArray[i].combo = false;
        }
        comboCount.innerHTML = combo;

        if (arrowArray[i].points === true && combo <= 10) {
          score += 50;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 10 && combo <= 25) {
          score += 75;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 25 && combo <= 50) {
          score += 100;
          arrowArray[i].points = false;
        } else if (
          arrowArray[i].points === true &&
          combo > 50 &&
          combo <= 100
        ) {
          score += 150;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 100) {
          score += 200;
          arrowArray[i].points = false;
        }
        scoreDisplay.innerHTML = "Score: " + `${score}`;
        arrowArray[i].directionImage.src = "";
      }
    }

    if (downPressed) {
      if (
        arrowArray[i].x === 154.6875 &&
        arrowArray[i].y < 28 &&
        arrowArray[i].y > 1
      ) {
        if (arrowArray[i].combo === true) {
          combo += 1;
          arrowArray[i].combo = false;
        }
        comboCount.innerHTML = combo;

        if (arrowArray[i].points === true && combo <= 10) {
          score += 50;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 10 && combo <= 25) {
          score += 75;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 25 && combo <= 50) {
          score += 100;
          arrowArray[i].points = false;
        } else if (
          arrowArray[i].points === true &&
          combo > 50 &&
          combo <= 100
        ) {
          score += 150;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 100) {
          score += 200;
          arrowArray[i].points = false;
        }
        scoreDisplay.innerHTML = "Score: " + `${score}`;
        arrowArray[i].directionImage.src = "";
      }
    }

    if (upPressed) {
      if (
        arrowArray[i].x === 225 &&
        arrowArray[i].y < 28 &&
        arrowArray[i].y > 1
      ) {
        if (arrowArray[i].combo === true) {
          combo += 1;
          arrowArray[i].combo = false;
        }
        comboCount.innerHTML = combo;

        if (arrowArray[i].points === true && combo <= 10) {
          score += 50;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 10 && combo <= 25) {
          score += 75;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 25 && combo <= 50) {
          score += 100;
          arrowArray[i].points = false;
        } else if (
          arrowArray[i].points === true &&
          combo > 50 &&
          combo <= 100
        ) {
          score += 150;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 100) {
          score += 200;
          arrowArray[i].points = false;
        }
        scoreDisplay.innerHTML = "Score: " + `${score}`;
        arrowArray[i].directionImage.src = "";
      }
    }

    if (rightPressed) {
      if (
        arrowArray[i].x === 295.3125 &&
        arrowArray[i].y < 28 &&
        arrowArray[i].y > 1
      ) {
        if (arrowArray[i].combo === true) {
          combo += 1;
          arrowArray[i].combo = false;
        }
        comboCount.innerHTML = combo;

        if (arrowArray[i].points === true && combo <= 10) {
          score += 50;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 10 && combo <= 25) {
          score += 75;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 25 && combo <= 50) {
          score += 100;
          arrowArray[i].points = false;
        } else if (
          arrowArray[i].points === true &&
          combo > 50 &&
          combo <= 100
        ) {
          score += 150;
          arrowArray[i].points = false;
        } else if (arrowArray[i].points === true && combo > 100) {
          score += 200;
          arrowArray[i].points = false;
        }
        scoreDisplay.innerHTML = "Score: " + `${score}`;
        arrowArray[i].directionImage.src = "";
      }
    }

    if (arrowArray[i].y <= 1 && arrowArray[i].points !== false) {
      combo = 0;
      comboCount.innerHTML = "";
      arrowArray[i].points = false;
    }
  }
}
