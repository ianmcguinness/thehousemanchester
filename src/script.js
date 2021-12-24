import menu from './menu'

const menuList = document.querySelector('.menu-items')
const menuImg = document.querySelector('.menu-image')
const btnCta = document.querySelector('.cta')
const btnOpt1 = document.querySelector('.option--1')
const btnOpt2 = document.querySelector('.option--2')
const menuSection = document.querySelector('.menu-section')
const findSection = document.querySelector('.how-to-find-us')
const contactSection = document.querySelector('.contact-us')

// Initial Setup
const init = () => {
  menu.forEach((item, i) => {
    const menuItem = document.createElement('li')
    if (i === 0) {
      menuItem.classList.add('menu-item--active')
    }
    menuItem.classList.add('menu-item')
    menuItem.id = item.id
    menuItem.innerHTML = `<h3 class="menu-name">${item.name}</h3><p class="menu-desc">${item.description}</p><h4 class="menu-price">£${item.price}</h4>`
    menuList.appendChild(menuItem)
  })

  menuImg.style.background = `#eee url(${menu[0].image}) top left / contain no-repeat`
}

init()

// Menu Item Click Listener
menuList.addEventListener('click', e => {
  if (e.target.classList.contains('menu-items')) return
  document.querySelectorAll('.menu-item').forEach(item => {
    item.classList.remove('menu-item--active')
  })
  let target
  if (e.target.classList.contains('menu-item')) {
    target = e.target
  } else if (e.target.parentNode.classList.contains('menu-item')) {
    target = e.target.parentNode
  }
  target.classList.add('menu-item--active')
  const foundItem = menu.find(i => i.id === +target.id)
  const img = foundItem.image
  menuImg.style.background = `#eee url(${img}) top left / contain no-repeat`
})

// Scroll Into View
btnCta.addEventListener('click', () => {
  menuSection.scrollIntoView({ behavior: 'smooth' })
})

btnOpt1.addEventListener('click', () => {
  findSection.scrollIntoView({ behavior: 'smooth' })
})

btnOpt2.addEventListener('click', () => {
  contactSection.scrollIntoView({ behavior: 'smooth' })
})
