console.log("Wordbank!");

var wordbank = {
  "name": "resignation_emotion",
  "list": [
    "RESIGNATION"
    "DEFINITION: the state of surrendering, often with little or no resistance"
    "PHYSICAL SIGNALS:"
    "Sighing dejectedly"
    "Slumped shoulders"
    "Blank features"
    "Stooped posture"
    "Shuffling footsteps"
    "Small steps"
    "Tears"
    "A monotone voice"
    "Becoming less verbal over time"
    "Dull eyes"
    "A chin that trembles"
    "Answering with a small nod"
    "Sagging facial features"
    "Limp hands and arms"
    "Unwashed hair"
    "Wrinkled, disheveled clothes"
    "A loss of appetite"
    "Disinterest in former hobbies or passions"
    "Making oneself small (hugging oneself, squatting down, fetal position)"
    "A voiding eye contact"
    "Being at a loss for words"
    "Lethargically giving comfort to others (rubbing their back, patting their shoulder)"
    "A shake of the head"
    "Head tipping back on the neck to look skyward"
    "Agreeing, but without emotion"
    "Clasping the hands together"
    "Leaning forward, elbows on knees"
    "Staring off at nothing"
    "A hanging head"
    "Loose jaw"
    "A half-hearted shrug"
    "A long exhale"
    "Muttering, mumbling"
    "Holding the head in the hands"
    "Propping a cheek on a fist"
    "Unresponsive or slowed reactions to stimulus"
    "Grunting, one-word answers"
    "Purposely closing the eyes, as if to process"
    "Excessive sleeping"
    "INTERNAL SENSATIONS:"
    "A falling or dropping sensation"
    "Emptine ss, numbness"
    "A lack of emo tion"
    "Weakness in the muscles"
    "MENTAL RESPONSES:"
    "A determination to make the best of the situation (g lass half-full )"
    "An inability to focus or concentrate"
    "Feel ing directionle ss"
    "Confusion: How did this happen? or What will happen to me now?"
    "The sense that nothing wi ll ever be the same"
    "Feeling powerless over the present or future"
    "Belie ving that one has failed"
    "CUES OF ACUTE OR LONG-TERM RESIGNATION:"
    "Depression"
    "Retreating inward"
    "Disco nnectin g from ot hers"
    "Doubting onese lf, a decre ase in co nfidenc e"
    "Apathy"
    "Beco ming submis sive, giving up control"
    "MAY ESCALATE TO: SADNESS (134) , DISAPPOINTM ENT (56). DEFEAT"
    "CUES OF SUPPRESSED RESIGNATION:"
    "Whini ng, quest ioning, offering token weak arguments"
    "Squaring sho ulder s, but without any real force or strength"
    "0 ffering a sma ll display of anger"
    "Acting like giv ing in was a cho ice, not the on ly option"
    "WRITER'S TIP: Too many emotional internalizations in a scene can slow the"
    "pace considerably. If the thoughts are key. try shifting some of these to active,"
    "realistic dialogue. It will increase the pac e and still reveal the character's"
    "feelings."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "resignation_emotion",
  "title": "Resignation Emotion",
  "documentId": "resignation_emotion",
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
