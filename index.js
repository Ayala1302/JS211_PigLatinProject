const forms = document.getElementById('main-form');
forms.addEventListener('submit', pigLatin);

function pigLatin(event){
    event.preventDefault()
    let i = 0
    const vowelWord = "yay"
    const consWord = "ay"
    const vowels = ["a", "e", "i", "o", "u"]
    let word = document.getElementById("user-input").value
    word = word.trim().toLowerCase();
    let pigLatin = "";

    wordCheck:
    for (i = 0; i <= word.length; i++) {
        for (let j = 0; j <= vowels.length; j++) {
            if (word.charAt(i) == vowels[j]) {
                break wordCheck;
            }
        }
    }
    if (i == 0) {
        pigLatin = word + vowelWord
    }
    else {
        pigLatin = word.slice(i, word.length) + word.slice(0, i) + consWord
    }

    document.getElementById("translation").innerHTML = pigLatin
}

