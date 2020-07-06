console.log("Wordbank!");

var wordbank = {
  "name": "relief_emotion",
  "list": [
    "RELIEF"
    "DEFINITION: the alleviation or lightening of oppressive stressors"
    "PHYSICAL SIGNALS:"
    "Covering the mouth with a hand"
    "Shaking head and closing the eyes"
    "Gasping"
    "Trembling hands"
    "Reaching out to another for comfort"
    "Slumping posture"
    "A slow smile"
    "Using humor to lighten the moment"
    "Shaky laughter"
    "Sagging against a wall or person"
    "Pressing the palms to the eyes"
    "Asking for the good news to be repeated"
    "Wobbly legs"
    "Buckling knees"
    "Stumbling back a step"
    "Flopping back in a chair"
    "A gaping mouth"
    "Struggling to speak, to find the right words"
    "An unsteady walk"
    "Crying or calling out in release"
    "Asking redundant questions to assure that the moment is real"
    "Eyes going up, looking heavenward"
    "Letting out a huge breath"
    "Rocking back and forth"
    "Eyes shining, locked on the source of relief"
    "A slight moan"
    "Lips parting"
    "Showing kinship with others involved (hugging, reaching for their hands)"
    "Pressing one's hands to the stomach"
    "A palm pressed to the heart"
    "A bowed head"
    "Starting to fall then catching oneself"
    "Closed eyes, compulsive nodding"
    "Letting the head fall back"
    "Uttering a soft curse or thanking God"
    "Making the sign of the cross (if religious)"
    "INTERNAL SENSATIONS:"
    "Dry mouth"
    "Weak muscles"
    "124"
    "An unexpect ed release of all tension"
    "Tears welling up behind eye lids"
    "A sudden lightnes s or giddiness"
    "MENTAL RESPONSES:"
    "Wanting to be held"
    "A desire to be still and let the relief sink in"
    "Gratitude"
    "Jumbl ed thoughts"
    "An inability to formulate an appropr iate verbal response"
    "Postponem ent of residual loss or pain until a later time"
    "CUES OF ACUTE OR LONG-TERM RELIEF :"
    "Breaking down , tears"
    "Exuberant response s Uumping up and down , shouting , running , hyste rica l crying)"
    "Collapsing"
    "An expa nding fee ling in the chest"
    "Light-headedness"
    "A thick throat"
    "MAY ESCALATE TO: HAPPIN ESS (84), EXCITEMENT (74) , GRATITUDE"
    "CUES OF SUPPRESSED RELIEF :"
    "A de liberately quiet ex hale"
    "Briefly closing the eyes"
    "Drawing a deep breath throu gh the nose"
    "Biting the lips to keep from smiling"
    "Swallowing and nodding"
    "Narrowed eyes, when it's necessary to focus on something bes ides the source of"
    "relief"
    "Not thinking about it, putting it off to savor later"
    "Inatt entiven ess"
    "WRITER'S TIP: When a character is hiding an emotion, the cues are not as"
    "noticeable. In this circumstance, ii 's often more effective to show the emotion"
    "through change-altering a speech pattern, falling back on habits, posture shifts,"
    "etc."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "relief_emotion",
  "title": "Relief Emotion",
  "documentId": "relief_emotion",
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
