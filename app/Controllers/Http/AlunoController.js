'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Aluno = use('App/Models/Aluno')

/**
 * Resourceful controller for interacting with alunos
 */
class AlunoController {

    /**
  * @swagger
  * /alunos:
  *   get:
  *     tags:
  *       - Aluno
  *     summary: Listagem completa de Alunos
  *     parameters:
  *       - name: nome
  *         description: Filtra o nome parcialmente
  *         in: query
  *         required: false
  *         type: string
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

    const {page, qtd, nome, email} = request.all()

    const query = Aluno.query()

    if(nome){
      query.where('nome', 'like', '%'+nome+'%')
    }
    if(email){
      query.where('email', 'like', '%'+email+'%')
    }
                            
    return await query.paginate(page, qtd);
  }

  /**
   * Render a form to be used for creating a new aluno.
   * GET alunos/create
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
  * /alunos:
  *   post:
  *     tags:
  *       - Aluno
  *     summary: Insere um registro de Aluno
  *     parameters:
  *       - name: Aluno
  *         description: Objeto de Aluno
  *         in: body
  *         required: true
  *         type: object
  *         schema: 
  *           $ref: '#/definitions/Aluno'
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/AlunoObject'
  *       400:
  *         description: Bad Request
  */

  async store ({ request, response }) {

    const campos = Aluno.getCampos()
    const dados = request.only(campos)
    return Aluno.create(dados)
  }

    /**
  * @swagger
  * /alunos/{id}:
  *   get:
  *     tags:
  *       - Aluno
  *     summary: Exibe detalhes de um Aluno
  *     parameters:
  *       - name: id
  *         description: Identificador de um Aluno
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

  async show ({ params, request, response, view }) {
    
    return await Aluno.query()
                      .where('id', params.id)
                      .with('turmas')
                      .first()
  }

    /**
  * @swagger
  * /alunos/{id}/turmas:
  *   get:
  *     tags:
  *       - Aluno
  *     summary: Exibe turmas de um Aluno
  *     parameters:
  *       - name: id
  *         description: Identificador de um Aluno
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
  async turmas ({ params}) {
    const turma = await Aluno.findOrFail(params.id)
    return turma.turmas().fetch()
  }

  /**
   * Render a form to update an existing aluno.
   * GET alunos/:id/edit
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
  * /alunos/{id}:
  *   put:
  *     tags:
  *       - Aluno
  *     summary: Altera um registro de Aluno
  *     parameters:
  *       - name: id
  *         description: Identificador de Aluno
  *         in: path
  *         required: true
  *         type: integer
  *       - name: aluno
  *         description: Identificador de Aluno
  *         in: body
  *         required: true
  *         type: object
  *     responses:
  *       200:
  *         description: Sucesso
  *         schema:
  *           $ref: '#/definitions/AlunoObject'
  *       400:
  *         description: Bad Request
  */

  async update ({ params, request, response }) {
    const campos = Aluno.getCampos()
    const dados = request.only(campos)
    
    const aluno = await Aluno.findOrFail(params.id)
    
    aluno.merge(dados)
    await aluno.save();

    return aluno
  }

    /**
  * @swagger
  * /alunos/{id}:
  *   delete:
  *     tags:
  *       - Aluno
  *     summary: Exclui um aluno
  *     parameters:
  *       - name: id
  *         description: Identificador de Aluno
  *         in: path
  *         required: true
  *         type: integer
  *       - name: aluno
  *         description: Identificador de Aluno
  *         in: body
  *         required: true
  *         type: object
  *     responses:
  *       200:
  *         description: Sucesso
  */
  async destroy ({ params, request, response }) {
    const aluno = await Aluno.findOrFail(params.id)

    aluno.delete()

    return 'Apagado com sucesso!'
  }
}

module.exports = AlunoController
