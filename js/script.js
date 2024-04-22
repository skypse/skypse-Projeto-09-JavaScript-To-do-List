// Escopo global
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Responsável por adicionar uma nova tarefa à lista
function addTask() {
  // Verifica se o valor do campo de entrada está vazio
  if (inputBox.value === '') {
    // Se estiver vazio, exibe um alerta indicando que o usuário precisa escrever algo
    alert("Você precisa escrever algo");
  } else {
    // Caso contrário, se o campo de entrada não estiver vazio:
    // Cria um novo elemento <li> para representar a nova tarefa
    let li = document.createElement('li');
    // Define o conteúdo do elemento <li> como o valor do campo de entrada
    li.innerHTML = inputBox.value;
    // Adiciona o elemento <li> à lista representada por listContainer
    listContainer.appendChild(li);

    // Cria um novo elemento <span> para representar um botão de exclusão
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    // Adiciona o elemento <span> como filho do elemento <li>, criando assim um botão de exclusão associado ao item de lista
    li.appendChild(span);
  }
  // Redefine o valor do campo de entrada para vazio, para permitir que o usuário adicione novas tarefas sem precisar apagar o texto anterior
  inputBox.value = '';
  saveData();
}

// Adiciona uma captura de eventos de clique ao elemento com o ID "listContainer"
listContainer.addEventListener("click", function(e) {
  // Verifica se o elemento clicado é uma tag <li>
  if (e.target.tagName === "LI") {
      // Se o elemento clicado for uma tag <li>, alterna a classe "checked" no elemento clicado
      e.target.classList.toggle("checked");
      saveData();
  } 
  // Verifica se o elemento clicado é uma tag <span>
  else if (e.target.tagName === "SPAN") {
      // Se o elemento clicado for uma tag <span>, remove o elemento pai desse <span> do DOM
      e.target.parentElement.remove();
      saveData();
  }
}, false); // Define que o captura de eventos será acionado na fase de propagação do evento

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();