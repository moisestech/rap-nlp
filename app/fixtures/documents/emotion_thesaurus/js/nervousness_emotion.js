console.log("Wordbank!");

var wordbank = {
  "name": "nervousness_emotion",
  "list": [
    "NERVOUSNESS"
    "DEFINITION: the state of feeling unsettled and being easily agitated"
    "PHYSICAL SIGNALS:"
    "Short, jerky movements"
    "Pacing"
    "Rapid blinking"
    "Rubbing the back of the neck"
    "Unbuttoning the top button of a shirt"
    "Scratching or rubbing skin"
    "Biting at lips"
    "Jumpiness"
    "Flighty hand movements, fidgeting"
    "Clumsiness"
    "Rubbing hands down one's pant legs"
    "A lack of eye contact"
    "Scraping a hand through the hair"
    "Quick breaths"
    "Crossing and uncrossing arms or legs"
    "Eyeing the exits"
    "Bouncing a knee (while sitting)"
    "Repeated gestures (tie straightening, touching an ear)"
    "Increased sweat, particularly on the hands"
    "Tingling fingers and toes"
    "Pupils appear dilated"
    "Biting or picking at one's fingernails"
    "Shaking out the hands"
    "Clearing the throat"
    "Facial tics"
    "Stuttering, stumbling over one's words"
    "Quick, high-pitched laughter"
    "Restlessness ( sitting, then standing)"
    "Laughter that goes on for longer than normal"
    "Closing the eyes and taking a calming breath"
    "Rapid speaking, babbling"
    "A change in the pitch, tone, or volume of the voice"
    "Tackling a task to distract ( cleaning, waxing the car)"
    "INTERNAL SENSATIONS:"
    "Acute senses"
    "Nausea"
    "Sensitive skin"
    "Faintness"
    "An empty feeling in the pit of the stomach"
    "Quivering , twitchy musc les"
    "A rolling or fluttery fee ling (butt erflies) in the stomach"
    "Loss of appetite"
    "Dry mouth"
    "Heart palpit ations"
    "Headache"
    "MENTAL RESPONSES :"
    "The desire to flee"
    "Erratic thought processes. irration al fears"
    "Overreacting to noise"
    "The mind go ing to the worst-case scenar io"
    "Wishing time would speed up"
    "CUES OF ACUTE OR LONG-TERM NERVOUSNESS:"
    "Vomiting"
    "Fatigue or insomnia"
    "Panic attacks"
    "Withdraw al"
    "Irritabi lity"
    "Ulcers and other digestiv e diso rders"
    "Weight loss or ga in"
    "Negative thought patterns"
    "Indulg ing in alco hol, drugs , or chain smokin g to take the edge off"
    "MAY ESCALATE TO: INSE CURITY (98), ANXIETY (30) , FEAR (76),"
    "DREAD (64)"
    "CUES OF SUPPRESSED NERVOUSNESS:"
    "A pasted-on smile"
    "Flexing the fingers , curling and uncurlin g"
    "Clasp ing one 's hands together"
    "An unnatural stilln ess"
    "Eyes that blink too much or don ' t blink enough"
    "Not meeting anyone's gaze"
    "Cha nging the topic"
    "Avoid ing conversatio n"
    "WRITER'S TIP: Body movement and external reactions alone will not create an"
    "emotional experience for the reader. Pairing action with a light use of internal"
    "sensations and/or thoughts creates a deeper emotional pull ."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "nervousness_emotion",
  "title": "Nervousness Emotion",
  "documentId": "nervousness_emotion",
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
