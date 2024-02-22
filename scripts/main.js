// Объявление переменных
const toggleAnimate = document.querySelector('.toggleAnimate');
let toggleAnimateActive = false;
const toggleHide = document.querySelector('.toggleHide');
let toggleHideActive = false;
const progress = document.querySelector('.progress');
const progressComplite = document.querySelector('.progressFill');
const valueInput = document.querySelector('.valueInput');
let intervalId;

// Ф-ция объявляющая обновление прогресса(value)
function updateProgress(value) {
    progress.style.setProperty('--progress-value', value);
    progressComplite.style.setProperty('stroke', value !== 0 ? '#005CFF' : '#EAF3F6');
}

// Ф-ция анимации 
function animateFillProgress(value) {
    updateProgress(0);
    setTimeout(() => {
        updateProgress(value);
    }, 600);
}

// Обработчик событий при изменении value
valueInput.addEventListener('input', (event) => {
    clearInterval(intervalId); // Очищаем предыдущий интервал
    let value = event.target.value.slice(0, 3); // Обрезаем значение до максимальной длины
    value = Math.max(0, Math.min(100, value)); // Ограничиваем значение от 0 до 100
    updateProgress(value);
    event.target.value = value; // Устанавливаем значение поля ввода

    // Запускаем новый интервал, если активирована анимация
    if (toggleAnimateActive) {
        intervalId = setInterval(() => {
            animateFillProgress(valueInput.value);
        }, 1700);
    }
});

// Обработчик тогла animate
toggleAnimate.addEventListener('click', () => {
    toggleAnimateActive = !toggleAnimateActive;
    toggleAnimate.classList.toggle('activeAnimate', toggleAnimateActive);
    clearInterval(intervalId); // Очищаем текущий интервал
    if (toggleAnimateActive) {
        animateFillProgress(valueInput.value);
        // Устанавливаем новый интервал для анимации
        intervalId = setInterval(() => {
            animateFillProgress(valueInput.value);
        }, 1700);
    } else {
        updateProgress(valueInput.value);
    }
});

// Обработчик тогла hide
toggleHide.addEventListener('click', () => {
    toggleHideActive = !toggleHideActive;
    toggleHide.classList.toggle('activeHide', toggleHideActive);
    progressComplite.classList.toggle('progressFillHide', toggleHideActive);
    console.log(`hide - ${toggleHideActive}`);
});

// Обновление value при загрузки контента
document.addEventListener('DOMContentLoaded', () => {
    updateProgress(valueInput.value);
});