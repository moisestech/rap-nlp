console.log("Wordbank!");

var wordbank = {
  "name": "anxiety_emotion",
  "list": [
    "Anxiety"
    "DEFINITION: mental apprehension and unease; a sense of foreboding"
    "PHYSICAL SIGNALS:"
    "Rubbing the back of the neck"
    "Crossing the arms, forming a barrier to others"
    "Standing with one arm holding the other at the elbow"
    "Clutching a purse, coat, or other object"
    "Wringing one's hands"
    "Twisting a watch or ring"
    "Scratching"
    "Hands repeatedly rising to touch one's face"
    "Fingering a necklace"
    "Rolling one's shoulders"
    "Bouncing a foot"
    "Glancing at the clock, phone, or doorway"
    "Holding the stomach"
    "Clutching one's hands"
    "Rocking in place"
    "Twisting one's neck as if sore"
    "Biting at the lips or nails"
    "Head shaking"
    "Shifting, unable to get comfortable"
    "Blowing out a series of short breaths to gain control"
    "Digging in a purse or pocket to keep the hands busy"
    "Becoming easily distracted"
    "Adjusting clothes as if they chafe"
    "Rubbing at one's hands"
    "An inability to eat"
    "Rubbing one's arms and looking around"
    "Bouncing a curled knuckle against the mouth"
    "A darting gaze"
    "Increased awareness of one's environment"
    "Starting at noises"
    "Excessive swallowing"
    "Repeatedly checking a phone for messages"
    "Impatience"
    "Praying"
    "INTERNAL SENSATIONS:"
    "Feeling too hot or too cold"
    "Restless legs"
    "Dizziness"
    "A churning stomach"
    "Increased thirst"
    "Tingling in one's limbs"
    "A tightening chest"
    "Accelerated breathing"
    "Feeling like one's insides are quivering"
    "MENTAL RESPONSES:"
    "Thinking about worst-case scenarios"
    "Self blame"
    "Seeking reassurance from others"
    "Time feeling like it's slowing down"
    "Discomfort in close spaces"
    "Irrational wo1-ries"
    "Replaying the events that caused the feeling"
    "CUES OF ACUTE OR LONG-TERM ANXIETY:"
    "Excessive sweating"
    "A ragged appearance"
    "Talking to oneself under the breath"
    "Rocking in one's seat"
    "Heart palpitations"
    "Panic attacks"
    "Hyperventilating"
    "Emergence of fears, phobias, or OCD-like symptoms"
    "MAY ESCALATE TO: FEAR (76), DESPERATION (52), PARANOIA ( 114)"
    "CUES OF SUPPRESSED ANXIETY:"
    "False smile"
    "Avoiding conversation"
    "Finding somewhere to be alone"
    "Doing things to appear normal (ordering food but not eating it)"
    "Feigning interest in something nearby"
    "Closing one's eyes in an attempt to stay calm"
    "Smoothing or stroking one's own hair as a soothing gesture"
    "WRITER'S TIP: For each lcene, identify the emotion you need to show and think in terms of three ... what three ways have you reinforced the character's feelings through verbal and nonverbal communication?"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "anxiety_emotion",
  "title": "Anxiety Emotion",
  "documentId": "anxiety_emotion",
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
