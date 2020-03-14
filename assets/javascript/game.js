// JavaScript Document
    
    var possibleWords = ["Care Bears", "Shirt Tales", "Drangon Ball Z", "He-Man", "Hanna Barbera", "Thunder Cats", "Teenage Mutant Ninja Turtle", "Duck Tales", "The Smurfs", "Transformers"]
   
    const maxGuess = 12;
    var pauseGame = false;

    var guessedLetters = [];
    var guessingWord = [];
    var wordToMatch;
    var numGuess;
    var wins = 0;

    resetGame()

    document.onkeypress=function(event) {
        if (isAlpha(event.key) && !pauseGame) {
            checkForLetter(event.key.toUpperCase())
        }
    }
    function checkForLetter(letter) {
        var foundLetter=false;
        var correctSound=document.createElement("audio");
        var incorrectSound=document.createElement("audio");
        correctSound.setAttribute("src","assets/mp3/correct.wav");
        incorrectSound.setAttribute("src","assets/sound/mp3/wrong.wav");

        for (var i=0, j=wordToMatch.length; i<j; i++) {
            if (letter === wordToMatch[i]) {
                guessingWord[i] = letter;
                foundLetter = true;
                correctSound.play();
                if (guessingWord.join("") === wordToMatch) {
                    wins++;
                    pauseGame=true;
                    updateDisplay();
                    setTimeout(resetGame,5000);
                }
            }
         }
         if (!foundLetter) {
             incorrectSound.play();
             if (!guessedLetters.includes(letter)) {
                 guessedLetters.push(letter);
                 numGuess--;
             }
             if (numGuess === 0) {
                 guessingWord=wordToMatch.split();
                 pauseGame=true;
                 setTimeour(resetGame, 5000);
             }
         }
         updateDisplay();
    }
    function isAlpha (ch){
        return /[A-Z]$/i.test(ch);
    }
    function resetGame(){
        numGuess = maxGuess;
        pauseGame = false;
        
        wordToMatch = possibleWords[Math.floor(Math.random() * possibleWords.length)].toUpperCase()
        console.log(wordToMatch);

        guessedLetters = [];
        guessingWord = [];

        for (var i=0, j=wordToMatch.length; i < j; i++){
            if (wordToMatch[i] === " ") {
                guessingWord.push(" ")
            } else {
                guessingWord.push("_")
            }
        }
        updateDisplay();
    }
    function updateDisplay() {
        document.getElementById("totalWins").innerHTML = wins;
        document.getElementById("currentWord").innerHTML = guessingWord.join("");
        document.getElementById("remainingGuesses").innerHTML = numGuess;
        document.getElementById("guessedLetters").innerHTML = guessedLetters.join("");
    }



