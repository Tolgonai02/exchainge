let transSumEl = document.getElementById('currency')
let mountEl= document.getElementById('mount')
let sumEl = document.getElementById('sum')
let resEl = document.getElementById('result')

const sumCurrent = () => {
    let transSum = parseFloat(transSumEl.value)
    let mount = parseFloat(mountEl.value) 

    let restEl = transSum + mount

   resEl.innerHTML = 'Суммасы:' + restEl.toFixed(2) + 'сом'
}

sumEl.addEventListener('click', sumCurrent)

let re = new Audio("./re.mp3")




