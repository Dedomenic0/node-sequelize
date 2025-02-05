const Services = require('./Services.js');

class PessoaServices extends Services {
    constructor() {
        super('Pessoa');
    }

    async pegaMatriculasAtivasPorEstudantes(id) {
        const estudante = await super.pegaUmRegistroPorId(id);
        const listaMatriculas = await estudante.getAulasMatriculadas(id);
        return listaMatriculas;
    }

    async pegaMatriculasPorEstudantes(id) {
        const estudante = await super.pegaUmRegistroPorId(id);
        const listaMatriculas = await estudante.getTodasAsMatriculas(id);
        return listaMatriculas;
    }

    async pegaPessoasEscopoTodos () {
        const listaPessoas = await super.pegaRegistroPorEscopo('todosOsRegistros');
        return listaPessoas;
    }

}

module.exports = PessoaServices;