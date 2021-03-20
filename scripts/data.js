const cards = [
    {image: './images/main1.jpg', text: 'Peter de sent Jupiter'},
    {image: './images/main2.jpg', text: 'Luis'},
    {image: './images/main3.jpg', text: 'Hank'},
    {image: './images/main4.jpg', text: 'Douglas'},
    {image: './images/main5.jpg', text: 'Jesse'},
    {image: './images/main6.jpg', text: 'Walter'},
];
for (i=0; i<cards.length; i++) {
    document.querySelector('.card__title__'+(i+1)).textContent = cards[i].text;
    document.querySelector('.card__image__'+(1+i)).src = cards[i].image;
}


const addCard = function (i) {
    let div = document.createElement('div');
    div.className = "card";
    div.innerHTML = cards[i].text;
    
document.querySelector('.cards').append(div)
}

for (i=0; i<cards.length; i++) {
    addCard(i)
}
