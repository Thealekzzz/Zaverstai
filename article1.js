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
        likeIcon.childNodes[1].style.fill = 'blue'
        likeNumber.style.color = 'blue'
        likeIcon.classList.add('isActive')
        likeNumber.innerHTML = +likeNumber.innerHTML + 1
    }

})



