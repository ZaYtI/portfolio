document.querySelectorAll('.js-slide').forEach(function(thumbnailElement) {
    thumbnailElement.addEventListener('click', function(event) {
        event.preventDefault()
        const divId = event.currentTarget.getAttribute('href')
        document.querySelector(divId).scrollIntoView({ behavior: 'smooth' })
    })
});