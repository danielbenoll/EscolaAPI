'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Aula extends Model {
    static getCampos(){
        return [
            'data', 
            'conteudo', 
            'turma_id'
          ]
    }
}

module.exports = Aula
