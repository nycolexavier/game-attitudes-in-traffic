/** app */
const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

/** our cards */
cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart () {
    //console.log('Start dragging')
    dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

    // this = card
    this.classList.add('is-dragging')
}

function drag () {}

function dragend() {
    // console.log('Stop drag')
    dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))

    // this = card
    this.classList.remove('is-dragging')
}

/** place where we will drop cards*/
dropzones.forEach( dropzone => {
    // entrou na zona
    dropzone.addEventListener('dragenter', dragenter)
    // estou na zona
    dropzone.addEventListener('dragover', dragover)
    // sai da zona
    dropzone.addEventListener('dragleave', dragleave)
    // soltei alguma coisa dentro da zona
    dropzone.addEventListener('drop', drop)
})

function dragenter () {}

function dragover () {
    // this = dropzone
    this.classList.add('over')

    // get dragging card 
    const cardBeingDragged = document.querySelector('.is-dragging')

    this.appendChild(cardBeingDragged)
}

function dragleave () {
    // this = dropzone
    this.classList.remove('over')
}

function drop () { 
    this.classList.remove('over')
}