console.log("Wordbank!");

var wordbank = {
  "name": "skepticism_emotion",
  "list": [
    "SKEPTICISM"
    "DEFINITION: having a disposition of doubt or incredulity"
    "PHYSICAL SIGNALS:"
    "Pursing the lips in thought"
    "Tilting the head and pausing"
    "Shaking the head"
    "Pressing the lips into a fine line"
    "Raising the eyebrows"
    "Clearing the throat"
    "Fiddling with jewelry or other items"
    "Shrugging"
    "Nodding, but with a tight expression to show one is not fully committed"
    "A confrontational stance"
    "A smirk or eye roll"
    "A hand flap that dismisses the person or their idea"
    "Demanding proof or evidence to support"
    "Listing the possible consequences"
    "Polite verbal opposition"
    "A condescending smile"
    "Muttering negatives: I don 't think so or No way that would work"
    "Restlessness (pacing, tapping fingers, clock-watching)"
    "A tightness in the face"
    "Rigid body posture"
    "Rubbing the back of the neck without making eye contact"
    "Narrowed eyes"
    "Biting or chewing on one's lip"
    "Gossiping with others, running a person down for their choices or ideas"
    "Sniping remarks"
    "Licking one's lips"
    "Hemming and hawing"
    "Referencing similar events from the past that did not pan out"
    "Bringing up everything that could go wrong"
    "A purposeful shiver or shudder"
    "Biting the fingernails"
    "A heavy sigh"
    "Walking away"
    "Tapping a finger against the tabletop in an effort to drive a point home"
    "Asking Are you sure? or What if? questions"
    "A jutting chin"
    "A silent look"
    "Wrinkling the nose like there's a bad smell"
    "A quick exhale through the nose, a snort"
    "INTERNAL SENSATIONS:"
    "Tightness in the chest"
    "Increased heartbeat and pulse"
    "Tense muscles"
    "A flare of adrenaline, firing the brain to act"
    "MENTAL RESPONSES:"
    "Negative thoughts"
    "Uncertainty"
    "Honing in on flaws, either of logic or of a physical nature"
    "A desire to change the speaker 's mind or standpoint"
    "Wanting to be around people with the same opinions"
    "CUES OF ACUTE OR LONG-TERM SKEPTICISM:"
    "Anger"
    "Frustration"
    "Passive skepticism becoming more overt"
    "Looking for ways to discredit the speaker"
    "A desire to shut the speaker up"
    "The mind racing through possible arguments"
    "Disbelief , that others can't see the truth"
    "Actively seek ing to bring people over to one 's way of thinking"
    "Becoming argumentative"
    "MAY ESCALATE TO: UNCERTAINTY (156) , SUSPICION ( 150),"
    "RESIGNATION (132), SCORN ( 138)"
    "CUES OF SUPPRESSED SKEPTICISM:"
    "Attempting to keep a neutral facial expression"
    "Footsteps that drag"
    "A quick widening of the eyes before schooling one 's expression"
    "Apologizing for not showing immediate support"
    "Sitting still, hands clasped , mimicking interest and attention"
    "Acting noncommittal: Int eres ting idea , or That 's someth ing to think about"
    "Asking for a person to review the pros and cons aga in for clarity"
    "Suggesting a trial basis as a solution"
    "Requesting more time to reflect"
    "A suggest ion that perhaps more thought or study is needed"
    "WRITER'S TIP: Don't make ii easy for your heroes. Pile on the difficulties ."
    "Overwhelm them. Make it seemingly impossible for them to succeed so that when"
    "they do overcome, the reader will be properly impressed."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "skepticism_emotion",
  "title": "Skepticism Emotion",
  "documentId": "skepticism_emotion",
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
