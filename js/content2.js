let randomNumber = Math.floor(Math.random() * 100) + 1;
let turns = 0;
let min = 1;
let max = 100;

function checkGuess() {
  // 获取用户输入的数字

  if (
    isNaN(parseInt(document.getElementById("guess-input").value)) ||
    parseInt(document.getElementById("guess-input").value) <= min ||
    parseInt(document.getElementById("guess-input").value) >= max
  ) {
    clearInput();
    //alert("Please enter a number between " + min + " and " + max);
    return;
  }

  // 更新尝试次数
  turns++;
  document.getElementById("turns").textContent = turns;

  if (parseInt(document.getElementById("guess-input").value) < randomNumber) {
    min = parseInt(document.getElementById("guess-input").value);
    document.getElementById("min-value").innerHTML = `<h1>${min}</h1>`;
  } else if (
    parseInt(document.getElementById("guess-input").value) > randomNumber
  ) {
    max = parseInt(document.getElementById("guess-input").value);
    document.getElementById("max-value").innerHTML = `<h1>${max}</h1>`;
  } else {
    document.getElementById("modal").style.display = "block";
    document.getElementById("turns-count").innerText = turns;
    document.querySelector(".close").addEventListener("click", closeModal);

    function closeModal() {
      document.getElementById("modal").style.display = "none";
      document.getElementById("modal").remove();
    }

    resetGame();
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
  if (document.getElementById("guess-input").value.length < 2) {
    document.getElementById("guess-input").value =
      document.getElementById("guess-input").value + number;
  }
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("modal").remove();
}
