let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'EXO Exist E ver.',
        image: '1.png',
        price: 720
    },
    {
        id: 2,
        name: 'EXO Exist X ver.',
        image: '2.PNG',
        price: 800
    },
    {
        id: 3,
        name: 'EXO Exist O ver.',
        image: '3.PNG',
        price: 950
    },
    {
        id: 4,
        name: 'EXO lightstick',
        image: '4.jpg',
        price: 1000
    },
    {
        id: 5,
        name: 'Seventeen 5:26 AM ver.',
        image: '5.jpeg',
        price: 1000
    },
    {
        id: 6,
        name: 'Seventeen 2:14 PM ver.',
        image: '6.jpeg',
        price: 980
    },
    {
        id: 7,
        name: 'Seventeen 10:23 PM ver.',
        image: '7.jpeg',
        price: 950
    },
    {
        id: 8,
        name: 'Seventeen Carat ver.',
        image: '8.jpg',
        price: 900
    },
    {
        id: 9,
        name: 'EXO exact',
        image: '9.jpeg',
        price: 800
    },
    {
        id: 10,
        name: 'Jungkook Golden shine ver.',
        image: '10.png',
        price: 1800
    },
    {
        id: 11,
        name: 'Jungkook Golden solid ver.',
        image: '11.png',
        price: 1400
    },
    {
        id: 12,
        name: 'Jungkook Golden substance ver.',
        image: '12.png',
        price: 1600
    },
    {
        id: 13,
        name: 'BlackPink lightstick',
        image: '13.jpg',
        price: 1400
    },
    {
        id: 14,
        name: 'SuperM lightstick',
        image: '14.png',
        price: 800
    },
    {
        id: 15,
        name: 'BTS lightstick',
        image: '15.jpg',
        price: 1500
    },
    {
        id: 16,
        name: 'Seventeen lightstick',
        image: '16.png',
        price: 1100
    },
    {
        id: 17,
        name: 'Stray Kids lightstick',
        image: '17.png',
        price: 1200
    },
    {
        id: 18,
        name: 'Seventeen Tote bag',
        image: '18.jpg',
        price: 200
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="../media/${value.image}" alt="">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()} EGP</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    let countgroup = 0;
    let group = ["EXO", "Stray Kids", "Seventeen", "Blackpink"];
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="../media/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()} EGP</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1}) ">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
        let name = value.name; 
        for (name in group){
            countgroup = countgroup + 1; 
        }
    })
    if(countgroup > 2){
        totalPrice = totalPrice * 0.8;
    }
    if(totalPrice > 1000){
        totalPrice = totalPrice * 0.9;
    }
    totalPrice = totalPrice + " EGP";
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
