/* 

Ao acessar o sistema, pergunte o nome do usuário e diga "Olá {Nome} é um prazer ter você por aqui!"

Na função "inicio", utilize escolha/caso (switch/case) para validar a opção escolhida pelo usuário.

Sempre que o usuário for sacar dinheiro, o valor restante não pode ser negativo, ou seja, caso o usuário tente sacar mais do que tem em saldo, a ação não deve ocorrer. Exiba uma mensagem de "Operação não autorizada".

Sempre que o usuário for sacar dinheiro, o valor a ser sacado não pode ser igual ou menor que zero. Exiba uma mensagem de "Operação não autorizada".

Adicionar a opção para ver o extrato (Coloque algumas compras ou depósitos fictícios).

Adicionar a opção para fazer uma transferência. A transferência consiste em você informar o número de uma conta (pode ser qualquer número, mas obrigatoriamente um número, ou seja, nenhum outro caractere deve ser aceito), perguntar o valor da transferência e remover o valor da conta da mesma forma como na ação do saldo. Caso o usuário tente transferir mais do que tem em saldo, a ação não deve ocorrer. Exiba uma mensagem de "Operação não autorizada".

Sempre que o usuário for transferir dinheiro,  o valor a ser transferido não pode ser igual ou menor que zero, ou seja, caso o usuário tente transferir mais do que tem em saldo, a ação não deve ocorrer. Exiba uma mensagem de "Operação não autorizada".

No menu principal, a ordem das opções deve ser: Saldo, Extrato, Saque, Depósito, Transferência e Sair.

Atualize a função "erro" com as novas opções do menu.

Caso o usuário informe um valor para depósito igual ou menor que zero, não deixe a operação ocorrer. Exiba uma mensagem de "Operação não autorizada".

Sempre que o usuário for acessar o saldo, sacar, retirar o extrato ou transferir dinheiro é necessário que ele informe uma senha. Essa senha deve ser validada com uma condicional. A senha é 3589.

Caso a senha informada não seja a correta, é necessário chamar a função atual novamente. 

Quando o usuário escolher sair do sistema, exiba uma mensagem agradecendo por utilizar os serviços do banco: "{Nome}, foi um prazer ter você por aqui!".

*/

var nome = prompt("Por favor, me informe o seu nome")
alert(`Olá, ${nome}. É um prazer ter você por aqui!!`)
var saldo = 1600
var senha = 3589
var tentativaSenha = 0;
var extratos = ["R$300,00 - Compra em YouCom", "R$100,00 - Compra em Mc Donalds", "R$540,00 - Depósito para Beyoncé Giselle Knowles Carter", "R$134,23 - Compra em Renner", "R$530,00 - Compra em Chilli Beans", "R$350,00 - Compra em OutBack"]

function verificarSenha() {
    tentativaSenha = parseInt(prompt("Digite a sua senha para acessar essa área"))
    while (tentativaSenha != senha) {
        tentativaSenha = parseInt(prompt("Senha incorreta. Tente novamente:"))
    }
}

function inicio() {

    var opcao = parseInt(prompt("[1]- Saldo [2]- Extrato [3]- Saque [4]- Depósito [5]- Transferência [6]- Sair"))

    switch (opcao) {
        case 1:
            verificarSenha();
            verificarSaldo();
            break;



        case 2:
            verificarSenha();
            verificarExtratos();
            break;

        case 3:
            verificarSenha();
            realizarSaque();
            break;

        case 4:
            verificarSenha();
            realizarDeposito();
            break;

        case 5:
            verificarSenha();
            realizarTransferencia()
            break;

        case 6:
            sairDaConta();

        default:
            alert("Opção Inválida!")
            break;
    }
}

function erro() {
    alert("Operação não autorizada. Volte ao menu para tentar novamente!")
    inicio();
}

function verificarSaldo() {
    alert(`${nome}, você possui um saldo de: ${saldo} reais.`)
    inicio();
}

function verificarExtratos() {
    alert(`${nome}, aqui está seus últimos extratos:\n${extratos.join("\n")}`)
    inicio();
}

function realizarSaque() {
    var saque = parseInt(prompt("Digite o valor que você deseja sacar: "))
    if (saque > saldo || saque <= 0) {
        erro()
    } else {
        alert("Saque efetuado com sucesso!")
        saldo = saldo - saque;
        alert(`O seu saldo atual agora é: ${saldo}`)
    }
    inicio();
}

function realizarDeposito() {
    var deposito = parseInt(prompt("Digite o valor do depósito."))
    if (deposito <= 0 || isNaN(deposito)) {
        erro()
    } else {
        alert("Operação feita com sucesso!")
    }
    inicio();
}

function realizarTransferencia() {
    var numeroDaConta = parseInt(prompt("Digite o número da conta para o qual você quer realizar a transferência"))

    while (isNaN(numeroDaConta)) {
        alert("Caracteres não são aceitos. Por favor, digite um número!");
        numeroDaConta = parseInt(prompt("Digite o número da conta para o qual você quer realizar a transferência"));
    }

    var valorTransferencia = parseInt(prompt("Qual o valor da transferência?"))
    if (valorTransferencia > saldo || valorTransferencia <= 0) {
        erro()
    } else {
        saldo = saldo - valorTransferencia;
        alert(`Valor transferido. Seu saldo atual agora é ${saldo}`)
    }
    inicio();
}

function sairDaConta() {
    alert(`${nome}, foi um prazer ter você por aqui! Até a próxima.`)
    return;
}

inicio();