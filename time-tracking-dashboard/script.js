const dailyOption = document.querySelector(".dailyOption");
const weeklyOption = document.querySelector(".weeklyOption");
const monthlyOption = document.querySelector(".monthlyOption");
const hoursTexts = document.querySelectorAll(".hours");
const lastweekTexts = document.querySelectorAll(".last-week");

const file = await fetch("data.json")
const data = await file.json(); 
let currentTimeFrame = null;

console.log(data);

dailyOption.addEventListener("click", () => {
    dailyOption.classList.toggle("active-option");

    weeklyOption.classList.remove("active-option");
    monthlyOption.classList.remove("active-option");
    currentTimeFrame = dailyOption.dataset.timeframe;
    console.log(currentTimeFrame);

    getData()
});

weeklyOption.addEventListener("click", () => {
    weeklyOption.classList.toggle("active-option");

    dailyOption.classList.remove("active-option");
    monthlyOption.classList.remove("active-option");
    currentTimeFrame = weeklyOption.dataset.timeframe;
    console.log(currentTimeFrame);

    getData()
});


monthlyOption.addEventListener("click", () => {
    monthlyOption.classList.toggle("active-option");

    weeklyOption.classList.remove("active-option");
    dailyOption.classList.remove("active-option");
    currentTimeFrame = monthlyOption.dataset.timeframe;
    console.log(currentTimeFrame);

    getData()
});

console.log(data.length);

function getData() {
    if (currentTimeFrame === "daily") {
        for (let i = 0; i < data.length; i++) {
            const currentTextHour = hoursTexts[i];
            const currentWeekText = lastweekTexts[i];

            currentTextHour.textContent = data[i].timeframes.daily.current + "hrs";
            currentWeekText.textContent = "Yesterday - " + data[i].timeframes.daily.previous + "hrs";
        }    
    }

    if (currentTimeFrame === "weekly") {
        for (let i = 0; i < data.length; i++) {
            const currentTextHour = hoursTexts[i];
            const currentWeekText = lastweekTexts[i];

            currentTextHour.textContent = data[i].timeframes.weekly.current + "hrs";
            currentWeekText.textContent = "Last Week - " + data[i].timeframes.weekly.previous + "hrs";
        }    
    }

    if (currentTimeFrame === "monthly") {
        for (let i = 0; i < data.length; i++) {
            const currentTextHour = hoursTexts[i];
            const currentWeekText = lastweekTexts[i];

            currentTextHour.textContent = data[i].timeframes.monthly.current + "hrs";
            currentWeekText.textContent = "Last Month - " + data[i].timeframes.monthly.previous + "hrs";
        }    
    }

}
