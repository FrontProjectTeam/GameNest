const mainContainer = document.querySelector(".content3-main-container");
const footerContainer = document.querySelector(".content3-footer-container");
const quizButton = document.querySelector(".content3-footer-button-container");
let currentNumberOfQuiz = 0;
let totalNumberOfQuiz;
let score = 0;

const players = [
  // 아스날
  { imgSrc: "./images/Raya.png", answer: "다비드 라야" },
  { imgSrc: "./images/Neto_web.png", answer: "노르베르투 무라라 네투" },
  { imgSrc: "./images/Saliba_10.jpg", answer: "윌리암 살리바" },
  { imgSrc: "./images/tierney.png", answer: "키어런 티어니" },
  { imgSrc: "./images/White_5.jpg", answer: "벤 화이트" },
  { imgSrc: "./images/Gabriel_5.jpg", answer: "가브리엘 마갈량이스" },
  { imgSrc: "./images/Timber_0.png", answer: "주리엔 팀버" },
  { imgSrc: "./images/Kiwior.jpg", answer: "야쿠프 키비오르" },
  { imgSrc: "./images/Zinchenko_1.jpg", answer: "올렉산드로 진첸코" },
  { imgSrc: "./images/Tomiyasu_0.png", answer: "도미야스 다케히로" },
  { imgSrc: "./images/Calafiori_web.png", answer: "리카르도 칼라피오리" },
  { imgSrc: "./images/Partey_8.jpg", answer: "토마스 파티" },
  { imgSrc: "./images/Odegaard-New.jpg", answer: "마르틴 외데고르" },
  { imgSrc: "./images/Jorgihno.jpg", answer: "조르지뉴" },
  { imgSrc: "./images/merino-headshot.png", answer: "미켈 메리노" },
  { imgSrc: "./images/Rice_0.jpg", answer: "데클런 라이스" },
  { imgSrc: "./images/Saka_46.jpg", answer: "부카요 사카" },
  { imgSrc: "./images/Jesus_0.jpg", answer: "가브리엘 제주스" },
  { imgSrc: "./images/Martinelli_0.png", answer: "가브리엘 마르티넬리" },
  { imgSrc: "./images/Trossard_2.jpg", answer: "레안드로 트로사르" },
  { imgSrc: "./images/Havertz-New.jpg", answer: "카이 하베르츠" },
  { imgSrc: "./images/Sterling_web.png", answer: "라힘 스털링" },
  // 아스톤빌라
  {
    imgSrc: "./images/에밀리아노마르티네스.png",
    answer: "에밀리아노 마르티네스",
  },
  { imgSrc: "./images/매티캐시.png", answer: "매티 캐시" },
  {
    imgSrc: "./images/디에구카를로스.png",
    answer: "디에구 카를로스",
  },
  { imgSrc: "./images/에즈리콘사.png", answer: "에즈리 콘사" },
  { imgSrc: "./images/타이론밍스.png", answer: "타이론 밍스" },
  { imgSrc: "./images/뤼카디뉴.png", answer: "뤼카 디뉴" },
  { imgSrc: "./images/파우토레스.png", answer: "파우 토레스" },
  {
    imgSrc: "./images/코스타네델코비치.png",
    answer: "코스타 네델코비치",
  },
  { imgSrc: "./images/라마레보가드.png", answer: "라마레 보가드" },
  { imgSrc: "./images/로스바클리.png", answer: "로스 바클리" },
  { imgSrc: "./images/존맥긴.png", answer: "존 맥긴" },
  { imgSrc: "./images/유리틸레만스.png", answer: "유리 틸레만스" },
  { imgSrc: "./images/에미부엔디아.png", answer: "에미 부엔디아" },
  {
    imgSrc: "./images/제이든필로진.png",
    answer: "제이든 필로진",
  },
  { imgSrc: "./images/아마두오나나.png", answer: "아마두 오나나" },
  { imgSrc: "./images/모건로저스.png", answer: "모건 로저스" },
  { imgSrc: "./images/레온베일리.png", answer: "레온 베일리" },
  { imgSrc: "./images/제이콥램지.png", answer: "제이콥 램지" },
  {
    imgSrc: "./images/부바카르카마라.png",
    answer: "부바카르 카마라",
  },
  { imgSrc: "./images/존듀란.png", answer: "존 듀란" },
  { imgSrc: "./images/올리왓킨스.png", answer: "올리 왓킨스" },
  // 본머스
  {
    imgSrc: "./images/아리사발라가케파.png",
    answer: "아리사발라가 케파",
  },
  { imgSrc: "./images/딘하이센.jpg", answer: "딘 하이센" },
  {
    imgSrc: "./images/밀로시_케르케즈.jpg",
    answer: "밀로시 케르케즈",
  },
  {
    imgSrc: "./images/마르코스세네시.jpg",
    answer: "마르코스 세네시",
  },
  { imgSrc: "./images/애덤스미스.png", answer: "애덤 스미스" },
  {
    imgSrc: "./images/줄리안아라우조.png",
    answer: "줄리안 아라우조",
  },
  { imgSrc: "./images/제임스힐.jpg", answer: "제임스 힐" },
  {
    imgSrc: "./images/일리아자바르니.jpg",
    answer: "일리아 자바르니",
  },
  { imgSrc: "./images/맥스에런스.jpg", answer: "맥스 에런스" },
  { imgSrc: "./images/루이스쿡.jpg", answer: "루이스 쿡" },
  {
    imgSrc: "./images/데이비드브룩스.jpg",
    answer: "데이비드 브룩스",
  },
  { imgSrc: "./images/알렉스스콧.jpg", answer: "알렉스 스콧" },
  {
    imgSrc: "./images/라이언크리스티.jpg",
    answer: "라이언 크리스티",
  },
  { imgSrc: "./images/타일러아담스.jpg", answer: "타일러 아담스" },
  {
    imgSrc: "./images/마커스태버니어.jpg",
    answer: "마커스 태버니어",
  },
  { imgSrc: "./images/필립_빌링.jpg", answer: "필립 빌링" },
  { imgSrc: "./images/에바니우송.png", answer: "에바니우송" },
  { imgSrc: "./images/당고_와타라.jpg", answer: "당고 와타라" },
  {
    imgSrc: "./images/루이스시니스테라.jpg",
    answer: "루이스 시니스테라",
  },
  {
    imgSrc: "./images/저스틴클라위버르트.png",
    answer: "저스틴 클라위버르트",
  },
  { imgSrc: "./images/앙투안세메뇨.jpg", answer: "앙투안 세메뇨" },
  { imgSrc: "./images/에네스_위날.jpg", answer: "에네스 위날" },
  // 브렌트포드
  {
    imgSrc: "./images/Flekken_-_Avatar_Image_n9zayb.png",
    answer: "마르크 플레컨",
  },
  {
    imgSrc: "./images/Van_Den_Berg_-_Avatar_Image_nnlab4.png",
    answer: "세프 반덴베르흐",
  },
  {
    imgSrc: "./images/Pinnock_-_Avatar_Image_lezdbr.png",
    answer: "에단 피노크",
  },
  { imgSrc: "./images/Ben_Mee_-_Avatar_Image_caulw2.png", answer: "벤 미" },
  {
    imgSrc: "./images/Kristoffer_Ajer_-_Avatar_Image_osnajw.png",
    answer: "크리스토퍼 아예르",
  },
  {
    imgSrc: "./images/Jayden_Meghoma_-_Avatar_Image_utsklc.png",
    answer: "에드몽-파리 마크호마",
  },
  {
    imgSrc: "./images/Nathan_Collins_-_Avatar_Image_ta5izn.png",
    answer: "네이선 콜린스",
  },
  {
    imgSrc: "./images/Mads_Roeslerv_-_Avatar_Image_ki94fr.png",
    answer: "매스 로에르슬레브",
  },
  {
    imgSrc: "./images/Ji_Soo_Kim_-_Avatar_Image_ofpkek.png",
    answer: "김지수",
  },
  {
    imgSrc: "./images/Hickey_-_Avatar_Image_qdvwjk.png",
    answer: "에런 히키",
  },
  {
    imgSrc: "./images/Yehor_Yarmoliuk_-_Avatar_Image_zxa3fx.png",
    answer: "예고르 야르몰류크",
  },
  {
    imgSrc: "./images/Mikkel_Damsgaard_-_Avatar_Image_ilzr0y.png",
    answer: "미켈 담스고르",
  },
  {
    imgSrc: "./images/Konak_-_Avatar_Image_nzdr0r.png",
    answer: "유누스 엠레 코나크",
  },
  {
    imgSrc: "./images/Vitaly_Janelt_-_Avatar_Image_ivrqfr.png",
    answer: "비탈리 야넬트",
  },
  {
    imgSrc: "./images/Trevitt_-_Avatar_Image_vetnpo.png",
    answer: "라이언 트레빗",
  },
  {
    imgSrc: "./images/Keane_Lewis-Potter_-_Avatar_Image_ggrqpj.png",
    answer: "킨 루이스 포터",
  },
  {
    imgSrc: "./images/Gustavo_Nunes_-_Avatar_Image_rwfbry.png",
    answer: "구스타부 누네스",
  },
  {
    imgSrc: "./images/Schade_-_Avatar_Image_m62imt.png",
    answer: "케빈 샤데",
  },
  {
    imgSrc: "./images/Igor_Thiago_Play_Profiles_he6icc.png",
    answer: "이고르 티아고",
  },
  {
    imgSrc: "./images/Wissa_-_Avatar_Image_clq2gx.png",
    answer: "요아네 위사",
  },
  {
    imgSrc: "./images/Bryan_Mbeumoc-_Avatar_Image_gouqyx.png",
    answer: "브라이언 음뵈모",
  },
  {
    imgSrc: "./images/Christian_Norgaard_-_Avatar_Image_njvhu7.png",
    answer: "크리스티안 뇌르고르",
  },
  {
    imgSrc: "./images/Mathias_Jensen_-_Avatar_Image_etjdlj.png",
    answer: "마티아스 옌센",
  },
  {
    imgSrc: "./images/dasilva_2230_x_3000_igws6q.png",
    answer: "조쉬 다실바",
  },
  {
    imgSrc: "./images/FABIOheadshot_crdqyq.png",
    answer: "파비우 카르발류",
  },
  // 브라이튼
  {
    imgSrc: "./images/페르디_카디오글루.webp",
    answer: "페르디 카디오글루",
  },
  { imgSrc: "./images/미토마_카오루.webp", answer: "미토마" },
  {
    imgSrc: "./images/바르트_페르브뤼헌.webp",
    answer: "바르트 페르브뤼헌",
  },
  { imgSrc: "./images/주앙_페드루.webp", answer: "주앙 페드루" },
  { imgSrc: "./images/양쿠바_민테.webp", answer: "양쿠바 민테" },
  {
    imgSrc: "./images/홀리오_엔시소.webp",
    answer: "홀리오 엔시소",
  },
  { imgSrc: "./images/에반_퍼거슨.webp", answer: "에반 퍼거슨" },
  {
    imgSrc: "./images/조르지뇨_뤼테르.webp",
    answer: "조르지뇨 뤼테르",
  },
  { imgSrc: "./images/대니_웰백.webp", answer: "대니 웰백" },
  {
    imgSrc: "./images/시몬_아딩그라.webp",
    answer: "시몬 아딩그라",
  },
  { imgSrc: "./images/마츠_비퍼르.webp", answer: "마츠 비퍼르" },
  { imgSrc: "./images/제임스_밀너.webp", answer: "제임스 밀너" },
  { imgSrc: "./images/야신_아야리.webp", answer: "야신 아야리" },
  {
    imgSrc: "./images/카를로스_발레바.webp",
    answer: "카를로스 발레바",
  },
  { imgSrc: "./images/솔리_마치.webp", answer: "솔리 마치" },
  {
    imgSrc: "./images/페르비스_에스투피냔.webp",
    answer: "페르비스 에스투피냔",
  },
  { imgSrc: "./images/루이스_덩크.webp", answer: "루이스 덩크" },
  { imgSrc: "./images/반_헤케.webp", answer: "반 헤케" },
  { imgSrc: "./images/야쿠프_모데르.webp", answer: "야쿠프 모데르" },
  { imgSrc: "./images/제이슨_스틸.webp", answer: "제이슨 스틸" },
  { imgSrc: "./images/이고르.webp", answer: "이고르" },
  { imgSrc: "./images/조엘_벨트만.webp", answer: "조엘 벨트만" },
  { imgSrc: "./images/타리크_램프티.webp", answer: "타리크 램프티" },
  // 첼시
  { imgSrc: "./images/콜_파머.webp", answer: "콜 파머" },
  { imgSrc: "./images/제이든_산초.webp", answer: "제이든 산초" },
  {
    imgSrc: "./images/미하일로_무드리크.webp",
    answer: "미하일로 무드리크",
  },
  { imgSrc: "./images/페드루_네투.webp", answer: "페드루 네투" },
  {
    imgSrc: "./images/엔조_페르난데스.webp",
    answer: "엔조 페르난데스",
  },
  { imgSrc: "./images/헤나투_베이가.webp", answer: "헤나투 베이가" },
  {
    imgSrc: "./images/니콜라스_잭슨.webp",
    answer: "니콜라스 잭슨",
  },
  {
    imgSrc: "./images/필립_요르겐센.webp",
    answer: "필립 요르겐센",
  },
  {
    imgSrc: "./images/크리스토퍼_은쿤쿠.webp",
    answer: "크리스토퍼 은쿤쿠",
  },
  {
    imgSrc: "./images/마르크_쿠쿠렐라.webp",
    answer: "마르크 쿠쿠렐라",
  },
  {
    imgSrc: "./images/키어넌_듀스버리홀.webp",
    answer: "키어넌 듀스버리홀",
  },
  { imgSrc: "./images/리스_제임스.webp", answer: "리스 제임스" },
  { imgSrc: "./images/노니_마두에케.webp", answer: "노니 마두에케" },
  {
    imgSrc: "./images/모이세스_카이세도.webp",
    answer: "모이세스 카이세도",
  },
  {
    imgSrc: "./images/토신_아다라비오요.webp",
    answer: "토신 아다라비오요",
  },
  { imgSrc: "./images/로메오_라비아.webp", answer: "로메로 라비아" },
  { imgSrc: "./images/벤_칠웰.webp", answer: "벤 칠웰" },
  { imgSrc: "./images/말로_귀스토.webp", answer: "말로 귀스토" },
  { imgSrc: "./images/악셀_디사시.webp", answer: "악셀 디사시" },
  { imgSrc: "./images/웨슬리_포파나.webp", answer: "웨슬리 포파나" },
  {
    imgSrc: "./images/로베르트_산체스.webp",
    answer: "로베르트 산체스",
  },
  {
    imgSrc: "./images/카니_추쿠에메카.webp",
    answer: "카니 추쿠에메카",
  },
  { imgSrc: "./images/리바이_콜윌.webp", answer: "리바이 콜윌" },
  // 크리스탈팰리스
  { imgSrc: "./images/에베레치_에제.webp", answer: "에베레치 에제" },
  { imgSrc: "./images/다니엘_무뇨스.webp", answer: "다니엘 무뇨스" },
  { imgSrc: "./images/카마다_다이치.webp", answer: "카마다 다이치" },
  { imgSrc: "./images/마크_게히.webp", answer: "마크 게히" },
  {
    imgSrc: "./images/장필리프_마테타.webp",
    answer: "장필리프 마테타",
  },
  { imgSrc: "./images/에디_은케티아.webp", answer: "에디 은케티아" },
  {
    imgSrc: "./images/이스마일라_사르.webp",
    answer: "이스마일라 사르",
  },
  { imgSrc: "./images/애덤_워튼.webp", answer: "애덤 워튼" },
  { imgSrc: "./images/딘_헨더슨.webp", answer: "딘 헨더슨" },
  { imgSrc: "./images/샤디_리아드.webp", answer: "샤디 리아드" },
  {
    imgSrc: "./images/막상스_라크루아.webp",
    answer: "막상스 라크루아",
  },
  { imgSrc: "./images/트레보_찰로바.webp", answer: "트레보 찰로바" },
  { imgSrc: "./images/타이릭_미첼.webp", answer: "타이릭 미첼" },
  { imgSrc: "./images/롭_홀딩.webp", answer: "롭 홀딩" },
  { imgSrc: "./images/윌_휴즈.webp", answer: "윌 휴즈" },
  { imgSrc: "./images/셰이크_두쿠레.webp", answer: "셰이크 두쿠레" },
  { imgSrc: "./images/제프리_슐루프.webp", answer: "제프리 슐루프" },
  { imgSrc: "./images/조엘_워드.webp", answer: "조엘 워드" },
  {
    imgSrc: "./images/나다니엘_클라인.webp",
    answer: "나다니엘 클라인",
  },
  // 에버튼
  {
    imgSrc: "./images/일리만_은디아예.webp",
    answer: "일리만 은디아예",
  },
  { imgSrc: "./images/조던_픽포드.webp", answer: "조던 픽포드" },
  {
    imgSrc: "./images/네이선_패터슨.webp",
    answer: "네이선 패터슨",
  },
  { imgSrc: "./images/마이클_킨.webp", answer: "마이클 킨" },
  {
    imgSrc: "./images/제임스_타코우스키.webp",
    answer: "제임스 타코우스키",
  },
  {
    imgSrc: "./images/드와이트_맥닐.webp",
    answer: "드와이트 맥닐",
  },
  { imgSrc: "./images/오렐_망갈라.webp", answer: "오렐 망갈라" },
  {
    imgSrc: "./images/도미닉_칼버트르윈.webp",
    answer: "도미닉 칼버트르윈",
  },
  { imgSrc: "./images/잭_해리슨.webp", answer: "잭 해리슨" },
  { imgSrc: "./images/베투.webp", answer: "베투" },
  {
    imgSrc: "./images/제이크_오브라이언.webp",
    answer: "제이크 오브라이언",
  },
  {
    imgSrc: "./images/압둘라유_두쿠레.webp",
    answer: "압둘라유 두쿠레",
  },
  {
    imgSrc: "./images/유세프_셰르미티.webp",
    answer: "유세프 셰르미티",
  },
  { imgSrc: "./images/애슐리_영.webp", answer: "애슐리 영" },
  {
    imgSrc: "./images/비탈리_미콜렌코.webp",
    answer: "비탈리 미콜렌코",
  },
  {
    imgSrc: "./images/아르만도_브로야.webp",
    answer: "아르만도 브로야",
  },
  { imgSrc: "./images/셰머스_콜먼.webp", answer: "셰머스 콜먼" },
  { imgSrc: "./images/이드리사_게예.webp", answer: "이드리사 게예" },
  {
    imgSrc: "./images/예스페르_린스트룀.webp",
    answer: "예스페르 린스트룀",
  },
  {
    imgSrc: "./images/아스미르_베고비치.webp",
    answer: "아스미르 베고비치",
  },
  {
    imgSrc: "./images/재러드_브랜스웨이트.webp",
    answer: "재러드 브랜스웨이트",
  },
  { imgSrc: "./images/제임스_가너.webp", answer: "제임스 가너" },
  {
    imgSrc: "./images/해리슨_암스트롱.webp",
    answer: "해리슨 암스트롱",
  },
  // 풀럼
  { imgSrc: "./images/베른트_레노.webp", answer: "베른트 레노" },
  { imgSrc: "./images/케니_테테.webp", answer: "케니 테테" },
  { imgSrc: "./images/캘빈_배시.webp", answer: "캘빈 배시" },
  {
    imgSrc: "./images/요아킴_안데르센.webp",
    answer: "요아킴 안데르센",
  },
  { imgSrc: "./images/해리슨_리드.webp", answer: "해리슨 리드" },
  { imgSrc: "./images/라울_히메네스.webp", answer: "라울 히메네스" },
  { imgSrc: "./images/해리_윌슨.webp", answer: "해리 윌슨" },
  {
    imgSrc: "./images/호드리구_무니스.webp",
    answer: "호드리구 무니스",
  },
  { imgSrc: "./images/톰_케어니.webp", answer: "톰 케어니" },
  {
    imgSrc: "./images/아다마_트라오레.webp",
    answer: "아다마 트라오레",
  },
  {
    imgSrc: "./images/카를로스_비니시우스.webp",
    answer: "카를로스 비니시우스",
  },
  { imgSrc: "./images/산데르_베르게.webp", answer: "산데르 베르게" },
  {
    imgSrc: "./images/알렉스_이워비.webp",
    answer: "알렉스 이워비",
  },
  {
    imgSrc: "./images/안드레아스_페레이라.webp",
    answer: "안드레아스 페레이라",
  },
  { imgSrc: "./images/사샤_루키치.webp", answer: "사샤 루키치" },
  {
    imgSrc: "./images/티모시_카스타뉴.webp",
    answer: "티모시 카스타뉴",
  },
  {
    imgSrc: "./images/라이언_세세뇽.webp",
    answer: "라이언 세세뇽",
  },
  { imgSrc: "./images/이사_디오프.webp", answer: "이사 디오프" },
  {
    imgSrc: "./images/에밀_스미스로우.webp",
    answer: "에밀 스미스로우",
  },
  {
    imgSrc: "./images/안토니_로빈슨.webp",
    answer: "안토니 로빈슨",
  },
  // 입스위치
  {
    imgSrc: "./images/야라네트_무리치.webp",
    answer: "야라네트 무리치",
  },
  { imgSrc: "./images/해리_클라크.webp", answer: "해리 클라크" },
  { imgSrc: "./images/리프_데이비스.webp", answer: "리프 데이비스" },
  { imgSrc: "./images/샘_모르시.webp", answer: "샘 모르시" },
  { imgSrc: "./images/루크_울펜덴.webp", answer: "루크 울펜덴" },
  { imgSrc: "./images/웨스_번스.webp", answer: "웨스 번스" },
  { imgSrc: "./images/칼빈_필립스.webp", answer: "칼빈 필립스" },
  { imgSrc: "./images/코너_채플린.webp", answer: "코너 채플린" },
  { imgSrc: "./images/옌스_카쥐스트.webp", answer: "옌스 카쥐스트" },
  { imgSrc: "./images/잭_테일러.webp", answer: "잭 테일러" },
  { imgSrc: "./images/캐미런_버지스.webp", answer: "캐미런 버지스" },
  {
    imgSrc: "./images/알리_알하마디.webp",
    answer: "알리 알하마디",
  },
  { imgSrc: "./images/벤_존슨.webp", answer: "벤 존슨" },
  { imgSrc: "./images/리암_델랍.webp", answer: "리암 델랍" },
  {
    imgSrc: "./images/오마리_허친슨.webp",
    answer: "오마리 허친슨",
  },
  {
    imgSrc: "./images/치에도지_오그베네.webp",
    answer: "치에도지 오그베네",
  },
  {
    imgSrc: "./images/코너_다운젠드.webp",
    answer: "코너 타운젠드",
  },
  { imgSrc: "./images/사미_스모딕스.webp", answer: "사미 스모딕스" },
  {
    imgSrc: "./images/제이콥_그리브스.webp",
    answer: "제이콥 그리브스",
  },
  { imgSrc: "./images/마시모_루옹고.webp", answer: "마시모 루옹고" },
  { imgSrc: "./images/다라_오셰이.webp", answer: "다라 오셰이" },
  { imgSrc: "./images/조지_허스트.webp", answer: "조지 허스트" },
  {
    imgSrc: "./images/네이선_브로드헤드.webp",
    answer: "네이선 브로드헤드",
  },
  {
    imgSrc: "./images/악셀_튀앙제브.webp",
    answer: "악셀 튀앙제브",
  },
  {
    imgSrc: "./images/자노이_도나시엔.webp",
    answer: "자노이 도나시엔",
  },
  { imgSrc: "./images/잭_클라크.webp", answer: "잭 클라크" },
  // 레스터시티
  { imgSrc: "./images/대니_워드.webp", answer: "대니 워드" },
  {
    imgSrc: "./images/제임스_저스틴.webp",
    answer: "제임스 저스틴",
  },
  { imgSrc: "./images/바우트_파스.webp", answer: "바우트 파스" },
  { imgSrc: "./images/코너_코디.webp", answer: "코너 코디" },
  {
    imgSrc: "./images/케일럽_오콜리.webp",
    answer: "케일럽 오콜리",
  },
  {
    imgSrc: "./images/윌프레드_은디디.webp",
    answer: "윌프레드 은디디",
  },
  { imgSrc: "./images/압둘_파타우.webp", answer: "압둘 파타우" },
  { imgSrc: "./images/해리_윙크스.webp", answer: "해리 윙크스" },
  { imgSrc: "./images/제이미_바디.webp", answer: "제이미 바디" },
  {
    imgSrc: "./images/스테피_마비디디.webp",
    answer: "스테피 마비디디",
  },
  { imgSrc: "./images/엘_카누스.webp", answer: "엘 카누스" },
  {
    imgSrc: "./images/바비_데코르도바리드.webp",
    answer: "바비 데코르도바리드",
  },
  {
    imgSrc: "./images/빅토르_크리스티안센.webp",
    answer: "빅토르 크리스티안센",
  },
  { imgSrc: "./images/함자_차우두리.webp", answer: "함자 차우두리" },
  { imgSrc: "./images/조던_아이유.webp", answer: "조던 아이유" },
  { imgSrc: "./images/팻슨_다카.webp", answer: "팻슨 다카" },
  {
    imgSrc: "./images/히카르두_페레이라.webp",
    answer: "히카르두 페레이라",
  },
  { imgSrc: "./images/올리버_스킵.webp", answer: "올리버 스킵" },
  {
    imgSrc: "./images/야니크_베스테르고르.webp",
    answer: "야니크 베스테르고르",
  },
  {
    imgSrc: "./images/부바카리_수마레.webp",
    answer: "부바카리 수마레",
  },
  {
    imgSrc: "./images/오드손_에두아르.webp",
    answer: "오드손 에두아르",
  },
  {
    imgSrc: "./images/케이시_매카티어.webp",
    answer: "케이시 매카티어",
  },
  {
    imgSrc: "./images/파쿤토_부오나노테.webp",
    answer: "파쿤도 부오나노테",
  },
  // 리버풀
  { imgSrc: "./images/모하메드_살라.webp", answer: "모하메드 살라" },
  {
    imgSrc: "./images/알리송_베케르.webp",
    answer: "알리송 베케르",
  },
  { imgSrc: "./images/조_고메즈.webp", answer: "조 고메즈" },
  { imgSrc: "./images/엔도_와타루.webp", answer: "엔도 와타루" },
  {
    imgSrc: "./images/버질_반다이크.webp",
    answer: "버질 반다이크",
  },
  {
    imgSrc: "./images/이브라히마_코나테.webp",
    answer: "이브라히마 코나테",
  },
  { imgSrc: "./images/루이스_디아스.webp", answer: "루이스 디아스" },
  {
    imgSrc: "./images/도미니크_소보슬라이.webp",
    answer: "도미니크 소보슬라이",
  },
  { imgSrc: "./images/다르윈_누녜스.webp", answer: "다르윈 누녜스" },
  { imgSrc: "./images/맥_알리스터.webp", answer: "맥 알리스터" },
  {
    imgSrc: "./images/페데리코_키에사.webp",
    answer: "페데리코 키에사",
  },
  { imgSrc: "./images/커티스_존스.webp", answer: "커티스 존스" },
  { imgSrc: "./images/코디_각포.webp", answer: "코디 각포" },
  { imgSrc: "./images/하비_엘리엇.webp", answer: "하비 엘리엇" },
  { imgSrc: "./images/디오구_조타.webp", answer: "디오구 조타" },
  {
    imgSrc: "./images/코스타스_치미카스.webp",
    answer: "코스타스 치미카스",
  },
  {
    imgSrc: "./images/앤디_로버트슨.webp",
    answer: "앤디 로버트슨",
  },
  {
    imgSrc: "./images/라이언_흐라벤베르흐.webp",
    answer: "라이언 흐라벤베르흐",
  },
  { imgSrc: "./images/퀴빈_캘러허.webp", answer: "퀴빈 캘러허" },
  {
    imgSrc: "./images/트렌트_알렉산더_아놀드.webp",
    answer: "트렌트 알렉산더 아놀드",
  },
  { imgSrc: "./images/자렐_콴사.webp", answer: "자렐 콴사" },
  { imgSrc: "./images/코너_브래들리.webp", answer: "코너 브래들리" },
  // 맨시티
  { imgSrc: "./images/카일_워커.webp", answer: "카일 워커" },
  { imgSrc: "./images/후벵_디아스.webp", answer: "후벵 디아스" },
  { imgSrc: "./images/존_스톤스.webp", answer: "존 스톤스" },
  { imgSrc: "./images/네이선_아케", answer: "네이선 아케" },
  {
    imgSrc: "./images/마테오_코바치치.webp",
    answer: "마테오 코바치치",
  },
  { imgSrc: "./images/엘링_홀란드.webp", answer: "엘링 홀란드" },
  { imgSrc: "./images/잭_그릴리쉬.webp", answer: "잭 그릴리쉬" },
  { imgSrc: "./images/제레미_도쿠.webp", answer: "제레미 도쿠" },
  { imgSrc: "./images/로드리.webp", answer: "로드리" },
  {
    imgSrc: "./images/케빈_더브라위너.webp",
    answer: "케빈 더브라위너",
  },
  {
    imgSrc: "./images/슈테판_오르테가.webp",
    answer: "슈테판 오르테가",
  },
  {
    imgSrc: "./images/일카이_귄도안.webp",
    answer: "일카이 귄도안",
  },
  {
    imgSrc: "./images/베르나르두_실바.webp",
    answer: "베르나르두 실바",
  },
  {
    imgSrc: "./images/요슈코_그바르디올.webp",
    answer: "요슈코 그바르디올",
  },
  {
    imgSrc: "./images/마누엘_아칸지.webp",
    answer: "마누엘 아칸지",
  },
  { imgSrc: "./images/사비뉴.webp", answer: "사비뉴" },
  {
    imgSrc: "./images/마테우스_누네스.webp",
    answer: "마테우스 누네스",
  },
  { imgSrc: "./images/에데르송.webp", answer: "에데르송" },
  { imgSrc: "./images/필_포든.webp", answer: "필 포든" },
  { imgSrc: "./images/리코_루이스.webp", answer: "리코 루이스" },
  // 맨유
  {
    imgSrc: "./images/빅토르_린델뢰프.webp",
    answer: "빅토르 린델뢰프",
  },
  {
    imgSrc: "./images/누사이르_마즈라위.webp",
    answer: "누사이르 마즈라위",
  },
  {
    imgSrc: "./images/마테이스_더리흐트.webp",
    answer: "마테이스 더리흐트",
  },
  { imgSrc: "./images/해리_매과이어.webp", answer: "해리 매과이어" },
  {
    imgSrc: "./images/리산드로_마르티네스.webp",
    answer: "리산드로 마르티네스",
  },
  {
    imgSrc: "./images/메이슨_마운트.webp",
    answer: "메이슨 마운트",
  },
  {
    imgSrc: "./images/브루노_페르난데스.webp",
    answer: "브루노 페르난데스",
  },
  {
    imgSrc: "./images/라스무스_호일룬.webp",
    answer: "라스무스 호일룬",
  },
  {
    imgSrc: "./images/마커스_래시포드.webp",
    answer: "마커스 래시포드",
  },
  {
    imgSrc: "./images/조슈아_지르크지.webp",
    answer: "조슈아 지르크지",
  },
  {
    imgSrc: "./images/타이럴_말라시아.webp",
    answer: "타이럴 말라시아",
  },
  {
    imgSrc: "./images/크리스티안_에릭센.webp",
    answer: "크리스티안 에릭센",
  },
  { imgSrc: "./images/레니_요로.webp", answer: "래니 요로" },
  { imgSrc: "./images/아마드_디알로.webp", answer: "아마드 디알로" },
  {
    imgSrc: "./images/알레한드로_가르나초.webp",
    answer: "알레한드로 가르나초",
  },
  { imgSrc: "./images/카세미루.webp", answer: "카세미루" },
  { imgSrc: "./images/디오구_달로.webp", answer: "디오구 달로" },
  { imgSrc: "./images/안토니.webp", answer: "안토니" },
  { imgSrc: "./images/톰_히튼.webp", answer: "톰 히튼" },
  { imgSrc: "./images/루크_쇼.webp", answer: "루크 쇼" },
  { imgSrc: "./images/안드레_오나나.webp", answer: "안드레 오나나" },
  {
    imgSrc: "./images/마누엘_우가르테.webp",
    answer: "마누엘 우가르테",
  },
  { imgSrc: "./images/조니_에반스.webp", answer: "조니 에반스" },
  { imgSrc: "./images/에단_휘틀리.webp", answer: "에단 휘틀리" },
  { imgSrc: "./images/코비_마이누.webp", answer: "코비 마이누" },
  { imgSrc: "./images/토비_콜리어.webp", answer: "토비 콜리어" },
  // 뉴캐슬
  {
    imgSrc: "./images/마르틴_두브라프카.webp",
    answer: "마르틴 두브라프카",
  },
  {
    imgSrc: "./images/키어런_트리피어.webp",
    answer: "키어런 트리피어",
  },
  { imgSrc: "./images/스벤_보트만.webp", answer: "스벤 보트만" },
  { imgSrc: "./images/파비안_셰어.webp", answer: "파비안 셰어" },
  { imgSrc: "./images/자말_라셀스.webp", answer: "자말 라셀스" },
  { imgSrc: "./images/조엘린통.webp", answer: "조엘린통" },
  {
    imgSrc: "./images/산드로_토날리.webp",
    answer: "산드로 토날리",
  },
  { imgSrc: "./images/칼럼_윌슨.webp", answer: "칼럼 윌슨" },
  { imgSrc: "./images/앤서니_고든.webp", answer: "앤서니 고든" },
  { imgSrc: "./images/하비_반스.webp", answer: "하비 반스" },
  { imgSrc: "./images/맷_타겟.webp", answer: "맷 타겟" },
  {
    imgSrc: "./images/알렉산데르_이삭.webp",
    answer: "안렉산데르 이삭",
  },
  { imgSrc: "./images/에밀_크라프트.webp", answer: "에밀 크라프트" },
  {
    imgSrc: "./images/윌리엄_오술라.webp",
    answer: "윌리엄 오술라",
  },
  { imgSrc: "./images/루이스_홀.webp", answer: "루이스 홀" },
  {
    imgSrc: "./images/티노_리브라멘토.webp",
    answer: "티노 리브라멘토",
  },
  { imgSrc: "./images/닉_포프.webp", answer: "닉 포프" },
  { imgSrc: "./images/제이콥_머피.webp", answer: "제이콥 머피" },
  { imgSrc: "./images/미겔_알미론.webp", answer: "미겔 알미론" },
  { imgSrc: "./images/로이드_켈리.webp", answer: "로이드 켈리" },
  { imgSrc: "./images/조_윌록.webp", answer: "조 윌록" },
  { imgSrc: "./images/댄_번.webp", answer: "댄 번" },
  { imgSrc: "./images/션_롱스태프.webp", answer: "션 롱스태프" },
  {
    imgSrc: "./images/브루누_기마랑이스.webp",
    answer: "브루누 기마랑이스",
  },
  // 노팅엄포레스트
  { imgSrc: "./images/모라투.webp", answer: "모라투" },
  { imgSrc: "./images/무릴루.webp", answer: "무릴루" },
  {
    imgSrc: "./images/이브라힘_상가레.webp",
    answer: "이브라힘 상가레",
  },
  {
    imgSrc: "./images/니코_윌리엄스.webp",
    answer: "니코 윌리엄스",
  },
  {
    imgSrc: "./images/엘리엇_앤더슨.webp",
    answer: "엘리엇 앤더슨",
  },
  {
    imgSrc: "./images/타이워_아워니이.webp",
    answer: "타이워 아워니이",
  },
  {
    imgSrc: "./images/모건_깁스화이트.webp",
    answer: "모건 깁스화이트",
  },
  { imgSrc: "./images/크리스_우드.webp", answer: "크리스 우드" },
  {
    imgSrc: "./images/앤드류_오모바미델레.webp",
    answer: "앤드류 오모바미델레",
  },
  {
    imgSrc: "./images/캘럼_허드슨오도이.webp",
    answer: "캘럼 허드슨오도이",
  },
  { imgSrc: "./images/해리_토폴로.webp", answer: "해리 토폴로" },
  {
    imgSrc: "./images/니콜라스_도밍게스.webp",
    answer: "니콜라스 도밍게스",
  },
  {
    imgSrc: "./images/제임스_워드프라우스.webp",
    answer: "제임스 워드프라우스",
  },
  {
    imgSrc: "./images/알렉스_모레노.webp",
    answer: "알렉스 모레노",
  },
  { imgSrc: "./images/조타_실바.webp", answer: "조타 실바" },
  {
    imgSrc: "./images/안토니_엘랑가.webp",
    answer: "안토니 엘랑가",
  },
  { imgSrc: "./images/라이언_예이츠.webp", answer: "라이언 예이츠" },
  { imgSrc: "./images/라몬_소사.webp", answer: "라몬 소사" },
  {
    imgSrc: "./images/엠마누엘_데니스.webp",
    answer: "엠마누엘 데니스",
  },
  { imgSrc: "./images/다닐루.webp", answer: "다닐루" },
  { imgSrc: "./images/윌리_볼리.webp", answer: "윌리 볼리" },
  {
    imgSrc: "./images/니콜라_밀렌코비치.webp",
    answer: "니콜라 밀렌코비치",
  },
  // 사우스햄튼
  {
    imgSrc: "./images/알렉스_맥카시.webp",
    answer: "알렉스 맥카스",
  },
  {
    imgSrc: "./images/카일_워커피터스.webp",
    answer: "카일 워커피터스",
  },
  { imgSrc: "./images/라이언_매닝.webp", answer: "라이언 매닝" },
  { imgSrc: "./images/플린_다운스.webp", answer: "플린 다운스" },
  { imgSrc: "./images/잭_스티븐스.webp", answer: "잭 스티븐스" },
  {
    imgSrc: "./images/테일러_하우드벨리스.webp",
    answer: "테일러 하우드벨리스",
  },
  { imgSrc: "./images/조_아리보.webp", answer: "조 아리보" },
  { imgSrc: "./images/윌_스몰본.webp", answer: "윌 스몰본" },
  {
    imgSrc: "./images/아담_암스트롱.webp",
    answer: "아담 암스트롱",
  },
  { imgSrc: "./images/애덤_랄라나.webp", answer: "애덤 랄라나" },
  { imgSrc: "./images/로스_스튜어트.webp", answer: "로스 스튜어트" },
  { imgSrc: "./images/로니_에드워즈.webp", answer: "로니 에드워즈" },
  { imgSrc: "./images/제임스_브리.webp", answer: "제임스 브리" },
  { imgSrc: "./images/네이선_우드.webp", answer: "네이선 우드" },
  {
    imgSrc: "./images/스가와라_유키나리.webp",
    answer: "스가와라 유키나리",
  },
  {
    imgSrc: "./images/마테우스_페르난데스.webp",
    answer: "마테우스 페르난데스",
  },
  { imgSrc: "./images/캐머런_아처.webp", answer: "캐머런 아처" },
  {
    imgSrc: "./images/카말딘_술레마나.webp",
    answer: "카말린 술레마나",
  },
  { imgSrc: "./images/찰리_테일러.webp", answer: "찰리 테일러" },
  {
    imgSrc: "./images/막스웰_코르네.webp",
    answer: "막스웰 코르네",
  },
  {
    imgSrc: "./images/라이언_프레이저.webp",
    answer: "라이언 프레이저",
  },
  {
    imgSrc: "./images/레슬리_우고추쿠.webp ",
    answer: "레슬리 우고추쿠",
  },
  {
    imgSrc: "./images/아론_램스데일.webp",
    answer: "아론 램스데일",
  },
  { imgSrc: "./images/얀_베드나레크.webp", answer: "얀 베드나레크" },
  {
    imgSrc: "./images/타일러_디블링.webp",
    answer: "타일러 디블링",
  },
  // 토트넘
  {
    imgSrc: "./images/굴리엘모_비카리오.webp",
    answer: "굴리엘모 비카리오",
  },
  {
    imgSrc: "./images/세르히오_레길론.webp",
    answer: "세르히오 레길론",
  },
  { imgSrc: "./images/라두_드라구신.webp", answer: "라두 드라구신" },
  { imgSrc: "./images/손흥민.webp", answer: "손흥민" },
  { imgSrc: "./images/이브_비수마.webp", answer: "이브 비수마" },
  { imgSrc: "./images/히샬리송.webp", answer: "히샬리송" },
  {
    imgSrc: "./images/제임스_매디슨.webp",
    answer: "제임스 매디슨",
  },
  {
    imgSrc: "./images/데스티니_우도기.webp",
    answer: "데스티니 우도기",
  },
  { imgSrc: "./images/아치_그레이.webp", answer: "아치 그레이" },
  { imgSrc: "./images/루카스_베리발.webp", answer: "루카스 베리발" },
  { imgSrc: "./images/티모_베르너.webp", answer: "티모 베르너" },
  {
    imgSrc: "./images/크리스티안_로메로.webp",
    answer: "크리스티안 로메로",
  },
  {
    imgSrc: "./images/도미닉_솔랑키.webp",
    answer: "도미닉 솔랑키",
  },
  {
    imgSrc: "./images/프레이저_포스터.webp",
    answer: "프레이저 포스터",
  },
  {
    imgSrc: "./images/데얀_쿨루셉스키.webp",
    answer: "데얀 쿨루셉스키",
  },
  { imgSrc: "./images/브레넌_존슨.webp", answer: "브레넌 존슨" },
  { imgSrc: "./images/페드로_포로.webp", answer: "페드로 포로" },
  { imgSrc: "./images/제드_스펜스.webp", answer: "제드 스펜스" },
  {
    imgSrc: "./images/윌슨_오도베르.webp",
    answer: "윌슨 오도베르",
  },
  { imgSrc: "./images/파페_사르.webp", answer: "파페 사르" },
  {
    imgSrc: "./images/로드리고_벤탕쿠르.webp",
    answer: "로드리고 벤탕쿠르",
  },
  { imgSrc: "./images/벤_데이비스.webp", answer: "벤 데이비스" },
  { imgSrc: "./images/미키_반더벤.webp", answer: "미키 반더벤" },
  // 웨스트햄
  {
    imgSrc: "./images/우카시_파비안스키.webp",
    answer: "우카시 파비안스키",
  },
  {
    imgSrc: "./images/애런_크레스웰.webp",
    answer: "애런 크레스웰",
  },
  {
    imgSrc: "./images/카를로스_솔레르.webp",
    answer: "카를로스 솔레르",
  },
  {
    imgSrc: "./images/블라디미르_초우팔.webp",
    answer: "블라디미르 초우팔",
  },
  {
    imgSrc: "./images/크리센시오_서머빌.webp",
    answer: "크리센시오 서머빌",
  },
  {
    imgSrc: "./images/미카일_안토니오.webp",
    answer: "미카일 안토니오",
  },
  { imgSrc: "./images/루카스_파케타.webp", answer: "루카스 파케타" },
  {
    imgSrc: "./images/니클라스_퓔크루크.webp",
    answer: "니콜라스 퓔크루크",
  },
  {
    imgSrc: "./images/무함마드_쿠두스.webp",
    answer: "무함마드 쿠두스",
  },
  {
    imgSrc: "./images/콘스탄티노스_마브로파노스.webp",
    answer: "콘스탄티노스 마브로파노스",
  },
  {
    imgSrc: "./images/루이스_길례르미.webp",
    answer: "루이스 길례르미",
  },
  { imgSrc: "./images/대니_잉스.webp", answer: "대니 잉스" },
  {
    imgSrc: "./images/에드손_알바레스.webp",
    answer: "에드손 알바레스",
  },
  { imgSrc: "./images/재러드_보언.webp", answer: "재러드 보언" },
  {
    imgSrc: "./images/알퐁스_아레올라.webp",
    answer: "알퐁스 아레올라",
  },
  {
    imgSrc: "./images/기도_로드리게스.webp",
    answer: "기도 로드리게스",
  },
  {
    imgSrc: "./images/장클레르_토디보.webp",
    answer: "장클레르 토디보",
  },
  { imgSrc: "./images/막스_킬먼.webp", answer: "막스 킬먼" },
  {
    imgSrc: "./images/토마시_소우체크.webp",
    answer: "토마시 소우체크",
  },
  {
    imgSrc: "./images/애런_완비사카.webp",
    answer: "애런 완비사카",
  },
  {
    imgSrc: "./images/에메르송_팔미에리.webp",
    answer: "에메르송 팔미에리",
  },
  { imgSrc: "./images/루이장.webp", answer: "루이장" },
  { imgSrc: "./images/앤디_어빙.webp", answer: "앤디 어빙" },
  // 울버햄튼
  { imgSrc: "./images/주제_사.webp", answer: "주제 사" },
  { imgSrc: "./images/맷_도허티.webp", answer: "맷 도허티" },
  {
    imgSrc: "./images/라얀_아이트누리.webp",
    answer: "라얀 아이트누리",
  },
  {
    imgSrc: "./images/산티아고_부에노.webp",
    answer: "산티아고 부에노",
  },
  { imgSrc: "./images/마리오_레미나.webp", answer: "마리오 레미나" },
  {
    imgSrc: "./images/부바카르_트라오레.webp",
    answer: "부바카르 트라오레",
  },
  { imgSrc: "./images/안드레.webp", answer: "안드레" },
  { imgSrc: "./images/주앙_고메스.webp", answer: "주앙 고메스" },
  {
    imgSrc: "./images/예르겐_스트란_라르센.webp",
    answer: "예르겐 스트란 라르센",
  },
  { imgSrc: "./images/마테우스_쿠냐.webp", answer: "마테우스 쿠냐" },
  { imgSrc: "./images/황희찬.webp", answer: "황희찬" },
  {
    imgSrc: "./images/제르손_모스케라.webp",
    answer: "제르손 모스케라",
  },
  { imgSrc: "./images/크레이그_도슨.webp", answer: "크레이그 도슨" },
  {
    imgSrc: "./images/사샤_칼라이지치.webp",
    answer: "사샤 칼라이지치",
  },
  {
    imgSrc: "./images/호드리구_고메스.webp",
    answer: "호드리구 고메스",
  },
  { imgSrc: "./images/토미_도일.webp", answer: "토미 도일" },
  {
    imgSrc: "./images/파블로_사라비아.webp",
    answer: "파블로 사라비아",
  },
  { imgSrc: "./images/넬송_세메두.webp", answer: "넬송 세메두" },
  { imgSrc: "./images/토티_고메스.webp", answer: "토티 고메스" },
  {
    imgSrc: "./images/카를루스_포르브스.webp",
    answer: "카를루스 포르브스",
  },
  {
    imgSrc: "./images/장리크네르_벨가르드.webp",
    answer: "장리크네르 벨가르드",
  },
  {
    imgSrc: "./images/곤살루_게드스.webp",
    answer: "곤살루 게드스",
  },
  {
    imgSrc: "./images/엔소_곤살레스.webp",
    answer: "엔소 곤살레스",
  },
  { imgSrc: "./images/샘_존스톤.webp", answer: "샘 존스톤" },
];

