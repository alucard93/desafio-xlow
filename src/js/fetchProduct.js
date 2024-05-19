async function fetchProductData(productId) {
  try {
    const response = await fetch(
      `https://desafio.xlow.com.br/search/${productId}`
    )
    const data = await response.json()

    return data
  } catch (error) {
    console.error('Erro ao buscar dados do produto:', error)
    return null
  }
}

async function fetchProducts() {
  try {
    const response = await fetch('https://desafio.xlow.com.br/search')
    const request = await response.json()
    const productIds = request.map((product) => product.productId)
    let data = await Promise.all(productIds.map(fetchProductData))

    data.map(displayProducts) // the magic

    return data
  } catch (error) {
    console.error('Erro ao buscar produtos:', error)
    return null
  }
}
