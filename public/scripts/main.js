//Importando a função Modal do arquivo modal.js

// import função from 'arquivo'
import Modal from './modal.js'

const modal = Modal()

/*--------------------------------------------------------------*/

// Título do modal
const modalTitle = document.querySelector('.modal h2')

// Descrição do modal
const modalDescription = document.querySelector('.modal p')

// Botão deletar perguntas
const deleteButtons = document.querySelectorAll('.actions a.delete')

// Botão marcar perguntas como lidas
const checkButtons = document.querySelectorAll('.actions a.check')

// Botão confirmar do modal (Excluir ou Marcar como lido)
const modalConfirmButton = document.querySelector('.modal button.confirm')

// Pegando o botão cancelar do modal
const modalCancelButton = document.querySelector('.button.cancel')


/* ABRIR MODAL */


// DELETAR PERGUNTA
// Escutando os botões para abrir o modal
deleteButtons.forEach(button => {
    // Adicionar a escuta
    button.addEventListener('click', (event) => handleClick(event, false))
})

// MARCAR PERGUNTA COMO LIDA
checkButtons.forEach(button => {
    button.addEventListener('click', handleClick)
})


// Abrir modal e ajustar os textos
function handleClick(event, check = true){

    event.preventDefault()

    const roomId = document.querySelector('#room-id').dataset.id
    const form = document.querySelector('.modal form')
    const questionId = event.target.dataset.id
    
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"

    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)



    modalTitle.innerHTML = `${text} está pergunta`
    modalDescription.innerHTML = `Tem certeza que você deseja ${text.toLocaleLowerCase()} está pergunta?`
    modalConfirmButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    check ? modalConfirmButton.classList.remove('red') : modalConfirmButton.classList.add('red')
    
    modal.open()
    
}


















/*   BOTÃO CANCELAR - MODAL   */

// Escutando o botão para fechar o modal
modalCancelButton.addEventListener('click', () =>
//Fechar o modal
    modal.close()
)
