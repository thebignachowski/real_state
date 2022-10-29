const imgs = document.querySelectorAll('.propiedad__imagen') 

window.addEventListener('scroll', () => {

    const scroll = this.scrollY / 20

    imgs.forEach(( imagen ) => {
        imagen.style.backgroundPositionY = `${ scroll }px`
    })
})