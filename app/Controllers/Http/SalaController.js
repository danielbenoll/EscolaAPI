'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Sala = use('App/Models/Sala')

class SalaController {

    async index(){
        return await Sala.all();
    }

    async store({request}){

        const campos = Sala.getCampos()
        const dados = request.only(campos)
        return await Sala.create(dados);
    }

    async show({params}){
        return await Sala.query()
                          .where('id', params.id)
                          .with('turmas')
                          .first()
    }

    async update ({ params, request, response }) {
        const campos = Sala.getCampos()
        const dados = request.only(campos)
        
        const sala = await Sala.findOrFail(params.id)
        
        sala.merge(dados)
        await sala.save();
    
        return sala
    }

    async destroy ({ params, request, response }) {
        const sala = await Sala.findOrFail(params.id)

        sala.delete()

        return 'Apagado com sucesso!'
    }
}

module.exports = SalaController
