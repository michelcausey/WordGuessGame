// class = start-text make this disappear 

// create a list of words
var wordArray = ["Flute", "Clarinet", "Oboe", "Bassoon", "Saxophone", "Trumpet", "Baritone", "Trombone", "Sousaphone", "Drums", "Guitar", "Violin", "Cello"]

//track guesses
var lettersGuessed = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeyup = function (event) {
    var displayWords = document.getElementById("display-words");
    console.log("You pressed:" + event.key)
    console.log("Array Length: " + wordArray.length)

    var randomWord = wordGenerator();
    console.log(randomWord)

    var tempString = "<p>";
    for (var i = 0; i < randomWord.length; i++) { 
        if (lettersGuessed.includes(randomWord[i].toLowerCase())) {
            tempString += randomWord[i] + " "; 
        } else {
            tempString += "_ ";
        }
    }

    tempString += "</p>";
    console.log(tempString);

}

// Select a random word -- return gets a value back from the function -- assigned outside the generator
var wordGenerator = function () {
    var wordIndex = Math.floor(Math.random() * wordArray.length);
    return wordArray[wordIndex];
}

// * display the number of spaces in the chosen word under the jumbotron
// * display the letters already guessed -- make sure letters can't be guessed multiple times
// * display number of remaining guesses before game over
// * replace spaces in the word with the correctly guessed letter
// * notice stating "Gave Over" or "You Win"
// * make the style look nicer
