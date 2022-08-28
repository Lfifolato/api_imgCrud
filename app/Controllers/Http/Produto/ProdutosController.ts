import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Produto from 'App/Models/Produto'
import { CreateDtoValidator, UpdateDtoValidator } from 'App/Validators/ProdutosDtos/index'

export default class ProdutosController {
  public async index({ response }: HttpContextContract) {
    try {
      const data = await Produto.query().orderBy('id', 'asc').preload('Imagem')

      return response.ok(data)
    } catch (e) {
      return response.status(404).send({ error: e.mensagem })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = await request.validate(CreateDtoValidator)

      await Produto.create(data)

      return response.ok({ mensagem: 'Produto criado com sucesso' })
    } catch (e) {
      return response.status(404).send({ error: e.mensagem })
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const id = params.id

      const data = await Produto.findByOrFail('id', id)

      await data.load('Imagem')

      return response.ok(data)
    } catch (e) {
      return response.status(404).send({ error: e.mensagem })
    }
  }

  public async update({ response, params, request }: HttpContextContract) {
    try {
      const id = params.id
      const data = await request.validate(UpdateDtoValidator)

      const produto = await Produto.findByOrFail('id', id)

      produto.merge(data)

      await produto.save()

      return response.ok({ mensagem: 'Produto Atualizado com sucesso' })
    } catch (e) {
      return response.status(404).send({ error: e.mensagem })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const id = params.id

      const produto = await Produto.findByOrFail('id', id)

      produto.delete()

      return response.ok({ mensagem: 'Produto Deletado com sucesso' })
    } catch (e) {
      return response.status(404).send({ error: e.mensagem })
    }
  }
}
