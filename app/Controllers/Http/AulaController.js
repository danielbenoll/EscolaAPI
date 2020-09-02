'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Aula = use('App/Models/Aula')

/**
 * Resourceful controller for interacting with aulas
 */
class AulaController {
  /**
   * Show a list of all aulas.
   * GET aulas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Aula.all();
  }

  /**
   * Render a form to be used for creating a new aula.
   * GET aulas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new aula.
   * POST aulas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    
    const campos = Aula.getCampos()
    const dados = request.only(campos)
    return Aula.create(dados)
  }

  /**
   * Display a single aula.
   * GET aulas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Aula.findOrFail(params.id)
  }

  /**
   * Render a form to update an existing aula.
   * GET aulas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update aula details.
   * PUT or PATCH aulas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const campos = Aula.getCampos()
    const dados = request.only(campos)
    
    const aula = await Aula.findOrFail(params.id)
    
    aula.merge(dados)
    await aula.save();

    return aula
  }

  /**
   * Delete a aula with id.
   * DELETE aulas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const aula = await Aula.findOrFail(params.id)

    aula.delete()

    return 'Apagado com sucesso!'
  }
}

module.exports = AulaController
