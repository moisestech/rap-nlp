console.log("Wordbank!");

var wordbank = {
  "name": "shame_emotion",
  "list": [
    "SHAME"
    "DEFINITION: the feeling that arises from a dishonorable or improper act;"
    "disgrace"
    "PHYSICAL SIGNALS:"
    "Cheeks that burn"
    "Crumpling onto a chair or sofa"
    "Pulling arms and legs in toward the core"
    "Muttering What have I done? or How could I let this happen?"
    "Using the hair to hide the face"
    "Pulling a ball cap low"
    "Pressing hands against one's cheeks"
    "Dropping the chin to the chest"
    "Wet eyes"
    "A blank look"
    "An inability to meet another's eyes"
    "Crumpling under scrutiny"
    "Shaking, trembling, shivering"
    "Hunched shoulders"
    "A perpetual slouch"
    "Tears"
    "A closed-off stance ( crossing the arms, making oneself small, averting the head)"
    "Pressing a palm over the lips to hold back a cry"
    "Shaking the head"
    "Letting out an uncontrolled moan"
    "Punching fists against thighs to release frustration"
    "Lashing out at others to transfer anger or blame"
    "Arms hanging at the sides"
    "Hitching breaths"
    "A trembling chin"
    "Shielding the body, angling away from those bearing witness to shame"
    "Pulling and tugging at one's clothes as if they can make one less visible"
    "Vandalism of one's own things"
    "Loss of interest in one's personal appearance"
    "Seeking out second chances (fawning, begging, following others) to regain self"
    "worth"
    "Lying or doing whatever it takes to keep a shameful secret"
    "INTERNAL SENSATIONS:"
    "Hypersensitivity to noise, crowds, activity"
    "Flu-like symptoms (nausea, sweats, tingling in chest)"
    "Weak knees"
    "Thickness in throat"
    "Heat and tingling in face"
    "140"
    "Body tremors"
    "MENTAL RESPONSES:"
    "Flight reaction"
    "Pu lling away from friends and loved ones"
    "Avoiding familiar places and activities"
    "S~lf-loat~ing , berating oneself, anger, disgust"
    "R1s~-takmg behaviors, hoping something will happen to balance the scale"
    "Derual"
    "An utter lack of self-confidence"
    "A desire to fade into the background and avoid not ice"
    "CUES OF ACUTE OR LONG-TERM SHAME:"
    "Self-violence (scratching , cutting , pulling hair)"
    "Depression"
    "Substance abuse"
    "Eating disorders"
    "Increased sexual activity"
    "Panic attacks"
    "Anxiety disorders"
    "Perfectionist tendenc ies to balance the source of shame"
    "Seeking power as a means of self-validation"
    "Denial , diversion of blame to others"
    "Suicide"
    "Abusive relationships"
    "Attempt ing to change one's appearance"
    "The belief that one deserves pain"
    "Rejecting help out of a desire to do penance"
    "MAY ESCALATE TO: DEPRESSION (48) , HUMILIATION (90) , REMORSE"
    "CUES OF SUPPRESSED SHAME:"
    "Shame is, by and large, private. People are always trying to hide this emotion so"
    "all cues for shame are naturaJly suppressed."
    "WRITER'S TIP: There are dozens of physical, internal, and mental responses to"
    "use when conveying a given emotion. Filter possible cues through what you know"
    "about your character. 'Would my character react this way?' is a great question"
    "to ask to stay on the right track."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "shame_emotion",
  "title": "Shame Emotion",
  "documentId": "shame_emotion",
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
