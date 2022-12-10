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