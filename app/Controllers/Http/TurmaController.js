'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Turma = use('App/Models/Turma')

/**
 * Resourceful controller for interacting with turmas
 */
class TurmaController {
    /**
  * @swagger
  * /turmas:
  *   get:
  *     tags:
  *       - Turma
  *     summary: Listagem completa de Turmas
  *     parameters:
  *       - name: page
  *         description: Número da página a exibir
  *         in: query
  *         required: false
  *         type: integer
  *       - name: qtd
  *         description: Quantidade de Registros por Página
  *         in: query
  *         required: false
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso
  */
  async index ({ request, response, view }) {
    return Turma.query()
                .with('disciplina')
                .fetch()
  }

  /**
   * Render a form to be used for creating a new turma.
   * GET turmas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

    /**
  * @swagger
  * /turmas:
  *   post:
  *     tags:
  *       - Turma
  *     summary: Insere um registro de Turma
  *     parameters:
  *       - name: turma
  *         description: Objeto de Turma
  *         in: body
  *         required: true
  *         type: object
  *         schema: 
  *           $ref: '#/definitions/Turma'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/TurmaObject'
  *       400:
  *         description: Bad Request
  */
  async store ({ request, response }) {
    
    const campos = Turma.getCampos()
    const dados = request.only(campos)
    return Turma.create(dados)
  }

    /**
  * @swagger
  * /turmas/{id}:
  *   get:
  *     tags:
  *       - Turma
  *     summary: Exibe detalhes de um Turma
  *     parameters:
  *       - name: id
  *         description: Identificador de um Turma
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/TurmaObject'
  *       400:
  *         description: Bad Request
  */
  async show ({ params, request, response, view }) {
    return await Turma.query()
                      .where('id', params.id)
                      .with('professor')
                      .with('sala')
                      .with('disciplina')
                      .with('semestre')
                      .with('aulas')
                      .with('alunos')
                      .paginate()
  }

    /**
  * @swagger
  * /turmas/{id}/aulas:
  *   get:
  *     tags:
  *       - Turma
  *     summary: Exibe aulas de um Turma
  *     parameters:
  *       - name: id
  *         description: Identificador de um Turma
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso
  *       400:
  *         description: Bad Request
  */
  async aulas ({ params}) {
    const turma = await Turma.findOrFail(params.id)
    return turma.aulas().fetch()
  }

    /**
  * @swagger
  * /turmas/{id}/alunos:
  *   get:
  *     tags:
  *       - Turma
  *     summary: Exibe alunos de um Turma
  *     parameters:
  *       - name: id
  *         description: Identificador de um Turma
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/AlunoObject'
  *       400:
  *         description: Bad Request
  */
  async alunos ({ params}) {
    const turma = await Turma.findOrFail(params.id)
    return turma.alunos().fetch()
  }

  /**
   * Render a form to update an existing turma.
   * GET turmas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

   /**
  * @swagger
  * /turmas/{id}:
  *   put:
  *     tags:
  *       - Turma
  *     summary: Altera um registro de Turma
  *     parameters:
  *       - name: id
  *         description: Identificador de Turma
  *         in: path
  *         required: true
  *         type: integer
  *       - name: aluno
  *         description: Identificador de Turma
  *         in: body
  *         required: true
  *         type: object
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/TurmaObject'
  *       400:
  *         description: Bad Request
  */
  async update ({ params, request, response }) {
    const campos = Turma.getCampos()
    const dados = request.only(campos)
    
    const turma = await Turma.findOrFail(params.id)
    
    turma.merge(dados)
    await turma.save();

    return turma
}

    /**
  * @swagger
  * /turmas/{id}:
  *   delete:
  *     tags:
  *       - Turma
  *     summary: Exclui uma turma
  *     parameters:
  *       - name: id
  *         description: Identificador de Turma
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Sucesso
  */
  async destroy ({ params, request, response }) {
    const turma = await Turma.findOrFail(params.id)

    turma.delete()

    return 'Apagado com sucesso!'
  }
}

module.exports = TurmaController
