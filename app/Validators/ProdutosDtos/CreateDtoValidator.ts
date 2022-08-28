import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class CreateDtoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string(),
    description: schema.string(),
    familia: schema.string(),
    valor: schema.number(),
  })

  public messages: CustomMessages = {
    required: 'o {{ field }} required',
  }
}
