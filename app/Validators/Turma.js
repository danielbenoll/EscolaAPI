'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Turma extends AbstractValidator{
  get rules () {
    return {
      nome: 'required|min:2|max:50',
      professor_id: 'integer|required',
      semestre_id: 'integer|required',
      disciplina_id: 'integer|required',
      sala_id: 'integer|required',
      turno: 'in: M, V, N|required',
    }
  }
}

module.exports = Turma
