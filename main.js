'use strict'

//abrir modal
const openModal = () => document.getElementById('modal')
    .classList.add('active')

//fechar modal
const closeModal = () => document.getElementById('modal')
    .classList.remove('active')


const tempClient = {
    nome: "Jessica",
    email: "exemplo@gmail.com",
    celular: "48988880000",
    cidade: "Orleans"
}

// ?? quer dizer: se não existir x retorna y 
//getItem tras informações do localStorage 
function getLocalStorage() {
    return JSON.parse(localStorage.getItem('db_client')) ?? []
}
//setItem pega informações do localStorage
function setLocalStorage(dbClient) {
    return localStorage.setItem('db_client', JSON.stringify(dbClient))
}

//create/cria/envia os dados
const createClient = (client) => {
    const dbClient = getLocalStorage()
    //acrecenta cliente
    dbClient.push(client)
    setLocalStorage(dbClient)
}


//read/ler

//update/atualiza

//delete/deleta

// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)