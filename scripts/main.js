const toggleAnimate = document.querySelector('.toggleAnimate')
let toggleAnimateActive = false;

const toggleHide = document.querySelector('.toggleHide')
let toggleHideActive = false;

toggleAnimate.addEventListener('click', (event) => {
    event.target.classList.toggle('activeAnimate');
    toggleAnimateActive = true;
})
