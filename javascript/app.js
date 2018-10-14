var instruments = ["Flute", "Clarinet", "Oboe", "Bassoon", "Saxophone", "Trumpet", "Baritone", "Trombone", "Sousaphone", "Drums", "Guitar", "Violin", "Cello"]

var lettersGuessed = [];
var underscore = [];
var chosenWord = "";
var answer = []
var wordToDisplay
var guessCount = 0
var wins = 0
var losses = 0
var acceptLetters = "abcdefghijklmnopqrstuvwxyz"
var gameStarted = false

var displayWords = document.getElementById("display-words")
var underscoreString = document.getElementById("underscore")
var winCount = document.getElementById("games-won")
var lossCount = document.getElementById("games-lost")
var guessedLetters = document.getElementById("letters-guessed")
var keyToStart = document.getElementById("key-to-start")
var guessesRemaining = document.getElementById("guesses-remaining")

var wordGenerator = function () {
    var wordIndex = Math.floor(Math.random() * instruments.length);
    return instruments[wordIndex];
}

var randomWord = wordGenerator();
console.log(randomWord)

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase()

    if (gameStarted === false) {
        start()
    } else {
        if (gameStarted === true) {
            if (acceptLetters.includes(userGuess)) {
                if (lettersGuessed.includes(userGuess) || lettersGuessed.includes(userGuess.toUpperCase())) {
                    alert("You have already guessed: " + userGuess + " Please select another letter.")
                } else {
                    lettersGuessed.push(userGuess.toUpperCase())
                    lettersGuessed.innerHTML = guessedLetters
                    guessCount = (guessCount - 1)
                    guessesRemaining.innerHTML = guessCount
                }
            }
        }
    }

    for (i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i].toLowerCase() === userGuess) {
            answer[i] = chosenWord[i]
            displayWords.innerHTML = answer.join(" ")
        }
    }

    if (guessCount === 0 && answer.includes("_")) {
        alert("Game Over!")
        losses++
        lossCount.innerHTML = ("Losses: " + losses)
        winCount.innerHTML = ("Wins: " + wins)
        endGame()
    } else if (!answer.includes("_")) {
        alert(chosenWord + " is correct, You Win!")
        wins++
        winCount.innerHTML = ("Wins: " + wins)
        lossCount.innerHTML = ("Losses: " + losses)
        endGame()
    }
}

var start = function () {
    gameStarted = true
    answer = []
    lettersGuessed = []
    guessCount = 10
    guessesRemaining.innerHTML = 10
    lettersGuessed.innerHTML = []
    chosenWord = wordGenerator()
    for (i = 0; i < chosenWord.length; i++) {
        answer[i] = "_"
    }
    displayWords.innerHTML = answer.join(" ")
    keyToStart.innerHTML = "<style>visiblity: hidden</style>"
}

var endGame = function () {
    keyToStart.innerHTML = "<style>visibility: visible</style> Press any key to play again!"
    gameStarted = false
}