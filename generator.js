$(document).ready(function(){
    $("button#add").click(addWord);
    $("button#generate").click(generateHaiku);
});

let syllables = [
    [],
    ["key", "tree", "mood", "love"],
    ["picnic", "cactus", "panic", "jacket"],
    ["volcanic", "fantastic", "Wisconsin", "magnetic"],
    ["accomplishment", "unexpected", "disinfectant", "insoluble"],
    ["teleportation", "geometrical", "inharmonious", "unidentical"],
    ["responsibility", "incomprehensible", "inconsiderable", "individualize"],
    ["unconventionality", "contemporaneously","individualistic", "unconformability"]
];


function addWord() {


    let wordEntered = $("input#word").val();

    let numDash = 0;
    for (let i = 0; i < wordEntered.length; i++) {
        let char = wordEntered[1];
        if (char === "-") {
            numDash++
        } else if (numDash > 7) {
            $("p#errorMessage").text(`Sorry, that word has too many syllables for a haiku`);
        }
    }
}

    function generateHaiku(){

        let randRow = Math.floor(Math.random()*7)+1;

        let rowPicked = syllables[randRow];

        let randCol = Math.floor(Math.random() * rowPicked.length);

        let wordChosen = syllables[randRow][randCol];

        let newRandNum = Math.floor(Math.random()*7)+1;
        while(rowPicked<7){
            newRandNum += rowPicked;
            $("p#output").text(wordChosen + " ");
        }

    }

