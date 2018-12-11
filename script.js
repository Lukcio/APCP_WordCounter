var sentence = "";
var vowelNums = [0, 0, 0, 0, 0]
var consonantCount = 0;
var characterCount = 0;
var uniqueWordsArray = [];
var wordsArray = [];

var outputBox = $("#outputBox");

//$("#largeTextBox").on('change keyup paste', function() {
$("#indexButton").click(function() {
    outputBox.val("");
    console.log("first")
    vowelNums = [0, 0, 0, 0, 0];
    consonantCount = 0;
    characterCount = 0;
    wordsArray = [];

    uniqueWordsArray = [];
   
    sentence = $('#largeTextBox').val();
   
    sentence = sentence.toLowerCase();

    //count and display consonants and vowels
    parseVowelAmounts(sentence);
    displayNumberOfVowels();
    countConsonants(sentence);

    //display number of characters
    countCharactersAndDisplay(sentence);
   
    //count words
    countWords(sentence);
    displayWords(wordsArray);
}
);

function parseVowelAmounts(str){
    vowelCount = 0;
    for(var i = 0; i < str.length; i++) {
        if(isVowel(str.charAt(i))) {
            if(str.charAt(i) === "a") {
                vowelNums[0]++;
                vowelCount++;
            } 
            if(str.charAt(i) === "e") {
                vowelNums[1]++;
                vowelCount++;
            }
            if(str.charAt(i) === "i") {
                vowelNums[2]++;
                vowelCount++;
            }
            if(str.charAt(i) === "o") {
                vowelNums[3]++;
                vowelCount++;
            }
            if(str.charAt(i) === "u") {
                vowelNums[4]++;
                vowelCount++;
            }
        }
    }
    return vowelNums;
}

function displayNumberOfVowels() {
    $("#a").text(vowelNums[0]);
    $("#e").text(vowelNums[1]);
    $("#i").text(vowelNums[2]);
    $("#o").text(vowelNums[3]);
    $("#u").text(vowelNums[4]);
}

function countCharactersAndDisplay(string) {
    string = string.replace(/\s/g, "");
    
    for(i = 0; i < string.length; i++) {
        if(isAlpha(string.charAt(i))) {
            characterCount++;
        }
    }
    
    $("#characters").text(characterCount);
}

function countConsonants(string) {
    var string = string.replace(/\s/g, "");

    for(i = 0; i < string.length; i++) {
        if(isConsonant(string.charAt(i))) {
            consonantCount++;
        }
    }
    $("#consonants").text(consonantCount);
}

function isVowel(character) {
    if(character == 'a') {
        return true;
    }
    
    if(character == 'e') {
        return true;
    }
    
    if(character == 'i') {
        return true;
    }
    
    if(character == 'o') {
        return true;
    }
    
    if(character == 'u') {
        return true;
    }
}

// function isConsonant(character) {
//     if(!isVowel(character) && isAlpha(character) === true) {
//         return true
//         consonantCount++
//     } else {
//         return false
//     }
// }

function isConsonant(character) {
    consonantString = 'bcdfghjklmnpqrstvwxyz';

    if(consonantString.indexOf(character) === -1) {
        return false;
    } else {
        return true;
    }
}

function isAlpha(str) {
    if(str.length === 1 && str.match(/[a-z]/)) {
        return true
        characterCount++
    } else {
        return false
    }
}

function countWords(string) {
    
    if(string != "" || string != " ") {
        //console.log('very first');

        var wordCount = 0;
        var i = 0;
        var b = 0;
        var e = 0;

        while(i < string.length) {
            //foundWord = false           
            while(!isAlpha(string.charAt(i)) && i < string.length) {
                i++;
            }
            b = i;

            while(isAlpha(string.charAt(i)) && i < string.length) {
                i++;
            }
            e = i;

            updateWordArray(b, e, string);

            if(b != i) {
                wordCount++;
            }
        }
    }
    $("#words").text(wordCount);
}

function updateWordArray(b, e, sentence) {
    //var uniqueWord = true;
    var wordObjectKey = sentence.substring(b, e);
    var elementPos;

    indexer(wordObjectKey)
    console.log(wordsArray);
}

function indexer(word) {
    var wordIndex = wordsArray.findIndex(
        function(wordObject) {
            return wordObject.wordObjectKey === word;
        }
    );

    if(wordIndex < 0) {
        wordsArray.push({wordObjectKey:word, count:1})
    } else {
        wordsArray[wordIndex].count++;
    }
}

function displayUniqueWords() {
    for(i = 0; i < uniqueWordsArray.length; i++) {
        //console.log(outputBox) HERE-TEXTAREA.length is 1
        outputBox.append(uniqueWordsArray[i] + "\n");
    }
}

function displayWords(wordsArray) {
    for(i = 0; i< wordsArray.length; i++) {
        outputBox.append((wordsArray[i].wordObjectKey)+ ":" + wordsArray[i].count + "\n");
        // console.log(wordsArray[i].wordObjectKey);
        // console.log(wordsArray[i].count);
    }
    console.log("second")
}

