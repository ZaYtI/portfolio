var options = {
    rootMargin: '0px',
    threshold: 0.5
}
const callback=(entries,observer)=>{
    entries.forEach(entry=>{
        const {target} = entry

        if(entry.intersectionRatio >= 0.5){
            target.classList.add("is-visible")
        }
    })
}
var observer = new IntersectionObserver(callback, options);


const elements = document.querySelectorAll(".element")
elements.forEach((element,index)=>{
    observer.observe(element)
})

document.querySelectorAll('.js-slide').forEach(function(thumbnailElement) {
    thumbnailElement.addEventListener('click', function(event) {
        event.preventDefault()
        const divId = event.currentTarget.getAttribute('href')
        document.querySelector(divId).scrollIntoView({ behavior: 'smooth' })
    })
});
