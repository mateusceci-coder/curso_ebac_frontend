class Empresa {
  constructor(nome, fundacao) {
    this.nome = nome;
    this.fundacao = fundacao;
    this.funcionarios = [];
  }

  contratarFuncionario(funcionario) {
    this.funcionarios.push(funcionario);
  }

}

// Classes herdeiras (Filiais)
class Filial extends Empresa {
  constructor(nome, fundacao, cidade) {
    super(nome, fundacao);
    this.cidade = cidade;
  }
}

class Matriz extends Empresa {
  constructor(nome, fundacao, setor) {
    super(nome, fundacao);
    this.setor = setor;
  }
}

// Instâncias de objetos
const matrizEmpresa = new Matriz("Empresa Principal", 1990, "Tecnologia");
const filial1 = new Filial("Filial A", 2005, "Cidade A");
const filial2 = new Filial("Filial B", 2010, "Cidade B");

// Contratar funcionários
matrizEmpresa.contratarFuncionario({ nome: "João" });
matrizEmpresa.contratarFuncionario({ nome: "Maria" });

filial1.contratarFuncionario({ nome: "Pedro" });
filial1.contratarFuncionario({ nome: "Ana" });

filial2.contratarFuncionario({ nome: "Lucas" });
filial2.contratarFuncionario({ nome: "Carla" });




