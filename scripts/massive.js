let cards = [
    {image: './images/main1.jpg', text: 'Peter de sent Jupiter'},
    {image: './images/main2.jpg', text: 'Luis'},
    {image: './images/main3.jpg', text: 'Hank'},
    {image: './images/main4.jpg', text: 'Douglas'},
    {image: './images/main5.jpg', text: 'Jesse'},
    {image: './images/main6.jpg', text: 'Walter'},
];
for (i=1; i<=6; i++) {
    document.querySelector('.card__title__'+i).textContent = cards[i-1].text;
    document.querySelector('.card__image__'+i).src = cards[i-1].image;
}