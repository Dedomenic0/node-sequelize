const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaService.js');

const pessoaService = new PessoaServices();

class PessoaController extends Controller{
    constructor() {
        super(pessoaService);
    }

    async pegaMatriculasAtivas (req, res) {
        const { estudante_id } = req.params;

        try {
            const listaMatriculas = await pessoaService.pegaMatriculasAtivasPorEstudantes( Number ( estudante_id ));
            return res.status(200).json(listaMatriculas);
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }

    async pegaTodasMatriculas (req, res) {
        const { estudante_id } = req.params;

        try {
            const listaMatriculas = await pessoaService.pegaMatriculasPorEstudantes( Number ( estudante_id ));
            return res.status(200).json(listaMatriculas);
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }

    async pegaTodasAsPessoas (req, res) {
        try {
            const listaTodasAsPessoas = await pessoaService.pegaPessoasEscopoTodos();
            return res.status(200).json(listaTodasAsPessoas);
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    }
}

module.exports = PessoaController;