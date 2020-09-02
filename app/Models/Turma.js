'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    Turma:
*      type: object
*      properties:
*        nome:
*          type: string
*          maxLenght: 50
*        turno:
*          type: string
*        professor_id:
*          type: integer
*        sala_id:
*          type: integer
*        semestre_id:
*          type: integer
*        disciplina_id:
*          type: integer
*      required:
*        - nome
*        - matricula
*    TurmaObject:
*      type: object
*      properties:
*        id:
*          type: integer
*        nome:
*          type: string
*          maxLenght: 50
*        turno:
*          type: string
*        professor_id:
*          type: integer
*        sala_id:
*          type: integer
*        semestre_id:
*          type: integer
*        disciplina_id:
*          type: integer
*        created_at:
*          type: string
*        updated_at:
*          type: string
*      required:
*        - nome
*        - matricula
*/

class Turma extends Model {
    static getCampos(){
        return [
            'nome', 
            'professor_id', 
            'semestre_id',
            'disciplina_id',
            'sala_id',
            'turno'
          ]
    }
    professor(){
        return this.belongsTo('App/Models/Professor')
    }
    sala(){
        return this.belongsTo('App/Models/Sala')
    }
    semestre(){
        return this.belongsTo('App/Models/Semestre')
    }
    disciplina(){
        return this.belongsTo('App/Models/Disciplina')
    }
    aulas(){
        return this.hasMany('App/Models/Aula')
    }
    alunos(){
        return this.belongsToMany('App/Models/Aluno').pivotTable('turma_aluno')
    }
}

module.exports = Turma
