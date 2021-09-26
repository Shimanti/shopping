const links = [
  {id:1, link:'https://www.amazon.com/dp/B07X5KSBNJ?tag=shimanti-20'},
  {id:2, link:'https://www.amazon.com/dp/B01M0GB8CC?tag=shimanti-20'},
  {id:3, link:'https://www.amazon.com/dp/B07G5FCR6X?tag=shimanti-20'},
  {id:4, link:'https://www.amazon.com/dp/B004K95PBQ?tag=shimanti-20'},
  {id:5, link:'https://www.amazon.com/dp/B08N5LNQCX?tag=shimanti-20'}
]

const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }
  changeLink()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }
  changeLink()
  setActiveSlide()
})

document.body.style.backgroundImage = slides[activeSlide].style.backgroundImage

function changeLink() {
  setTimeout(() => {
    let linked = document.createElement('a')
    window.open(
      linked.href=links[activeSlide].link,
      linked.target='_blank'
    )
  },100)
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))
  slides[activeSlide].classList.add('active')
  document.body.style.backgroundImage = slides[activeSlide].style.backgroundImage

}
