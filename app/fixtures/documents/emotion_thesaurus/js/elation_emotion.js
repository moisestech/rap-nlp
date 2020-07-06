console.log("Wordbank!");

var wordbank = {
  "name": "elation_emotion",
  "list": [
    "ELATION"
    "DEFINITION· · h. h · ·"
    ". m ig spmts; a state of euphoria or exhilaration"
    "PHYSICAL SIGNALS:"
    "High color, a flushed appearance"
    "A smile or grin that cannot be contained"
    "Laughing"
    "Squ~aling, screaming, shouting, whooping, hollering"
    "Fallmg to one's knees"
    "Jumping up and down"
    "Talking over one another, babbling"
    "Holding arms up in a 'Victory V'"
    "Head tipping back, turning one's face to the sky"
    "Running a victory lap"
    "A beaming face, strong color and sheen"
    "Embracing others"
    "Dancing in place"
    "Whooping loudly"
    "Not caring what others think, a lack of self-consciousness"
    "Enjoying communal happiness, feeling part of the crowd"
    "Repeating words over and over: Wow! or This is amazing!"
    "Flinging out the arms and legs, taking a wide stance"
    "Thrusting the chest out"
    "Eyes wide and glowing"
    "Grabbing at the sides of the head in an I can't believe it gesture"
    "High energy, a bouncing walk or run, skipping"
    "Hugging, kissing, or other displays of affection"
    "Breaking out into a run"
    "Happy tears, shining cheeks"
    "Throwing something into the air-a hat, books, confetti, helmet"
    "Sweating"
    "Thrusting a fist into the sky"
    "INTERNAL SENSATIONS:"
    "Warmth radiating throughout the body"
    "Racing heartbeat, drumming in the chest"
    "Feeling ultra-awake, rejuvenated by adrenaline"
    "MENTAL RESPONSES:"
    "Thoughts scatter, too excited to think straight"
    "Wanting to be surrounded by family and friends"
    "Feeling vindicated for the effort, sacrifice, or hard work"
    "Revisiting the hurdles leading to this moment"
    "Gratitude to those who helped make this possible"
    "CUES OF ACUTE OR LONG-TERM ELATION:"
    "Tears streaming down the face"
    "Loss of motor control"
    "Trembling muscles"
    "Sinking to the ground, exhausted"
    "Breathlessness"
    "Losing one's voice from screaming or shouting"
    "Speechlessness"
    "MAY ESCALATE TO: SATISFACTION (136), PRIDE (118), GRATITUDE"
    "CUES OF SUPPRESSED ELATION:"
    "A grin that can't be contained no matter how hard one tries"
    "Bottling up one's breaths to try and calm down"
    "Self-hugging to contain the feeling"
    "Closing the eyes and covering the mouth"
    "Quivering with the effort of controlling oneself"
    "Looking down to hide a grin"
    "WRITER'S TIP: Make a list of the body part s you incorporate when expr essing"
    "emotion. Are there ones y ou don't use at all? Challenge your self to come up with"
    "a unique cue by using one of these 'missing' parts, and substitute it.for a"
    "gesture thal is overused."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "elation_emotion",
  "title": "Elation Emotion",
  "documentId": "elation_emotion",
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
