// ОБРАБОТКА ЛАЙКА - НАЧАЛО

const likeIcon = document.querySelector('.like')
const likeNumber = document.querySelector('.sharing-likes-number')

likeIcon.addEventListener('click', () => {

    if (likeIcon.classList.contains('isActive')) {
        likeIcon.childNodes[1].style.fill = '#2E2F22'
        likeNumber.style.color = '#2E2F22'
        likeIcon.classList.remove('isActive')
        likeNumber.innerHTML = +likeNumber.innerHTML - 1

    } else {
        likeIcon.childNodes[1].style.fill = 'tomato'
        likeIcon.classList.add('isActive')
        likeNumber.innerHTML = +likeNumber.innerHTML + 1
    }

})

// ОБРАБОТКА ЛАЙКА - КОНЕЦ

function $(item) {
    return document.querySelector(`.${item}`) // Просто по фану
}

// ОБРАБОТКА КОММЕНТАРИЯ - НАЧАЛО

const commentName = $('form-name')
const commentEmail = $('form-email')
const commentMessage = $('form-message')
const commentsBlock = $('reviews')
const commentsButton = $('submit-button')

commentsButton.addEventListener('click', (event) => {

    if (String(commentMessage.value).length < commentMessage.getAttribute('minlength') || 
        String(commentMessage.value).length > commentMessage.getAttribute('maxlength')) {
            commentMessage.style.color = 'tomato'
            // commentsButton.setAttribute('disabled', true)
        }
    
    if (String(commentName.value).length !== 0 && String(commentEmail.value).length !== 0 && 
        String(commentMessage.value).length >= commentMessage.getAttribute('minlength') && 
        String(commentMessage.value).length <= commentMessage.getAttribute('maxlength')) {

        event.preventDefault()

        let rewItem = document.createElement('div')
        rewItem.classList.add('reviews-item')

        let rewItemUp = document.createElement('div')
        rewItemUp.classList.add('reviews-item-up')
        rewItem.appendChild(rewItemUp)

        let rewImg = document.createElement('div')
        rewImg.style.height = '50px'
        rewImg.style.width = '50px'
        rewImg.innerHTML = commentName.value[0]
        rewImg.classList.add('rounded', 'added-review')
        rewItemUp.appendChild(rewImg)

        let rewName = document.createElement('div')
        rewName.classList.add('reviews-item-up-name')
        rewName.innerHTML = commentName.value
        rewItemUp.appendChild(rewName)

        let rewContent = document.createElement('div')
        rewContent.classList.add('reviews-item-content')
        rewContent.innerHTML = commentMessage.value
        rewItem.appendChild(rewContent)

        commentsBlock.appendChild(rewItem)

        commentName.value = ''
        commentEmail.value = ''
        commentMessage.value = ''

    }
})

commentMessage.addEventListener('input', () => { 
    let temp = commentMessage.value

    if (String(temp).length > commentMessage.getAttribute('minlength') &&
        String(temp).length < commentMessage.getAttribute('maxlength')) {
            commentMessage.style.color = 'black'
            // commentsButton.removeAttribute('disabled', true)
    }
})

// ОБРАБОТКА КОММЕНТАРИЯ - КОНЕЦ