angular.module("ListaPessoas", ["ngMessages"]);
angular.module("ListaPessoas").controller("ListaPessoasController", function ($scope, $filter) {

    //NG-BIND = RETORNA ITENS DA CONTROLLER PARA A VIEW
    $scope.app = "Lista de Pessoas Cadastradas";

    //NG-REPEAT = PERMITE NAVEGAR POR LISTA CRIADAS
    $scope.pessoas = [
        { nome: $filter("uppercase")("Maria"), telefone: "1989899", dataNascimento: new Date(), cor: "red" },
        { nome: $filter("uppercase")("Jose"), telefone: "2989899", dataNascimento: new Date(), cor: "red" },
        { nome: $filter("uppercase")("Alfredo"), telefone: "3989899", dataNascimento: new Date(), cor: "red" },
        { nome: $filter("uppercase")("Julia"), telefone: "4989899", dataNascimento: new Date(), cor: "red" }
    ];

    //CRIANDO UM ARRAY DE SEXOS
    $scope.sexos = [
        { nome: "Masculino", codigo: "M", descricao: "Pessoa Sexo Masculino", valorCad: 5 },
        { nome: "Feminino", codigo: "F", descricao: "Pessoa Sexo Feminino", valorCad: 2 },
        { nome: "Outros", codigo: "O", descricao: "Pessoa Com Sexo Não Classificado", valorCad: 10 }
    ];

    //NG-CLASS




    //NG-MODEL = PEGA DADOS DA VIEW E DEFINE NA VIEW

    //NG-CLICK = DISPARA UM EVENTO CLICK NA VIEW
    $scope.adicionarPessoa = function (pessoa) {
        $scope.pessoas.push(angular.copy(pessoa));
        delete $scope.pessoa;

        $scope.contatoForm.$setPristine();
    }

    $scope.apagarPessoa = function (pessoasDeletar) {
        //var pessoasSelecionadas = pessoasDeletar.filter(function (pessoas) {
        //    if (pessoas.selecionado) {
        //        return pessoas;
        //    }
        //});

        //console.log(pessoasSelecionadas);


        $scope.pessoas = pessoasDeletar.filter(function (pessoas) {
            if (!pessoas.selecionado) {
                return pessoas;
            }
        });
    }


    //FUNCTION PODEM SER ATRIBUIDAS AO NG-DISABLED
    $scope.PessoaSelecionada = function (pessoas) {

        //AO SELECIONAR QUALQUER PESSOA DA LISTA 
        //ELE VAI RETORNAR NO LOG SE EXISTE OU NAO 
        //UM CONTATO SELECIONADO
        return pessoas.some(function (pessoa) {
            return pessoa.selecionado;
        });
    }


    //PARA APLICAR OS FILTROS QUANDO O USUARIO CLICANO MENU SUPERIOR 
    //ELE TAMEBM ALTERA A ORNAÇÃO DOS ITENS QUANDO O USUARIO CLICA MAIS DE UMA VEZ
    $scope.OrdenarPor = function (campo) {
        $scope.criterioOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    }

});