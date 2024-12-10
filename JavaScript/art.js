
let card = document.querySelectorAll("#card");

card.forEach(card_1 =>{
    card_1.addEventListener('click',()=>{
        let popUp = card_1.nextElementSibling;

        if(popUp.style.display === 'block'){
            popUp.style.display = 'none';
        }
        else{
            popUp.style.display = 'block';
        }
    });

});


let closePop = document.querySelectorAll('.x');

closePop.forEach(cP =>{
    cP.addEventListener('click',()=>{
        let popUp = cP.closest('.pop');
        popUp.style.display = 'none';
    })
})






