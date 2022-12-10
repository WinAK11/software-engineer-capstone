var navLinks = document.querySelectorAll(".navlink");
var navContent = document.querySelectorAll(".nav-content");

navLinks.forEach((el) => {
    el.addEventListener("click", openNav);
});

function openNav(el) {
    var btn = el.currentTarget;         // lắng nghe sự kiện và hiển thị các element
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








/*infomation js*/ 
let previewContainer = document.querySelector('.staff-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.column .card').forEach(card => {
    card.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = card.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        })
    }
})

previewBox.forEach(close => {
    close.querySelector('.material-symbols-outlined').onclick = () => {
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    }
})