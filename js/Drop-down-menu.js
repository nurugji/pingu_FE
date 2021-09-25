const dropdown = document.querySelectorAll(".dropdown");
const dropdownLink = document.querySelectorAll("li a");

function handleClick(event) {
  const li = event.currentTarget;
  const menu = li.querySelector(".dropdown__menu");

  menu.classList.toggle("open__dropdown");
}
// event.target을 사용하게 되면 자식이 반환이 되므로 <a>가 반환이 됩니다
// 따라서 event.currentTarget을 통해 <li>를 반환한다음 dropdown__menu를 받습니다

dropdown.forEach((el) => el.addEventListener("click", handleClick));

// querySelectorAll는 여러개의 element를 순서대로 배열로 가지고 있습니다
// 배열의 모든 element에 addEvent를 해주려면 forEach를 사용해야합니다
// getElementsByClassName을 사용할때는 Array.from()을 통해서 배열로 만든 후
// 사용할 수 있습니다

function handleMouseEnter(event) {
  const li = event.target;
  li.classList.add("mouse-enter");
}

function handleMouseLeave(event) {
  const li = event.target;
  li.classList.remove("mouse-enter");
}

dropdownLink.forEach((el) =>
  el.addEventListener("mouseenter", handleMouseEnter)
);

dropdownLink.forEach((el) =>
  el.addEventListener("mouseleave", handleMouseLeave)
);
// 마우스가 올라가면 mouse-enter class를 더하고 마우스가 내려가면
// class를 제거하는 방식입니다 다른 방법이 있는지 찾아야합니다
