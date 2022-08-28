import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'img_produtos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('id_produto')
        .unsigned()
        .references('id')
        .inTable('produtos')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.string('asset_id')
      table.string('public_id')
      table.string('format')
      table.string('url')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
