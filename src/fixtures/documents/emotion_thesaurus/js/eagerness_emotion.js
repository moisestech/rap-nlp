console.log("Wordbank!");

var wordbank = {
  "name": "eagerness_emotion",
  "list": [
    "EAGERNESS"
    "DEFINITION: enthusiasm for what is to come"
    "PHYSICAL SIGNALS:"
    "Leaning forward"
    "Eyes that glow"
    "Rushing one's words"
    "Speaking in a bubbly or loud tone"
    "Rapt attention, nodding"
    "Using excitable language"
    "Agreeability to whatever is suggested"
    "Fiddling with an object to keep the hands busy"
    "Squeezing the hands at one's sides"
    "Strong eye contact"
    "Talking over others"
    "Raising a hand immediately to be called on"
    "Asking questions, requesting information"
    "Rubbing the hands together"
    "Leaning forward with a hand on the knee"
    "Sitting at the edge of a chair"
    "Allowing others into one's personal space"
    "Licking one's lips, smiling"
    "Feet pointing forward"
    "Shoulders straight and back"
    "Animated gesturing"
    "Bouncing on one's toes"
    "Moving, fidgeting, pacing"
    "Blowing out a long breath and smiling"
    "Eyes wide, rounded, with very few blinks"
    "Hands clutched together"
    "Head up, alert"
    "A fast walk, jog, or run"
    "Sharing a look or wink with another"
    "Clambering closer to a group or event"
    "Whispering in hushed, excitable tones"
    "Scuffing a chair closer to the table"
    "Arriving early"
    "Quirking an eyebrow and smiling . ."
    "Friendliness, even with those not in one's own social crrcle"
    "Pulling or prodding others to hurry up"
    "INTERNAL SENSATIONS:"
    "Fluttery stomach"
    "Increased heartbeat"
    "An expanding feeling in the chest"
    "Breathlessness"
    "Adrenaline causing alertness"
    "MENTAL RESPO NSES:"
    "Focused listening"
    "Strong organization and preparedness"
    "An inability to concentrate on anything else"
    "Desiring to share and include others"
    "Losing all inhibitions"
    "Positive outlook and thinking"
    "A willingness to take on responsibility, to help or lead"
    "CUES OF ACUTE OR LONG-TERM EAGERNESS:"
    "Preparing early, often hours or days before needed"
    "Planning or obsessing over every detail"
    "Seeking perfection"
    "Hurrying or rushing to make things happen quicker"
    "MAY ESCALATE TO: EXCITEMENT( 74), IMPATIENCE (94)"
    "CUES OF SUPPRESSED EAGERNESS:"
    "Clamping the hands in the lap"
    "Tight muscles"
    "Forcing oneself to sit still"
    "Slowing one's speech, concentrating on being articulate"
    "A series of deep breaths"
    "Taking up a task or chore to pass the time"
    "Feigning disinterest by adopting a loose and relaxed posture"
    "Making a slight detour as a ruse"
    "WRITER'S TIP: To generate fri ction in dialogue, give the parti cipants opposing"
    "goals. A heightened emotional response is the natural result of not ge tting what"
    "one needs."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "eagerness_emotion",
  "title": "Eagerness Emotion",
  "documentId": "eagerness_emotion",
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
