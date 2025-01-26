class Controller {
    constructor (entidadeService) {
        this.entidadeService = entidadeService;
    }
    async pegaTodos(req, res) {
        try {
            const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
            return res.status(200).json(listaDeRegistro)
        } catch (erro) {
            console.error(erro);
        }
    }
}

module.exports = Controller