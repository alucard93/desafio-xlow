async function displayProducts(products) {
  products = products[0]

  const productName = products.productName
  const images = products.items[0].images
  const priceProduct = products.items[0].sellers[0].commertialOffer
  const productList = document.querySelector('.wrapper-card')

  const imagesHTML = images
    .map(
      (item) =>
        `<img id="${item.imageLabel}" class="img-sku" src="${item.imageUrl}" alt="" />`
    )
    .join('')

  // Condicional para exibir ou não o preço sem desconto
  const priceWithoutDiscountHTML =
    priceProduct.PriceWithoutDiscount !== priceProduct.Price
      ? `<p class="price-without-discount">${priceProduct.PriceWithoutDiscount.toLocaleString(
          'pt-BR',
          {
            style: 'currency',
            currency: 'BRL',
          }
        )}</p>`
      : ''

  productList.insertAdjacentHTML(
    'beforeend',
    `<div class="container-card">
      <figure class="container-img">
        <img class="img-product" src="${images[0].imageUrl}" alt="" />
        <svg class="wishlist" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.1331 18.6642C11.8158 18.8694 11.5043 19.0708 11.2013 19.27L11.0002 19.4019L10.7998 19.2701C10.7997 19.27 10.7997 19.27 10.7996 19.27C10.4933 19.0685 10.1784 18.8647 9.8576 18.6572C7.77447 17.3098 5.44621 15.8038 3.65956 13.7201L3.65952 13.72C1.48948 11.1899 0.475863 8.63015 0.500436 5.87265C0.531652 2.90801 2.94831 0.5 5.87473 0.5C8.21026 0.5 9.77575 1.83684 10.6193 2.83403L11.0013 3.28558L11.383 2.83379C12.2253 1.83682 13.7896 0.5 16.1262 0.5C19.0529 0.5 21.4694 2.90826 21.4994 5.87173L21.4994 5.87192C21.5284 8.62896 20.5151 11.1884 18.3417 13.7187L18.3413 13.7191C16.5518 15.8071 14.2187 17.3157 12.1331 18.6642Z" stroke="#C9C9C9"/>
        </svg>

      </figure>
      <div class="container-info-product">
        <h3 class="title-product-name">${productName}</h3>
        <div class="sku-images-container">
          ${imagesHTML}
        </div>
        <div class="container-price">
          ${priceWithoutDiscountHTML}
          <p class="product-price">${priceProduct.Price.toLocaleString(
            'pt-BR',
            {
              style: 'currency',
              currency: 'BRL',
            }
          )}</p>
        </div>
        <button class="btn-add-to-cart">Comprar</button>
      </div>
    </div>`
  )

  const containers = document.querySelectorAll('.container-card')
  containers.forEach((container) => {
    const skuImages = container.querySelectorAll('.img-sku')
    skuImages.forEach((img) => {
      img.addEventListener('click', () => {
        const imgProduct = container.querySelector('.img-product')
        imgProduct.src = img.src
      })
    })
  })
}

async function initialize() {
  await fetchProducts()
  await totalProducts()
}

document.addEventListener('DOMContentLoaded', () => {
  initialize().catch((error) => {
    console.error('Erro na inicialização:', error)
  })
})
