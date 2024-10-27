// const music = document.getElementById("backgroundMusic");
// const playButton = document.getElementById("playButton");

// music
//   .play()
//   .then(() => {})
//   .catch(() => {
//     playButton.style.display = "block";
//     playButton.addEventListener("click", function () {
//       music.play();
//       playButton.style.display = "none"; // 音乐播放后隐藏按钮
//     });
//   });
// 生成 1 到 100 的随机数
let randomNumber = Math.floor(Math.random() * 100) + 1;
let turns = 0;
let min = 1;
let max = 100;

function checkGuess() {
  // 获取用户输入的数字
  const guess = parseInt(document.getElementById("guess-input").value);
  if (isNaN(guess) || guess <= min || guess >= max) {
    clearInput();
    //alert("Please enter a number between " + min + " and " + max);
    return;
  }

  // 更新尝试次数
  turns++;
  document.getElementById("turns").textContent = turns;

  if (guess < randomNumber) {
    min = guess;
    document.getElementById("min-value").innerHTML = `<h1>${min}</h1>`;
  } else if (guess > randomNumber) {
    max = guess;
    document.getElementById("max-value").innerHTML = `<h1>${max}</h1>`;
  } else {
    fetch("guessnumber_modal.html")
      .then((response) => response.text())
      .then((data) => {
        document.body.insertAdjacentHTML("beforeend", data);
        document.getElementById("modal").style.display = "block";
        document.getElementById("turns-count").innerText = turns;
        document.querySelector(".close").addEventListener("click", closeModal);

        function closeModal() {
          document.getElementById("modal").style.display = "none";
          document.getElementById("modal").remove();
        }

        resetGame();
      });
  }
  clearInput();
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  turns = 0;
  min = 1;
  max = 100;
  document.getElementById("min-value").innerHTML = `<h1>${min}</h1>`;
  document.getElementById("max-value").innerHTML = `<h1>${max}</h1>`;
  document.getElementById("turns").textContent = turns;
}

function clearInput() {
  document.getElementById("guess-input").value = "";
}

function appendNumber(number) {
  const inputField = document.getElementById("guess-input");

  if (inputField.value.length < 2) {
    inputField.value = inputField.value + number;
  }
}
