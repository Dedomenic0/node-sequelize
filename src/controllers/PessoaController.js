const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaService.js');

const pessoaService = new PessoaServices();

class PessoaController extends Controller{
    constructor() {
        super(pessoaService);
    }

    async pegaMatriculas (req, res) {
        const { estudanteid } = req.params;

        try {
            const listaMatriculas = await pessoaService.pegaMatriculasPorEstudantes( Number ( estudanteid ));
            return res.status(200).json(listaMatriculas);
        } catch (erro) {
            //erro
        }
    }

}

module.exports = PessoaController;