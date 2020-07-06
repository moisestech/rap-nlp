console.log("Wordbank!");

var wordbank = {
  "name": "confidence_emotion",
  "list": [
    "Confidence"
    "DEFINITION: having faith in one's own influence and ability"
    "PHYSICAL SIGNALS:"
    "Strong posture"
    "shoulders back"
    "chest out"
    "chin high"
    "Walking with wide steps"
    "Strong hygiene"
    "personal grooming"
    "Holding hands loosely"
    "hands behind the back"
    "fingertips tapping"
    "gleam in one's eye"
    "an inner light"
    "Smiling"
    "a playful grin"
    "Winking"
    "giving an easy nod"
    "hands out of pockets"
    "Appearing relaxed"
    "Taking up space"
    "legs spread wide"
    "arms loose"
    "Approaching with ease"
    "eye to eye"
    "directly in the eye"
    "Arms swinging"
    "draw attention"
    "exageration"
    "booming laugh"
    "tilted-back head"
    "Speaking boisterously"
    "Offering wits"
    "fun commentary"
    "Light-hearted teasing"
    "alf-shrug grinning"
    "secret knowledge "
    "Flirting"
    "strong handshake"
    "Leaning back in a chair "
    "hands behind the head"
    "easygoing manner"
    "Stretching"
    "Showing comfort"
    "close proximity"
    "Initiating contact"
    "Telling jokes"
    "adding to"
    "steering a convo"
    "Hosting events"
    "getting together"
    "dealing in openness"
    "dealing with people"
    "Appearing unbothered"
    "not caring about judgement"
    "not what others may think"
    "Leaning in to talk or listen"
    "physical contact"
    "touchy-feely"
    "Running hands through one's hair"
    "flipping the hair back "
    "Leading not following"
    "INTERNAL SENSATIONS:"
    "Relaxed muscles"
    "Easy breaths"
    "Lightness in the chest"
    "MENTAL RESPONSES:"
    "calm and ease"
    "positive outlook"
    "Interest in what's happening"
    "CUES OF ACUTE OR LONG-TERM CONFIDENCE:"
    "no anxiety"
    "out of the norm"
    "i'm not bragging"
    "MAY ESCALATE TO: SATISFACTION (136), SMUGNESS (144), CONTEMPT (38)"
    "CUES OF SUPPRESSED CONFIDENCE:"
    "Minimizing compliments"
    "Modesty"
    "Changing the topic to bring others into the spotlight"
    "Downplaying one's own comfort level to make others feel better"
    "Asking for opinions or advice"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "confidence_emotion",
  "title": "Confidence Emotion",
  "documentId": "confidence_emotion",
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
