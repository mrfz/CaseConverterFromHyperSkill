let TextArea = document.getElementById("text-area");
let UpperButton = document.getElementById("upper-case");
let LowerButton = document.getElementById("lower-case");
let ProperButton = document.getElementById("proper-case");
let SentenceButton = document.getElementById("sentence-case");
let SaveTextButton = document.getElementById("save-text-file");

UpperButton.addEventListener("click", function() {
    TextArea.value = TextArea.value.toUpperCase();
});

LowerButton.addEventListener("click", function() {
    TextArea.value = TextArea.value.toLowerCase();
});

ProperButton.addEventListener("click", function() {
    let arrText = TextArea.value.split(" ")
    let ProperArray = arrText.map(CapitaliseFirstLetter);
    TextArea.value = ProperArray.join(" ");
});

SentenceButton.addEventListener("click",function() {
    let arrText = TextArea.value.split(". ")
    let SentenceArray = arrText.map(CapitaliseFirstLetter);
    TextArea.value = SentenceArray.join(". ");
});

SaveTextButton.addEventListener("click", function() {
    download("text.txt",TextArea.value);
});

function CapitaliseFirstLetter (word) {
    return (word.slice(0,1).toUpperCase() + word.slice(1,word.length).toLowerCase());
};

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}