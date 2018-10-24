var sentence = ""
var vowelNums = [0, 0, 0, 0, 0]
var consonantCount = 0
var characterCount = 0

$("#textBox").on('change keyup paste', function() {
    vowelNums = [0, 0, 0, 0, 0]
    consonantCount = 0
    characterCount = 0
   
    sentence = $('#textBox').val()
   
    sentence = sentence.toLowerCase()

    //count and display consonants and vowels
    parseVowelAmounts(sentence)
    displayNumberOfVowels()
    countConsonants(sentence)

    //display number of characters
    countCharactersAndDisplay(sentence)
   
    //count words
    countWords(sentence)
}
);

function parseVowelAmounts(str){
    vowelCount = 0;
    for(var i = 0; i < str.length; i++) {
        if(isVowel(str.charAt(i))) {
            if(str.charAt(i) === "a") {
                vowelNums[0]++
                vowelCount++
            } 
            if(str.charAt(i) === "e") {
                vowelNums[1]++
                vowelCount++
            }
            if(str.charAt(i) === "i") {
                vowelNums[2]++
                vowelCount++
            }
            if(str.charAt(i) === "o") {
                vowelNums[3]++
                vowelCount++
            }
            if(str.charAt(i) === "u") {
                vowelNums[4]++
                vowelCount++
            }
        }
    }
    return vowelNums
}

function displayNumberOfVowels() {
    $("#a").text(vowelNums[0])
    $("#e").text(vowelNums[1])
    $("#i").text(vowelNums[2])
    $("#o").text(vowelNums[3])
    $("#u").text(vowelNums[4])
}

function countCharactersAndDisplay(string) {
    string = string.replace(/\s/g, "")
    
    for(i = 0; i < string.length; i++) {
        if(isAlpha(string.charAt(i))) {
            characterCount++
        }
    }
    
    $("#characters").text(characterCount)
}

function countConsonants(string) {
    var string = string.replace(/\s/g, "")

    for(i = 0; i < string.length; i++) {
        if(isConsonant(string.charAt(i))) {
            consonantCount++
        }
    }
    $("#consonants").text(consonantCount)
}

function isVowel(character) {
    if(character == 'a') {
        return true
    }
    
    if(character == 'e') {
        return true
    }
    
    if(character == 'i') {
        return true
    }
    
    if(character == 'o') {
        return true
    }
    
    if(character == 'u') {
        return true
    }
}

function isConsonant(character) {
    if(!isVowel(character) && isAlpha(character) === true) {
        return true
        consonantCount++
    } else {
        return false
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
        console.log('very first')

        var wordCount = 0
        var done = false
        var foundWord = false
        var i = 0
        var b = 0
        var e = 0

        while(!done) {
            foundWord = false           
            while(isAlpha(string.charAt(i)) != true && !done) {
                if(i >= string.length) {
                    done = true
                } else {
                    i++
                }
            }
            b = i
            e = i
            while(isAlpha(string.charAt(e)) && done === false && foundWord === false) {
                if(isAlpha(string.charAt(e)) && !isAlpha(string.charAt(e - 1))) {
                    foundWord = true
                    wordCount++
                } else if(isAlpha(string.charAt(e))) {
                    foundWord = true
                } else {
                    e++
                }
            }
            i++
        }
    }
    $("#words").text(wordCount)
}