function highlightTitle(elem) {
    elem.style.color = 'green';
}

document.addEventListener("DOMContentLoaded", function () {

    const title = document.querySelector("h1");
    title.onmouseover = function () {
        title.style.backgroundColor = 'orange';
    };

    function log1() {
        console.log("Обробник 1");
    }
    function log2() {
        console.log("Обробник 2");
    }
    title.addEventListener("click", log1);
    title.addEventListener("click", log2);

    const handlerObj = {
        handleEvent(event) {
            alert("Мурата - Піро Архонт, що правила близько 1000 років тому, згадана Венті. " + event.currentTarget.tagName);
        }
    };
    const factsSection = document.querySelector("#pyro-archon");
    factsSection.addEventListener("click", handlerObj);

    setTimeout(() => {
        factsSection.removeEventListener("click", handlerObj);
        console.log("Обробник handleEvent видалено");
    }, 10000);

    const ul = document.querySelector("ul");
    ul.onclick = function (event) {
        const target = event.target;
        if (target.tagName === "LI" || target.closest("li")) {
            ul.querySelectorAll("li").forEach(li => li.style.backgroundColor = "");
            (target.closest("li") || target).style.backgroundColor = "yellow";
        }
    };

    const menu = document.createElement("div");
    menu.id = "menu";
    menu.innerHTML = `
    <button data-action="toggle-title">👁️ Показати/сховати заголовок</button>
    <button data-action="change-bg">🌅 Змінити фон</button>
    <button data-action="reload">♻️ Перезавантажити</button>
`;
    document.body.prepend(menu);

    menu.addEventListener("click", function (event) {
        const action = event.target.dataset.action;
        if (!action) return;

        const title = document.querySelector("h1");

        if (action === "toggle-title") {
            title.style.display = (title.style.display === "none") ? "block" : "none"; //behavior
        } else if (action === "change-bg") {
            document.body.style.backgroundImage = "none";
            document.body.style.backgroundColor = "#FF5733";
        } else if (action === "reload") {
            location.reload();
        }
    });

});
