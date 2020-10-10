const articleSelection = document.querySelector('.articles-header-right')
const articles = document.querySelectorAll('.article-item')
const articlesSecond = document.querySelectorAll('.article-second-item')

const submitButton = document.querySelector('.submit-button')
const formMessage = document.querySelector('.form-message')
const formName = document.querySelector('.form-name')
const formEmail = document.querySelector('.form-email')

const anchors = document.querySelectorAll('a[href*="#"]')

// ПЛАВНАЯ ПРОКРУТКА - НАЧАЛО

for (let anchor of anchors) { // ДА, СПЛАГИАЧЕНО, ПРОСТИТЕ
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// ПЛАВНАЯ ПРОКРУТКА - КОНЕЦ

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
    let temp = formMessage.value
    console.log(String(temp).length);

    if (formName.value.length !== 0 && formEmail.value.length !== 0 &&
        (String(temp).length < formMessage.getAttribute('minlength') ||
        String(temp).length > formMessage.getAttribute('maxlength'))) {
        formMessage.style.color = 'tomato'
        submitButton.setAttribute('disabled', true)
    }
})

formMessage.addEventListener('input', () => {
    let temp = formMessage.value

    if (String(temp).length >= formMessage.getAttribute('minlength') &&
    String(temp).length <= formMessage.getAttribute('maxlength')) {
        formMessage.style.color = 'black'
        submitButton.removeAttribute('disabled', true)
    }
})

// ОБРАБОТКА ФОРМЫ - КОНЕЦ