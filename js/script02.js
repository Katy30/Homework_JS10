let data = {
    sizes: [
        {name: "Small", price: 10},
        {name: "Middle", price: 20},
        {name: "Big", price: 30}
    ],
    fillings: [
        {name: "Meat", price: 15},
        {name: "Cheese", price: 25},
        {name: "Vegetables", price: 20},
    ],
    toppings: [
        {name: "Mushrooms", price: 35},
        {name: "Sausages", price: 45},
    ],
    delivery: [
        {name: "Self", price: 0},
        {name: "Delivery", price: 30}
    ]
}

let size = document.getElementById('size');

for (let s of data.sizes) {
    let option = document.createElement('option');
    option.value = s.price
    option.textContent = s.name

    size.appendChild(option)
}

let filling = document.querySelector('.filling');
for (let f of data.fillings) {

    let div = document.createElement('div');
    let inp = document.createElement('input');
    let lbl = document.createElement('label');

    let id = makeid(10)

    inp.type = 'checkbox'
    inp.name = 'filling'
    inp.id = id
    inp.value = f.price
    lbl.htmlFor = id
    lbl.textContent = f.name

    div.appendChild(inp)
    div.appendChild(lbl)

    filling.appendChild(div)

}


let toppings = document.querySelector('.toppings');
for (let f of data.toppings) {

    let div = document.createElement('div');
    let inp = document.createElement('input');
    let lbl = document.createElement('label');

    let id = makeid(10)

    inp.type = 'checkbox'
    inp.name = 'toppings'
    inp.id = id
    inp.value = f.price
    lbl.htmlFor = id
    lbl.textContent = f.name

    div.appendChild(inp)
    div.appendChild(lbl)

    toppings.appendChild(div)

}
let delivery = document.querySelector('.type_delivery');
for (let f of data.delivery) {

    let div = document.createElement('div');
    let inp = document.createElement('input');
    let lbl = document.createElement('label');

    let id = makeid(10)

    inp.type = 'radio'
    inp.name = 'delivery'
    inp.id = id
    inp.value = f.price
    lbl.htmlFor = id
    lbl.textContent = f.name

    div.appendChild(inp)
    div.appendChild(lbl)

    delivery.appendChild(div)

}

function makeid(t) {
    let n = "";
    const o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = o.length;
    let a = 0;
    for (; a < t;) n += o.charAt(Math.floor(Math.random() * r)), a += 1;
    return n
}


function calculateFillings() {
    let price = 0
    for (let inp of filling.querySelectorAll('input')) {
        if (inp.checked) {
            price += parseInt(inp.value)
        }
    }
    return price
}

function calculateToppings() {
    let price = 0
    for (let inp of toppings.querySelectorAll('input')) {
        if (inp.checked) {
            price += parseInt(inp.value)
        }
    }
    return price
}

function getDelivery() {
    let price = 0
    let selected = false
    for (let inp of delivery.querySelectorAll('input')) {
        if (inp.checked) {
            price += parseInt(inp.value)
            selected = true
        }
    }
    return {price, selected}
}

function getSizePrice() {
    return parseInt(document.getElementById('size').value)
}

function updatePrice() {
    let delivery = getDelivery();
    let fillings = calculateFillings();

    let price = calculateToppings() + fillings + delivery.price + getSizePrice()
    document.getElementById('price').textContent = price + ''

    document.getElementById('order').disabled = !delivery.selected || fillings === 0
}

for (let el of document.querySelectorAll('.wrap input, .wrap select')) {
    el.addEventListener('change', updatePrice)
}
let btn =document.getElementById('order')
btn.onclick=function (){
    Swal.fire('Вітаємо!', 'Дякуємо за замовлення', 'success')
}
