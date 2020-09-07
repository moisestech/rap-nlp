console.log("Wordbank!");

var wordbank = {
  "name": "hopefulness_emotion",
  "list": [
    "HOPEFULNESS"
    "DEFINITION: a bright, promising outlook; optimism"
    "PHYSICAL SIGNALS:"
    "Holding one's breath"
    "Raising the eyebrows and offering a questioning gaze"
    "Leaning in"
    "Clutching at the chest or belly"
    "Muttering please repeatedly under the breath"
    "Clasping hands under the chin (in a prayer gesture)"
    "A face that seems to shine"
    "Gently biting the lip"
    "Covering the mouth with a hand, eyes wide and shining"
    "Deep breaths"
    "Wiggling, squirming"
    "Verbalizing the pros, not the cons"
    "Strong eye contact"
    "Smiling"
    "Stiff posture, an air of readiness"
    "Smoothing one's clothing to appear collected or worthy"
    "Nodding along as another speaks"
    "Holding still in expectation"
    "Rapid swallowing and nodding"
    "Chattiness, babbling"
    "Lips parting slightly"
    "Asking others to reaffirm the chances of success"
    "Shifting back and forth"
    "Making promises to convince others of one's worthiness"
    "Offering commitment, to show one's ability to meet expectations"
    "Attentiveness to tasks or people connected with one's goal"
    "Restlessness"
    "Licking the lip with cautious hope"
    "Exhaling while the eyes look up"
    "A gaze that darts to a symbol of hope (a friend in the know, a table of judges)"
    "INTERNAL SENSATIONS:"
    "A flutter in the belly"
    "A light-hearted feeling"
    "Tingling limbs"
    "A jo It through the body"
    "A floating sensation, like all one's burdens have been removed"
    "Breath that temporarily bottles up in the chest"
    "MENTAL RESPONSES:"
    "A willingness to believe that everything will be all right"
    "A stro ng aware ness of one·s surroundings"
    "Thinking pos itive thoughts"
    "A sense of calm"
    "Focusing on improvement (studying, workin g extra hard)"
    "Refusing to consider, speak of, or listen to negatives"
    "Preparing for the best case scenar io"
    "CUES OF ACUTE OR LONG-TERM HOPEFULNESS:"
    "Hands clasped in prayer, pressed to the lips, eyes c losed"
    "Quivering breaths"
    "Shakine ss"
    "Tears"
    "A trembling voice"
    "Whimpering"
    "MAY ESCALATE TO: EAGERNESS (66), EXCITEMENT (74) ,"
    "DISAPPOINTMENT (56)"
    "CUES OF SUPPRESSED HOPEFULNESS:"
    "Locking hands together to force stillness"
    "Mentally reducing high expectat ions"
    "Reminding onese lf of obstac les or competition"
    "Pressing the palms down ward to stave off over-confidence"
    "Keeping one's face blank"
    "Looking down or away"
    "WRITER'S TIP: Force your characters to make choices between bad and"
    "worse. Readers will empathize with your character, remembering their own pa st"
    "when they.fa ced a similar dilemma."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "hopefulness_emotion",
  "title": "Hopefulness Emotion",
  "documentId": "hopefulness_emotion",
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
