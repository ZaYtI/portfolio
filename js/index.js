var options = {
    rootMargin: '0px',
    threshold: 0.3
}
const callback=(entries,observer)=>{
    entries.forEach(entry=>{
        const {target} = entry

        if(entry.intersectionRatio >= 0.3){
            target.classList.add("is-visible")
        }
    })
}
var observer = new IntersectionObserver(callback, options);


const elements = document.querySelectorAll(".element")
elements.forEach((element,index)=>{
    observer.observe(element)
})

