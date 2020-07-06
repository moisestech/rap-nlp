console.log("Wordbank!");

var wordbank = {
  "name": "unease_emotion",
  "list": [
    "UNEASE"
    "DEFINITION: a restlessness of the body or mind"
    "PHYSICAL SIGNALS:"
    "Shaking one's head"
    "Crossing and uncrossing the arms or legs"
    "Shifting in one's chair"
    "Twisting or pulling at clothing"
    "Slipping hands into pockets"
    "Sidelong glances while keeping the head still"
    "Tsking or making a noise in the throat"
    "Leaning away from the source"
    "Drawing back, making oneself smaller"
    "Stopping to listen intently"
    "A quick glance at the source, then away (a person, a clock, a door)"
    "Chewing on a fingernail, picking at cuticles"
    "Drawing the mouth into a straight line and biting the lip"
    "Excessive swallowing"
    "A shaky voice"
    "Tugging clothes more firmly into place, closing an open jacket"
    "Flipping hair or combing fingers through it"
    "Hiding behind one's bangs"
    "Being unnaturally quiet"
    "Throat clearing"
    "Frowning"
    "Pushing food around on a plate"
    "Gulping food down in order to escape more quickly"
    "Trying to evade notice (slumping in a chair, withdrawing from conversation)"
    "Turning slowly, unwillingly"
    "Clutching an item tightly or holding it as a shield"
    "Reluctantly speaking or approaching someone"
    "Stilted, halting dialogue"
    "A tapping heel"
    "Checking a cell for messages or to see the time"
    "Fiddling with jewelry or props"
    "A swinging foot that suddenly goes still"
    "Scrunching oneself up in a chair or sofa"
    "Choosing a safe spot to wait"
    "Flicking through a magazine without reading it"
    "Lifting the chin in an attempt to look confident"
    "Consciously forcing one's limbs to relax"
    "Licking the lips"
    "Tightening the hands into fists, then loosening them"
    "Rigid posture"
    "Nervous habits (picking off nail polish , humming under the breath)"
    "Warm, sweaty hands"
    "Constant motion (applying lip gloss, texting people , rooting in purse)"
    "INTERNAL SENSATIONS:"
    "A slight chill or shiver"
    "Hair lifting on the back of the neck"
    "A prickling of the scalp"
    "A quiver in the stomach"
    "MENTAL RESPONSES:"
    "The feeling of being watched"
    "Denial: There 's nothing wrong, or Stop overreacting."
    "A feeling of being on edge"
    "Impati ence"
    "Time feels like it's slowing down"
    "Heightened watchfulness"
    "CUES OF ACUTE OR LONG-TERM UNEASE:"
    "Increa sed fidgeting , an inability to remain still"
    "Pacing"
    "An unshakeable sense of something being wrong"
    "A need to leave, but not understanding why"
    "Shifting from foot to foot"
    "Feeling physica lly ill"
    "Pretending to be unaware of a loud argument or uncomfortabl e situation"
    "MAY ESCALATE TO: NERVOUSNESS (108), WORRY (162) , FEAR (76)"
    "CUES OF SUPPRESSED UNEASE:"
    "Trying to slow one 's breat hing"
    "Attempting to loosen up by rolling the shoulders"
    "An unfocused gaze as one strives for mental calm"
    "Walking away to gain composure"
    "Wide eyes"
    "A quick, false smile"
    "Studiously not looking at the source"
    "Keeping at a distance"
    "Talking too fast"
    "WRITER'S TlP: To create astronger reader reaction to emotio-n, remember to"
    "focus on showing what triggers the feeling , rather than only showing the"
    "charact er 's response to it."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "unease_emotion",
  "title": "Unease Emotion",
  "documentId": "unease_emotion",
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
