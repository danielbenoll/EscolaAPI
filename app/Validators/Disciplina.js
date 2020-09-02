'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Disciplina extends AbstractValidator{
  get rules () {
    return {
      nome: 'min:2|max:50',
      curso_id: 'integer|required',
    }
  }
}

module.exports = Disciplina
