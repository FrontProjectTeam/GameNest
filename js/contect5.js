const words = [
  "사람",
  "시간",
  "공기",
  "사랑",
  "바다",
  "나무",
  "산",
  "별",
  "도시",
  "음식",
  "꿈",
  "가족",
  "친구",
  "책",
  "뵑뵒뵔뵓",
  "뵑뵒뵔뵓",
  "뵑뵒뵔뵓",
  "뵑뵒뵔뵓",
  "뵑뵒뵔뵓",
  "강아지",
  "고양이",
  "집",
  "손",
  "마음",
  "길",
  "학교",
  "선생님",
  "학생",
  "자동차",
  "컴퓨터",
  "강",
  "꽃",
  "음악",
  "영화",
  "이야기",
  "의자",
  "우산",
];

let hpcount = 3;
let sec = 100;
let level = 3000;

let random = words[Math.floor(Math.random() * words.length)];

function setInnerText() {
  random = words[Math.floor(Math.random() * words.length)];
  document.querySelector(".main-word").innerText = random;
  console.log("바뀜");
  console.log(random);
}

function CreateHp() {
  const newli = document.createElement("li");
  newli.className = "my-main-hp";
  const newtext = document.createTextNode("hp");
  hpcount++;
  newli.id = "hp" + hpcount;
  newli.appendChild(newtext);
  document.querySelector(".main-hp-ul").appendChild(newli);
}

function RemoveHp() {
  const removeli = document.getElementById("hp" + hpcount);
  console.log(removeli);
  hpcount--;
  removeli.remove();
  if (hpcount == 0) {
    setTimeout(() => {
      alert("GameOver");

      location.reload();
    }, 100);
  }
}
function countTimer() {
  if (sec !== 0) {
    sec--;
  } else {
    console.log("Gamewin");
    location.reload(true);
  }
  document.getElementById("header-sec").innerText = sec;
}

setInnerText();
setInterval(countTimer, 1000);
setInterval(RemoveHp, 3000);

document
  .querySelector(".contect5form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let userText = document.querySelector("#main-text").value;

    if (random === userText) {
      console.log("같음");
      setInnerText();
      CreateHp();
    } else {
      console.log("다름");
      RemoveHp();
    }
    console.log(hpcount);

    document.querySelector("#main-text").value = "";
  });

function GameOver() {
  if (hpcount == 0) {
    console.log("GameOver");
    location.reload(true);
  }
}
