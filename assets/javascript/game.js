// JavaScript Document
    
    var possibleWords = ["Care Bears", "Shirt Tales", "Dragon Ball Z", "He Man", "Hanna Barbera", "Thunder Cats", "Teenage Mutant Ninja Turtle", "Duck Tales", "The Smurfs", "Transformers"]
   
    var maxGuess = 8;
    var pauseGame = false;
    var guessedLetters = [];
    var guessingWord = [];
    var wordToMatch;
    var numGuess = 0;
    var wins = 0;
    var lost = 0;

    var correctSound=document.createElement("audio");
    var incorrectSound=document.createElement("audio");
    correctSound.setAttribute("src","assets/mp3/correct.wav");
    incorrectSound.setAttribute("src","assets/mp3/wrong.wav");

    resetGame()

    document.onkeypress=function(event) {
        if (isAlpha(event.key) && !pauseGame) {
            checkForLetter(event.key.toUpperCase())
        }
    }
    function checkForLetter(letter) {
        var guessedLetters = false;

        for (var i=0, x=wordToMatch.length; i < x; i++) {
            if (letter === wordToMatch[i]) {
                guessingWord[i] = letter;
                guessedLetters = true;
                if (guessingWord.join("") === wordToMatch) {
                    correctSound.play();
                    wins++;
                    pauseGame=true;
                    updateDisplay();
                    setTimeout(resetGame, -1);
                }
            }
         }
        
         if (!guessedLetters) {
             if (!guessedLetters.includes(letter)) {
                 guessedLetters.push(letter);
                 numGuess--;
             
             if (numGuess === 0) {
                 guessingWord=wordToMatch.split();
                 pauseGame=true;
                 setTimeout(resetGame, -1);
                 incorrectSound.play();
                 lost++;
                 pauseGame=true;
                 updateDisplay();
            
                }
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

        for (var i=0, x=wordToMatch.length; i < x; i++){
            if (wordToMatch[i] === " ") {
                guessingWord.push('\xa0\xa0\xa0');
            } 
            else {
                guessingWord.push("_ ")
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



