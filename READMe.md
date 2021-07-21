# 1_momentum

상태: README.md
작성일시: 2021년 7월 21일 오후 10:00

# 프로젝트명 : Momentum clone (chorm extention)

사용언어 : HTMl, CSS, JavaScript

기간 : 210717 ~

참조 : https://nomadcoders.co/ (첫 커밋 내용까지)

**_background.js, quotes.js_**

- 배열에서 `Math.random()` 을 사용해 랜덤으로 이미지, 인용문 호출
- HTML Element를 생성하고 HTML에 추가

**_clock.js_**

- `Date` 생성자함수를 사용하여 표준 빌트인 Date 객체를 생성
- `Date` 내부 메서드를 사용하여 현재 시간, 분, 초 정보 받아오기
- `setInterval` 함수를 사용하여 현재시간 표현

**_geoloction.js_**

- User의 현재 위도, 경도 정보 받아오기
- openweathermap의 API를 사용하여 User 지역의 날씨정보 표시

**_grettings.js_**

- username이 submit되면 form 태그를 숨기고 인삿말 표시
- submit된 username 값을 로컬저장소에 저장
- 조건문을 사용하여 진입 시 username 정보가 없다면 form을 보이게하고, 이미 존재하면 인삿말 표시

**_todo.js_**

- 입력된 todo 리스트 데이터를 로컬저장소에 저장
- 데이터에 접근하기 위해 단순히 원소형태가 아닌 `Date.now()` 를 활용해 랜덤한 id를 부여하여 Key:Value 형태로 저장
- 이 때, todo 리스트 배열 객체와 로컬저장소 간의 데이터 교류를 위해 `JSON.stringify` `JSON.parse()` 를 통해 데이터타입 변환 함수 사용

## 210720_docs: CSS적용

- 모든 js파일에 주석 추가 (복습을 위해)
- 요소 배치 및 CSS 적용
- 배경이미지 추가

## 210721 docs: 시간 표현 체계 변경

**_grettings.js_**

- 시간에 따라 다른 인삿말 추가
  <details>
  <summary>코드조각</summary>

  ```jsx
  function paintGreetings(username) {
    const date = new Date();
    const getHours = date.getHours();
    if (getHours >= 6 && getHours <= 11) {
      greeting.innerText = `Good Morning! ${username} :)`;
    } else if (getHours >= 11 && getHours <= 17) {
      greeting.innerText = `Good Afternoon! ${username} :)`;
    } else {
      greeting.innerText = `Good Evening! ${username} :)`;
    }
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add("show");
  }
  ```

  </details>

**_clock.js_**

- 12시간 체계로 변환하는 버튼 추가하기
  <details>
  <summary>코드조각</summary>

  ```jsx
    const contains = ampmOnoff.classList.contains("change-twelve");

    if (contains === true) {

    // 12시간 체계 표시전 AM, PM 구분 해놓기

    const ampm = hours >= 12 ? "PM" : "AM";

    // 24시 체계의 시간값에서 12로 나눈 나머지로 12시간 체계를 표현

    const changedHours = (hours %= 12);

    // 12로 나눠져 0이라는 falsy한 값이 되면 12를 출력 (12시니까)

    changedhours = changedHours || 12;

    // 화면에 표시

    time.innerText = `${changedHours}:${minutes}:${seconds}`;

    ampmText.innerText = `${ampm}`;

    } else {

    // 클래스가 없을 경우 그대로 표시

    time.innerText = `${hours}:${minutes}:${seconds}`;

    ampmText.innerText = "";
  ```

  </details>

---

### 추가할 내용

- ~~모든 js파일에 주석 추가하기~~ > 210720
- ~~CSS 원본과 비슷하게 수정하기~~ > 210720
- ~~이미지, 명언 리스트 분위기에 맞게 변경~~ >210720
- ~~시계 24시간 표현에서 12시간 표현로 변경하기(변경 토글버튼 까지 만들기)~~ > 210721

  시계표현 정보를 로컬저장소에 저장하고 새로고침해도 초기화 되지 않게 만들기

- ~~시간에 따라 다른 인삿말 표시하기~~ > 210721
- bg와 quote 랜덤으로 불러오는 버튼 추가하기
- 로컬저장소의 username을 삭제하고 다시 폼태그가 등장하게 하는 버튼 추가하기

### 문제사항

- todo 리스트가 극단적으로 많아지면 전체 요소길이가 늘어나면서 화면 밖으로 벗어나는 현상 (리스트 요소를 제외한 다른 요소의 위치 고정시키기)
- 새로고침시 login 버튼 요소가 가장 먼저 표시된 후에 나머지 요소가 나타나는 이유는 뭐지? (렌더링 관련 공부가 필요할듯)
- 12시간, 24시간 체계 바꾸는 버튼을 만들었지만 시간 표시하는 setTimeout의 영향을 받아서인지 변경 딜레이가 심함.
