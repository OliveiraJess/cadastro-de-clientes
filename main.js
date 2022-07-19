'use strict'

//abrir modal
const openModal = () => document.getElementById('modal')
    .classList.add('active');

//fechar modal
const closeModal = () => {
    clearFields();
    document.getElementById('modal').classList.remove('active');
}

// ?? quer dizer: se não existir x retorna y 
//getItem tras informações do localStorage 
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];

//setItem pega informações do localStorage
const setLocalStorage = (dbClient) => localStorage.setItem('db_client', JSON.stringify(dbClient));

//delete/deleta
const deleteClient = (index) => {
    const dbClient = readClient();
    //splice remove cliente
    dbClient.splice(index, 1)
    setLocalStorage(dbClient);
}

//update/atualiza
const updateClient = (index, client) => {
    const dbClient = readClient();
    dbClient[index] = client;
    setLocalStorage(dbClient);
}

//read/ler o cliente
const readClient = () => getLocalStorage();

//create/cria/envia os dados
const createClient = (client) => {
    const dbClient = getLocalStorage();
    //push acrecenta cliente
    dbClient.push(client);
    setLocalStorage(dbClient);
}

//INTERAÇÃO COM O LAYOUT

//verifica se os campos foram preenchidos
const isValidFields = () => {
    //reportValidity retorna true caso todos os requisitos do html forem atendidos
    return document.getElementById('form').reportValidity();
}

//limpar formulario do modal
const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field');
    fields.forEach(field => field.value = "");
}

//salvar cliente
const saveClient = () => {
    if (isValidFields()) {
        const client = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
        }
        createClient(client);
        updateTable();
        closeModal();
    }
}

//criar linha
const createRow = (client, index) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.email}</td>
        <td>${client.celular}</td>
        <td>${client.cidade}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Excluir</button>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow);
}

//limpar tabela 
const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

//atualizar a tabela
const updateTable = () => {
    const dbClient = readClient();
    clearTable();
    dbClient.forEach(createRow);
}

updateTable();

// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal);

document.getElementById('modalClose')
    .addEventListener('click', closeModal);

document.getElementById('salvar')
    .addEventListener('click', saveClient);