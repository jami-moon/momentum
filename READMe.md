# 프로젝트명 : Momentum clone (chorm extention)

사용언어 : HTMl, CSS, JavaScript  
기간 : 210717 ~  
참조 : https://nomadcoders.co/ 강의

**background.js, quotes.js**

- 배열에서 `Math.random()` 을 사용해 랜덤으로 이미지, 인용문 호출
- HTML Element를 생성하고 HTML에 추가

**clock.js**

- `Date` 생성자함수를 사용하여 표준 빌트인 Date 객체를 생성
- `Date` 내부 메서드를 사용하여 현재 시간, 분, 초 정보 받아오기
- `setInterval` 함수를 사용하여 현재시간 표현

**geolocation.js**

- User의 현재 위도, 경도 정보 받아오기
- openweathermap의 API를 사용하여 User 지역의 날씨정보 표시

**grettings.js**

- username이 submit되면 form 태그를 숨기고 인삿말 표시
- submit된 username 값을 로컬저장소에 저장
- 조건문을 사용하여 진입 시 username 정보가 없다면 form을 보이게하고, 이미 존재하면 인삿말 표시

**todo.js**

- 입력된 todo 리스트 데이터를 로컬저장소에 저장
- 데이터에 접근하기 위해 단순히 원소형태가 아닌 `Date.now()` 를 활용해 랜덤한 id를 부여하여 Key:Value 형태로 저장
- 이 때, todo 리스트 배열 객체와 로컬저장소 간의 데이터 교류를 위해 `JSON.stringify` `JSON.parse()` 를 통해 데이터타입 변환 함수 사용

## 210720_docs: CSS적용

- 모든 js파일에 주석 추가 (복습을 위해)
- 요소 배치 및 CSS 적용
- 배경이미지 추가

---

### 추가할 내용

- ~~모든 js파일에 주석 추가하기~~
- ~~CSS 원본과 비슷하게 수정하기~~
- ~~이미지, 명언 리스트 분위기에 맞게 변경~~
- 시계 24시간 표현에서 12시간 표현으로 변경하기(AM,PM 표시 추가)
- 시간에 따라 다른 인삿말 표시하기
- bg와 quote 랜덤으로 불러오는 버튼 추가하기
- 로컬저장소의 username을 삭제하고 다시 폼태그 등장하게 하는 버튼 추가하기
- 기능 안내하는 float 요소 만들기
- greeting 인삿말 자연스럽게 나타나는 기능 추가하기
- 이름 재입력 가능하게 만들기

### 문제사항

- todo 리스트가 극단적으로 많아지면 전체 요소길이가 늘어나면서 시계가 화면 밖으로 벗어나는 현상 (리스트 요소를 제외한 다른 요소의 위치 고정)
- 새로고침시 login 버튼 요소가 가장 먼저 표시된 후에 나머지 요소가 나타나는 이유는 뭐지?
