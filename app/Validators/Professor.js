'use strict'

const AbstractValidator = use('App/Validators/AbstractValidator')

class Professor extends AbstractValidator{
  get rules () {
    return {
      nome: 'required|unique:professores|max:50|min:2',
      cpf: 'integer|unique:professores',
      matricula: 'required|unique:professores|max:20|min:5',
      salario: 'max:100',
      email: 'email|unique:professores|max:100',
      telefone: 'min:14|max:15',
      cep: 'integer|min:8|max:8',
      logadouro: 'max:100',
      complemento: 'max:100',
      numero: 'max:20',
      bairro: 'max:100',
    }
  }
}

module.exports = Professor
