console.log("Wordbank!");

var wordbank = {
  "name": "surprise_shock_emotion",
  "list": [
    "SURPRISE/SHOCK"
    "DEFINITION: unexpectedly struck with a feeling ofwonder,joy, or fear"
    "NOTE: can be negative or positive"
    "PHYSICAL SIGNALS:"
    "The mouth falling open"
    "A hand flying to the chest"
    "Fingers touching parted lips"
    "A gasp"
    "An incredulous stare or dazed look"
    "Jerking the head back"
    "Slapping hands against the cheeks"
    "A playful swat at a friend for causing the surprise"
    "Shuffling back a step or two"
    "A yelp, gasp or squeal"
    "A sudden stiffening posture, rigid muscles"
    "Stopping mid-stride or stumbling"
    "Hugging friends close by"
    "Giddiness"
    "Widening or bulging eyes, a double take"
    "Shaking the head, voicing denial"
    "Stuttering, stammering"
    "A rise in vocal pitch"
    "Grabbing onto a friend's arm"
    "Hiding the face"
    "Squeezing the eyes shut"
    "Gripping the sides of the head as if to cover the ears"
    "Spreading the fingers out in a fan against the breastbone"
    "Touching the throat"
    "Turning away (negative surprise)"
    "Pulling books or packages tightly against one's chest"
    "Raising a hand to ward off others from approaching or speaking"
    "A shaky, soft, halting, or disbelieving voice"
    "Asking simple questions for clarification: Who? When? Why?"
    "A tentative smile that builds as surprise sinks in"
    "A bark of laughter"
    "Breaths that catch or hitch"
    "Tipping or turning the head to the side"
    "INTERNAL SENSATIONS:"
    "Tingling skin"
    "A heavy feeling in the stomach"
    "Racing heartbeat"
    "Breathlessness"
    "A sudden coldness that hits at the core (if surprise is negative)"
    "Disor ientation, dizz iness, or euphoria"
    "A fluttery feeling in the belly"
    "A flush of adre naline tingling through the body"
    "MENTAL RESPONSES:"
    "Wanting to hide"
    "Fuzzy thoughts, an inab ility to think"
    "Embarrassment"
    "CUES OF ACUTE SURPRISE (SHOCK):"
    "Duck ing, covering one 's head with the arms"
    "Collapsing from a perceived fright"
    "Breathlessness"
    "Tears or shakine ss"
    "Ducking the chin to hide the neck"
    "Jerkiness in the legs, leaping back"
    "Hands rushing toward the mouth to cover"
    "Gasping or letting out a sharp scream"
    "Clutching at one's chest on reflex"
    "Muscles tightenin g, head drawing back st iffly"
    "Flight reaction (running away, hiding)"
    "Fight reaction (shoving the initiator , delivering a punch to release anxiety)"
    "Arms drawing back to the body core in a prot ect ive flinch"
    "Stuttering or speechlessness"
    "Swearing or shouting"
    "MAY ESCALATE TO: AMAZEMENT ( 18), HAPPINESS (84), FEAR (76) ,"
    "ANGER (22) , RELIEF ( 124), DISAPPOINTMENT (56)"
    "CUES OF SUPPRESSED SURPRISE:"
    "One 's smile going stiff in an effort not to lose it (negative)"
    "Rapid blinking"
    "Widening eyes"
    "Lifting the eyebrows"
    "A closed-lipped smile"
    "Nodding the head, as if one is not surpri sed at all"
    "A quick tensing of the body"
    "A split second where breathing is suspended"
    "Tightening the grip on whatever is being held"
    "Shaking out the hands in an effort to relax once the initial shock has passed"
    "WRITER'S TIP: With emotion, never be afraid to try something new. Individual"
    "expressions should be genu ine but unique."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "surprise_shock_emotion",
  "title": "Surprise Shock Emotion",
  "documentId": "surprise_shock_emotion",
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
