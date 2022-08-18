
module.exports = {
    async index(req, res) {
        res.send('listar!')

    },


    async store(req, res) {
        res.send('cadastrar!')

    },

    async change(req, res) {
        res.send('alterar!')

    },

    async delete(req, res) {
        res.send('deletar!')

    }
}