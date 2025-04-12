const bd = require('../dataBase/connections');

module.exports = {
    async listamensagens (request, response) {
        try {

            const sql = `SELECT
             msg_id, cond_id, userap_id msg_mensagem,
             msg_data_envio msg_status
             FROM mensagens;
             `;
            

             const [row] = await db.query(sql);
             const nItens = row.lenght;

            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de mensagens.',
                nItens,
                dados: row
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
                mensagem: 'Cadastrar mensagens.',
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

  
