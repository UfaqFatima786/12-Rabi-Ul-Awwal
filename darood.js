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