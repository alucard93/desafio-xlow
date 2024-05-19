document.addEventListener('DOMContentLoaded', function () {
  const btnOne = document.querySelector('.btn-grid-one')
  const btnTwo = document.querySelector('.btn-grid-two')
  const btnFour = document.querySelector('.btn-grid-four')
  const btnFive = document.querySelector('.btn-grid-five')
  const wrapperCard = document.querySelector('.wrapper-card')

  btnOne.addEventListener('click', () => {
    wrapperCard.style.gridTemplateColumns = 'repeat(1, 1fr)'
  })
  btnTwo.addEventListener('click', () => {
    wrapperCard.style.gridTemplateColumns = 'repeat(2, 1fr)'
  })
  btnFour.addEventListener('click', () => {
    wrapperCard.style.gridTemplateColumns = 'repeat(4, 1fr)'
  })

  btnFive.addEventListener('click', () => {
    wrapperCard.style.gridTemplateColumns = 'repeat(5, 1fr)'
  })
})
