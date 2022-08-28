import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateDtoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string.optional(),
    description: schema.string.optional(),
    familia: schema.string.optional(),
    valor: schema.number.optional(),
  })

  public messages: CustomMessages = {}
}
