let switch_df_atk = true; // attack=>true
let my_score = [];
let opponent_score = [];
let opponent_random_defend = [];
let opponent_random_attack = [];
let opponentattackcount = 0;
let opponentdefendcount = 0;
let resultcountatkdf = 0;

function makeopponentrandom() {
  for (let i = 0; i < 5; i++) {
    const random = Math.floor(Math.random() * 3 + 1);
    opponent_random_attack.push(random);
  }
  for (let i = 0; i < 5; i++) {
    const random = Math.floor(Math.random() * 3 + 1);
    opponent_random_defend.push(random);
  }
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
console.log(opponent_random_defend);
console.log("============");
console.log(opponent_random_attack);
//1 :왼 2: 가 3: 오
let count_attack = 0;
let count_defend = 0;
// function opponent_moving() {
//   const opponent_moving=1;
//   }

function my_moving() {}
function attack(direction) {
  my_score.push(
    opponent_random_defend[count_attack++] === direction ? "X" : "O"
  );
}

function defend(direction) {
  opponent_score.push(
    opponent_random_attack[count_defend++] === direction ? "X" : "O"
  );
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
    resetGkPosition1();
  }, 2000);
}
function resetGkPosition1() {
  const gk = document.querySelector(".df-gk>div");
  gk.classList.remove("df-gk-left", "df-gk-right");
}

////opponent

function moveballopponent() {
  // 내가 수비할때 함수 주기

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
  direction = opponent_random_attack[opponentattackcount];
  switch (direction) {
    case 1:
      ballCenter.classList.add("df-ball-center-move-left");
      break;
    case 2:
      ballCenter.classList.add("df-ball-center-move-center");
      break;
    case 3:
      ballCenter.classList.add("df-ball-center-move-right");
      break;
  }
  opponentattackcount++;
  setTimeout(() => {
    resetBallPosition();
  }, 2000); // 2000ms (2초) 후에 원래 자리로 돌아갑니다.

  // 원래 자리로 돌아가는 함수
}

function movegkopponent() {
  const gk = document.querySelector(".atk-gk>div");
  direction = opponent_random_defend[opponentdefendcount];
  gk.classList.remove("atk-gk-left", "atk-gk-right");
  switch (direction) {
    case 1:
      gk.classList.add("atk-gk-left");
      break;
    case 3:
      gk.classList.add("atk-gk-right");
      break;
  }
  opponentdefendcount++;
  setTimeout(() => {
    resetGkPosition2();
  }, 2000);
}
function resetGkPosition2() {
  const gk = document.querySelector(".atk-gk>div");
  gk.classList.remove("atk-gk-left", "atk-gk-right");
  console.log(1);
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
    } else if (my_score.length + opponent_score.length === 10) {
      reset();
    }
  }
}

function resultinfo(result) {
  document.getElementsByClassName("result")[0].style.opacity = 1;

  if (result === "win") {
    document.getElementsByClassName("result")[0].innerHTML = "youWIn";

    document.querySelector("next-button-switch").disabled = true;
  } else if (result === "lose") {
    document.getElementsByClassName("result")[0].innerHTML = "youLose";

    document.querySelector("next-button-switch").disabled = true;
  } else if ((my_score.length + opponent_score.length) % 10 === 0) {
    reset();
  }
}
function info_atk_df() {
  switch_df_atk
    ? (document.getElementsByClassName("atk-or-df")[0].innerHTML = "attack")
    : (document.getElementsByClassName("atk-or-df")[0].innerHTML = "defend");
}
function btdisable() {
  bt.forEach((button) => {
    button.disabled = true;
  });

  nextbt.disabled = false;
}
const bt = document.querySelectorAll(".switchbutton");
const nextbt = document.querySelector(".next-button-switch");
nextbt.disabled = true;
function btable() {
  bt.forEach((button) => {
    button.disabled = false;
  });
  nextbt.disabled = true;
}
function reset() {
  switch_df_atk = true;
  my_score = [];
  opponent_score = [];
  opponent_random_defend = [];
  opponent_random_attack = [];
  makeopponentrandom();
  opponentattackcount = 0;
  opponentdefendcount = 0;
  resultcountatkdf = 0;

  document.getElementsByClassName("score-my-count-first")[0].innerHTML = 1;
  document.getElementsByClassName("score-my-count-second")[0].innerHTML = 2;
  document.getElementsByClassName("score-my-count-third")[0].innerHTML = 3;
  document.getElementsByClassName("score-my-count-fourth")[0].innerHTML = 4;
  document.getElementsByClassName("score-my-count-fifth")[0].innerHTML = 5;

  document.getElementsByClassName(
    "score-opponent-count-first"
  )[0].innerHTML = 1;
  document.getElementsByClassName(
    "score-opponent-count-second"
  )[0].innerHTML = 2;
  document.getElementsByClassName(
    "score-opponent-count-third"
  )[0].innerHTML = 3;
  document.getElementsByClassName(
    "score-opponent-count-fourth"
  )[0].innerHTML = 4;
  document.getElementsByClassName(
    "score-opponent-count-fifth"
  )[0].innerHTML = 5;

  atkElements = document.getElementsByClassName("atk");
  dfElements = document.getElementsByClassName("df");

  for (let i = 0; i < atkElements.length; i++) {
    atkElements[i].style.opacity = switch_df_atk ? 1 : 0;
  }

  for (let i = 0; i < dfElements.length; i++) {
    dfElements[i].style.opacity = switch_df_atk ? 0 : 1;
  }
  switch_df_atk
    ? (document.getElementsByClassName("atk-or-df")[0].innerHTML = "attack")
    : (document.getElementsByClassName("atk-or-df")[0].innerHTML = "defend");
  document.getElementsByClassName("result")[0].style.opacity = 0;
  btable();
}

function startbtnDisabled() {
  const target = document.getElementsByClassName("start")[0];
  target.disabled = true;
}