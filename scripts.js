﻿function dialogWithUser() {
    alert("Привіт, мандрівнику у світі Тейвату!");
    const name = prompt("Як тебе звати?");
    const wantsFacts = confirm(`Привіт, ${name}! Хочеш дізнатися цікаві факти про Тейват?`);

    if (wantsFacts) {
        const facts = [
            "Тейват поділений на сім регіонів, кожен під управлінням Архонта.",
            "Елементальні сили в Genshin Impact називаються Візіями.",
            "Орден Бездни є однією з головних загроз у Тейваті."
        ];
        for (let i = 0; i < facts.length; i++) {
            alert(`Факт ${i + 1}: ${facts[i]}`);
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
    beforeTable.append(document.createTextNode("🔎 Нижче представлена таблиця з прикладами персонажів з різних регіонів Тейвату."));
    const afterTable = document.createElement("p");
    afterTable.textContent = "📌 Це кінець списку. Дані можуть оновлюватися з виходом нових регіонів або персонажів.";

    document.body.append(beforeTable);
    document.body.append(editableTable);
    editableTable.after(afterTable);

    const replacement = document.createElement("p");
    replacement.textContent = "⚠️ Цей блок оновлено. Попередній текст замінено для відображення актуальної інформації.";

    setTimeout(() => {
        beforeTable.replaceWith(replacement);
        afterTable.remove();
    }, 10000);

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

