'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const TurmaAluno = use('App/Models/TurmaAluno')

/**
 * Resourceful controller for interacting with turmaalunos
 */
class TurmaAlunoController {
  /**
   * Show a list of all turmaalunos.
   * GET turmaalunos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return TurmaAluno.all();
  }

  /**
   * Render a form to be used for creating a new turmaaluno.
   * GET turmaalunos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new turmaaluno.
   * POST turmaalunos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    
    const campos = TurmaAluno.getCampos()
    const dados = request.only(campos)
    return TurmaAluno.create(dados)
  }

  /**
   * Display a single turmaaluno.
   * GET turmaalunos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await TurmaAluno.findOrFail(params.id)
  }

  /**
   * Render a form to update an existing turmaaluno.
   * GET turmaalunos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update turmaaluno details.
   * PUT or PATCH turmaalunos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const campos = TurmaAluno.getCampos()
    const dados = request.only(campos)
    
    const turmaAluno = await TurmaAluno.findOrFail(params.id)
    
    turmaAluno.merge(dados)
    await turmaAluno.save();

    return turmaAluno
  }

  /**
   * Delete a turmaaluno with id.
   * DELETE turmaalunos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const turmaAluno = await TurmaAluno.findOrFail(params.id)

    turmaAluno.delete()

    return 'Apagado com sucesso!'
  }
}

module.exports = TurmaAlunoController
