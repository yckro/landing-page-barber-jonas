const hamburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburger_icon.addEventListener('click',() => {
    nav_list.classList.toggle('open');
    hamburger_icon.classList.toggle('active');
});

const mainAccordion = document.querySelector('.accordion-main .accordion-header');

mainAccordion.addEventListener('click', () => {
    const mainBody = mainAccordion.nextElementSibling;
    mainBody.classList.toggle('active'); // Abre/fecha o conteúdo do Accordion pai
    
    // Quando o pai for clicado, vamos permitir a interação com os filhos
    const childAccordions = mainBody.querySelectorAll('.accordion-child .accordion-header');

    childAccordions.forEach(childAccordion => {
        childAccordion.addEventListener('click', (event) => {
            event.stopPropagation(); // Previne que o clique afete o Accordion pai
            const childBody = childAccordion.nextElementSibling;
            childBody.classList.toggle('active'); // Abre/fecha o conteúdo do Accordion filho
        });
    });
});

