'use strict'
const popup = document.querySelector('.popup')
const popupOpenButton = document.querySelector('.js-menu__open-popup')
const popupCloseButton = document.querySelector('.popup__close')
const popupSave = document.querySelector('.popup__save')
const cardsJs = document.querySelector('.cards')
const cardJs = document.querySelector('.card')
const cards = [
    {image: './images/main1.jpg', text: 'Peter de sent Jupiter'},
    {image: './images/main2.jpg', text: 'Luis'},
    {image: './images/main3.jpg', text: 'Hank'},
    {image: './images/main4.jpg', text: 'Douglas'},
    {image: './images/main5.jpg', text: 'Jesse'},
    {image: './images/main6.jpg', text: 'Walter'},
];

const popupCloseByClickOnOverlay = (event) => {
    console.log({
        target: event.target, 
        currentTarget: event.currentTarget
    })
    if (event.target != event.currentTarget) {
        return
    }
    popupToggle()
}

const popupToggle = function () {
    popup.classList.toggle('popup_is-opened')
}

popupOpenButton.addEventListener('click', popupToggle)
popupCloseButton.addEventListener('click', popupToggle)
popupSave.addEventListener('click', popupToggle)
popup.addEventListener('click', popupCloseByClickOnOverlay)

const likes = document.querySelectorAll('.like')

const likeOn = (event) => {
    if (event.target.classList[0] == 'like') {
    event.target.classList.toggle('like_is-clicked')
    }
}

cardsJs.addEventListener('click', likeOn)

const itemTemplate = document.querySelector(".template__card").content;

function lenta () {
    cards.forEach(renderItem);
}
function renderItem (item) {
    const cardsElement = itemTemplate.cloneNode(true);
    cardsElement.querySelector(".card__image").src = item.image;
    cardsElement.querySelector(".card__title").innerText = item.text;
    cardsJs.appendChild(cardsElement);
}
lenta ()

const updateName = function () {
    userName.textContent = changeName.value;
}

let changeName = document.querySelector('.popup__field1');
let userName = document.querySelector('.profile__info__name');
changeName.addEventListener('input', updateName);