'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Curso extends AbstractValidator{
  get rules () {
    return {
      nome: 'required|min:2|max:50|unique:cursos',
      duracao: 'integer',
      modalidade: 'max:1|required',
    }
  }
}

module.exports = Curso
