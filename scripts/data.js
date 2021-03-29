const cards = [
    {image: './images/main1.jpg', text: 'Peter de sent Jupiter'},
    {image: './images/main2.jpg', text: 'Luis'},
    {image: './images/main3.jpg', text: 'Hank'},
    {image: './images/main4.jpg', text: 'Douglas'},
    {image: './images/main5.jpg', text: 'Jesse'},
    {image: './images/main6.jpg', text: 'Walter'},
];

const addCard = function (i) {
    let div = document.createElement('div');
    div.classList.add ("card", "card__margin");
    
    let img = document.createElement('img');
    img.className = 'card__image';
    img.src = cards[i].image;


    let h2 = document.createElement('h2');
    h2.className = 'card__title';
    h2.innerHTML = cards[i].text;

    let button = document.createElement('button');
    button.className = 'like';

    let section = document.createElement('div');
    section.className = 'card__title-like';
    section.append(h2, button);
    div.append(img, section);

document.querySelector('.cards').append(div)
}

for (i=0; i<cards.length; i++) {
    addCard(i)
}
const updateName = function () {
    userName.textContent = changeName.value;
}

let changeName = document.querySelector('.popup__field1');
let userName = document.querySelector('.profile__info__name');
changeName.addEventListener('input', updateName);

