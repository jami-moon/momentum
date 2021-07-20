const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  // date 생성자 함수로 표준 빌트인 객체인 date 생성
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  // date 객체의 메서드를 활용하여 시간, 분, 초 정보 받아오기
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
// 함수 반복 실행으로 연속적인 시간 표시하기
