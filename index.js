const cards = document.querySelectorAll('.memory-card')
const modalBlock = document.querySelector('.modal-block')

let hasFlippedCard = false
let firstCard, secondCard
let lockBoard = false

/*cards.forEach(card=>{
    card.style.order = Math.floor(Math.random()*12)
})*/
cards.forEach(card=>card.addEventListener('click', (e)=>{
    if (e.target.closest('.flip')){return}
    if (lockBoard){return}
    if (card === firstCard){return}
    card.classList.add('flip')
    const flipedNumber = document.querySelectorAll('.flip').length
    if (!hasFlippedCard) {
        //console.log('card1')
        hasFlippedCard = true
        firstCard = card
        return
    }else{
       // console.log('card2');
        secondCard = card
        hasFlippedCard = false
        if (flipedNumber === 20) {
            modalBlock.classList.add('show')
        }
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


