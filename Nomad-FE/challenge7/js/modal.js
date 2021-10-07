const modalClass = document.getElementsByClassName("modal");
const modalList = document.querySelectorAll(".modal > ul");

Array.from(modalClass).forEach((el) => el.addEventListener("click", openModal));

function openModal(event) {
  const click = event.currentTarget;
  const list = click.querySelector("ul");
  if (list.classList.contains("open")) {
    Array.from(modalList).forEach((el) => el.classList.remove("open"));
  } else {
    Array.from(modalList).forEach((el) => el.classList.remove("open"));
    list.classList.add("open");
  }
}

const itemList = document.getElementsByClassName("item");

Array.from(itemList).forEach((el) => el.addEventListener("click", selectList));

function selectList(event) {
  const select = event.target.parentElement.parentElement;
  const selectAdd = select.querySelector("span:nth-child(2)");
  selectAdd.innerText = `${event.target.innerText}`;
}

// how to remove open when I click body
