/*
1. Observez le défilement de la page.

2. Lorsque l'image commence à disparaitre de la fenêtre, mais qu'elle est encore visible, modifiez la valeur de la propriété `backgroundPositionY` de l'objet style appartenant à la boite contenant l’image `.parallax`.

3. Votre but c'est que le `backgroundPositionY` évolue 2 fois plus lentement que le texte dont vous ne changez pas sa position.
*/
console.log('test');
document.documentElement.classList.add('js-enabled');

const parallax = document.querySelector('.parallax');
const firstP = document.querySelector('.doc-content').firstElementChild;


console.log(firstP);
console.log(firstP.offsetHeight);


document.addEventListener('scroll', ()=>{

        //48px correspond aux margins
        if(window.scrollY >= (firstP.offsetHeight+48)){
            parallax.style.backgroundPositionY = (window.scrollY-firstP.offsetHeight-48) + "px";
            console.log(scrollY);
        } else {
            parallax.style.backgroundPositionY = "";
        }

});
