'use strict'

var gQuests = [
    { id: 1, opts: ['Girl', 'Boy'], correctOptIndex: 1 },
    { id: 2, opts: ['Rabbit', 'Dog'], correctOptIndex: 0 },
    { id: 3, opts: ['Yellow', 'Red'], correctOptIndex: 1 },
]
var gCurrQuestIdx = 0


function init() {
    var elRepeat = document.querySelector('.repeat')
    gCurrQuestIdx = 0
    renderQuest()
    elRepeat.style.display = 'none'

}


function creatQuests() {
    var quests = []
    quests.push('Girl or boy?')
    quests.push('Is it rabbit or dog?')
    quests.push('What is the color of the balloon?')

    return quests
}


function renderQuest() {
    setTimeout(function(){
        var elH2 = document.querySelector('h2')
        elH2.innerText = ''}, 1000)

    var elImg = document.querySelector('img')
    elImg.src = `img/${gCurrQuestIdx + 1}.jpg`

    var opts = gQuests[gCurrQuestIdx].opts
    var strHTML = ``
    for (var i = 0; i < opts.length; i++) {
        strHTML += `<button class="button${i}" onclick="checkAnswer(this)">${opts[i]}</button>`
    }
    var elBtnContainer = document.querySelector('.btn-container')
    elBtnContainer.innerHTML = strHTML


}


function checkAnswer(elBtn) {
    var elH2 = document.querySelector('h2')
    var answerIdx = gQuests[gCurrQuestIdx].correctOptIndex
    var elRepeat = document.querySelector('.repeat')
    if (elBtn.innerText === gQuests[gCurrQuestIdx].opts[answerIdx]) {
        gCurrQuestIdx++
        elH2.innerText = 'Correct!'
        if (gCurrQuestIdx > gQuests.length - 1) {
            elRepeat.style.display = 'block'
        } else {
            renderQuest()
        }
    } else {
        elH2.innerText = 'Wrong...'
    }
}




