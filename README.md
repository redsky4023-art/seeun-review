# 세은이 복습방

https://redsky4023-art.github.io/seeun-review/

- `index.html` — 복습방: 「오늘 공부」(과목 버튼 → 그 과목 단원 페이지를 통째로 펼침) · 오답노트(사진) · 기록(달력·지난 공부·시험 D-day·백업)
- `lessons/` — 단원 공부 페이지. 새 단원은 `lessons/<과목>-<번호>-<이름>.html` 로 만들고 `lessons/lessons.js` 맨 위에 한 줄 추가
  - 단원 페이지는 `<html data-lesson="id">` + `<script src="track.js">` 로 할 일 체크·퀴즈 점수를 `seeun.study.v1` 에 남긴다 (기록 탭이 읽음)
  - 복습방은 `?embed=1` 로 불러 머리 링크를 숨긴다
- 기록: 오답·시험은 localStorage `seeun.rv.v1`, 오답 사진은 IndexedDB `seeun-rv`, 공부 기록은 `seeun.study.v1`. 세은 공부방·역사 페이지와 같은 github.io 주소라 저장 칸이 공유된다 — 키 이름은 `seeun.` 으로 시작
- 예전 주소 seeun-study/review.html 은 여기로 넘긴다
