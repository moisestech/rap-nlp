console.log("Wordbank!");

var wordbank = {
  "name": "deffensiveness_emotion",
  "list": [
    "DEFENSIVENESS"
    "DEFINITION: resisting attack; defending against a perceived danger or threat"
    "PHYSICAL SIGNALS:"
    "Stepping back"
    "Leaning away"
    "Crossing the arms over one's chest"
    "Rigid body posture"
    "Squinting eyes"
    "A lowering brow"
    "Sucking the cheeks in"
    "Shaking the head"
    "Sputtering, gaping"
    "Holding an object as a shield (a book, a folded jacket)"
    "A darting gaze"
    "Licking one's lips"
    "Rapid blinking that leads to a wide-eyed look"
    "Hands up, palms toward the aggressor"
    "A fixed stare"
    "Flipping one's hair in annoyance"
    "A snort of dismissive laughter"
    "Raising one's voice"
    "Crossing the legs"
    "Body shielding (turning at an angle)"
    "Interrupting"
    "Looking to others for backup"
    "Blowing out a noisy breath"
    "Going on the offensive and verbally attacking the accuser"
    "Deflecting blame"
    "Flinching, jerking back"
    "Difficulty being articulate"
    "Hand splaying across one's upper chest"
    "Stiff neck, cords standing out"
    "Chin lowering and pulling back against the neck"
    "Wagging a finger, berating another for their accusations"
    "Using sarcasm"
    "Eye rolling"
    "Rising color in one's cheeks"
    "Visible sweating"
    "Dragging others into the situation for support"
    "Verbalizing disappointment or denial"
    "A voice that hardens over the course of an argument"
    "Jerky movements, a loss of fluidity to actions"
    "Excessive swallowing"
    "INTERNAL SENSATIONS:"
    "Raised blood pressure"
    "A pounding heartbeat that grows loud in the ears"
    "Dry mouth"
    "A body that feels hot"
    "Intense thirst"
    "The stomach tightening and hardening"
    "MENTAL RESPONSES:"
    "Scrambling thought s, trying to diffuse the situation"
    "Anger, shock"
    "Feeling betrayed"
    "Sifting memories for evidence (to support innoce nce or challenge accusations)"
    "CUES OF ACUTE OR LONG-TERM DEFENSIVENESS:"
    "Eyes darting for an exit or escape (flight response)"
    "Shouting"
    "Bringing up past examples when one support ed the accuser or saved the day"
    "Citing an opponent' s shortcomin gs"
    "Increas ing one 's personal space"
    "Storming away"
    "MAY ESCALATE TO: ANGER (22), FEAR (76)"
    "CUES OF SUPPRESSED DEFENSIVENESS:"
    "Maintainin g an even tone"
    "Offering a fake smile"
    "A forcibly calm demeanor"
    "Changing the subject"
    "Denial (shrugging, forcing a laug h)"
    "Calmly stating that one doesn ' t need to prove anyth ing"
    "Not leaving or walking away, despite discomfort"
    "Attempting to reason throu gh facts, not emot ion"
    "WRITER'S TIP: Choose each setting with deliberate care. Each location should"
    "symbolize something to your main character, and have an impact (positive or"
    "negative) on their psyche coming into the scene."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "deffensiveness_emotion",
  "title": "Deffensiveness Emotion",
  "documentId": "deffensiveness_emotion",
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
