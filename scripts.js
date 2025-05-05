function dialogWithUser() {
    alert("Привіт, мандрівнику у світі Тейвату!");
    const name = prompt("Як тебе звати?");
    const wantsFacts = confirm(`Привіт, ${name}! Хочеш дізнатися цікаві факти про Тейват?`);

    if (wantsFacts) {
        for (let i = 1; i <= 3; i++) {
            alert(`Цікавий факт №${i}`);
        }
    } else {
        alert("Гаразд, тоді просто насолоджуйся сайтом.");
    }
}

function changeBackgroundAfterDelay() {
    setTimeout(() => {
        document.body.style.backgroundImage = "none"; 
        document.body.style.backgroundColor = "lightpink";
    }, 30000);
}

function manipulateDOM() {

    const titleSpan = document.getElementById("new_color");
    titleSpan.innerHTML = "<span style='color:lightyellow;'>Тейвату</span>";

    const allLinks = document.querySelectorAll("a");
    allLinks.forEach(link => {
        console.log("Знайдено посилання:", link.href);
    });

    const highlight = document.querySelector(".highlight-text");
    if (highlight) {
        console.log("textContent:", highlight.textContent);
        console.log("outerHTML:", highlight.outerHTML);
        console.log("nodeValue:", highlight.firstChild?.nodeValue || "null");
    }

    const headline = document.createElement("h3");
    headline.textContent = "🔧 Динамічно додані персонажі з регіонів";
    document.body.prepend(headline);

    const editableTable = document.createElement("table");
    editableTable.border = "1";
    editableTable.innerHTML = `
        <tr>
            <th>Персонаж</th>
            <th>Регіон</th>
            <th>Елемент</th>
            <th>Зброя</th>
        </tr>
        <tr>
            <td>Колей</td>
            <td>Сумеру</td>
            <td>Дендро</td>
            <td>Лук</td>
        </tr>
        <tr>
            <td>Невіллет</td>
            <td>Фонтейн</td>
            <td>Гідро</td>
            <td>Катализатор</td>
        </tr>
        <tr>
            <td>Арлекино</td>
            <td>Натлан</td>
            <td>Піро</td>
            <td>Спис</td>
        </tr>
    `;

    const beforeTable = document.createElement("p");
    beforeTable.append(document.createTextNode("Це новий абзац перед таблицею."));
    const afterTable = document.createElement("p");
    afterTable.textContent = "Це повідомлення після таблиці.";

    document.body.append(beforeTable);
    document.body.append(editableTable);
    editableTable.after(afterTable);

    const replacement = document.createElement("p");
    replacement.textContent = "Це елемент, що замінює попередній.";
    beforeTable.replaceWith(replacement);

    afterTable.remove();
}

function redirectToPage() {
    setTimeout(() => {
        location.href = "sumeru.html";
    }, 100000);
}

window.onload = function () {
    dialogWithUser();
    showDeveloperInfo("Собцова", "Софія");
    compareStrings("Фонтейн", "Сумеру");
    changeBackgroundAfterDelay(); 
    manipulateDOM();
    redirectToPage();
};

