const btnburger = document.getElementById("burgermenu");
const mobilenav = document.getElementById("navList");
btnburger.addEventListener("click", () => {
    mobilenav.classList.toggle("open");
});

const toggleBtn = document.getElementById('themeToggle');
const root = document.documentElement;

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    root.classList.add('light');
}

toggleBtn.addEventListener('click', () => {
    root.classList.toggle('light');

    if (root.classList.contains('light')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});
