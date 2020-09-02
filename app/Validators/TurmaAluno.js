'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class TurmaAluno extends AbstractValidator{
  get rules () {
    return {
      turma_id: 'integer|required',
      aluno_id: 'integer|required',
    }
  }
  
}

module.exports = TurmaAluno
