const toggleAnimate = document.querySelector('.toggleAnimate');
let toggleAnimateActive = false;

const toggleHide = document.querySelector('.toggleHide');
let toggleHideActive = false;

const progress = document.querySelector('.progress');
const progressComplite = document.querySelector('.progressFill');

const valueInput = document.querySelector('.valueInput');

const maxLength = 3; // Максимальная длина

function updateProgress(value) {
    progress.style.setProperty('--progress-value', value);
    progressComplite.style.setProperty('stroke', value !== 0 ? '#005CFF' : '#EAF3F6');
    progressComplite.classList.toggle('progressFillHide', value === 0);
}

valueInput.addEventListener('input', (event) => {
    let value = event.target.value.slice(0, maxLength); // Обрезаем значение до максимальной длины
    value = Math.max(0, Math.min(100, value)); // Ограничиваем значение от 0 до 100
    updateProgress(value);
    event.target.value = value; // Устанавливаем значение поля ввода
});

toggleAnimate.addEventListener('click', () => {
    toggleAnimateActive = !toggleAnimateActive;
    toggleAnimate.classList.toggle('activeAnimate', toggleAnimateActive);
    console.log(`animate - ${toggleAnimateActive}`);
});

toggleHide.addEventListener('click', () => {
    toggleHideActive = !toggleHideActive;
    toggleHide.classList.toggle('activeAnimate', toggleHideActive);
    progressComplite.classList.toggle('progressFillHide', toggleHideActive);
    console.log(`hide - ${toggleHideActive}`);
});

document.addEventListener('DOMContentLoaded', () => {
    updateProgress(valueInput.value);
});