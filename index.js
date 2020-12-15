function toggleForm(){
    const form = document.querySelector('.form');
    const closeForm = document.querySelector('#close-form');

    if (form.style.display === 'none'){
        form.style.display = 'flex';
        closeForm.innerText = 'X';
    } else {
        form.style.display = 'none';
        closeForm.innerText = '+';
    }
};

const formBtn = document.querySelector('#form-btn');

formBtn.addEventListener('click', function(event){
    event.preventDefault();
    event.stopPropagation();

    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const subIntro = document.querySelector('.sub-intro');
    const form = document.querySelector('.form');
    const closeForm = document.querySelector('#close-form');

    if (name.value !== '' && email.value !== ''){
        form.style.display = 'none';
        subIntro.innerText = 'Thank you for Subscribing!';
        closeForm.style.display = 'none';
    } else {
        alert('Please fill out the entire form.')
    }
});

let cartCount = 0;

function fillCart(){
    const cartDisplay = document.querySelector('.cart-display');

    cartCount++;
    cartDisplay.innerText = `Your Cart: ${cartCount} Item`;

    if (cartCount > 1){
        cartDisplay.innerText = `Your Cart: ${cartCount} Items`
    }

    cartDisplay.style.display = 'flex';
};