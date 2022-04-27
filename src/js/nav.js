const navOpenBtn = document.querySelector(".main-menu-wrap");
const navCloseBtn = document.querySelector(".btn--close-nav");
const navListItem = document.querySelectorAll(".nav-link");
const navPanel = document.querySelector(".main-nav");

navOpenBtn.addEventListener("click", function () {
  navPanel.classList.add("appearance");
});

navCloseBtn.addEventListener("click", function () {
  navPanel.classList.remove("appearance");
});

for (let i = 0; i < navListItem.length; i++) {
  let navlist = navListItem[i];
  navlist.addEventListener("click", function () {
    navPanel.classList.remove("appearance");
    let path = navlist.getAttribute("href");
    document.location.href = path;
  });
}
