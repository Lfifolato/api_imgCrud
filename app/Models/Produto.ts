import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import ImgProduto from './ImgProduto'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public description: string

  @column()
  public familia: string

  @column()
  public valor: Number

  @hasMany(() => ImgProduto, {
    foreignKey: 'id_produto',
  })
  public Imagem: HasMany<typeof ImgProduto>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
