const toggleButton = document.querySelector('.navbar__toggle')
const menu = document.querySelector('.menu')
const opcoes = document.querySelectorAll('.opcao')

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active')
})
// Adiciona um evento de clique às opções do menu  
// forEach 
opcoes.forEach(opcao => {  
    opcao.addEventListener('click', () => {  
        menu.classList.remove('active');  
    });  
});  



const controls=document.querySelectorAll('.control')
let currentItem = 0;
const items = document.querySelectorAll('.item')
const maxItems = items.length;

controls.forEach((control) => {
    control.addEventListener('click', (e) =>{
        isLeft = e.target.classList.contains("arrow-left");

        if (isLeft){
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if (currentItem >= maxItems){
            currentItem = 0;
        }
        if (currentItem < 0) {
            currentItem = maxItems -1;
        }

        items.forEach(item => item.classList.remove('img'));

        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        })

        items[currentItem].classList.add("img");

        console.log("control", isLeft, currentItem);
        
    })
})