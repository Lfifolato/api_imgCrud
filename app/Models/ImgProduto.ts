import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ImgProduto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_produto: number

  @column()
  public asset_id: string

  @column()
  public public_id: string

  @column()
  public format: string

  @column()
  public url: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
