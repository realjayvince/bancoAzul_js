//  Implemente um sistema bancário básico com **3 funcionalidades principais**:

// 1. **Depósito**
// 2. **Saque**
// 3. **Extrato** 

// ### Operação de Depósito

// - Deve aceitar apenas valores **positivos**.
// - Todos os depósitos devem ser **armazenados** em memória.
// - O sistema considera apenas **um único usuário** (sem necessidade de autenticação ou identificação de conta).
// - Os depósitos devem aparecer no extrato.


// ### Operação de Saque

// - Permitir **no máximo 3 saques diários**.
// - Cada saque pode ter o valor **máximo de R$ 500,00**.
// - O sistema deve bloquear saques se o usuário não tiver saldo suficiente, exibindo mensagem: `Saldo insuficiente para saque.` 
// - Os saques devem ser armazenados e aparecer no extrato.



// ### Operação de Extrato

// - Listar todas as **movimentações** (depósitos e saques) feitas.
// - No final da listagem, mostrar o **saldo atual**.
// - Formatar os valores no padrão brasileiro: Ex: `R$ 1500.45`
// - Se não houver movimentações, mostrar: `Não foram realizadas movimentações.`

// ### Requisitos Técnicos de Implementação
// - Use **JavaScript** .
// - Os dados podem ser armazenados **em memória** (não é necessário banco de dados).

let deposito = 0; 
let saldo = 0;
let extrato = "";
let numeroSaques = 0;
let limiteSaques = 3;
let limiteValor = 500;


while (true){
    let menu = prompt(`
        ==========================
           Seleciona uma opção:
            [d] - Depósito
            [s] - Saque
            [e] - Extrato
            [q] - Quit
        ==========================
        `);
    
    if (menu == "d"){ //operação deposito 
        let valor = parseFloat(prompt("Informe o valor do depósito: R$"));
        if (valor > 0){
            // saldo = saldo + valor;
            saldo += valor;
            // extrato = extrato + `Deposito de R$ ${valor}`;
            extrato += `Deposito de R$ ${valor}\n`;
        } else {
            alert("@@@ Operação falhou! O valor informado é invalido! @@@");
        }
    } else if (menu == "s"){ //operação saque
        let valor = parseFloat(prompt("Informe o valor do saque: R$"));
        let excedeuSaques = numeroSaques >= limiteSaques;
        let excedeuLimiteValor = valor > limiteValor;
        let excedeuSaldo = valor > saldo; 
        // nao pode ter mais que 3 saques diarios 
        // valor nao pode ser > 500 
        // valor nao pode ser > que saldo 
        if (excedeuSaldo){
            alert("@@@ Operação falhou! Saldo insuficiente para saque @@@");
        } else if (excedeuSaques){
            alert("@@@ Operação falhou! O numero maximo de saques foi excedido @@@");
        } else if (excedeuLimiteValor){
            alert("@@@ Operação falhou!  @@@");
        } else {
            // saldo = saldo - valor;
            saldo -= valor;
            // extrato = extrato + `Deposito de R$ ${valor}`;
            extrato += `Saque de R$ ${valor}.\n`;
            alert(`Saque de ${valor} realizado com sucesso!`);
            numeroSaques++;
        }
    } else if (menu == "e"){
        let mensagem = extrato == "" ? "Não foram realizadas movimentações." : extrato;
        alert(`
        ==========================
            ${mensagem}
            Saldo : R$ ${saldo.toFixed(2)}
        ==========================
        `);

    } else if (menu == "q"){
        alert("Obrigado pela preferência !!! ");
        break;
    } else {
        alert("Opção invalida, por favor selecione uma operação correta");
    }
    
    
}


