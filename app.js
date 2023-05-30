function SlidesPlagin(active = 4) {
    const slides = document.querySelectorAll('.slide') // Получаю строку каждого слайда

    slides[active].classList.add('active')
    
    for (const slide of slides) {
        slide.addEventListener('click',() => {
            ClearActiveClesses()
            slide.classList.add('active')
        })
    }
    
    
    function ClearActiveClesses() {
        slides.forEach((slide)=>{
            slide.classList.remove('active')
        })
    }
}
SlidesPlagin()