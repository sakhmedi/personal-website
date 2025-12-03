const btnburger = document.getElementById("burgermenu");
const mobilenav = document.getElementById("navList");
btnburger.addEventListener("click", () => {
    mobilenav.classList.toggle("open");
});

// const themeToggle = document.getElementById("themeToggle");

// themeToggle.addEventListener("click", () => {
//   document.body.classList.toggle("dark");

//   // чтобы тема сохранялась между визитами
//   if (document.body.classList.contains("dark")) {
//     localStorage.setItem("theme", "dark");
//   } else {
//     localStorage.setItem("theme", "light");
//   }
// });

// // Восстанавливаем тему при загрузке
// if (localStorage.getItem("theme") === "dark") {
//   document.body.classList.add("dark");
// }