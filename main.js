let palindromeInput = document.querySelector("#palindromeInput");
let submitButton = document.querySelector("#submitButton");
let result = document.querySelector("#result");

let submittedText = palindromeInput.value;
let isPalindrome = true;

submitButton.addEventListener('click', () => {
    for (let i = 0; i < submittedText.length / 2; i++) {
        if (submittedText[i].toLowerCase() != (submittedText[submittedText.length - (i + 1)].toLowerCase())) {
            isPalindrome = false;
        }
    }

    if (isPalindrome == true) {
        result.innerHTML = "This is a palindrome";
    } else if (isPalindrome == false) {
        result.innerHTML = "This is not a palindrome";
    }
})