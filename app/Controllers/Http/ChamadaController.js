'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Chamada = use('App/Models/Chamada')

/**
 * Resourceful controller for interacting with chamadas
 */
class ChamadaController {
  /**
   * Show a list of all chamadas.
   * GET chamadas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Chamada.all();
  }

  /**
   * Render a form to be used for creating a new chamada.
   * GET chamadas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new chamada.
   * POST chamadas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const campos = Chamada.getCampos()
    const dados = request.only(campos)
    return Chamada.create(dados)
  }

  /**
   * Display a single chamada.
   * GET chamadas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Chamada.findOrFail(params.id)
  }

  /**
   * Render a form to update an existing chamada.
   * GET chamadas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update chamada details.
   * PUT or PATCH chamadas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const campos = Chamada.getCampos()
    const dados = request.only(campos)
    
    const chamada = await Chamada.findOrFail(params.id)
    
    chamada.merge(dados)
    await chamada.save();

    return chamada
  }

  /**
   * Delete a chamada with id.
   * DELETE chamadas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const chamada = await Chamada.findOrFail(params.id)

    chamada.delete()

    return 'Apagado com sucesso!'
  }
}

module.exports = ChamadaController
