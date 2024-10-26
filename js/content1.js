let switch_df_atk = true; // attack=>true
let my_score = [];
let opponent_score = [];
let opponent_random_defend = [];
let opponent_random_attack = [];
for (let i = 0; i < 5; i++) {
  const random = Math.floor(Math.random() * 3 + 1);
  opponent_random_attack.push(random);
}
for (let i = 0; i < 5; i++) {
  const random = Math.floor(Math.random() * 3 + 1);
  opponent_random_defend.push(random);
}

function atk_df_change() {
  let atkElements = document.getElementsByClassName("atk");
  let dfElements = document.getElementsByClassName("df");

  for (let i = 0; i < atkElements.length; i++) {
    atkElements[i].style.opacity = switch_df_atk ? 0 : 1;
  }

  for (let i = 0; i < dfElements.length; i++) {
    dfElements[i].style.opacity = switch_df_atk ? 1 : 0;
  }

  switch_df_atk = !switch_df_atk;
}

//1 :왼 2: 가 3: 오
let count_attack = 0;
let count_defend = 0;
// function opponent_moving() {
//   const opponent_moving=1;
//   }

function my_moving() {}
function attackleft() {
  my_score.push(opponent_random_defend[count_attack++] === 1 ? "X" : "O");
}

function attackcenter() {
  my_score.push(opponent_random_defend[count_attack++] === 2 ? "X" : "O");
}

function attackright() {
  my_score.push(opponent_random_defend[count_attack++] === 3 ? "X" : "O");
}

function defendleft() {
  opponent_score.push(opponent_random_attack[count_defend++] === 1 ? "X" : "O");
}

function defendcenter() {
  opponent_score.push(opponent_random_attack[count_defend++] === 2 ? "X" : "O");
}

function defendright() {
  opponent_score.push(opponent_random_attack[count_defend++] === 3 ? "X" : "O");
}

function result_show() {
  document.getElementsByClassName("score-my-count-first")[0].innerHTML =
    my_score[0] || "";
  document.getElementsByClassName("score-my-count-second")[0].innerHTML =
    my_score[1] || "";
  document.getElementsByClassName("score-my-count-third")[0].innerHTML =
    my_score[2] || "";
  document.getElementsByClassName("score-my-count-fourth")[0].innerHTML =
    my_score[3] || "";
  document.getElementsByClassName("score-my-count-fifth")[0].innerHTML =
    my_score[4] || "";

  document.getElementsByClassName("score-opponent-count-first")[0].innerHTML =
    opponent_score[0] || "";
  document.getElementsByClassName("score-opponent-count-second")[0].innerHTML =
    opponent_score[1] || "";
  document.getElementsByClassName("score-opponent-count-third")[0].innerHTML =
    opponent_score[2] || "";
  document.getElementsByClassName("score-opponent-count-fourth")[0].innerHTML =
    opponent_score[3] || "";
  document.getElementsByClassName("score-opponent-count-fifth")[0].innerHTML =
    opponent_score[4] || "";

  console.log(my_score, opponent_score);
}
function moveball(direction) {
  const ballCenter = document.querySelector(".ball-center");

  // 모든 기존 이동 클래스를 제거
  ballCenter.classList.remove(
    "atk-ball-center-move-left",
    "atk-ball-center-move-right",
    "atk-ball-center-move-center",
    "df-ball-center-move-left",
    "df-ball-center-move-right",
    "df-ball-center-move-center"
  );

  switch (direction) {
    case "atkleft":
      ballCenter.classList.add("atk-ball-center-move-left");
      break;
    case "atkcenter":
      ballCenter.classList.add("atk-ball-center-move-center");
      break;
    case "atkright":
      ballCenter.classList.add("atk-ball-center-move-right");
      break;
    case "dfleft":
      ballCenter.classList.add("df-ball-center-move-left");
      break;
    case "dfcenter":
      ballCenter.classList.add("df-ball-center-move-center");
      break;
    case "dfright":
      ballCenter.classList.add("df-ball-center-move-right");
      break;
  }
  setTimeout(() => {
    resetBallPosition();
  }, 2000); // 2000ms (2초) 후에 원래 자리로 돌아갑니다.

  // 원래 자리로 돌아가는 함수
}
function resetBallPosition() {
  const ballCenter = document.querySelector(".ball-center");
  ballCenter.classList.remove(
    "atk-ball-center-move-left",
    "atk-ball-center-move-right",
    "atk-ball-center-move-center",
    "df-ball-center-move-left",
    "df-ball-center-move-right",
    "df-ball-center-move-center"
  );
}
function movegk(direction) {
  const gk = document.querySelector(".df-gk>div");
  gk.classList.remove("df-gk-left", "df-gk-right");
  switch (direction) {
    case "dfgkleft":
      gk.classList.add("df-gk-left");
      break;
    case "dfgkright":
      gk.classList.add("df-gk-right");
      break;
  }
  setTimeout(() => {
    resetGkPosition();
  }, 2000);
}
function resetGkPosition() {
  const gk = document.querySelector(".df-gk>div");
  gk.classList.remove("df-gk-left", "df-gk-right");
}

function result_compute(my_score, opponent_score) {
  let my_sum = 0;
  let opponent_sum = 0;
  if (switch_df_atk) {
    for (let i = 0; i < my_score.length; i++) {
      my_sum += my_score[i] === "O" ? 1 : 0;
    }
    for (let i = 0; i < my_score.length - 1; i++) {
      opponent_sum += opponent_score[i] === "O" ? 1 : 0;
    }
    if (my_sum + 5 - my_score.length < opponent_sum) {
      resultinfo("lose");
    } else if (my_sum > opponent_sum + 5 - (my_score.length - 1)) {
      resultinfo("win");
    }
  } else {
    for (let i = 0; i < my_score.length; i++) {
      my_sum += my_score[i] === "O" ? 1 : 0;
    }
    for (let i = 0; i < my_score.length; i++) {
      opponent_sum += opponent_score[i] === "O" ? 1 : 0;
    }
    if (my_sum + 5 - my_score.length < opponent_sum) {
      resultinfo("lose");
    } else if (my_sum > opponent_sum + 5 - my_score.length) {
      resultinfo("win");
    }
  }
}
function resultinfo(result) {
  document.getElementsByClassName("result")[0].style.opacity = 1;

  if (result === "win") {
    document.getElementsByClassName("result")[0].innerHTML = "youWIn";
  } else {
    document.getElementsByClassName("result")[0].innerHTML = "youLose";
  }
}
