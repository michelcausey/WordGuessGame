// create a list of words
var wordArray = ["Flute", "Clarinet", "Oboe", "Bassoon", "Saxophone", "Trumpet", "Baritone", "Trombone", "Sousaphone", "Drums", "Guitar", "Violin", "Cello"]

//track guesses
var lettersGuessed = [];

var displayWords = $(".display-words")

document.onkeyup = function (event) {
    var displayWords = document.getElementById("display-words");
    console.log("You pressed:" + event.key)
    console.log("Array Length: " + wordArray.length)

    var randomWord = wordGenerator();
    console.log(randomWord)

    var tempString = "";
    for (var i = 0; i < randomWord.length; i++) {
        if (lettersGuessed.includes(randomWord[i].toLowerCase())) {
            tempString += randomWord[i] + " ";
        } else {
            tempString += "_ ";
        }
    }
    console.log(tempString);
}

for (i = 0; i < wordArray.length; i++) {
    // if the letter guessed is in the random word (using .charAt())
    // then display the letter
    // else if the letter guessed is not in the random word
    // then display "_" instead    
    // display the guessed letter on the screen under the jumbotron
    // after 10 incorrect guesses, display "GAME OVER"
    // if user guesses the correct word, display "You Win!"
    // track the number of wins & losses on the

// Select a random word -- return gets a value back from the function -- assigned outside the generator
var wordGenerator = function () {
    var wordIndex = Math.floor(Math.random() * wordArray.length);
    return wordArray[wordIndex];
}
}