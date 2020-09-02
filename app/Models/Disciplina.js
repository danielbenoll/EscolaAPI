'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Disciplina extends Model {
    static getCampos(){
        return [
            'nome', 
            'curso_id'
          ]
    }
    curso(){
        return this.belongsTo('App/Models/Curso')
    }
    turmas(){
        return this.hasMany('App/Models/Turma')
    }
}

module.exports = Disciplina
