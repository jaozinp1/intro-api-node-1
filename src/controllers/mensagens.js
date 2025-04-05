const bd = require('../dataBase/connections');

module.exports = {
    async listamensagens (request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de mensagens.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na Listagem de mensagens.',
                dados: error.message
            
            });
        }   
    },

    async cadastrarmensagens (request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Cadastrar bloco.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na Listagem de mensagens.',
                dados: error.message
            
            });
        }   
    },

    async editarmensagens (request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Editar mensagens.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na Listagem de mensagens.',
                dados: error.message
            
            });
        }   
    },
    async apagarmensagens (request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'apagar mensagens.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na Listagem de mensagens.',
                dados: error.message
            
            });
        }   
    },
}

  
