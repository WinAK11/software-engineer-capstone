var navLinks = document.querySelectorAll(".navlink");
var navContent = document.querySelectorAll(".nav-content");

navLinks.forEach((el) => {
    el.addEventListener("click", openNav);
});

function openNav(el) {
    var btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
    var content = btn.dataset.content; // lấy giá trị trong data-electronic
    console.log("cc");
    navContent.forEach(function (el) {
        el.classList.remove("active");
    });

    navLinks.forEach(function (el) {
        el.classList.remove("active");
    });

    document.querySelector("#" + content).classList.add("active");

    btn.classList.add("active");
}
