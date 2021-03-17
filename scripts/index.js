const popup = document.querySelector('.popup')
const popupOpenButton = document.querySelector('.js-menu__open-popup')
const popupCloseButton = document.querySelector('.popup__close')
const popupSave = document.querySelector('.popup__save')
const popupCloseByClickOnOverlay = (event) => {
    console.log({
        target: event.target,
        currentTarget: event.currentTarget,
    })
    if (event.target != event.currentTarget) {
        return
    }
    popupToggle()
}

const popupToggle = function (event) {
    console.log("Button clicked")
    popup.classList.toggle('popup_is-opened')
}

popupOpenButton.addEventListener('click', popupToggle)
popupCloseButton.addEventListener('click', popupToggle)
popupSave.addEventListener('click', popupToggle)
popup.addEventListener('click', popupCloseByClickOnOverlay)