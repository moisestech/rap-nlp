console.log("Wordbank!");

var wordbank = {
  "name": "contempt_emotion",
  "list": [
    "CONTEMPT"
    "DEFINITION: a lack of reverence or respect; to hold in disregard"
    "PHYSICAL SIGNALS:"
    "Crossing one's arms, showing closed body posture"
    "A downturned mouth"
    "Head tilting away"
    "Sneering"
    "Head shaking"
    "Mocking"
    "Rolling the eyes"
    "Using sarcasm"
    "Gossiping"
    "Snorting loudly"
    "Buzzing the lips to be rude (blowing a raspberry)"
    "Baiting the other person"
    "Turning the body at an angle instead of facing the subject head-on"
    "Walking away"
    "Waving dismissively"
    "Stiff posture"
    "Refusing to respond or engage"
    "Lowering the chin to look down on someone"
    "Cold eyes"
    "A pinched mouth"
    "A hard, distinctive jaw line"
    "Smirking as the subject speaks"
    "Ugly laughter"
    "Making jokes at another's expense"
    "Flashing a cold smile to show insincerity"
    "Spitting in the direction of the one provoking contempt"
    "Sticking a tongue out"
    "A wide stance, chest thrust out"
    "INTERNAL SENSATIONS:"
    "Rising blood pressure"
    "A tightening in the chest"
    "Stiffness in the neck and jaw"
    "A roiling heat in the belly"
    "MENTAL RESPONSES:"
    "Negative thinking"
    "Unkind observations"
    "Mental insults"
    "A desire to verbally tear down or hurt another person"
    "Wanting to expose the subject 's ignorance"
    "CUES OF ACUTE OR LONG-TERM CONTEMPT:"
    "Swea ring and offering insults"
    "Yellin g, arg uing"
    "High blood pressure"
    "A vein throbbing visibly in the fore head"
    "Thought s of vio lence"
    "Angrily dism iss ing someone from one's presence"
    "Leaving the room (excusing onese lf, cutting a meeting short)"
    "MAY ESCALATE TO: DISGUST (60), SCORN ( 138), ANGER (22)"
    "CUES OF SUPPRESSED CONTEMPT:"
    "Flushed skin"
    "Biting at the cheek"
    "Fidgeting"
    "Press ing the lips together to keep from speaking"
    "Dry washing one 's hands"
    "Purp ose fully not looking at the source"
    "Feigning interest in something else"
    "Turnin g away to ignore the source"
    "Becoming non-re sponsive"
    "Pushing on the diaphragm to keep the anger in"
    "Leaning back , arms crossed"
    "Moving away, creating personal distance"
    "WRITER'S TIP: When revising, look for instances where emotions are"
    "NAMED. Nine times out qf ten this indicates a lack of confidence that the"
    "emotion is shown clearly through thought, sensations and body language. Strong"
    "verbal and nonverbal cues negate the need to ''explain the emotion to the"
    "reader."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "contempt_emotion",
  "title": "Contempt Emotion",
  "documentId": "contempt_emotion",
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
