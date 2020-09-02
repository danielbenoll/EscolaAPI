'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TurmaAluno extends Model {
    static getCampos(){
        return [
            'turma_id', 
            'aluno_id'
          ]
    }
}

module.exports = TurmaAluno
