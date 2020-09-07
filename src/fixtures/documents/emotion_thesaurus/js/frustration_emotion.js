console.log("Wordbank!");

var wordbank = {
  "name": "frustration_emotion",
  "list": [
    "FRUSTRATION"
    "DEFINITION: vexation caused by unresolved problems or unmet needs; the"
    "feeling of being hindered"
    "PHYSICAL SIGNALS:"
    "Pinching the lips together"
    "Holding hands behind the back, gripping one's own wrist"
    "Rushed speech"
    "Tapping one's fingers to release energy"
    "Pointing with an index finger"
    "Scratching or rubbing the back of the neck"
    "Shaking the head"
    "Jerky movements (talking with the hands, changing direction mid-stride)"
    "Pacing in short spans"
    "Stiff posture, rigid muscles"
    "Clenching the jaw"
    "Speaking through the teeth with forced restraint"
    "An impatient snort or sneer, cursing under the breath"
    "Drawing breath and releasing it before speaking"
    "Splaying hands out wide to stretch, then relaxing them"
    "Baring one's teeth"
    "Throwing hands up in an 'I give up' gesture"
    "Stalking away from someone, leaving in a huff"
    "Attempting to hurt through name-calling and personal jabs"
    "Speaking without thought, often leading to regret"
    "Slamming a door"
    "Grabbing one's hair in clumps, looking up at the sky"
    "A heavy sigh"
    "Laying one's head down on the table"
    "Stilted speaking"
    "Eyes squinting, tightening"
    "A harried appearance"
    "Running hands through the hair"
    "Fists tight, fingernails biting into the palms"
    "A pinched, tension-filled expression"
    "Scrubbing a hand over the face"
    "Pounding a fist against the tabletop"
    "Scrunching up the face and then releasing, trying to regain calm"
    "Holding one's head in one's hands"
    "A high chin"
    "Arms crossing in front of the chest"
    "Clumsiness due to rushing (slopping coffee, knocking something over)"
    "Theatrical groaning"
    "Restlessness"
    "INTERN AL SENSATlONS :"
    "Throat clos ing up"
    "Hardenin g of the stomach"
    "Tightness in the chest"
    "High blood pressure"
    "Headache"
    "Jaw pain"
    "MENTAL RESPONSES:"
    "Extreme focus on problem so lving"
    "Replaying a scene or event over and over in one 's mind, obsess ing over it"
    "Self-talking to calm down, to think stra ight"
    "A need to ask questions and rehash informat ion"
    "Reining in one 's emotion s before damaging relationships"
    "CUES OF ACUTE OR LONG-TERM FRUSTRATION:"
    "Shouting , yelling , ranting , screaming, or criticizing"
    "Crying, sobbing"
    "Pleading or bargaining: Please stop!"
    "Storming out of a room"
    "An inability to sleep or relax"
    "Profuse sweating"
    "Using more force than necessary (stomping feet, throwing instead of handing off)"
    "A display of vio lence (kicking, grabbing, shaking, or destroying something in"
    "release)"
    "A tantrum (screaming , body flung down on the floor , crying)"
    "MAY ESCALATE TO: CONTEMPT (38), ANGER (22), IMPATIENCE (94)"
    "CUES OF SUPPRESSED FRUSTRATION:"
    "Gritted teeth"
    "Swiping at tear s, trying to hide them"
    "Silence or minimal responses"
    "Briefly closing one's eyes"
    "Taking a deep breath"
    "Scraping a hand over the face as if to wash away emotion"
    "Excusing oneself and leaving"
    "Trying to shake or roll tension from the shoulders"
    "WRITER'S TIP: Use a character's intuition to draw the reader more fully into"
    "the scene. If you show what has primed their intuition clearly, the reader's own"
    "gut will respond and they will pay extra close attention. The flash of intuition"
    "must pay off in some way to complete the circle."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "frustration_emotion",
  "title": "Frustration Emotion",
  "documentId": "frustration_emotion",
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
