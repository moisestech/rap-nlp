console.log("Wordbank!");

var wordbank = {
  "name": "doubt_emotion",
  "list": [
    "DOUBT"
    "DEFINITION: to lack confidence in or consider unlikely"
    "PHYSICAL SIGNALS:"
    "Brows drawing closer, face tightening"
    "Looking down or away"
    "Avoiding eye contact"
    "Pressing the lips together"
    "Shuffling one's feet"
    "Shoving hands in pockets"
    "Throat clearing"
    "Thumbing the ear"
    "Expressing concern"
    "Checking and rechecking one's appearance"
    "Delaying tactics ( suggesting time to review options, etc.)"
    "Pauses, ums, or other conversation fillers"
    "Taking a slight step back"
    "Lingering at the edge of a group or event"
    "Biting one's cheek"
    "Declining an offer of support"
    "Running hands through the hair"
    "Pulling or tugging at one's clothes"
    "A smile that appears tight"
    "A hesitating nod"
    "Rocking on one's heels, pretending to study the floor"
    "Cocking the head while raising the eyebrows"
    "Swallowing more than usual"
    "Tipping one's head side to side, weighing an idea or choice"
    "Tapping the fingers together"
    "Slightly clenched fists"
    "A deep, weighted sigh"
    "Pursing the lips"
    "Shrugging"
    "Shaking the head"
    "Asking for assurances or clarification"
    "Arguing or questioning"
    "Citing possible repercussions"
    "Rubbing the back of the neck"
    "Fiddling with a ring or button to avoid eye contact"
    "Putting a hand over the face, closing the eyes"
    "Drawing in breath, then releasing it"
    "Tactfully offering alternative suggestions"
    "Hesitation ( accepting a leaflet with reluctance, etc.)"
    "Crossing the arms or legs"
    "INTERNAL SENSATIONS:"
    "A slight heaviness or quiver in the stomach"
    "MENTAL RESPONSES:"
    "Worrying over the current path"
    "Looking ahead to possib le co llatera l damage"
    "Searching for ideas on how to circumvent the situation"
    "Dredging up evidence in order to sway opinions"
    "Hoping or praying it will work out"
    "CUES OF ACUTE OR LONG-TERM DOUBT:"
    "Avoiding speaking or agreeing openly"
    "Sharing a look with an ally, raising the eyebrows to convey a message"
    "Wincing as others rally behind a weak so lution"
    "MAY ESCALATE TO: WORRY (162). DISBELIEF (58), UNEASE (158)"
    "CUES OF SUPPRESSED DOUBT:"
    "Fidgeting in a chair"
    "Coughing as one agrees or support s a doubtful decision or stance"
    "Mimicking confidence (straightening, speaking in a booming voice)"
    "Lying or misleading other s"
    "Making excuses for not agreeing immediately"
    "Reassuring othe rs of loyalty , commitment, etc."
    "Offering to handle the problem instead"
    "Delaying verbal support"
    "WRITER'S TIP: When steering your character through scenes that allow for"
    "emotional growth, don't forget to also provide setbacks. The path to"
    "enlightenment isn't smooth.for anyone, including our characters."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "doubt_emotion",
  "title": "Doubt Emotion",
  "documentId": "doubt_emotion",
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
