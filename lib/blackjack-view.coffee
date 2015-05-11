module.exports =
  class BlackjackView
    constructor: ->
      # create root element
      @rootElement = document.createElement('div')
      @rootElement.style['min-width'] = '300px'

      # balance label
      balanceContainer = document.createElement('h3')
      balanceLabels_1 = document.createElement('span')
      balanceLabels_1.textContent = 'Balance: '
      balanceLabels_2 = document.createElement('span')
      balanceLabels_2.textContent = '$'
      @balance = document.createElement('span')

      # play button
      @playButton = document.createElement('button')
      @playButton.textContent = 'Play'

      # dealerContainer
      dealerContainer = document.createElement('div')
      dealerContainerTitle = document.createElement('h3')
      dealerContainerTitle.textContent = 'Dealer'
      dealerContainerCards = document.createElement('div')
      @dealerCards = document.createElement('ul')
      @dealerCards.classList.add('list-group')
      dealerContainer.appendChild(dealerContainerTitle)
      dealerContainerCards.appendChild(@dealerCards)
      dealerContainer.appendChild(dealerContainerCards)

      # playerContainer
      playerContainer = document.createElement('div')
      playerContainerTitle = document.createElement('h3')
      playerContainerTitle.textContent = 'You'
      playerContainerCards = document.createElement('div')
      @playerCards = document.createElement('ul')
      @playerCards.classList.add('list-group')
      playerContainer.appendChild(playerContainerTitle)
      playerContainerCards.appendChild(@playerCards)
      playerContainer.appendChild(playerContainerCards)

      # append elements to root
      balanceContainer.appendChild(balanceLabels_1)
      balanceContainer.appendChild(@balance)
      balanceContainer.appendChild(balanceLabels_2)
      @rootElement.appendChild(balanceContainer)
      @rootElement.appendChild(@playButton)
      @rootElement.appendChild(dealerContainer)
      @rootElement.appendChild(playerContainer)

    destroy: ->
      @rootElement.remove()

    getElement: ->
      @rootElement

    getBalance: ->
      @balance

    getPlayButton: ->
      @playButton

    getDealerCards: ->
      @dealerCards

    getPlayerCards: ->
      @playerCards
