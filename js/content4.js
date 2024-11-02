(() => {
  const contents = [
    {
      text: "삶은 누구에게도 특별히 호의적이지 않다. 그 사실을 알면서 걸을 때 내리는 진눈깨비.이마를, 눈썹을, 뺨을 물큰하게 적시는 진눈깨비. 모든 것은 지나간다.",
      title: "소설 <흰> 中",
      voca: "물큰하다: 연하고 부드러운 느낌이 날 정도로 물렁하다",
    },
    {
      text: "태극기로, 고작 그걸로 감싸보려던 거야. 우린 도륙된 고깃덩어리들이 아니어야 하니까, 필사적으로 묵념을 하고 애국가를 부른거야.",
      title: "소설 <소년이 온다> 中",
      voca: "도륙되다: 사람이나 짐승이 함부로 참옥하게 죽임을 당하다",
    },
    {
      text: "성근 눈이 내리고 있었다.",
      title: "소설 <작별하지 않는다> 첫 문장",
      voca: "성글다: 물건의 사이가 뜨다",
    },
    {
      text: "어떤 종류의 슬픔은 물기 없이 단단해서, 어떤 칼로도 연마되지 않는 원석과 같다.",
      title: "시집 <서랍에 저녁을 넣어두었다> 中",
      voca: "연마되다: 돌이나 쇠붙이 따위의 고체가 갈리고 닦여서 표면이 반질반질하게 되다",
    },
    {
      text: "양심이라는 눈부시게 깨끗한 보석이 내 이마에 들어와 박힌 것 같은 순간의 광휘를.",
      title: "소설 <소년이 온다> 中",
      voca: "광휘: 환하고 아름답게 눈이 부심. 또는 그 빛",
    },
    {
      text: "세계와 나 사이에 소슬한 경계가 생긴다.",
      title: "소설 <작별하지 않는다> 中",
      voca: "소슬하다: 으스스하고 쓸쓸하다",
    },
    {
      text: "나는 외로움이 좋았다. 외로움은 내 집이었고 옷이었고 밥이었다. 어떤 종류의 영혼은 외로움이 완성시켜준 것이어서, 그것이 빠져나가면 한꺼번에 허물어지고 만다.",
      title: "소설 <검은 사슴> 中",
    },
  ];

  //유저가 입력한 문장을 확인한다.
  const form = document.querySelector(".footer > form");
  const textInput = document.querySelector("#text");
  textInput.focus();
  const currentText = document.querySelector(".sentence > .text");
  const myScore = document.querySelector(".my-score >.score");
  let scoreEl = myScore.childNodes[0];
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("전송");
    const text = textInput.value;
    if (text.trim().length === 0) return;
    checkedCorrect(text, currentText.innerText);
    showRandomArray();
    textInput.value = "";
    textInput.focus();
  });

  showRandomArray();
  settingTimer();

  //화면에 배열의 오브젝트중 하나를 보여준다.
  function showRandomArray() {
    const source = document.querySelector(".sentence > .source");
    const word = document.querySelector(".sentence > .word");
    const random = Math.floor(Math.random() * contents.length);
    currentText.textContent = contents[random].text;
    source.textContent = contents[random].title;
    if (!contents[random].voca) {
      word.textContent = "";
    } else {
      word.textContent = contents[random].voca;
    }
  }

  //유저가 입력한 문장과 현재 화면에 나타난 text가 같으면 true를 그렇지 않다면 false를 출력
  //true이면 기존의 점수에 +10 false이면 기존의 점수에 -10, 0점이면 0 리턴

  // 공백 제외, . , 제외한 값만 비교
  function updateUserScore(check) {
    let currentScore = Number(scoreEl.nodeValue);
    if (check) {
      scoreEl.nodeValue = currentScore + 10;
    } else {
      if (!currentScore) return;
      scoreEl.nodeValue = currentScore - 10;
    }
    return currentScore;
  }

  //입력한 값이 맞는지 틀렸는지 확인한다.
  function checkedCorrect(text, textInput) {
    if (text === textInput) {
      console.log("true");
      updateUserScore(true);
      correctAnswerRate(true);
    } else {
      console.log("false");
      updateUserScore(false);
      addWrongCount(false);
      correctAnswerRate(false);
    }
  }

  //입력한 값이 틀렸으면 틀린 문장수를 1 추가한다.
  function addWrongCount(input) {
    const count = document.querySelector(".wrong .score").childNodes[0];
    let upDateCount = Number(count.nodeValue);
    if (input === undefined) return upDateCount;
    count.nodeValue = upDateCount + 1;
    return count.nodeValue;
  }

  //경과시간 설정하기
  //종료 모달
  const modal = document.querySelector(".content4-modal");
  function settingTimer() {
    const timer = document.querySelector(".timer .score").childNodes[0];
    const interval = setInterval(() => {
      let upDateTimer = Number(timer.nodeValue);
      upDateTimer++;
      timer.nodeValue = upDateTimer;
      if (upDateTimer === 300) {
        settingFinalData();
        clearInterval(interval);
        modal.classList.add("open");
      }
    }, 1000);
  }
  //게임이 종료되면 값을 초기화
  function resetScore() {
    const scores = document.querySelectorAll(".score");
    scores.forEach((score) => (score.childNodes[0].nodeValue = 0));
  }
  //정답률 구하기
  //유저가 맞춘 문제와 틀린 문제 수를 맞춘 문제와 나눈다.
  let correctCount = 0;
  let wrongCount = 0;
  function correctAnswerRate(result) {
    if (result) {
      correctCount += 1;
    } else {
      wrongCount += 1;
    }
    let rate = (correctCount / (correctCount + wrongCount)) * 100;
    const rateText = document.querySelector(".rate .score").childNodes[0];
    rateText.nodeValue = Math.floor(rate);
    return rateText.innerText ? rateText.innerText : 0;
  }

  //모달 닫기

  //모달 dimmed 혹은 버튼을 부르면 닫기
  modal.addEventListener("click", (e) => handleCloseModal(e));
  function handleCloseModal(e) {
    console.log(e.target);
    if (
      e.target.classList.contains("content4-modal") ||
      e.target.classList.contains("close")
    ) {
      modal.style.display = "none";
      resetScore();
    }
  }
  //모달 안에 데이터 넣기
  //나의 점수
  //모달이 뜨면 경과시간 초기화
  const score = modal.querySelector(".my-score .score");
  //틀린문장수
  const wrong = modal.querySelector(".wrong .score");
  //정답률
  const percent = modal.querySelector(".rate .score");
  function settingFinalData() {
    const total = !updateUserScore() ? 0 : updateUserScore();
    const wCount = addWrongCount();
    const rate = correctAnswerRate();
    score.innerText = total;
    wrong.innerText = wCount;
    percent.innerText = rate;
  }
})();