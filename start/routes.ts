import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('produto', 'Produto/ProdutosController').apiOnly()
Route.resource('img', 'Produto/ImgProdutosController').apiOnly()
