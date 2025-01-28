const Services = require('./Services.js');

class PessoaServices extends Services {
    constructor() {
        super('Pessoa');
    }

    async pegaMatriculasPorEstudantes(id) {
        const estudante = await super.pegaUmRegistroPorId(id);
        const listaMatriculas = await estudante.getAulasMatriculadas(id);
        return listaMatriculas;
    }

}

module.exports = PessoaServices;