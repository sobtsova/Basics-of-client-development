function handleMouseOver(event) {
    const target = event.target;
    if (target.tagName === 'LI' && !target.classList.contains('hovered')) {
        target.classList.add('hovered');
    }
}

function handleMouseOut(event) {
    const target = event.target;
    const related = event.relatedTarget;

    if (
        target.tagName === 'LI' &&
        (!related || !target.contains(related))
    ) {
        target.classList.remove('hovered');
    }
}

const lists = document.querySelectorAll('ul');
lists.forEach(list => {
    list.addEventListener('mouseover', handleMouseOver);
    list.addEventListener('mouseout', handleMouseOut);
});

const draggable = document.getElementById('draggable');
let isDragging = false;
let offsetX, offsetY;

draggable.addEventListener('mousedown', (event) => {
    isDragging = true;
    draggable.style.cursor = 'grabbing';
    offsetX = event.clientX - draggable.offsetLeft;
    offsetY = event.clientY - draggable.offsetTop;
});

document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        draggable.style.left = (event.clientX - offsetX) + 'px';
        draggable.style.top = (event.clientY - offsetY) + 'px';
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    draggable.style.cursor = 'grab';
});

const butterfly = document.getElementById("butterfly");
const zone = document.getElementById("secret-zone");
const message = document.getElementById("secret-message");

butterfly.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", "butterfly");
});

zone.addEventListener("dragover", (e) => {
    e.preventDefault();
});

zone.addEventListener("drop", (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    if (data === "butterfly") {
        zone.innerHTML = '';
        butterfly.style.display = "none";
        const inserted = document.createElement("img");
        inserted.src = "images/secret-butterfly.png";
        inserted.style.width = "100px";
        inserted.style.height = "100px";
        zone.appendChild(inserted);
        message.hidden = false;
    }
});