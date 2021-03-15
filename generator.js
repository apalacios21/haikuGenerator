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
    let word = "";

    let numDash = 1;
    for (let i = 0; i < wordEntered.length; i++) {
        let char = wordEntered[i];
        if (char === "-") {
            numDash++
        } else{
            word += char;
        } if (numDash > 7) {
            $("p#errorMessage").text(`Sorry, that word has too many syllables for a haiku`);
        }
    }
    syllables[numDash][syllables[numDash].length] = word;
}

    function syll5() {
    let line = "";
    let totalSylls = 0;
    while(totalSylls < 5){
        let rand = Math.floor(Math.random()*5)+1;
        if(rand + totalSylls > 5){

        }else{
            totalSylls += rand;
            let innerArrayLength = syllables[rand].length - 1;
            let randInner = Math.floor(Math.random()*innerArrayLength)+1;
            line += syllables[rand][randInner] + " ";
        }
    }
    return line;
}
function syll7(){
    let line = "";
    let totalSyll = 0;
    while(totalSyll < 7){
        let rand = Math.floor(Math.random()*7)+1;
        if(rand + totalSyll > 7){

        }else{
            totalSyll += rand;
            let innerArrayLength = syllables[rand].length - 1;
            let randInner = Math.floor(Math.random()*innerArrayLength)+1;
            line += syllables[rand][randInner] + " ";
        }
    }
    return line;
}

function generateHaiku(){
    let line1 = syll5();
    let line2 = syll7();
    let line3 = syll5();

    $("p#output1").text(line1);
    $("p#output2").text(line2);
    $("p#output3").text(line3);
}



