const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// 0부터 배열길이 만큼의 수 중 내림한 정수값만을 불러오는 변수

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
// img 요소를 만들고 src속성을 chosenImage 변수로 설정하기

bgImage.className = "bg-img";

document.body.appendChild(bgImage);
// 만들어진 img 요소를 body에 추가하기
