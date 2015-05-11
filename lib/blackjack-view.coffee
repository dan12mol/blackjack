module.exports =
  class BlackjackView
    constructor: ->
      # create root element
      @rootElement = document.createElement('div')

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

      # append elements to root
      balanceContainer.appendChild(balanceLabels_1)
      balanceContainer.appendChild(@balance)
      balanceContainer.appendChild(balanceLabels_2)
      @rootElement.appendChild(balanceContainer)
      @rootElement.appendChild(@playButton)

    destroy: ->
      @rootElement.remove()

    getElement: ->
      @rootElement

    getBalance: ->
      @balance

    getPlayButton: ->
      @playButton
