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

---

### 추가할 내용

- 모든 js파일에 주석 추가하기
- CSS 원본과 비슷하게 수정하기
- 이미지, 명언 리스트 분위기에 맞게 변경
- 시계 24시간 표현에서 12시간 표현으로 변경하기(AM,PM 정보 추가)
- bg와 quote 랜덤으로 불러오는 버튼 추가하기
