'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfessorSchema extends Schema {
  up () {
    this.create('professores', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.integer('cpf').notNullable()
      table.string('matricula', 20)
      table.string('salario', 100)
      table.string('email', 100)
      table.string('telefone', 15)
      table.integer('cep')
      table.string('logadouro', 100)
      table.string('complemento', 100)
      table.string('numero', 20)
      table.string('bairro', 100)
      table.timestamps()
    })
  }

  down () {
    this.drop('professores')
  }
}

module.exports = ProfessorSchema
