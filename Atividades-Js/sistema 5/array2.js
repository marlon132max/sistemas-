let lista = []; // array vazia para colocar tarefas digitadas  
let quantidade = 5; // número de tarefas que você quer pedir

for (let i = 1; i < quantidade; i++  ) { // for para repetir o bloco de codigo de acordo com o let acima 
    // let i = 0 para começar o loop do 0  
    // a cada i++ aumenta 1 na repetiçao 
    let tarefa = prompt(`Digite sua tarefa ${i + 1}:`);
    lista.push(tarefa);
}

console.log(lista);
