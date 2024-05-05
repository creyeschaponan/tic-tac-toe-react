export const saveGameStorage = (boardToSave, turnToSave) => {
    window.localStorage.setItem('board',JSON.stringify(boardToSave))
    window.localStorage.setItem('turn',turnToSave)
}

export const resetGameStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}