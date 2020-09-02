'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

//Colocando a classe Professor ele da o erro: "select * from `professors` - ER_NO_SUCH_TABLE: Table 'academico.professors' doesn't exist"
//Uma alternativa que vi era mudar o nome da classe Professor para Professore
//Já que é padrão do Adonis o nome da tabela ser o plural da classe
//Que ficando com o nome Professore e colocando no plural fica igual a tabela do BD como Professores 

class Professor extends Model {
    static get table(){
        return 'professores'
    }
    static getCampos(){
        return [
            'nome', 
            'cpf', 
            'matricula',
            'salario',
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
        return this.hasMany('App/Models/Turma')
    }
}

module.exports = Professor
