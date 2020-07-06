console.log("Wordbank!");

var wordbank = {
  "name": "desperation_emotion",
  "list": [
    "DESPERATION"
    "DEFINITION: a state of hopelessness that leads to rashness"
    "PHYSICAL SIGNALS:"
    "Feverish, over-bright eyes"
    "A darting gaze"
    "Quick movements"
    "An inability to sleep or eat"
    "Finger twitches, compulsive and repetitive movements"
    "A herky-jerky walk"
    "Reaching or touching in hopes of gaining help or favor"
    "Facing danger head-on"
    "Acting in ways that push the limits of endurance"
    "Pacing"
    "Anxiously muttering to oneself"
    "Grabbing fistfuls of one's hair and pulling"
    "A pained stare"
    "An emotion-choked voice"
    "Fluttery hand movements"
    "Moaning"
    "Rocking in place"
    "Bargaining"
    "Shaking, trembling"
    "Curling the arms over the head"
    "Hugging one's shoulders, chin resting on the chest"
    "Stiff neck, strained forearms"
    "Eyes that appear wet"
    "Teeth biting down on the bottom lip"
    "Wringing one's hands"
    "Shoulders curling, a bent spine"
    "Shaking one's head in denial"
    "Protective posture (chin to chest, arms holding the body tight)"
    "Dragging nails down the cheeks"
    "Rubbing one's upper arms for comfort"
    "A shaking voice"
    "Sweating profusely"
    "INTERNAL SENSATIONS:"
    "Racing heartbeat"
    "A dry mouth"
    "A sore throat from pleading, crying, begging"
    "A heightened level of pain resistance"
    "Tightness or pain in the chest"
    "Excessive or manic energy"
    "MENTAL RESPONSES:"
    "Constant planning and obsess ing"
    "Irrational thinking , poor judgment"
    "A willingness to do anything"
    "Ignoring the law or society's values"
    "Cast ing morality and good judgment aside"
    "Sacrificing others or lesser goals, desires , and needs if necessary"
    "Disregarding another's fee lings if they conflict with one's goal"
    "CUES OF ACUTE OR LONG-TERM DESPERATION:"
    "Cry ing, sobbing , wailing"
    "Screaming"
    "Beating one 's fists against somet hing to the point of injury"
    "Kneeling"
    "Pleading , abasing, or disregarding personal worth or pride"
    "Extreme risk taking"
    "Offering an exchange : Take me instead or I'll go, you stay"
    "Pushing past one 's limits to find needed strength"
    "Refusing to be persuaded"
    "MAY ESCALATE TO: TERROR (154), DREAD (64), ANGER (22)"
    "DETERMINATION (54)"
    "CUES OF SUPPRESSED DESPERATION:"
    "Holding oneself tight"
    "Believing a lie if it offers hope"
    "Fidgeting"
    "Retreating interna lly to cope , shutt ing the world out"
    "Difficulty sitt ing still"
    "Clock-watching"
    "Reassuring others"
    "Fixing one's hair and clothes to appear unaffected"
    "Taking advantage of a distraction (watching a movie, TV)"
    "Cur ling hands into tight fists"
    "WRITER'S TIP: Clothing choices are individual and project an image of one's"
    "personality. When creating unique emotional body language, think about how a"
    "character's clothing can be utilized to reveal their insecurities or vanities and"
    "show feelings of self-worth."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "desperation_emotion",
  "title": "Desperation Emotion",
  "documentId": "desperation_emotion",
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
