console.log("Wordbank!");

var wordbank = {
  "name": "satisfaction_emotion",
  "list": [
    "SATISFACTION"
    "DEFINITION: the state of being content or fulfilled"
    "PHYSICAL SIGNALS:"
    "A high chin and exposed neck"
    "A crisp nod"
    "Smoothing the front of a shirt or tugging down the sleeves"
    "Offering a 'thumbs-up'"
    "Giving a toast or praise"
    "Clapping someone on the back"
    "A wide stance, fists on hips, elbows wide"
    "Surveying the finished product with a pleased expression"
    "A raised eyebrow and a See? look"
    "A sleek walk that draws the eye ( catlike, deliberate)"
    "A shy, confident, radiant, or cocky smile"
    "Apt dialogue that sums up the situation perfectly"
    "Saying I told you sol"
    "A puffed-out chest"
    "Shoulders back, straight posture"
    "A fist pump"
    "Clapping"
    "Fingers forming a steeple"
    "Including others in the moment"
    "Bragging"
    "A hand casually anchored on the hip"
    "Stretching the arms out wide"
    "Leaning back, at ease and in control"
    "A deep, gratifying sigh"
    "Whistling or humming"
    "A distant, unfocused smile"
    "Taking deep breaths, savoring the moment"
    "Unhurried, relaxed movements"
    "A direct manner (eye contact, strength in voice)"
    "Rewarding oneself"
    "INTERNAL SENSATIONS:"
    "A hyper-awareness of others and their reactions"
    "A lightness in the chest"
    "Warmth spreading through the body"
    "A tiredness that is fulfilling rather than exhausting"
    "MENTAL RESPONSES:"
    "Happiness over a job well done"
    "Euphoria, exhilaration"
    "136"
    "Contentment"
    "Grat ification"
    "Increased confidence"
    "Looking forward to a well-earned rest"
    "Mentally fixating on the recent success"
    "Not paying attention to one's surro undings"
    "Self-congratu lations"
    "Generosity to others as a result of feeling gratified"
    "A desire to tell everyo ne about the success"
    "CUES OF ACUTE OR LONG-TERM SATISFACTION:"
    "Just ified possess iveness"
    "An expression of supreme confidence , a glow"
    "Cockiness"
    "MAY ESCALATE TO: HAPPINESS (84), SMUGNESS (144), PRIDE (118),"
    "GRATITUDE (80)"
    "CUES OF SUPPRESSED SATISFACTION :"
    "Twitching lips"
    "Hiding a smile behind a hand"
    "Bouncing lightly on the toes"
    "Gett ing away at the first opportunit y to tell someone the good news"
    "Settling back in a chair in release"
    "WRITER'S TIP: loners and their lack of social interaction present specific"
    "writing challenges. To break up long stretches of introspection , maintain some"
    "character relationships. Rem ember that a person can be lonely even when"
    "surrounded by people ; use the dialogu e, dyefunction. and drama that go along"
    "with those relationships to keep the pace moving forward."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "satisfaction_emotion",
  "title": "Satisfaction Emotion",
  "documentId": "satisfaction_emotion",
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
