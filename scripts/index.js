'use strict'
const popup = document.querySelector('.popup')
const popupOpenButton = document.querySelector('.js-menu__open-popup')
const popupCloseButton = document.querySelector('.popup__close')
const popupSave = document.querySelector('.popup__save')
const cardsJs = document.querySelector('.cards')
const cardJs = document.querySelector('.card')
const addCard = document.querySelector('.profile__add-button__rectangle')
const popupAdd = document.querySelector('.popup-add')
const popupAddCloseButton = document.querySelector('.popup-add__close')
const popupAddSave = document.querySelector('.popup-add__save')
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
popup.addEventListener('mousedown', popupCloseByClickOnOverlay)

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
    cardsElement.querySelector(".delete").addEventListener('click', deleteItem);
    cardsJs.appendChild(cardsElement);
}
lenta ()


function deleteItem (evt) {
    evt.target.closest(".card").remove();
}

let nickname = "Cat";
let detail = "Люблю кушать"
let changeName = document.querySelector('.popup__field1');
let changeDetail = document.querySelector('.popup__field2');
let userName = document.querySelector('.profile__info__name');
let userDetail = document.querySelector('.profile__info__detail');
changeName.value = nickname;
changeDetail.value = detail;

function saveChanges (evt) {
    popup.classList.toggle('popup_is-opened')
    userName.textContent = changeName.value;
    userDetail.textContent = changeDetail.value;
}

popupSave.addEventListener('click', saveChanges);

function popupAddToggle () {
    popupAdd.classList.toggle('popup-add_is-opened');
}

addCard.addEventListener('click', popupAddToggle);

popupAddCloseButton.addEventListener('click', popupAddToggle)

let urlNewCard = document.querySelector('.popup-url');
let textNewCard = document.querySelector('.popup-add__text');
function createCard () {
    popupAdd.classList.toggle('popup-add_is-opened');
    const newCard = itemTemplate.cloneNode(true);
    newCard.querySelector('.card__image').src = urlNewCard.value;
    newCard.querySelector('.card__title').innerText = textNewCard.value;
    newCard.querySelector(".delete").addEventListener('click', deleteItem);
    cardsJs.appendChild(newCard);
    urlNewCard.value = "";
    textNewCard.value = "";
}
popupAddSave.addEventListener('click', createCard)