// Обробка подій mouseover / mouseout
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

// Вибір всіх списків, де є <li>
const lists = document.querySelectorAll('ul');
lists.forEach(list => {
    list.addEventListener('mouseover', handleMouseOver);
    list.addEventListener('mouseout', handleMouseOut);
});

// Реалізація перетягування блоку
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
