function openImage(src, alt) {
    const modal = document.getElementById('imageModal');
    const fullImage = document.getElementById('fullImage');
    const modalTitle = document.getElementById('modalTitle');
    
    modal.style.display = "flex";
    fullImage.src = src;
    modalTitle.textContent = alt || "Достижение";
}

function closeImage() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImage();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modalContainer = document.querySelector('.modal-container');
    if (modalContainer) {
        modalContainer.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});