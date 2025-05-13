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

let offsetX_b, offsetY_b;

butterfly.addEventListener("mousedown", (event) => {
    isDraggingButterfly = true;
    butterfly.style.cursor = "grabbing";
    offsetX_b = event.clientX - butterfly.offsetLeft;
    offsetY_b = event.clientY - butterfly.offsetTop;
    butterfly.style.position = "absolute"; 
    butterfly.style.zIndex = "1000"; 
});

document.addEventListener("mousemove", (event) => {
    if (isDraggingButterfly) {
        butterfly.style.left = (event.clientX - offsetX_b) + "px";
        butterfly.style.top = (event.clientY - offsetY_b) + "px";
    }
});

document.addEventListener("mouseup", (event) => {
    if (isDraggingButterfly) {
        isDraggingButterfly = false;
        butterfly.style.cursor = "grab";

        const butterflyRect = butterfly.getBoundingClientRect();
        const zoneRect = zone.getBoundingClientRect();

        const isInside =
            butterflyRect.right > zoneRect.left &&
            butterflyRect.left < zoneRect.right &&
            butterflyRect.bottom > zoneRect.top &&
            butterflyRect.top < zoneRect.bottom;

        if (isInside) {
            zone.innerHTML = '';
            butterfly.style.display = "none";

            const inserted = document.createElement("img");
            inserted.src = "images/secret-butterfly.png";
            inserted.style.width = "100px";
            inserted.style.height = "100px";
            zone.appendChild(inserted);
            message.hidden = false;
        }
    }
});
