// class = start-text make this disappear 

// create a list of words
var wordArray = ["Nicole", "Alyssa", "Mike", "David", "Jean", "Michael", "MiChel", "Josue"]

//track guesses
var lettersGuessed = ["a", "e", "i", "o", "u"];

// give JavaScript a function to execute when onkeyup event fires
document.onkeyup = function (event) {
    var displayWords = document.getElementById("display-words");
    console.log("You pressed:" + event.key)
    console.log("Array Length: " + wordArray.length)

    var randomWord = wordGenerator();
    console.log(randomWord)

    var tempString = "<p>"; // display the paragraph from HTML
    for (var i = 0; i < randomWord.length; i++) { // a for loop to show the vowels in the random word
        if (lettersGuessed.includes(randomWord[i].toLowerCase())) {
            tempString += randomWord[i] + " "; //add randomWord to the temp string -- += means add to the string
        } else {
            tempString += "_ ";
        }
    }
    // output the stuff

    tempString += "</p>"; // end the paragraph 
    displayWords.textContent = tempString; // change the content displayed on HTML
    displayWords.innerHTML = tempString // don't show the <p> or </p> around the word
    console.log(tempString)

}

// Select a random word -- return gets a value back from the function -- assigned outside the generator
var wordGenerator = function () {
    var wordIndex = Math.floor(Math.random() * wordArray.length);
    return wordArray[wordIndex];
}

// make a function called "Update Display"
// check if right / wrong then display the counter
// lettersGuessed.push(event.key.toLowerCase()) -- use in hangman game