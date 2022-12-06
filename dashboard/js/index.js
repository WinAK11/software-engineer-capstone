import { renderViewStaff } from "./controller/staffController.js";
import { Test } from "./modal/test.js";

const TEST = [];
const TASK = [];
let newTest = new Test("New content", "./image/nhung-manh-doi-bat-hanh.png");
TEST.push(newTest);

var navLinks = document.querySelectorAll(".navlink");
var navContent = document.querySelectorAll(".nav-content");

navLinks.forEach((el) => {
    el.addEventListener("click", openNav);
});
function showNotify() {
    if (document.getElementById("noti").style.display == "none") {
        document.getElementById("noti").style.display = "block";
    } else {
        document.getElementById("noti").style.display = "none";
    }
}
window.showNotify = showNotify;

// navlink
function openNav(el) {
    var btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
    var content = btn.dataset.content; // lấy giá trị trong data-electronic
    navContent.forEach(function (el) {
        el.classList.remove("active");
    });

    navLinks.forEach(function (el) {
        el.classList.remove("active");
    });

    document.querySelector("#" + content).classList.add("active");

    btn.classList.add("active");
}

renderViewStaff(TEST);

// calendar
let calendar;
initCalendar();
function initCalendar() {
    var calendarEl = document.getElementById("calendar");

    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        initialDate: "2022-12-07",
        headerToolbar: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        events: [],
    });

    calendar.render();
}

// test

let addTask = () => {
    let taskTitle = document.getElementById("taskTitle").value;
    let staffInput = document.getElementById("staffInput").value;
    let date = document.getElementById("exampleDate").value;
    let content = "";
    TASK.push({ taskTitle, staffInput, date });
    console.log("TASK: ", TASK);
    TASK.forEach((task) => {
        return (content += `
                <tr>
                    <td>${task.taskTitle}</td>
                    <td>${task.staffInput}</td>
                    <td>${task.date}</td>
                </tr>
             `);
    });

    calendar.addEvent({ title: taskTitle, start: date });
    document.getElementById("tableBody").innerHTML = content;
};
window.addTask = addTask;

// ádadads
