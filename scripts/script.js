console.log('hello world!')
let isDarkMode = true
if ($.jStorage.get('display-mode') === null) {
    $.jStorage.set("display-mode", isDarkMode)
}

let mainContentChildren = document.querySelector('.main-content').children

for (const e of mainContentChildren) {
    e.style.opacity = 0
    e.style.transform = "translateY(50px)"
}


let games = [
    {
        name: "Unhinged Hangman",
        description: '我的第一個遊戲! 他是一個奇特的猜字遊戲，有時候很卡請見諒。',
        thumbnail: '../images/unhinged-hangman.png',
        linkTo: 'https://gamingdimigd.github.io/UnhingedHangman/',
        enabled: true,
        id: "unhinged-hangman",
    },
]
const gameList = document.querySelector(".games")
games.forEach(game => {
    let item = document.createElement("div")
    item.classList.add("game-item")
    item.classList.add(game.id)
    let thumbnail = document.createElement("img")
    thumbnail.src = game.thumbnail
    thumbnail.alt = game.name
    let title = document.createElement("h2")
    title.innerText = game.name
    let desc = document.createElement("b")
    desc.innerHTML = game.description
    let play = document.createElement("button")
    play.innerText = '遊玩!'
    play.onclick = () => {
        location.href = game.linkTo
    }
    play.disabled = !game.enabled
    let div = document.createElement("div")
    div.classList.add("container")
    div.append(title, desc, play)
    item.append(thumbnail, div)
    gameList.appendChild(item)
})

const gameListAnim = () => {
    let gameList = document.querySelector('.games')
    let games = gameList.querySelectorAll(".game-item")
    let gi = 0
    let idk = setInterval(() => {
        if (gi >= games.length) return clearInterval(idk)
        games[gi].style.opacity = 1
        games[gi].style.transform = 'translateY(0px)'
        gi++
    }, 100)
    $('.unhinged-hangman img')[0].addEventListener( 'click', () => {
        location.href = 'https://drive.google.com/file/d/1X48Ax0txDmQCIgqnrv_JNECfNak4A7u3/view?usp=sharing'
    })
    
    $('.title-container img')[0].addEventListener( "click", () => {
        location.href = 'https://drive.google.com/file/d/1LSY_2UHQrxslVSuXSb8X63wTJeL79qU3/view?usp=sharing'
    })

    $('.specil')[0].addEventListener( 'click', () => {
        location.href = 'https://drive.google.com/file/d/13c8RGHyjl8I0jI_SuC-yoNKtXQdJdGP-/view?usp=sharing'
    })
}
const loadPage = () => {
    $('.navbar')[0].style.height = '60px'
    $('.title-container img')[0].style.height = '2rem'
    $('.title-container img')[0].style.marginTop = '5px'
    $('.title')[0].style.fontSize = '2rem'
    $('.navbar')[0].style.justifyContent = 'space-between'
    $('.title-container')[0].style.transform = 'translateX(0)'
    $('.title-container')[0].style.marginLeft = '5px'
    setTimeout(() => {
        $('.buttons')[0].style.opacity = 1
        document.querySelectorAll('.navbut').forEach(e => {
            e.disabled = false
        })
        let mainContent = document.querySelector(".main-content")
        let mcElements = mainContent.children
        let elementIndex = 0
        let coolAnimation = setInterval(() => {
            if (elementIndex >= mcElements.length) {
                clearInterval(coolAnimation)
                gameListAnim()
                return
            }
            mcElements[elementIndex].style.opacity = 1
            if (mcElements[elementIndex].disabled) mcElements[elementIndex].style.opacity = 0.25
            mcElements[elementIndex].style.transform = 'translateY(0px)'
            elementIndex++
        }, 300)
    }, 650)
}
document.body.onclick = () => {
    loadPage()
    document.body.click = null
}
setTimeout(loadPage, 3000)

const toggleMode = () => {
    isDarkMode = !isDarkMode
    $.jStorage.set("display-mode", isDarkMode)
    document.documentElement.style.setProperty('--w', isDarkMode ? '#fff' : '#000')
    document.documentElement.style.setProperty('--b', isDarkMode ? '#000' : '#fff')
    document.documentElement.style.setProperty('--dg', isDarkMode ? '#003c00' : '#0f0')
    document.documentElement.style.setProperty('--dw', isDarkMode ? '#ccc' : '#333')
    document.documentElement.style.setProperty('--lb', isDarkMode ? '#333' : '#ccc')
    document.documentElement.style.setProperty('--g', isDarkMode ? '#0f0' : '#003c00')
    $('.toggle-mode')[0].innerHTML = isDarkMode ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>'
}

if ($.jStorage.get("display-mode") === false) {
    toggleMode()
}

