//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];






function funcao_De_Adicionar_Amigos () { //função do botão Adicionar Amigos

    const entradaAmigo = document.getElementById("entrada-amigo");//pega o valor do que foi digitado no "entrada-amigo" do html
                                                                      //e armazena na variável entradaAmigo

    const nomeAmigo = entradaAmigo.value.trim();; //separa o valor de entradaAmigo e atribui essa valor a nomeAmigo
                                                 //o ".trim" faz com que espaços antes e depois do valor do "entrada-amigo" seja ignorado

    if (nomeAmigo == "") { // Se nome de amigo for vazio, executa esse código.

        alert('Insira um nome válido! >:(');
        return; // Faz com que a função volte ao seu início.

    }
    

    listaDeAmigos.push(nomeAmigo); //adiciona o nomeAmigo na listaDeAmigos
    entradaAmigo.value = '';//limpa o campo de entrada: entrada-amigo
    entradaAmigo.focus(); //foca na entrada de dados, entradaAmigo




    funcao_De_Atualizar_Lista_De_Amigos();
    



    console.log(`Amigo ${nomeAmigo} adicionado!`); //exibe o valor de nomeAmigo no console.
    console.log(`Seus amigos são: ${listaDeAmigos}`); //exibe o valor da lista de Amigos no console.
    console.log('-----');


}
    






function funcao_De_Sortear_Amigos () { //função do botão Sortear Amigos

    if (listaDeAmigos == "") { // Se nome de amigo for vazio, executa esse código.

        alert('Você não tem amigos :(');
        alert('Insira algum amigo! :,D');
        return; // Faz com que a função volte ao seu início.

    }
    

                                                                            //"".floor" arredonda um número para baixo para o inteiro mais próximo.
    const numAleatorioEntre0EListadeAmigos = Math.floor(Math.random() * listaDeAmigos.length);  //".length" retorna o número de elementos da listaDeAmigos.
                                                                            // o número aleatório vai ser entre 0 e listaDeAmigos -1.

                                                                            

    const amigoSorteado = listaDeAmigos[numAleatorioEntre0EListadeAmigos]; //pega o valor definido pelo número aleatório na listaDeAmigos,
                                                                         //e atribui esse valor a variável amigoSorteado.


    console.log(`O número aleatório entre 0 e Lista de Amigos foi: ${numAleatorioEntre0EListadeAmigos}`);
    console.log(`O amigo sorteado foi: ${amigoSorteado}`);
    console.log(`-----`)


     // Atualiza o elemento <ul id="resultado"> com o amigo sorteado
     const resultadoUL = document.getElementById("resultadoUL");
     resultadoUL.innerHTML = `<li>e o amigo secreto é: ${amigoSorteado}</li>`; // Exibe o nome sorteado na tela
    




     listaDeAmigosUL = document.getElementById("lista-de-amigosUL"); // Obtém a <ul> da lista
     listaDeAmigosUL.innerHTML = "";
     listaDeAmigos = [];
    
}





function funcao_De_Atualizar_Lista_De_Amigos () {


    const listaDeAmigosUL = document.getElementById("lista-de-amigosUL"); // Obtém a <ul> da lista
    listaDeAmigosUL.innerHTML = ""; // Limpa a lista antes de adicionar novos itens






   // Adiciona ++ para i, enquanto o i for menor que a quantidade de elementos da listaDeAmigos
   for (let i = 0; i < listaDeAmigos.length; i++) {
   // Enquanto a quantidade de elementos for maior que o i, essas coisas abaixo vão acontecer

    const li = document.createElement("li"); // Cria um novo elemento <li>

    li.textContent = listaDeAmigos[i]; // Define o texto do <li> como o nome do amigo

    listaDeAmigosUL.appendChild(li); // Adiciona o <li> ao <ul>

    }

    
}
   
   
    



 


