const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const cellElements = document.querySelectorAll('[data-cell]')

const board = document.getElementById('board')
let circleTurn


cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true })
})

function handleClick(e){
    console.log('clicked')
    // place the mark
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass)
    //check for win

    //check for a draw

    //switch turns
    swapTurns()
    setBoardHoverClass()
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns(){
    circleTurn = !circleTurn
}

function setBoardHoverClass(){
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS)

    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    } else {
        board.classList.add(X_CLASS)
    }
}