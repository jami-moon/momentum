const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// 많이 쓰이는 문자열을 오타방지를 위해 변수로 설정
// 단순한 string 변수 선언은 대문자로(사람마다 다름)

function onLoginSubmit(event) {
  event.preventDefault();
  //submit 기본 새로고침 기능 막기

  loginForm.classList.add(HIDDEN_CLASSNAME);
  // form 숨기기

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  // 로컬저장소에 username 저장

  paintGreetings(username);
  // h1에 텍스트 추가하고 표시하기
}

loginForm.addEventListener("submit", onLoginSubmit);
// submit 이벤트가 감지되면 onLoginSubmit 함수 실행

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
// 중복을 없애기 위한 함수설정, 파라미터 값은 어떤 것이 와도 상관없으니 위에서 선언한 변수 username과 혼동하지 말기.
// 이렇게 설정한 함수는 위의 onLoginSubmit 함수에도 적용이 되는데, 함수선언과 var는 호이스팅이 적용되기 때문이다.

const savedUsername = localStorage.getItem(USERNAME_KEY);
// 로컬저장소로 부터 값을 받아오기

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // 유저정보가 없다면 숨겨진 폼태그를 나타나게 하기

  loginForm.addEventListener("submit", onLoginSubmit);
  // submit 이벤트 감지시키기
} else {
  paintGreetings(savedUsername);
  // 유저정보가 있으면 h1에 텍스트 추가하고 표시하기
}
