console.log("Wordbank!");

var wordbank = {
  "name": "denial_emotion",
  "list": [
    "DENIAL"
    "DEFINITION: a refusal to acknowledge truth or reality"
    "PHYSICAL SIGNALS:"
    "Verbal disagreement"
    "Backing away"
    "Vigorous head shaking"
    "Waving someone off"
    "Dialogue in the negative: Don 't blame me or / had nothing to do with it"
    "Speaking emphatically with finger pointing or other hard gestures"
    "Raising one's palms"
    "Shrugging"
    "Tucking in the upper lip"
    "Arms crossing one's chest, closed body posture"
    "Placing a hand against the breastbone"
    "A slackened mouth, displaying shock"
    "Speaking rapidly, not letting others get a word in"
    "Rationalizing or justifying"
    "Shuffling backward"
    "Speaking slowly, stretching out words: What? No way!"
    "Leaning back, creating space"
    "Warding someone or something off"
    "Raised eyebrows"
    "Widening eyes"
    "Raising one's voice"
    "Emphatically saying No"
    "Slanting the body away from an accuser"
    "Questioning someone's source or the facts"
    "Making an "X" motion with one's hands"
    "Eye contact dropping (if one is unsure or lying)"
    "Choppy responses, short sentences"
    "Sweating"
    "Staring down at one's hands"
    "INTERNAL SENSATIONS:"
    "Mouth going dry"
    "A lump forming in one's throat"
    "Feeling heavy or numb"
    "Heat rising behind the eyelids"
    "Tingling in the stomach"
    "MENTAL RESPONSES:"
    "Replaying past events in order to understand"
    "Thoughts centering on the facts of the situation"
    "Brain scramb ling to find a logical excuse (if lying)"
    "Anger or hurt at being put in this situation"
    "CUES OF ACUTE OR LONG-TERM DENIAL:"
    "Blaming others"
    "Pleading , cry ing, begging to be believed"
    "Becoming closed-minded , refu sing to listen"
    "Wanting to be left alone"
    "MAY ESCALATE TO: DEFENSIVENESS (44) , HURT (92) , GUILT (82) ,"
    "ANGER (22) , CONFLICTED (34)"
    "CUES OF SUPPRESSED DENIAL:"
    "Refusing to argue or respond to an accusat ion"
    "Steady eye contact"
    "Exp laining that one is not in denial"
    "Voicing We'll see comment s"
    "Supplying reasons to convey that a viewpoint is invalid"
    "Repeating the truth as one sees it and sticking to it"
    "A steady , even tone"
    "WRITER'S TIP: Make a list of your body language crutches (frowning, smiling,"
    "shrugging, head shaking, etc.). Use your word processor's search and replace"
    "feature to highlight these so you can pinpoint where the emotional description"
    "needs some freshening up."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "denial_emotion",
  "title": "Denial Emotion",
  "documentId": "denial_emotion",
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
