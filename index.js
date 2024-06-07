var nome, idade, numero;
nome = prompt("Digite seu nome: ");

idade = prompt("Digite sua idade: ");
numero = prompt("Digite seu numero: ");


document.getElementById("bem-vindo").innerHTML = "Seja bem vindo"+" "+ nome;
document.getElementById("confirmacao").innerHTML = "Sua idade é:" + " "+  idade + "e seu número é: " + numero;