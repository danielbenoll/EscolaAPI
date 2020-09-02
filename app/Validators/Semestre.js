'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Semestre extends AbstractValidator{
  get rules () {
    return {
      nome: 'required|min:2|max:30',
      data_inicio: 'date|required',
      data_fim: 'date|required',
    }
  }
}

module.exports = Semestre
