'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Aula extends AbstractValidator{
  get rules () {
    return {
      data: 'date|required',
      conteudo: 'required',
      turma_id: 'integer|required',
    }
  }
}

module.exports = Aula
