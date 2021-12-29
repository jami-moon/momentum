const clock = document.querySelector("#clock");
const time = document.querySelector("#clock .clock__time");
const ampmText = document.querySelector(".clock__ampm");
const ampmOnoff = document.querySelector(".clock__btn");

// 12시간 표현으로 변경 기능 버튼
function ampmToggle() {
  ampmOnoff.classList.toggle("change-twelve");
}
ampmOnoff.addEventListener("click", ampmToggle);

function getClock() {
  // date 생성자 함수로 표준 빌트인 객체인 date 생성
  const date = new Date();

  // date 객체의 메서드를 활용하여 시간, 분, 초 정보 받아오기
  let hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // 위에서 부여한 토글 클래스 기준으로 조건문 작성
  const contains = ampmOnoff.classList.contains("change-twelve");
  if (contains === true) {
    // 12시간 체계 표시전 AM, PM 구분 해놓기
    const ampm = hours >= 12 ? "PM" : "AM";

    // 24시 체계의 시간값에서 12로 나눈 나머지로 12시간 체계를 표현
    const changedHours = (hours %= 12);

    // 12로 나눠져 0이라는 falsy한 값이 되면 12를 출력 (12시니까)
    changedHours = changedHours || 12;

    // 화면에 표시
    time.innerText = `${changedHours}:${minutes}:${seconds}`;
    ampmText.innerText = `${ampm}`;
  } else {
    // 따로 작업을 거치지 않고 바로 화면에 표시
    time.innerText = `${hours}:${minutes}:${seconds}`;
    ampmText.innerText = "";
  }
}
getClock();
// 함수 반복 실행으로 연속적인 시간 표시하기
setInterval(getClock, 1000);

const btnInfo = document.querySelector(".clock__btn-info");

// 토글버튼 안내창
function addInfo() {
  btnInfo.classList.remove(HIDDEN_CLASSNAME);
}

function removeInfo() {
  btnInfo.classList.add(HIDDEN_CLASSNAME);
}
ampmOnoff.addEventListener("mouseover", addInfo);
ampmOnoff.addEventListener("mouseout", removeInfo);
