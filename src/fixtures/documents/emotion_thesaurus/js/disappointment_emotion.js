console.log("Wordbank!");

var wordbank = {
  "name": "disappointment_emotion",
  "list": [
    "DISAPPOINTMENT"
    "DEFINITION: a state of dismay or dissatisfaction; feeling let down"
    "PHYSICAL SIGNALS:"
    "Lowering one's head"
    "Lips pressing tight"
    "Shoulders dropping or slumping"
    "A hunched posture"
    "Looking up with hands raised in the why me? position"
    "Collapsing onto a chair or bench"
    "Weaving slightly"
    "A bitter smile"
    "A heavy sigh"
    "Covering one's face with one's hands"
    "Breaking eye contact"
    "Bending the neck forward"
    "Slowly shaking one's head"
    "Tilting the chin down and frowning"
    "Making a noise in one's throat"
    "Swallowing hard"
    "Sagging against a door or wall, reaching out to steady oneself"
    "Dropping the head, eyes closed"
    "Stumbling mid-stride"
    "Face going slack and paling slightly"
    "The mouth falling open"
    "Pressing hands to one's temples"
    "Weaving hands into the hair and pulling"
    "Frowning"
    "A stony expression"
    "Watering eyes that display an inward focus"
    "Wincing"
    "Looking around in confusion or shock"
    "Attempting to hide (covering the head, ducking one's chin)"
    "Restless fiddling"
    "Hands fluttering like they've lost track of what they should be doing"
    "Feet shuffling, kicking at the ground"
    "Rubbing at the back of one's neck"
    "A voice that drops or goes quiet"
    "Whispering No or cursing under the breath"
    "Biting or chewing at the lip"
    "Clutching oneself (gripping the elbows, rubbing the arms)"
    "Pressing a hand to the abdomen"
    "Slinking away ( flight response)"
    "INTERNAL SENSATIONS:"
    "A heart that fee ls like it's shrinkin g"
    "A clenching stomach"
    "Sudd en onset of nausea"
    "A tightening chest"
    "Breaths that hitch"
    "A heaviness in the body"
    "MENTAL RESPONSES:"
    "Negat ivity"
    "A fee ling of dread or hopele ssness"
    "Defeatist thought s about oneself"
    "Want ing to be alone"
    "Feeling worthle ss"
    "CUES OF ACUTE OR LONG-TERM DISAPPOINTMENT:"
    "Berating onese lf"
    "Wallowing (drinking too much, listening to depre ssing songs)"
    "Obsess ing over why things happened the way they did"
    "An inability to move on"
    "MAY ESCALATE TO: DEPRESSION (48) , DEFEAT (42) , RESENTMENT"
    "(130), ANGER (22)"
    "CUES OF SUPPRESSED DISAPPOINTMENT:"
    "A slight lip press"
    "Dropping the should ers, then hitching them up aga in"
    "Offering false cheer, a weak smile"
    "Comforting others"
    "Citing a backup plan or listing more opt ions"
    "Making promi ses"
    "Clasping one's hands in one's lap"
    "Congrat ulating the victor"
    "WRITER'S TIP: Characters experiencing raw emotion often react without"
    "thinking-eit her through dialogue or action. Rash behavior creates the perfect"
    "storm for increased tension and conflict."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "disappointment_emotion",
  "title": "Disappointment Emotion",
  "documentId": "disappointment_emotion",
  "phrases": []
};

for (i = 0; i < wordbank.list.length; i++) {

  allPhrases.phrases.push(
    {
      "phrase": "",
      "phraseToParse": wordbank.list[i],
      "imgData": {
        "url": ""
      },
      "metaData": {}
    });
}

// console.log(allPhraseIds);
console.log(JSON.stringify(allPhrases, 0, 2));
