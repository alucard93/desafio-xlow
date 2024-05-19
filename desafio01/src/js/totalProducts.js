async function totalProducts() {
  const containerCards = document.querySelectorAll('.container-card')

  const total = containerCards.length
  document.querySelector('.total-products').textContent = `${total} produto${
    total !== 1 ? 's' : ''
  }`
}

document.addEventListener('DOMContentLoaded', function () {
  totalProducts()
})
