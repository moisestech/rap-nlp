console.log("Wordbank!");

var wordbank = {
  "name": "excitement_emotion",
  "list": [
    "EXCITEMENT"
    "DEFINITION: the state of being energized or stimulated and provoked to act"
    "PHYSICAL SIGNALS:"
    "A wide grin"
    "Eyes that sparkle and gleam"
    "Laughing"
    "Bouncing from foot to foot"
    "Squealing, hooting, yelling"
    "Telling jokes"
    "Chest bumping with others"
    "A loud voice"
    "Singing, humming, chanting"
    "Slam-dunking trash into a barrel after a game or event"
    "Babbling or talking over one another in a group setting"
    "Fanning oneself"
    "Pretending to faint"
    "Verbalizing thoughts and feelings without hesitation"
    "Lifting someone up or swinging them around"
    "Trembling"
    "Acting hyper, immature, or foolish out of a sense of fun"
    "A ruddy complexion"
    "Moving about, being unable to stay still"
    "Good-natured shoving and pushing"
    "Waving the arms, using grand gestures"
    "Drumming one's feet against the floor"
    "Hugging, grabbing onto someone's arm and holding it"
    "Bumping shoulders"
    "Raising up or bouncing on tiptoe"
    "Phoning or texting to share news or pass on the excitement"
    "Speed-talking with others, heads close together, gossipy"
    "Throaty laughter"
    "Getting the giggles"
    "Friendly demands: Tell me! Show me! Let's go!"
    "A body that's constantly in motion (nodding, bobbing, weaving, pacing)"
    "A distinct walk, a fast-paced strut"
    "Making eye contact with others, confidence"
    "Displaying affection with friends or loved ones"
    "INTERNAL SENSATIONS:"
    "Lightness in the chest"
    "A fast pulse"
    "Dry mouth"
    "Heightened senses"
    "Breathlessness"
    "Adrenaline rush"
    "MENTAL RESPONSES:"
    "Camaraderie with others"
    "Imagining what could happen"
    "Enjoyment of the communal energy"
    "Impatience"
    "CUES OF ACUTE OR LONG-TERM EXCITEMENT:"
    "A need to run, jump, scream, whoop it up"
    "An intense desire to share the feeling with others"
    "A beaming face"
    "Racing heartbeat"
    "Sweating"
    "A hoarse voice from screaming, yelling, or shouting"
    "A loss of inhibitions"
    "MAY ESCALATE TO: SATISFACTION ( 136), HAPPINESS (84), ELATION"
    "(68), DISAPPOINTMENT (56)"
    "CUES OF SUPPRESSED EXCITEMENT:"
    "Controlling one's movement with intent"
    "Biting down on a smile"
    "Swallowing a laugh or shout of glee"
    "Feeling like one's insides are vibrating"
    "Smoothing down clothing"
    "Eyes that glow with inner light"
    "Nodding rather than speaking"
    "WRITER'S TIP: ff you 're stuck on how to show an emotion, form a strong"
    "image qfthe scene in your mind Let the scene unfold, and watch the character to"
    "see how they move and behave."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "excitement_emotion",
  "title": "Excitement Emotion",
  "documentId": "excitement_emotion",
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
