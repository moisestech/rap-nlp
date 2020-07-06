console.log("Wordbank!");

var wordbank = {
  "name": "peacefulness_emotion",
  "list": [
    "PEACEFULNESS"
    "DEFINITION: a state of calm that is devoid of strife, agitation, or commotion"
    "PHYSICAL SIGNALS:"
    "A relaxed posture"
    "Smiling, grinning"
    "Fingers loosely clasped in one's lap"
    "Closed eyes, the head tipped back"
    "Softened features that imply calm"
    "Nodding to others in greeting"
    "Leaning back, an arm hooked over the back of a chair"
    "Taking a deep, satisfied breath"
    "Using a friend's shoulder as a shelf for your elbow"
    "An unforced laugh"
    "Whistling or humming"
    "Sparkling eyes, a weightless gaze"
    "Enjoying an event ( a movie, a concert in the park, a picnic)"
    "Lying on the grass to soak up the sun"
    "Catlike stretches"
    "A warm voice, caring tone"
    "Half-closed eyes, a lidded look of satisfaction"
    "Lacing fingers behind the head"
    "A wide stance, open demeanor"
    "Languid movements"
    "Rolling the neck back and forth"
    "Looping the thumbs in the front pockets while standing"
    "An easy walk, unhurried"
    "A wandering gaze, taking in random things"
    "A satisfied sigh"
    "Unhurried speech"
    "Contentedly taking more time to complete tasks"
    "Expressing a greater interest in the happiness of others"
    "Engaging in meaningful conversations"
    "INTERNAL SENSATIONS:"
    "Slow and easy breaths"
    "Slack muscles"
    "Loose limbs"
    "Drowsiness"
    "A lack of tension and stress that almost equates to a feeling of nothingness"
    "A steady, calm pulse and heartbeat"
    "MENTAL RESPONSES:"
    "Being with others with no need to fill the silence"
    "Satisfact ion with the world at large"
    "A fee ling of connection to life"
    "Having no desire to be anywhere else"
    "Enjoying listening to others"
    "Living in the moment , not acknow ledging the past or future"
    "A voiding topics of conversation that will kill the mood"
    "Delighting in even mundane , everyday tasks"
    "A desire for everyone to experie nce such peace"
    "CUES OF ACUTE OR LONG-TERM PEACEFULNESS:"
    "A lessened need for worldly goods"
    "Choosing to spend time with positive or like-minded people"
    "A growing interest in spiritual or religious philosophy"
    "A desire to maintain a positive stat us quo"
    "Changing one 's lifestyle to accommodate new beliefs (recycling , moving to the"
    "country)"
    "l mpatience with corporate greed and cap italism"
    "A desire for more natural living"
    "An increased awareness of one 's body and what goes into it"
    "Engaging in new and satisfying hobbies and interests"
    "MAY ESCALATE TO: HAPPINESS (84), SATISFACT ION ( 136)"
    "CUES OF SUPPRESSED PEACEFULNESS:"
    "Claiming that one 's calm demeanor is simply tiredness"
    "Forcing onese lf to maintain a slight stiffness in posture"
    "Pretending to disengage because of boredom"
    "WRITER'S TIP: Choose verbs carefully. The meaning of a sentence can be"
    "altered through the words used to describe action. Readers will see a character"
    "who trudges up the stairs as being in a different emotional state than one that"
    "bounds up them, two at a time."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "peacefulness_emotion",
  "title": "Peacefulness Emotion",
  "documentId": "peacefulness_emotion",
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