let startQuiz = (event) => {
  mainContainer.innerHTML = "";
  footerContainer.innerHTML = "";
  let buttonText = event.innerHTML;
  const regex = /[^0-9]/g;
  totalNumberOfQuiz = buttonText.replace(regex, "");
  nextQuiz();
};

let nextQuiz = (event) => {
  if (currentNumberOfQuiz < totalNumberOfQuiz) {
    mainContainer.innerHTML = "";
    footerContainer.innerHTML = "";
    let input = document.createElement("input");
    input.placeholder = "선수 이름을 입력해주세요";
    input.className = "content3-input";

    const randomIndex = Math.floor(Math.random() * players.length);
    let playerImages = document.createElement("img");
    playerImages.src = players[randomIndex].imgSrc;
    playerImages.className = "content3-img";

    mainContainer.appendChild(playerImages);
    footerContainer.appendChild(input);

    input.addEventListener("keydown", function (event) {
      if (event.key == "Enter") {
        checkAnswer(input.value, players[randomIndex].answer);
        input.value = "";
        currentNumberOfQuiz++;
        players.splice(randomIndex, 1);
      }
    });
  } else {
    finishQuiz();
  }
};

let checkAnswer = (userAnswer, correctAnswer) => {
  footerContainer.innerHTML = "";
  const answerBox = document.createElement("div");
  answerBox.style.color = "white";

  userAnswer = userAnswer.replace(/\s+/g, "");
  const correctAnswerForCompare = correctAnswer.split(" ");

  if (
    correctAnswerForCompare.join("") === userAnswer ||
    correctAnswerForCompare.includes(userAnswer)
  ) {
    answerBox.innerHTML = `정답! <br> ${correctAnswer}`;

    score++;
  } else {
    answerBox.innerHTML = `오답! <br> ${correctAnswer}`;
  }
  footerContainer.appendChild(answerBox);
  setTimeout(() => {
    nextQuiz();
  }, 1000);
};

let finishQuiz = (event) => {
  mainContainer.innerHTML = "";
  footerContainer.innerHTML = "";

  let scoreBoard = document.createElement("p");
  mainContainer.appendChild(scoreBoard);
  scoreBoard.textContent = `퀴즈종료! 당신의 점수는 ${score} / ${totalNumberOfQuiz}`;

  let returnBtn = document.createElement("button");
  returnBtn.textContent = "돌아가기";
  footerContainer.appendChild(returnBtn);

  returnBtn.addEventListener("click", function (event) {
    location.reload();
  });
};

quizButton.addEventListener("click", (event) => {
  startQuiz(event.target);
});
