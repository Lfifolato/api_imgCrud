import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ImgProduto from 'App/Models/ImgProduto'
import Produto from 'App/Models/Produto'
import { CreateDtoValidator } from 'App/Validators/ImgProdutoDto/index'
import { v2 as cloudinary } from 'cloudinary'

export default class ImgProdutosController {
  public async store({ request, response }: HttpContextContract) {
    try {
      const data = await request.validate(CreateDtoValidator)
      const idProduto = data.id_produto

      const produtoExist = await Produto.findBy('id', idProduto)

      if (!produtoExist) {
        return response.ok({ mensagem: 'Produto nao existe' })
      }

      if (!data.file.tmpPath) {
        return response.ok({ mensagem: 'Arquivo nao localizado' })
      }
      const cloudinaryResponse = await cloudinary.uploader.upload(data.file.tmpPath, {
        folder: 'app',
      })
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { asset_id, public_id, format, url } = cloudinaryResponse
      const createImg = {
        id_produto: idProduto,
        asset_id,
        public_id,
        format,
        url,
      }

      await ImgProduto.create(createImg)

      return response.ok({ mensagem: 'Imagem Adicionada com sucesso' })
    } catch (e) {
      return response.status(404).send({ error: e.mensagem })
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const idImg = params.id
      const imgData = await ImgProduto.findByOrFail('id', idImg)

      const cloudinaryDelete = await cloudinary.uploader.destroy(imgData.public_id)

      await imgData.delete()

      return response.ok({ mensagem: 'Imagem Deletada com sucesso' })
    } catch (e) {
      return response.status(404).send({ error: e.mensagem })
    }
  }
}
