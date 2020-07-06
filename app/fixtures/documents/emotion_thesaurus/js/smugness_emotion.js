console.log("Wordbank!");

var wordbank = {
  "name": "smugness_emotion",
  "list": [
    "SMUGNESS"
    "DEFINITION: supreme confidence in and satisfaction with oneself"
    "PHYSICAL SIGNALS:"
    "A jutting chin"
    "Crossed arms"
    "A thrust-out chest"
    "Deliberately raised eyebrows"
    "Cocking or tilting the head"
    "A smirk or sneer"
    "Direct, probing eye contact"
    "Squinting and a hard smile"
    "A dismissive nod or glance"
    "Rolling the eyes"
    "Aggressive teasing intended to put another in their place"
    "A sigh conveying annoyance ( a huff)"
    "Waving a hand in dismissal"
    "Leaning in aggressively as if to challenge"
    "Rocking back on heels"
    "Mean-spirited talk behind another's back"
    "Projecting the voice, reinforcing who has the upper hand"
    "Sarcasm: Whatever, or Sure you are, or lfyou say so!"
    "A look that radiates superiority"
    "Perfect posture, shoulders back, exposed neck"
    "A determined walk, strut, or swagger"
    "A loud voice, bragging, full of bluster"
    "Using boisterous movements to draw attention to oneself"
    "A wide stance"
    "Criticism and belittlement"
    "Talking over people, controlling conversations"
    "Looking down one's nose at others"
    "Dominant behavior (invading another's personal space, standing while others sit)"
    "Lavishing praise on favored ones (children, friends, people in power)"
    "An arrogant laugh"
    "Preening ( fussing with clothing, checking oneself in the mirror)"
    "Flashy or dramatic clothing"
    "Tossing one's hair back, a shake of the head"
    "Adopting a pondering pose (hand clasping the chin as if struck by deep thoughts)"
    "Settling back in a chair with exaggerated casualness"
    "Movements that draw attention (waving a cigar, gesturing with a glass of wine)"
    "A deliberate crossing of the legs or clasping of the hands"
    "Fidgeting with jewelry in order to draw attention to it"
    "Clapping someone on the back, overplaying closeness or friendship"
    "Name-dropping"
    "Rubbing it in with an I-told-you-so"
    "INTERNAL SENSATIONS:"
    "Warmth radiating throughout the body"
    "A puffed-up feeling"
    "Tingl ing in the chest"
    "Heart rate rising due to adrenaline rush"
    "MENTAL RESPONSES:"
    "A firm belief in one's own rightness and superiority"
    "Disdain for those who are unworthy"
    "Over-confidence"
    "A desire to belittle the unworthy and exalt one 's own accomplishments"
    "Gratitude at having risen above the rest"
    "The belief that those who have not succeeded are to blame for their failure"
    "CUES OF ACUTE OR LONG-TERM SMUGNESS:"
    "Ext reme pride in appearance and possessions"
    "Careful consideration of friendships , purchases , places where one is seen"
    "Reminding someone of a past mistake to rub it in"
    "Choosing to spend time in environments that are a reminder of success"
    "Generosity that displays power (hosting charity functions , etc .)"
    "Acting as if rules do not apply or one is above the law"
    "MAY ESCALATE TO: CONTEMPT (38) , SCORN (138)"
    "CUES OF SUPPRESSED SMUGNESS:"
    "Making token acknowledgements to those who played a part in an outcome"
    "Citing that luck was involved, but not meaning it"
    "Preachy advice: Do what I did and you 'II succeed loo."
    "WRITER'S TIP: When describing a character 'sfee/ings , the word felt is"
    "often a cue for telling emotion, not showing. Run a search for this word and"
    "challenge yourself on its use."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "smugness_emotion",
  "title": "Smugness Emotion",
  "documentId": "smugness_emotion",
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
