'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Chamada extends AbstractValidator{
  get rules () {
    return {
      aula_id: 'integer|required',
      aluno_id: 'integer|required',
      presenca: 'in:P,F,J|required',
    }
  }
}

module.exports = Chamada
