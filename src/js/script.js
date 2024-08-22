// Переменные
const headerBtn = document.querySelector('.header__btn');
const closeHeaderBtn = document.querySelector('.sidebar__header-btn')
const header = document.querySelector('.header')
const main = document.querySelector('.main')
const footer = document.querySelector('.footer')
const sideBar = document.querySelector('.sidebar')
const contentButton = document.querySelector('.content__button')
const contentTextMd = document.querySelector('.content__text_md')
const contentTextLg = document.querySelector('.content__text_lg')
const dotsBrand = document.querySelector('.dots__brands')
const dotsRepair = document.querySelector('.dots__repair')
const dotsPrice = document.querySelector('.dots__price')
const btnShowBrands = document.querySelector('.btn__show')
const btnShowRepair = document.querySelectorAll('.btn__show')[1]
const repairBrands = document.querySelector('.repair__brands-items')
const repair = document.querySelector('.repair__appliances-items')
// для 768 px
const feedbackBtn = document.querySelectorAll('.header__btn')[2]
const feedback = document.querySelector('.feedback')
const feedbackCloseBtn = document.querySelector('.feedback__close')
const callBtn = document.querySelectorAll('.header__btn')[1]
const call = document.querySelector('.call')
const callCloseBtn = document.querySelector('.call__close')
// end

// для 320px и web

const callkBtnSide = document.querySelectorAll('.sidebar__btn')[0]
console.log(callkBtnSide);
const feedbackBtnSide = document.querySelectorAll('.sidebar__btn')[1]
console.log(feedbackBtnSide);

// end
// Точки
dotsBrand.innerHTML = (`<span></span>`).repeat(11)
dotsRepair.innerHTML = (`<span></span>`).repeat(4)
dotsPrice.innerHTML = (`<span></span>`).repeat(5)

// Обработчики кнопок + blur

// Обработка кнопок на сайдбаре
callkBtnSide.addEventListener('click', () => {
    call.classList.add('show__call-side')
    header.classList.add('blur__side')
    main.classList.add('blur__side')
    footer.classList.add('blur__side')
    sideBar.classList.add('blur__side')
})
feedbackBtnSide.addEventListener('click', () => {
    feedback.classList.add('show__feedback-side')
    header.classList.add('blur__side')
    main.classList.add('blur__side')
    footer.classList.add('blur__side')
    sideBar.classList.add('blur__side')
})
feedbackCloseBtn.addEventListener('click',() => {
    feedback.classList.remove('show__feedback-side')
    header.classList.remove('blur__side')
    main.classList.remove('blur__side')
    footer.classList.remove('blur__side')
    sideBar.classList.remove('blur__side')
})
callCloseBtn.addEventListener('click',() => {
    call.classList.remove('show__call-side')
    header.classList.remove('blur__side')
    main.classList.remove('blur__side')
    footer.classList.remove('blur__side')
    sideBar.classList.remove('blur__side')
})
window.addEventListener('click', (e) => {
    if (!e.target.closest('.feedback') && !e.target.closest('.sidebar__btn')) {
        feedback.classList.remove('show__feedback-side')
        header.classList.remove('blur__side')
        main.classList.remove('blur__side')
        footer.classList.remove('blur__side')
        sideBar.classList.remove('blur__side')
    }
})
window.addEventListener('click', (e) => {
    if (!e.target.closest('.call') && !e.target.closest('.sidebar__btn')) {
        call.classList.remove('show__call-side')
        header.classList.remove('blur__side')
        main.classList.remove('blur__side')
        footer.classList.remove('blur__side')
        sideBar.classList.remove('blur__side')
    }
})
// End
headerBtn.addEventListener('click',() => {
    sideBar.classList.add('show__sidebar')
    header.classList.add('blur')
    main.classList.add('blur')
    footer.classList.add('blur')
})

closeHeaderBtn.addEventListener('click',() => {
    sideBar.classList.remove('show__sidebar')
    header.classList.remove('blur')
    main.classList.remove('blur')
    footer.classList.remove('blur')
})
feedbackBtn.addEventListener('click',() => {
    feedback.classList.add('show__feedback')
    header.classList.add('blur')
    main.classList.add('blur')
    footer.classList.add('blur')
    sideBar.classList.add('blur')
})
feedbackCloseBtn.addEventListener('click',() => {
    feedback.classList.remove('show__feedback')
    header.classList.remove('blur')
    main.classList.remove('blur')
    footer.classList.remove('blur')
    sideBar.classList.remove('blur')
})
callBtn.addEventListener('click',() => {
    call.classList.add('show__call')
    header.classList.add('blur')
    main.classList.add('blur')
    footer.classList.add('blur')
    sideBar.classList.add('blur')
})
callCloseBtn.addEventListener('click',() => {
    call.classList.remove('show__call')
    header.classList.remove('blur')
    main.classList.remove('blur')
    footer.classList.remove('blur')
    sideBar.classList.remove('blur')
})

window.addEventListener('click', (e) => {
    if (!e.target.closest('.sidebar') && !e.target.closest('.header__btn')) {
        sideBar.classList.remove('show__sidebar')
        header.classList.remove('blur')
        main.classList.remove('blur')
        footer.classList.remove('blur')
    }
})
window.addEventListener('click', (e) => {
    if (!e.target.closest('.feedback') && !e.target.closest('.header__btn')) {
        feedback.classList.remove('show__feedback')
        header.classList.remove('blur')
        main.classList.remove('blur')
        footer.classList.remove('blur')
        sideBar.classList.remove('blur')
    }
})
window.addEventListener('click', (e) => {
    if (!e.target.closest('.call') && !e.target.closest('.header__btn')) {
        call.classList.remove('show__call')
        header.classList.remove('blur')
        main.classList.remove('blur')
        footer.classList.remove('blur')
        sideBar.classList.remove('blur')
    }
})

contentButton.addEventListener('click', () => {
    contentTextLg.classList.toggle('text__show')
    contentTextMd.classList.toggle('text__show')
    contentButton.textContent = contentTextLg.classList.contains('text__show')? 'Скрыть' : 'Читать далее'
})
btnShowBrands.addEventListener('click', () => {
    repairBrands.classList.toggle('show__brands')
    btnShowBrands.textContent = repairBrands.classList.contains('show__brands')? 'Скрыть' : 'Показать все'
})
btnShowRepair.addEventListener('click', () => {
    repair.classList.toggle('show__repair')
    btnShowRepair.textContent = repair.classList.contains('show__repair')? 'Скрыть' : 'Показать все'
})

