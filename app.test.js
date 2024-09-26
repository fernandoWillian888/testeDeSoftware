/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');
const { soma, subtrai, mult } = require("./app.js")

// Carrega o conteúdo HTML
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

describe('Teste da lista de tarefas', () => {
  let addTaskBtn = document.getElementById('add-task-btn');
  let taskInput = document.getElementById('task-input');
  let taskList = document.getElementById('task-list');

  beforeEach(() => {
    // Define o documento com o conteúdo HTML
    document.documentElement.innerHTML = html.toString();

    // Carrega o script JS (app.js) no ambiente de teste
    require('./app.js');

    // Pega os elementos DOM
    // addTaskBtn = document.getElementById('add-task-btn');
    // taskInput = document.getElementById('task-input');
    // taskList = document.getElementById('task-list');
  });

  test('Deve adicionar uma tarefa à lista', () => {
    // Simula entrada de texto
    taskInput = 'Estudar Jest';

    // Simula clique no botão "Adicionar"
    addTaskBtn.click();

    // Verifica se a tarefa foi adicionada à lista
    expect(taskList.children.length).toBe(1);
    expect(taskList.children[0].textContent).toContain('Estudar Jest');
  });

  test('Deve remover uma tarefa da lista', () => {
    // Simula entrada de texto e adição de uma tarefa
    taskInput = 'Estudar Jest';
    addTaskBtn.click();

    // Verifica se a tarefa foi adicionada
    expect(taskList.children.length).toBe(1);

    // Simula clique no botão "Excluir"
    const deleteBtn = taskList.querySelector('.delete-btn');
    deleteBtn.click();

    // Verifica se a tarefa foi removida
    expect(taskList.children.length).toBe(0);
  });

  test('Não deve adicionar tarefa vazia', () => {
    // Simula um valor vazio no input
    taskInput= '';

    // Simula clique no botão "Adicionar"
   // addTaskBtn.click();

    // Verifica se a lista de tarefas continua vazia
    //expect(taskList.children.length).toBe("");
  });
});
test("soma", () => {
    expect(soma(1,2)).toBe(3)
  })
test("subtrai", () => {
    expect(subtrai(3,2)).toBe(1)
  })
test("mult", () => {
    expect(mult(1,2)).toBe(2)
  })