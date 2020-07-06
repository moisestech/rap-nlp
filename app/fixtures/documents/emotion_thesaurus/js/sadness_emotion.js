console.log("Wordbank!");

var wordbank = {
  "name": "sadness_emotion",
  "list": [
    "SADNESS"
    "DEFINITION: characterized by grief or unhappiness"
    "PHYSICAL SIGNALS:"
    "Puffy face or eyes"
    "Eyes appear red"
    "Running makeup"
    "Splotchy skin"
    "Sniffing, wiping at nose"
    "Wincing"
    "Drooping shoulders, a bowed spine"
    "Voice is tearful or breaks"
    "Staring down at one's hands"
    "Stooped posture"
    "Rubbing the heel of a palm against chest"
    "Decreased coordination and clumsiness"
    "A distant or empty stare"
    "A flat, monotone voice"
    "Downtumed facial features"
    "Covering the hands with the face"
    "Arms hang at the sides, slack"
    "Rubbing or pressing a fist against the chest"
    "Crossing one's arms, holding onto one's shoulders"
    "Slumping rather than sitting straight"
    "A heavy-footed walk"
    "A slack expression, wet, dull eyes"
    "Bending forward, laying head on arms"
    "Movements that lack energy"
    "A trembling chin"
    "Crying"
    "Digging for tissues"
    "Touching a cross or fingering jewelry for comfort"
    "Drawing the limbs close to the body"
    "Staring down at one's empty hands . ."
    "Clutching a token that is the focal pomt for the emotion"
    "Quaking shoulders"
    "Decreased interaction with the world at large"
    "INTERNAL SENSATIONS:"
    "An aching chest"
    "Hot or gummy eyelids"
    "A scratchy throat"
    "A runny nose"
    "Soreness in the throat and lungs"
    "The world spinning or seeming to slow down"
    "Heavin ess or tightness in the chest and limbs"
    "A heart that is break ing or aching"
    "Blurred vision"
    "Lack of energy"
    "Body fee ls cold"
    "MENTAL RESPONSES:"
    "Diffic ulty respondin g to questions"
    "An inability to see where the future might go"
    "Turning inward, withdrawing"
    "A desire to escape the sadness (through sleep, drink , companion ship)"
    "A need to be alone"
    "Wishing comfort from others"
    "Avoid ing the painful subject, denial"
    "Wanting the pain to end"
    "CUES OF ACUTE OR LONG-TERM SADNESS :"
    "A pain ed keening"
    "Tears pouring , dripping , or cour sing"
    "Hyperventilatin g, shortness of breath"
    "Loss of appetite"
    "Despair, hopeless ness"
    "Despondency"
    "MAY ESCALATE TO: NOSTALG IA ( 110), DEPRESSION (48) ,"
    "LONELINESS ( 104)"
    "CUES OF SUPPRESSED SADNESS:"
    "Turning away"
    "Halting one 's speech to gain control"
    "Deep breaths or gulping at the air"
    "Biting the lip"
    "Blinking"
    "Changing the subject"
    "Sipping a drink or taking a bite to eat (to prove to othe rs one is stab le)"
    "Quive ry smiles"
    "Hands gripping each other or an object"
    "Covering or cupping the mouth with one 's hand"
    "Focusing on alleviating anot her's pain rather than one's own"
    "Excusing onese lf to use the restroom or get a drink to be alone"
    "WRITER'S TIP: In dialogue, be on the lookout/or where your character"
    "''thinks instead of responds verbally. This leads to unnatural, one-sided"
    "conversations."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "sadness_emotion",
  "title": "Sadness Emotion",
  "documentId": "sadness_emotion",
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
