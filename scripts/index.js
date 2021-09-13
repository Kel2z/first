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
const popupAddSave = document.querySelector('.popup-add__save');
let urlNewCard = document.querySelector('.popup-url');
let textNewCard = document.querySelector('.popup-add__text');
let changeName = document.querySelector('.popup__field1');
let changeDetail = document.querySelector('.popup__field2');
let userName = document.querySelector('.profile__info__name');
let userDetail = document.querySelector('.profile__info__detail');
let numberOfLikes = document.querySelector('.number__likes');
const popupDel = document.querySelector(".popup-del");
const popupDelClose = document.querySelector('.popup-del__close');
const popupDelYes = document.querySelector('.popup-del__yes');

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

// Загрузка информации о пользователе
fetch('https://mesto.nomoreparties.co/cohort0/users/me', {
    headers: {
    authorization: '80a75492-21c5-4330-a02f-308029e94b63'
    }
})
.then(res => res.json())
.then((result) => {
    userName.innerText = result.name;
    document.querySelector('.profile__avatar').src = result.avatar;
    userDetail.innerText = result.about;
    changeName.value = userName.innerText;
    changeDetail.value = userDetail.innerText;
});

// Загрузка карточек с сервера
fetch('https://mesto.nomoreparties.co/cohort0/cards', {
    headers: {
    authorization: '80a75492-21c5-4330-a02f-308029e94b63'
    }
})
.then(res => res.json())
.then((result) => {
    for (var any in result) {
        function renderItem (item) {
            const cardsElement = itemTemplate.cloneNode(true);
            cardsElement.querySelector(".card").id = result[any]._id;
            cardsElement.querySelector(".card__image").src = result[any].link;
            cardsElement.querySelector(".card__title").innerText = result[any].name;
            cardsElement.querySelector(".number__likes").innerText = result[any].likes.length;
            if (result[any].owner._id == "dd8b6dea22fe4ea0ad5d46f4") {
                cardsElement.querySelector('.delete').classList.toggle('delete__is-opened');
                cardsElement.querySelector(".delete").addEventListener('click', setDelItem);
            }
            cardsJs.appendChild(cardsElement);
        }
        renderItem()
    }
})

// Удаление карточки
let DelCard;

function setDelItem (evt) {
    DelCard = evt.target.closest('.card');
    popupDel.classList.toggle('popup-del_is-opened');
}

popupDelYes.addEventListener('click', RemCard);

function RemCard () {
    popupDel.classList.toggle('popup-del_is-opened');
    fetch(`https://mesto.nomoreparties.co/cohort0/cards/${DelCard.id}`, {
    method: 'DELETE',
    headers: {
            authorization: '80a75492-21c5-4330-a02f-308029e94b63',
            'Content-Type': 'application/json'
        }
    });
}

function popupDelOpenClose () {
    popupDel.classList.toggle('popup-del_is-opened');
}

popupDelClose.addEventListener('click', popupDelOpenClose);

//  Сохранение изменений имени профиля и дополнительной информации
function saveChanges (evt) {
    popup.classList.toggle('popup_is-opened');
    fetch('https://mesto.nomoreparties.co/cohort0/users/me', {
        method: 'PATCH',
        headers: {
            authorization: '80a75492-21c5-4330-a02f-308029e94b63',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: changeName.value,
            about: changeDetail.value,
        })
    })
    changeName.value = userName.innerText;
    changeDetail.value = userDetail.innerText;
}
popupSave.addEventListener('click', saveChanges);

// Открытие попапа "Добавить карточку"
function popupAddToggle () {
    popupAdd.classList.toggle('popup-add_is-opened');
}
addCard.addEventListener('click', popupAddToggle);

// Закрытие попапа "Добавить карточку"
popupAddCloseButton.addEventListener('click', popupAddToggle)

// Создание карточки на сервере
function createCard () {
    popupAdd.classList.toggle('popup-add_is-opened');
    fetch('https://mesto.nomoreparties.co/cohort0/cards', {
        method: 'POST',
        headers: {
            authorization: '80a75492-21c5-4330-a02f-308029e94b63',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: textNewCard.value,
            link: urlNewCard.value,
        })
    })
    urlNewCard.value = "";
    textNewCard.value = "";
}
popupAddSave.addEventListener('click', createCard)

