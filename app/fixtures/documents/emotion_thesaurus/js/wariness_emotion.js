console.log("Wordbank!");

var wordbank = {
  "name": "wariness_emotion",
  "list": [
    "WARINESS"
    "DEFINITION: mistrust marked by caution and watchfulness; being alert to possible danger"
    "PHYSICAL SIGNALS:"
    "Head cocked to the side"
    "Eyes narrowed, as if in confusion"
    "Pursing the lips"
    "Lowering the brows"
    "Cutting the eyes toward the source"
    "Hands up in a defensive stance"
    "Speaking in a soothing, placating voice"
    "Backing away"
    "Posture 'perks up' as awareness increases"
    "Sidestepping, but keeping one's gaze on the source"
    "Actively listening for something"
    "Lifting the chin"
    "Keeping one's hands free"
    "Taking note of possible exits"
    "Being aware of what lies behind"
    "Asking questions to discern the root issue before things turn bad"
    "Circling, approaching someone or something in a roundabout fashion"
    "Slow, cautious movements"
    "Speaking rapidly, with the intent of maintaining the status quo"
    "Standing back and observing before jumping in"
    "Stiffening and going still"
    "A strained or tense voice"
    "Flinching when touched"
    "Hesitation"
    "Lip biting or pressing the lips together"
    "A probing gaze"
    "Careful words"
    "A furrowed brow"
    "Rubbing at the forehead or temples"
    "Gritting the teeth"
    "A stern or serious expression"
    "A jutting jaw"
    "Alert to sudden movements"
    "INTERNAL SENSATIONS:"
    "Increased adrenaline"
    "Rapid heartbeat and pulse"
    "Tense muscles"
    "Breath that catches or stops briefly"
    "160"
    "An intuitive feeling that something isn't right (hairs standing up, prickling of"
    "skin)"
    "MENTAL RESPONSES:"
    "Mind tries to discern possible danger"
    "Trusting one's gut feelings"
    "Heightened senses"
    "Defensiveness"
    "Racing tho ughts while trying to make sense of the situation"
    "Confusion"
    "Difficulty committing fully to any action"
    "A finely-tuned sense of observation"
    "Trying to see and hear everything at once"
    "An inability to relax or smile"
    "Thinking ahead to what might happen"
    "CUES OF ACUTE OR LONG-TERM WARINESS:"
    "Increasing one's personal space"
    "Positioning oneself to create a barrier (moving behind a table, etc.)"
    "Arguing without aggression, only to provide insight"
    "Scanning for potential weapons"
    "Asking questions one knows the answers to in an effort to discern another's"
    "intent"
    "MAY ESCALATE TO: ANXIETY (30), FEAR (76), UNEASE (158),"
    "SUSPICION (150)"
    "CUES OF SUPPRESSED WARINESS:"
    "Standoffishness"
    "Looking from lowered lids"
    "Attempting to lighten the mood with a joke"
    "A posture that suggests discomfort (standing by oneself, clamping the hands"
    "around the waist)"
    "Leaning away"
    "Hesitation"
    "WRITER'S TIP: When ·writing emotion, pullfromyour own past. Even if you"
    "haven't experienced what the POV character is going through, chances are"
    "you've felt the same emotion about something else. Draw on your personal"
    "experience and bring life to the story."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "wariness_emotion",
  "title": "Wariness Emotion",
  "documentId": "wariness_emotion",
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
