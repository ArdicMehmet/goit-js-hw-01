const task2DOM = document.querySelector('.task-2');

function getShippingMessage(country, price, deliveryFee){
    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

task2DOM.innerHTML = '';
task2DOM.innerHTML += `<p>${getShippingMessage("Australia", 120, 50)}</p>`;
task2DOM.innerHTML += `<p>${getShippingMessage("Germany", 80, 20)}</p>`;
task2DOM.innerHTML += `<p>${getShippingMessage("Sweden", 100, 20)}</p>`;