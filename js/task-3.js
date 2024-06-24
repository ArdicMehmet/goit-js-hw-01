const task3DOM = document.querySelector('.task-3');

function getElementWidth(content, padding, border){
    const contentPx = Number.parseFloat(content);
    const paddingPx = Number.parseFloat(padding);
    const borderPx = Number.parseFloat(border);

    return (contentPx + (2*paddingPx) + (2*borderPx));
}

task3DOM.innerHTML = '';
task3DOM.innerHTML += `<p>${getElementWidth("50px", "8px", "4px")}</p>`;
task3DOM.innerHTML += `<p>${getElementWidth("60px", "12px", "8.5px")}</p>`;
task3DOM.innerHTML += `<p>${getElementWidth("200px", "0px", "0px")}</p>`;

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200