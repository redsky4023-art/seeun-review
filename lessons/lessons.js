// 복습방에 올라가는 단원 목록 — 새 단원을 만들면 맨 위에 한 줄 추가
// date = 그 단원을 배운(사진을 받은) 날, subj = review.html 의 과목 키, plan = 「오늘 할 일」 칸 수
window.LESSONS = [
  // 2학기 기말고사 범위 (주제 19~40) — 2026-11-10
  {id:"hist-19-mingqing", date:"2026-11-10", subj:"hist", title:"명·청의 발전과 동아시아 지역 질서의 변화", unit:"Ⅲ-2 · 주제 19", pages:"110~111쪽", book:"해냄에듀", file:"lessons/hist-19-mingqing.html", plan:4, quiz:40},
  {id:"hist-20-mingqing-economy", date:"2026-11-10", subj:"hist", title:"명·청의 경제 발전과 사회·문화", unit:"Ⅲ-2 · 주제 20", pages:"112~115쪽", book:"해냄에듀", file:"lessons/hist-20-mingqing-economy.html", plan:4, quiz:45},
  {id:"hist-21-edo", date:"2026-11-10", subj:"hist", title:"에도 막부의 성장", unit:"Ⅲ-2 · 주제 21", pages:"116~117쪽", book:"해냄에듀", file:"lessons/hist-21-edo.html", plan:4, quiz:39},
  {id:"hist-22-mughal", date:"2026-11-10", subj:"hist", title:"인도에서 발전한 무굴 제국", unit:"Ⅲ-2 · 주제 22", pages:"118~119쪽", book:"해냄에듀", file:"lessons/hist-22-mughal.html", plan:4, quiz:37},
  {id:"hist-23-ottoman", date:"2026-11-10", subj:"hist", title:"다양한 이슬람 왕조의 성장과 오스만 제국", unit:"Ⅲ-3 · 주제 23", pages:"120~123쪽", book:"해냄에듀", file:"lessons/hist-23-ottoman.html", plan:4, quiz:43},
  {id:"hist-24-reformation", date:"2026-11-10", subj:"hist", title:"유럽의 종교 개혁", unit:"Ⅲ-3 · 주제 24", pages:"124~125쪽", book:"해냄에듀", file:"lessons/hist-24-reformation.html", plan:4, quiz:38},
  {id:"hist-25-new-sea-routes", date:"2026-11-10", subj:"hist", title:"신항로 개척과 아메리카 대륙의 변화", unit:"Ⅲ-3 · 주제 25", pages:"126~129쪽", book:"해냄에듀", file:"lessons/hist-25-new-sea-routes.html", plan:4, quiz:42},
  {id:"hist-26-world-trade", date:"2026-11-10", subj:"hist", title:"세계적인 교역망의 형성", unit:"Ⅲ-3 · 주제 26", pages:"130~131쪽", book:"해냄에듀", file:"lessons/hist-26-world-trade.html", plan:4, quiz:38},
  {id:"hist-27-fiscal-military-states", date:"2026-11-10", subj:"hist", title:"재정과 군사를 독점한 국가들", unit:"Ⅲ-3 · 주제 27", pages:"132~135쪽", book:"해냄에듀", file:"lessons/hist-27-fiscal-military-states.html", plan:4, quiz:45},
  {id:"hist-28-american-revolution", date:"2026-11-10", subj:"hist", title:"미국 혁명과 민주 공화국의 탄생", unit:"Ⅳ-1 · 주제 28", pages:"142~143쪽", book:"해냄에듀", file:"lessons/hist-28-american-revolution.html", plan:4, quiz:38},
  {id:"hist-29-french-revolution", date:"2026-11-10", subj:"hist", title:"프랑스 혁명의 발발과 전파", unit:"Ⅳ-1 · 주제 29", pages:"144~149쪽", book:"해냄에듀", file:"lessons/hist-29-french-revolution.html", plan:4, quiz:45},
  {id:"hist-30-vienna-1848", date:"2026-11-10", subj:"hist", title:"빈 체제와 1848년 혁명", unit:"Ⅳ-1 · 주제 30", pages:"150~153쪽", book:"해냄에듀", file:"lessons/hist-30-vienna-1848.html", plan:4, quiz:45},
  {id:"hist-31-nation-state", date:"2026-11-10", subj:"hist", title:"새롭게 등장한 국민 국가", unit:"Ⅳ-1 · 주제 31", pages:"154~155쪽", book:"해냄에듀", file:"lessons/hist-31-nation-state.html", plan:4, quiz:35},
  {id:"hist-32-usa-latin-america", date:"2026-11-10", subj:"hist", title:"미국의 성장과 독립을 이룬 라틴 아메리카", unit:"Ⅳ-1 · 주제 32", pages:"156~159쪽", book:"해냄에듀", file:"lessons/hist-32-usa-latin-america.html", plan:4, quiz:42},
  {id:"hist-33-industrial-revolution", date:"2026-11-10", subj:"hist", title:"산업화와 사회 변화", unit:"Ⅳ-2 · 주제 33", pages:"160~165쪽", book:"해냄에듀", file:"lessons/hist-33-industrial-revolution.html", plan:4, quiz:45},
  {id:"hist-34-imperialism", date:"2026-11-10", subj:"hist", title:"서양 열강의 제국주의화", unit:"Ⅳ-2 · 주제 34", pages:"166~169쪽", book:"해냄에듀", file:"lessons/hist-34-imperialism.html", plan:4, quiz:40},
  {id:"hist-35-westasia", date:"2026-11-10", subj:"hist", title:"서아시아의 국민 국가 건설 운동", unit:"Ⅳ-3 · 주제 35", pages:"170~173쪽", book:"해냄에듀", file:"lessons/hist-35-westasia.html", plan:4, quiz:45},
  {id:"hist-36-india", date:"2026-11-10", subj:"hist", title:"인도의 국민 국가 건설 운동", unit:"Ⅳ-3 · 주제 36", pages:"174~177쪽", book:"해냄에듀", file:"lessons/hist-36-india.html", plan:4, quiz:45},
  {id:"hist-37-opening", date:"2026-11-10", subj:"hist", title:"동아시아 3국의 개항", unit:"Ⅳ-3 · 주제 37", pages:"178~179쪽", book:"해냄에듀", file:"lessons/hist-37-opening.html", plan:4, quiz:43},
  {id:"hist-38-modernization", date:"2026-11-10", subj:"hist", title:"동아시아의 근대화와 민족 운동", unit:"Ⅳ-3 · 주제 38", pages:"180~183쪽", book:"해냄에듀", file:"lessons/hist-38-modernization.html", plan:4, quiz:45},
  {id:"hist-39-japan-xinhai", date:"2026-11-10", subj:"hist", title:"일본의 대외 침략과 신해혁명", unit:"Ⅳ-3 · 주제 39", pages:"184~185쪽", book:"해냄에듀", file:"lessons/hist-39-japan-xinhai.html", plan:4, quiz:45},
  {id:"hist-40-ww1", date:"2026-11-10", subj:"hist", title:"제1차 세계 대전과 이후의 세계", unit:"Ⅴ-1 · 주제 40", pages:"192~195쪽", book:"해냄에듀", file:"lessons/hist-40-ww1.html", plan:4, quiz:45},
  {id:"hist-18-mongol", date:"2026-10-18", subj:"hist", title:"몽골 제국과 교류의 확대", unit:"Ⅲ-1 · 주제 18", pages:"106~109쪽", book:"해냄에듀", file:"lessons/hist-18-mongol.html", plan:4, quiz:45}
];
