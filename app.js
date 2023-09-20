let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping')
let body = document.querySelector('body')
let list = document.querySelector('.list')
let listCard = document.querySelector('listCard');
let total = document.querySelector('.total')
let quantity = document.querySelector('.quantity');
openShopping.addEventListener('click', () => {
    body.classList.add('active')
})

closeShopping.addEventListener('click', () => {
    body.classList.remove('active')
})

let products = [
    {
        id: 1,
        name: 'PRODUCT 1',
        image: '1.png',
        price: 105000
    },
    {
        id: 2,
        name: 'PRODUCT 2',
        image: '2.png',
        price: 125000
    },
    {
        id: 3,
        name: 'PRODUCT 3',
        image: '3.png',
        price: 175220
    },
    {
        id: 4,
        name: 'PRODUCT 1',
        image: '4.png',
        price: 105000
    },
    {
        id: 5,
        name: 'PRODUCT 2',
        image: '5.png',
        price: 125300
    },
    {
        id: 6,
        name: 'PRODUCT 3',
        image: '6.png',
        price: 135220
    },
]
let listCards = [];
const initApp = () => {

    products.forEach((value, key) => {
        let newDiv = document.createElement('div')
        newDiv.classList.add('item')
        newDiv.innerHTML = `
            <img src="image/${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price"> ${value.price.toLocaleString()}</div>
            <button onclick="onclick(${key})">Add To Card</button>`
        list.appendChild(newDiv);
    })
}

initApp()

const reload = () => {

}

const addCard = (key) => {
    if (listCards[key] == null) {
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
}

