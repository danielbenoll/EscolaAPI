'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    Aluno:
*      type: object
*      properties:
*        nome:
*          type: string
*          maxLenght: 50
*        cpf:
*          type: integer
*        matricula:
*          type: string
*        email:
*          type: string
*        telefone:
*          type: string
*        cep:
*          type: string
*        logadouro:
*          type: string
*        complemento:
*          type: string
*        numero:
*          type: string
*        bairro:
*          type: string
*      required:
*        - nome
*        - matricula
*    AlunoObject:
*      type: object
*      properties:
*        id:
*          type: integer
*        nome:
*          type: string
*          maxLenght: 50
*        cpf:
*          type: integer
*        matricula:
*          type: string
*        email:
*          type: string
*        telefone:
*          type: string
*        cep:
*          type: string
*        logadouro:
*          type: string
*        complemento:
*          type: string
*        numero:
*          type: string
*        bairro:
*          type: string
*        created_at:
*          type: string
*        updated_at:
*          type: string
*      required:
*        - nome
*        - matricula
*/

class Aluno extends Model {
    static getCampos(){
        return [
            'nome', 
            'cpf', 
            'matricula',
            'email',
            'telefone',
            'cep',
            'logadouro',
            'complemento',
            'numero',
            'bairro'
          ]
    }
    turmas(){
        return this.belongsToMany('App/Models/Turma').pivotTable('turma_aluno')
    }
}

module.exports = Aluno
