const restaurante = {
    praça: {
        cumim: 4,
        garçom: 4
    },
    horario_de_funcionamento: "1100 - 23:00"
    funcionarios: []
};

function adicionarFuncionario (nome, cargo, entrada, almoco, volta) {

    const funcionario: {
        nome:nome,
        cargo:cargo,
        entrada:entrada,
        almoco:almoco,
        volta:volta
    }

    restaurante.funcionarios.push(funcionario);

}

adicionarFuncionario ("leo", "cumim", 1100, 1500, 1800);
adicionarFuncionario ("facundo", "cumim", 1500, 1700, 1800);

console.log(restaurante.funcionarios)
