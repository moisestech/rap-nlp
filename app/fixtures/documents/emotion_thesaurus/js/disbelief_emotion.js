console.log("Wordbank!");

var wordbank = {
  "name": "disbelief_emotion",
  "list": [
    "DISBELIEF"
    "DEFINITION: withholding belief; a refusal to see the truth"
    "PHYSICAL SIGNALS:"
    "Mouth slackening"
    "Eyes widening"
    "Looking down or away"
    "Rubbing at an eyelid or brow"
    "Being at a loss for words"
    "Turning away and covering the mouth"
    "Expression blanching, going pale"
    "Asking Are you sure? type questions"
    "Scratching one's jaw"
    "A shake of the head"
    "Rubbing absently at the arms"
    "Verbalizing shock: Are you kidding? or Impossible!"
    "Moving back slightly, increasing one's personal space"
    "Showing one's palms"
    "Lifting a single eyebrow"
    "Cocking the head"
    "An unfocused gaze"
    "Rapid blinking"
    "Running hands through one's hair"
    "Gaping, stuttering, mouth opening and closing"
    "Hands dropping to one's sides"
    "Posture slumping slightly"
    "Neck bending forward"
    "Hands carving through one's hair, holding it back and then releasing"
    "Pulling glasses down and looking over the rims"
    "Openly staring"
    "Covering one's ears"
    "Repeating No and other negatives: It's not true!"
    "Folding the arms over the stomach"
    "Staring at one's palms as if they hold the answers"
    "Jiggling, tugging, or tapping the earlobe"
    "Doing a double take"
    "Waving something off"
    "INTERNAL SENSATIONS:"
    "A tingling in one's chest"
    "A hardening or clenching stomach"
    "A small intake of breath (gasp)"
    "Lightheadedness"
    "Restricted breathing"
    "MENTAL RESPONSES:"
    "Making an immediate moral judgment (either good or bad, wrong or right)"
    "Thoughts scrambling to understand"
    "Attempting to reason or glean more information"
    "Pretending to have misheard"
    "CUES OF ACUTE OR LONG-TERM DISBELIEF:"
    "A restless stance"
    "Arguing"
    "Walking away"
    "Voicing the emotion over and over: / just can 't believe this"
    "Difficulty speaking, choppy responses"
    "Holding a hand up to ward off the truth"
    "Demanding those with influence do something to change the outcome"
    "Closed body posture (arms creating a barrier across the chest)"
    "MAY ESCALATE TO: DENIAL (46), ANGER (22), OVERWHELMED (112) ,"
    "RESIGNATION (132)"
    "CUES OF SUPPRESSED DISBELIEF:"
    "Changing the topic"
    "A nervous laugh"
    "Making excuses"
    "Supporting the outcome , acting like one was 'in the know' all along"
    "Reassuring others of one 's belief, commitment , etc."
    "Asking questions to glean informat ion without giving away disbelief"
    "Throat clearing"
    "Coughing, pretending a drink went down wrong"
    "Avoiding eye contact"
    "Offering fake platitudes: Interesting or Well, that 's good then."
    "WRITER'S TIP: While melodrama is usually a bad idea in fiction, it can be"
    "used effectively to characterize an over-the-top character."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "disbelief_emotion",
  "title": "Disbelief Emotion",
  "documentId": "disbelief_emotion",
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
