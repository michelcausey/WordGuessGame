// create a list of words
var wordArray = ["Flute", "Clarinet", "Oboe", "Bassoon", "Saxophone", "Trumpet", "Baritone", "Trombone", "Sousaphone", "Drums", "Guitar", "Violin", "Cello"]

//track guesses
var lettersGuessed = [];

var underscore = [];

var displayWords = $(".display-words")
var underscore = $("#underscore")
var tempString = "";
var userGuess
var wordToDisplay

var wordGenerator = function () {
    var wordIndex = Math.floor(Math.random() * wordArray.length);
    return wordArray[wordIndex];
}

var randomWord = wordGenerator();
console.log(randomWord)

document.onkeyup = function (event) {
    var displayWords = document.getElementById("display-words");
    userGuess = event.key.toLowerCase()
    console.log("You pressed:" + event.key)
    console.log("Array Length: " + wordArray.length)

    for (var i = 0; i < randomWord.length; i++) {
        if (userGuess === randomWord[i].toLowerCase()) {
            tempString += userGuess
        } else {
            tempString += "_ ";
        }
    } // use splice or slice to make the indexes match from randomWord to wordToDisplay
    console.log(tempString);
}
