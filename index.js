const cards = document.querySelectorAll('.memory-card')

let hasFlippedCard = false
let firstCard, secondCard
let lockBoard = false

cards.forEach(card=>{
    card.style.order = Math.floor(Math.random()*12)
})

cards.forEach(card=>card.addEventListener('click', ()=>{
    if (lockBoard) {return}
    if (card === firstCard) {return}
    card.classList.add('flip')
    if (!hasFlippedCard) {
        hasFlippedCard = true
        firstCard = card
        return
    }else{
        secondCard = card
        hasFlippedCard = false
    }
    if (firstCard.dataset.frut === secondCard.dataset.frut) {
        return
    }else{
        lockBoard = true
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            [hasFlippedCard, lockBoard] = [false,false]
            [firstCard,secondCard] = [null,null]
        }, 1000);
    }
    
}))


