const db = require('../dataBase/connections');

module.exports = {
    async listablocos (request, response) {
        try {

            const sql = `SELECT bloc_id, 
            cond_id, bloc_nome FROM bloco;
            `;
           

            const [row] = await db.query(sql);
            const nItens = row.lenght;
            
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Lista de blocos.',
                nItens,
                dados: row
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na Listagem de blocos.',
                dados: error.message
            
            });
        }   
    },

    async cadastrarblocos (request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Cadastrar bloco.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na Listagem de blocos.',
                dados: error.message
            
            });
        }   
    },

    async editarblocos (request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'Editar blocos.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na Listagem de blocos.',
                dados: error.message
            
            });
        }   
    },
    async apagarblocos (request, response) {
        try {
            return response.status(200).json({
                sucesso: true,
                mensagem: 'apagar blocos.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na Listagem de blocos.',
                dados: error.message
            
            });
        }   
    },
}

  
