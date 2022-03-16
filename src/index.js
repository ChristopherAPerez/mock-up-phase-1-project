//Project Code//
document.addEventListener("DOMContentLoaded", () => {

    function fetchCards(name){
        fetch(`http://localhost:3000/${name}`)
        .then(response => response.json())
        .then(cardData => cardData.forEach(function(card){
            renderCard(card)
        }))
    }

    function renderCard(ygoCard){
        let card = document.createElement('li')
        card.className = 'duelCard'
        card.innerHTML = `
        <img id="${ygoCard.name} "src="${ygoCard.card_images[0].image_url}" width = "50" height = "50">
        `
        document.querySelector('#card-list').appendChild(card)

        let highlight = document.querySelector('#highlight')
        let highlightInfo = document.querySelector('#highlightInfo')

        card.addEventListener('click', function(){
            highlight.innerHTML = ``
            highlightInfo.innerHTML = ``
            highlightCard(ygoCard)

            if(ygoCard.atk >= 0){
                highlightSpellTrap(ygoCard)
                highlightMonster(ygoCard)
            }

            if(ygoCard.type === "Spell Card" || ygoCard.type === "Trap Card"){
                highlightSpellTrap(ygoCard)
            }
        })
    }


    function highlightCard(card){
        let cardData = document.createElement('div')
        cardData.className = 'highlight'
        cardData.innerHTML = `
        <img src="${card.card_images[0].image_url}" width = "100%" height = "400">
        `
        document.querySelector('#highlight').appendChild(cardData)
    }

    function highlightMonster(card){

        let cardInfo = document.createElement('div')
        cardInfo.className = 'highlightInfo'
        cardInfo.innerHTML = `
        <p>ATK/${card.atk}  DEF/${card.def}</p>
        `
        document.querySelector('#highlightInfo').appendChild(cardInfo)
    }

    function highlightSpellTrap(card){
        let cardData = document.createElement('div')
        cardData.className = 'highlightInfo'
        cardData.innerHTML = `
        <p width="1000px" >Description: ${card.desc}</p>
        `
        document.querySelector('#highlightInfo').appendChild(cardData)
    }

//////////////////////////////////////////////////////////////////

    let yugi = document.getElementById('yugi')
    let joey = document.getElementById('joey')
    let seto = document.getElementById('seto')
    let pegasus = document.getElementById('pegasus')
    let favorite = document.getElementById('myFavorites')

    let cardList = document.querySelector('#card-list')

    yugi.addEventListener('click', () =>{
        cardList.innerHTML = ``
        fetchCards("starterDeckyugi")
    })
    joey.addEventListener('click', () =>{
        cardList.innerHTML = ``
        fetchCards("starterDeckjoey")
    })
    seto.addEventListener('click', () =>{
        cardList.innerHTML = ``
        fetchCards("starterDeckkaiba")
    })
    pegasus.addEventListener('click', () =>{
        cardList.innerHTML = ``
        fetchCards("starterDeckpegasus")
    })

    favorite.addEventListener('click', () =>{
        cardList.innerHTML = ``
        fetchCards("myFavorites")
    })

///////////////////////////////////////////////////////////////////////

});