const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
// 인풋값을 받아둘 빈 배열 객체 생성
// 하지만 계속 빈 배열로 두면 새로고침하여 함수들이 다시 실행되었을 때
// 다시 빈 배열이 되어버리므로 업데이트가 필요한 let으로 선언한다.

const TODOS_KEY = "todos";
// 로컬저장소 KEY 이름인 todos의 중복이 많으므로 변수로 지정

function saveToDos() {
  // toDos 배열을 loca starage에 저장하는 함수 생성

  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  // toDos 배열을 문자열 모양으로 변환한 뒤 로컬저장소에 저장
}

function deleteToDo(event) {
  const wantDelThisList = event.target.parentElement;
  // 버튼에 어떤 li를 지워야 하는지 정확하게 알려주기 위해서 event 프로퍼티를 활용
  // 정확히 event가 발생한 target을 찾고 그 부모인 li 를 찾아서 변수로 지정

  wantDelThisList.remove();
  // 찾은 부모 li를 지우는 함수 실행

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(wantDelThisList.id));
  // toDos DB에 있는 배열 요소 중 하나의 id값과 li의 id값이 일치하는 것을 배열에서 제외시키기
  // 하지만 wantDelThisList.id 는 문자열 값이고 toDo.id 는 숫자이기 때문에 연산이 작동하지 않는다.
  // 따라서 parseInt() 까지 사용해주면 비교연산자가 작동한다.

  saveToDos();
  // 실행한 내용(filter로 인해 새로 생긴 배열)을 로컬저장소에 저장
}

function paintToDo(newToDoIn) {
  // 입력된 value값을 받아서 리스트에 추가시키는 함수 선언
  // 반복되는 설명이지만 이 함수의 파라미터는 아래 선언된 newToDo하고는 관련이 없다.
  // 그냥 그릇 같은 것이기 때문에 아무 문자나 가능하다.
  const toDoListItem = document.createElement("li");
  toDoListItem.id = newToDoIn.id;
  toDoListItem.className = "todo-list__item";
  const toDoListSpan = document.createElement("span");
  toDoListSpan.className = "todo-list__content";
  // ul에 들어갈 li와 li에 넣을 span을 생성하는 변수를 만든다
  // li에는 newToDoObj에 추가한 랜덤 id값을 id로 부여

  toDoListSpan.innerText = `• ${newToDoIn.text}`;
  // span 안에는 newTodoIn을 텍스트로 넣어준다.
  // 아래에서 이 함수에 넣는 인자를 문자열에서 객체 형태로 바꿔주면서 .text 추가

  const removeListBtn = document.createElement("button");
  removeListBtn.className = "todo-list__btn--remove";
  // 리스트를 삭제하는 버튼 요소 생성 변수

  removeListBtn.innerText = "❌";
  // 삭제 버튼에 이모지 텍스트 추가

  removeListBtn.addEventListener("click", deleteToDo);
  // 삭제 버튼에 클릭 이벤트를 발생시키기

  toDoListItem.appendChild(toDoListSpan);
  // span 생성 변수(toDoListSpan)를 li 생성 변수(toDoListItem) 안에 넣어주기

  toDoListItem.appendChild(removeListBtn);
  // button 생성 변수를 li 생성 변수 안에 넣어주기

  toDoList.appendChild(toDoListItem);
  // span이 들어간 li 생성 변수를 ul에 추가시켜 준다.
}

function handleToDoSubmit(event) {
  event.preventDefault();
  // submit 의 기본 새로고침 기능을 막기

  const newToDo = toDoInput.value;
  // input을 비우기 전 값을 새로운 변수에 저장하기
  // toDoInput.value에 변화가 일어나도 newTodo는 변하지 않음

  toDoInput.value = "";
  // 입력이 완료되면 input의 내용을 비우기

  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  // newToDo를 일반 원소가 아닌 id값을 가진 객체의 형태로 toDos 배열에 넣기 위해
  // 랜덤에 가까운 숫자를 id로 가지는 객체로 변환 시키는 변수 선언

  toDos.push(newToDoObj);
  // 새로운 항목이 생길 때마다 toDos 배열에 담아두기 (로컬 저장을 위해)
  // 원래 newToDo였는데 newToDoObj로 업데이트

  paintToDo(newToDoObj);
  // 값이 저장된 변수 newTodo를 함수 painToDo로 보내기
  // 원래 newToDo였는데 newToDoObj로 업데이트

  saveToDos();
  // toDos 배열을 로컬저장소에 저장하는 함수 실행
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
// 로컬저장소의 todos라는 키를 가진 값을 가져오는 변수 선언

// function sayHello(item) {
//   console.log("this is the turn of", item);
// }
// sayHello는 밑의 화살표 함수 사용에 따라 불필요한 함수 선언이 되었다.

if (savedToDos !== null) {
  // 만약 savedTODos가 로컬저장소에서 받아온 값이 null 아니면 (값이 존재하면)

  const parsedToDos = JSON.parse(savedToDos);
  // 해당 로컬저장소의 값을 배열로 다시 바꿔주는 변수를 설정
  // 이렇게 되면 다시 배열로 설정되었기 때문에 배열의 각각의 원소에 대해 함수를 실행하는 등의
  // 기능이 가능해진다.

  // parsedToDos.forEach(sayHello);
  // 배열 각각의 원소에 대해 sayHello 함수를 실행시키기

  toDos = parsedToDos;
  // 새로고침하여 함수가 재실행 되었을 때
  // toDos의 원래 선언 형태인 빈 배열로 돌아가는 것을 막기 위해
  // toDos를 저장된 값을 지닌 배열로 업데이트 해주는 것

  parsedToDos.forEach(paintToDo);
  // 출력
}
