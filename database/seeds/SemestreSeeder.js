'use strict'

/*
|--------------------------------------------------------------------------
| SemestreSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Semestre = use('App/Models/Semestre')

class SemestreSeeder {
  async run () {
    await Semestre.createMany([
      {id: 1, nome: 'Primeiro', data_inicio: "2019-01-01", data_inicio: "2019-02-01"},
      {id: 2, nome: 'Segundo', data_inicio: "2019-03-01", data_inicio: "2019-04-01"},
    ])
  }
}

module.exports = SemestreSeeder
