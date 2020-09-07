console.log("Wordbank!");

var wordbank = {
  "name": "remorse_emotion",
  "list": [
    "REMORSE"
    "DEFINITION: distress resulting from guilt over wrongdoing; a desire to undo"
    "or fix"
    "PHYSICAL SIGNALS:"
    "Heartfelt apologies"
    "Asking to talk"
    "Following the aggrieved party"
    "Repeatedly returning to the scene where past events took place"
    "Head down as the eyes look up"
    "Watering eyes"
    "A hand that cups the mouth"
    "Holding one's head in hands"
    "Tears that one does not try to hide or control"
    "Silence"
    "Offering restitution"
    "Using the victim's name in dialogue when they are present"
    "Telling the unvarnished truth"
    "Speaking without hesitation when answering"
    "A quivering chin"
    "Holding the stomach"
    "Shoulders that curl over the chest"
    "Not defending oneself against attack ( verbal or physical)"
    "Crumpled body posture"
    "Staring down at the floor"
    "Clasping the hands together in the lap"
    "Shaking"
    "Begging for forgiveness"
    "Shoulders that quake with repressed sobs"
    "A pleading tone"
    "A pale or unhealthy complexion"
    "Dark circles under the eyes"
    "Hollowed cheeks"
    "Reaching out to touch and then pulling back as if not worthy"
    "Readily agreeing to a punishment or pronouncement"
    "A voice that cracks"
    "Verbalizing responsibility for what happened"
    "Quiet answers to questions"
    "Arms hanging at the sides"
    "Still hands and feet"
    "Obedience"
    "Breaking into sobs"
    "INTERNAL SENSATIONS:"
    "A stomach that feels hard"
    "Runny nose"
    "Nausea"
    "Gritty or dry eyes from lack of sleep"
    "A lump in the throat"
    "MENTAL RESPONSES:"
    "Mentally berating onese lf over an action or poor decision"
    "Wanting to face the consequences"
    "Obsessing over finding a way to repay the debt"
    "Empathy for the other party and what they are going through"
    "Being honest about one·s role in the situation"
    "Relief for owning up to wrongdoing"
    "CUES OF ACUTE OR LONG-TERM REMORSE:"
    "Weight loss"
    "Headaches"
    "Heart problems"
    "Self-destructive behaviors out of the belief that one does not deserve happines s"
    "Desperation to balance the sca les or resolve the situation"
    "A comp lete life cha nge (tak ing up charity work , finding God , etc.)"
    "MAY ESCALATE TO: SHAME (140) , REGRET (122) , DET ERMINATION"
    "CUES OF SUPPRESSED REMORSE:"
    "A voiding friends who are also culpable (if a group act)"
    "Lying about feelings"
    "Claiming that the victim was partly responsible"
    "Making an excuse to leave"
    "Dropping out of activities , school , or work on false pretenses"
    "Moving away"
    "WRITER'S TIP: Description is clearest when a writer adheres to the real order"
    "of events in a scene. Show the action (stimulus). then the reaction (re:;ponse)"
    "and a reader will clearly see how A leads to B."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "remorse_emotion",
  "title": "Remorse Emotion",
  "documentId": "remorse_emotion",
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
