const countElement = document.getElementById("count");
const todayCountElement = document.getElementById("todayCount");
const countBtn = document.getElementById("countBtn");
const resetBtn = document.getElementById("resetBtn");
const counter = document.querySelector(".counter");
let count = Number(
    localStorage.getItem("duroodCount")
) || 0;
let todayCount = Number(
    localStorage.getItem("duroodToday")
) || 0;

function updateCounter() {
    countElement.textContent = count;
    todayCountElement.textContent = todayCount;
}

countBtn.addEventListener("click", () => {
    count++;
    todayCount++;
    localStorage.setItem(
        "duroodCount",
        count
    );
    localStorage.setItem(
        "duroodToday",
        todayCount
    );

    updateCounter();
    counter.classList.remove("active");
    void counter.offsetWidth;
    counter.classList.add("active");
});
resetBtn.addEventListener("click", () => {
    count = 0;
    todayCount = 0;
    localStorage.setItem(
        "duroodCount",
        0
    );
    localStorage.setItem(
        "duroodToday",
        0
    );
    updateCounter();
});
updateCounter();

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (!menuToggle || !navMenu) {
        console.error("Navbar elements not found!");
        return;
    }
    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");
        navMenu.classList.toggle("active");

    });

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");
            navMenu.classList.remove("active");

        });

    });

});