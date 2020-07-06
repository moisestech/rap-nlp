console.log("Wordbank!");

var wordbank = {
  "name": "regret_emotion",
  "list": [
    "REGRET"
    "DEFINITION: sorrow aroused by circumstances beyond one's ability to control"
    "or repair"
    "PHYSICAL SIGNALS:"
    "Scrubbing a hand over the face"
    "Laying a hand against the breastbone"
    "A heavy sigh"
    "A downtumed mouth"
    "Bent posture"
    "Heavy arms, the shoulders pulled low"
    "Apologizing"
    "Trying to reason or explain"
    "Eyebrows gathering in"
    "A pained expression"
    "Hands falling to the sides"
    "Staring down at one's feet"
    "Covering the face with the hands"
    "Squeezing one's eyes shut"
    "Lifting hands up and then letting them fall"
    "Pinching the bridge of the nose, eyes closed"
    "Wincing or grimacing"
    "Rubbing the chest as if pained"
    "Avoiding the victims (shame)"
    "Seeking reconciliation ( determination to set right)"
    "Berating oneself for actions or choices"
    "Losing the thread of conversations"
    "Hiding behind one's hair"
    "Shaking the head"
    "A voice that loses its power"
    "Using broken sentences or trailing off while speaking"
    "Making a tsking noise or murmuring regret: What a shame"
    "Asking questions about the fallout: How did she take the news?"
    "Scrambling to reverse what was said or done"
    "Increasing one's distance from others"
    "Trying to fade into the background at social events"
    "Putting oneself down"
    "INTERNAL SENSATIONS:"
    "A knotted belly"
    "Insomnia"
    "An inability to fill lungs completely"
    "A nervous stomach"
    "Loss of appetite"
    "122"
    "Dullne ss in the chest, a feeling of heaviness"
    "MENTAL RESPONSES:"
    "Self-loathing"
    "The feeling that one deserves pain or judgment"
    "Obsession with the person or event associated with the regret"
    "Reliving past event s"
    "Thought s that turn inward"
    "Trying to forget the event"
    "A desire to go unnoticed"
    "Distractedness"
    "Wishing it hadn't happened"
    "CUES OF ACUTE OR LONG-TERM REGRET:"
    "Not taking physical care of oneself"
    "Weight loss"
    "Withdrawin g from soc iety"
    "Dropping out of clubs and gro ups"
    "No longer finding joy in hobbies or favorite pastimes"
    "Overc ompensation in other relation shjps"
    "Crying, sobbing"
    "Self-destructive behav iors"
    "Drug and alcohol abuse"
    "Unsafe sexual practices"
    "Abusive relat ionships"
    "A stri ng of broken re lationships"
    "Ulcers"
    "A lack of intimacy with other s"
    "An inab ility to forgive one self"
    "MAY ESCALATE TO: SHAME ( 140), FRUSTRATION (78), DEPRESSION"
    "CUES OF SUPPRESSED REGRET:"
    "Despera tely seek ing out new relationships"
    "Talking about one 's acco mplishments as a way of winning people over"
    "Making life-a ltering decision s (caree r change, a move , etc .) as a way to start over"
    "Acting like the life of the party"
    "Putting on a happy face"
    "WRITER'S TIP: Watch/or possible description crutches. Is the color 'green'"
    "used too much? Does a sensory sound (like wind rustling through the trees)"
    "happen in multiple scenes? Keep track of these details to avoid overuse."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "regret_emotion",
  "title": "Regret Emotion",
  "documentId": "regret_emotion",
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
