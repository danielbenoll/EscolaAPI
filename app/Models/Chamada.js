'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Chamada extends Model {
    static getCampos(){
        return [
            'aula_id', 
            'aluno_id', 
            'presenca'
          ]
    }
}

module.exports = Chamada
