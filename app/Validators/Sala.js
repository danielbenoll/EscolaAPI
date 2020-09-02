'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Sala extends AbstractValidator{
  get rules () {
    return {
      nome: 'required|min:2|max:50|unique:salas',
      capacidade: 'integer',
      tipo: 'in: S, L, A, P|required',
    }
  }
}

module.exports = Sala
