'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlunoSchema extends Schema {
  up () {
    this.create('alunos', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.integer('cpf')
      table.string('matricula', 20).notNullable()
      table.string('email', 100)
      table.string('telefone', 15)
      table.integer('cep')
      table.string('logadouro', 100)
      table.string('complemento', 100)
      table.string('numero', 120)
      table.string('bairro', 100)
      table.timestamps()
    })
  }

  down () {
    this.drop('alunos')
  }
}

module.exports = AlunoSchema
