'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Disciplina = use('App/Models/Disciplina')

/**
 * Resourceful controller for interacting with disciplinas
 */
class DisciplinaController {
  /**
   * Show a list of all disciplinas.
   * GET disciplinas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {   

    // const qtd = request.get('qtd')
    const {page, qtd, nome} = request.all()

    const query = Disciplina.query().with('curso')

    if(nome){
      query.where('nome', 'like', '%'+nome+'%')
    }
                            
    return await query.paginate(page, qtd);
  }

  /**
   * Render a form to be used for creating a new disciplina.
   * GET disciplinas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new disciplina.
   * POST disciplinas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    
    const campos = Disciplina.getCampos()
    const dados = request.only(campos)
    return Disciplina.create(dados)
  }

  /**
   * Display a single disciplina.
   * GET disciplinas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const disciplina = Disciplina.query()
                                  .where('id', params.id)
                                  .with('curso')
                                  .with('turmas')
                                  .first()

    return disciplina
  }

  /**
   * Render a form to update an existing disciplina.
   * GET disciplinas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update disciplina details.
   * PUT or PATCH disciplinas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const campos = Disciplina.getCampos()
    const dados = request.only(campos)
    
    const disciplina = await Disciplina.findOrFail(params.id)
    
    disciplina.merge(dados)
    await disciplina.save();

    return disciplina
}

  /**
   * Delete a disciplina with id.
   * DELETE disciplinas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const disciplina = await Disciplina.findOrFail(params.id)

    disciplina.delete()

    return 'Apagado com sucesso!'
  }
}

module.exports = DisciplinaController
