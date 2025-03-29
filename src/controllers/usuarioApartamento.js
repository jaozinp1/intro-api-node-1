const db = require('../database/connection');

module.exports ={
    async listaUsuariosApartamento (request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de usuários.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na Listagem de usuários.',
                dados: errpr.message
            
            });
        }   
    }
}