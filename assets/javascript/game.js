// JavaScript Document

    var possibleWords = ["Care Bears", "Shirt Tales", "Dragon Ball Z", "He Man", "Hanna Barbera", "Thunder Cats", "Teenage Mutant Ninja Turtle", "Duck Tales", "The Smurfs", "Transformers"];
   
    var maxGuess = 8;
    var pauseGame = false;
    var guessedLetters = [];
    var guessingWord = [];
    var wordToMatch = "";
    
    var wins = 0;
    var losses = 0;
    var numGuessRemain = maxGuess;
    var deBug = false;

    

    resetGame ();

    document.onkeypress=function(event) {
        if (isAlpha(event.key) && !pauseGame) {
            checkForLetter(event.key.toUpperCase())
        }
    }
    function checkForLetter(letter) {
        var correctLetter = false;
        
        for (var i = 0, x=wordToMatch.length; i < x; i++) {
            if (letter === wordToMatch[i]) {
                guessingWord[i] = letter;
                correctLetter = true;
            }
         }

        var tempGuess = guessingWord.join("");
         while (tempGuess.includes('\xa0\xa0\xa0')) {
             tempGuess=tempGuess.replace('\xa0\xa0\xa0'," ");
         }
 
         if (tempGuess === wordToMatch) {
            console.log("victory");
            document.getElementById("correctSound").play();
            wins++;
            pauseGame=true;
            updateDisplay();
            setTimeout(resetGame, -1);
        }

         if (!correctLetter) {
             if (!guessedLetters.includes(letter)) {
                 if(numGuessRemain > 1){
                     guessedLetters.push(letter);
                     numGuessRemain--;
                 }
                 else {
                    guessingWord=wordToMatch.split();
                    pauseGame=true;
                    setTimeout(resetGame, -1);
                    incorrectSound.play();
                    losses++;
                    pauseGame=true;
                    updateDisplay();
               }
            }
         }
         updateDisplay();
    }
    function isAlpha (ch){
        return /^[A-Z]$/i.test(ch);
    }
    function resetGame(){
        numGuessRemain = maxGuess;
        pauseGame = false;
        
        if (deBug) {
            wordToMatch = possibleWords[3].toUpperCase();
        }
        else {
            wordToMatch = possibleWords[Math.floor(Math.random() * possibleWords.length)].toUpperCase()
        }
       
        guessedLetters = [];
        guessingWord = [];

        for (var i=0, x=wordToMatch.length; i < x; i++){
            if (wordToMatch[i] === " ") {
                guessingWord.push('\xa0\xa0\xa0');   //create a string with multiple words
            } 
            else {
                guessingWord.push("_ ")        //space after _ to add seperation between words
            }
        }
        updateDisplay();
    }
    //user getElementById to grab the id from html
    function updateDisplay() {
        document.getElementById("totalWins").innerHTML = wins;
        document.getElementById("totalLosses").innerHTML = losses;
        document.getElementById("currentWord").innerHTML = guessingWord.join("");
        document.getElementById("remainingGuesses").innerHTML = numGuessRemain;
        document.getElementById("guessedLetters").innerHTML = guessedLetters.join("");
    }



    