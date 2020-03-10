// JavaScript Document
var $ = function (id) {
    return document.getElementById(id);
}
// step 1 create an array to hold the potential answers
// step 2 generate a random number to pick a word from the array 

// declare and initialize array 
    var game = ["Care Bears", "Pound Puppies", "Drangon Ball Z", "He-Man", "Snorks", "Thunder Cats", "Teenage Mutant Ninja Turtle", "Duck Tales", "Gummi Bears", "The Smurfs", "The Jetsons", "Transformers",   ]
    var choice = Math.floor(Math.random()*12);
        // max - min + 1 is 11 - 0 + 1 = 12
    var answer = game[choice];
        // answer stored in index of choice which is game which is array and choice is the index
        // storing the length of answer in a variable called myLength
   
   
   
// step 3 determin how many letters need to be guessed to win the game
// step 4 set how many guesses the user is allowed
// step 5 display _for each letter in the word to be guessed
// step 6 break the string answer apart and store it as an array of letters
    var myLength = answer.length;
    var display=[myLength];
    var win = myLength;
    var letters = answer.split('');
    var attemptsLeft= 10;
    // pick any attempts you want to make it hard or easy
    var output="";
    // output is how the _ _ _ are displayed
    var userLetter="";
    // what going to obtain when the user clicks gues
// these variables are a global scope used in any function created

    var setup = function()
    {
        for (var i=0; i<answer.length; i++)
    {
        display[i] = "_";
        output = output + display[i];
    }
    document.getElementById("game").innerHTML = output;
    output ="";
    }

// step 7 get a letter from the user 
// step 8 compare it to each letter in the answer IF the letter matches a letter in the answer: replace the _ with a letter in the display substract one from the numbers of letters thaat need to be guessed to win
// when the user selects yes function 

    var submit = function()
    {
        output = ""; 
        userLetter=$("letter").value;
        $("letter").value="";

        for (var c=0; c<answer.length; c++)
        {
                alert(letters[c]);
                if (userLetter.toUpperCase() == letters[c])
                {
                    display[c] = userLetter.toUpperCase();
                    win--;
                }
                    output = output + dispay[c] + "";
        }
        document.getElementById("game").innerHTML = output;
        output="";
        attemptsLeft--;

        if (win < 1)
        {
            document.getElementById("guesses").innerHTML = "YOU WIN!!!";
        }
        else if (attemptsLeft < 1)
        {
         document.getElementById("guesses").innerHTML = "YOU LOSE!!!";
        }
        else
        {
            document.getElementById("guesses").innerHTML = "You have" + attemptsLeft + "guesses left";
        }
    }


