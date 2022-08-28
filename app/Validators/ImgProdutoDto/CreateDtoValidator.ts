import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class CreateDtoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    id_produto: schema.number(),
    file: schema.file({
      size: '2mb',
      extnames: ['jpg', 'gif', 'png'],
    }),
  })

  public messages: CustomMessages = {
    required: 'o {{ field }} required',
  }
}
