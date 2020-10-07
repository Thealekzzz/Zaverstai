const articleSelection = document.querySelector('.articles-header-right')
const articles = document.querySelectorAll('.article-item')
const articlesSecond = document.querySelectorAll('.article-second-item')

const submitButton = document.querySelector('.submit-button')

// ВЫБОР СТАТЬИ - НАЧАЛО

function selectArticle(array, display) {
    array.forEach((item) => {
        if (item.getAttribute('data-tag') !== articleSelection.value) {
            item.style.display = 'none'
        } else {
            item.style.display = display
        }
    })
}

function makeAllVisible(array, display) {
    array.forEach((item) => {
        item.style.display = display
    })
}

articleSelection.addEventListener('input', () => {
    // let temp = articleSelection.value
    
    if (articleSelection.value !== 'Выбрать тему') {
        selectArticle(articles, 'block')
        selectArticle(articlesSecond, 'flex')
    } else {
        makeAllVisible(articles, 'block')
        makeAllVisible(articlesSecond, 'flex')
    }
    
})

// ВЫБОР СТАТЬИ - КОНЕЦ

// ОБРАБОТКА ФОРМЫ - НАЧАЛО

submitButton.addEventListener('click', () => {
    console.log(document.querySelector('textarea').getAttribute('min'));
})

// ОБРАБОТКА ФОРМЫ - КОНЕЦ
