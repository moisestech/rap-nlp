console.log("Wordbank!");

var wordbank = {
  "name": "scorn_emotion",
  "list": [
    "SCORN"
    "DEFINITION: extreme contempt or derision; regarding as inferior"
    "PHYSICAL SIGNALS:"
    "A biting remark"
    "Belittling comments that remind the target who has the upper hand"
    "A smirk"
    "A quick, disgusted snort"
    "Looming over the target"
    "Crossed arms, a wide stance"
    "Sarcasm"
    "A tight jaw"
    "A harsh squint"
    "A deliberate eyebrow raise and head tilt"
    "Pulling down glasses and looking over the rims with a flat gaze"
    "Flapping a hand in dismissal"
    "Bullying tactics"
    "An exaggerated eye ro 11 or upward glance"
    "Blowing out a breath that rattles the lips"
    "Insulting the target in front of others"
    "A thrust-out chest"
    "An ugly twist to the mouth"
    "Encouraging others to speak up against the target"
    "Limited verbal responses, as if the target isn't even worth talking to"
    "Laughter at another's expense"
    "A wrinkled nose"
    "Flicking a hand in front of one's nose as ifto get rid ofa bad smell"
    "A tight mouth, as if tasting something bad"
    "Narrowed eyes"
    "Staring the target down"
    "Applauding in a deliberately false fashion"
    "Projecting hurtful observations: I'd be embarrassed if I were you!"
    "Anger at being touched or addressed by the target"
    "Calling attention to another's weaknesses"
    "Ignoring the target"
    "Speaking slowly to emphasize hurtful words"
    "Leaving to show that the target is not worth one's time"
    "Apologizing to others for having their time wasted by the target"
    "INTERNAL SENSATIONS:"
    "A puffed-up feeling"
    "Adrenaline rush at taking away another's power"
    "Body temperature rises"
    "MENTAL RESPONSES:"
    "Elation at delivering a blow to an opponent through dialogue or action"
    "Anger"
    "A desire to put the person in their place"
    "Superiority"
    "Arrogance"
    "CUES OF ACUTE OR LONG-TERM SCORN:"
    "Asking questions to further incriminate the target"
    "Egging the target on"
    "Picking fights"
    "Forcing the target into circumstances where he is sure to fail"
    "Gathering other like-minded people and encouraging their scorn"
    "Seeking to hurt through a 'low blow' comment"
    "MAY ESCALATE TO: ANGER (22), HATRED (86), ELAT fON (68)"
    "CUES OF SUPPRESSED SCORN:"
    "A blank, emotionless face"
    "Becoming unresponsive to questions or act ion"
    "Turning away"
    "Shaking the head"
    "A slight muscle jump in the cheek"
    "Tightened jaw"
    "Clamping one 's lips tight to keep from saying anyt hing"
    "Making an excuse to leave"
    "WRITER'S TIP: When describing a character's emotional state, pay attention"
    "to their voice. Does it rise or drop in pitch? Get louder or softer? Grow rough or"
    "silky smooth? Changes in pitch and tone are great indicators for when a"
    "character is trying to hide their feelings from others."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "scorn_emotion",
  "title": "Scorn Emotion",
  "documentId": "scorn_emotion",
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
