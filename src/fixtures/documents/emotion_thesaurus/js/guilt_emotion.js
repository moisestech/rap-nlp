console.log("Wordbank!");

var wordbank = {
  "name": "guilt_emotion",
  "list": [
    "GUILT"
    "DEFINITION: a feeling of culpability over an offense ( either real or imagined)"
    "PHYSICAL SIGNALS:"
    "Averting or lowering one's gaze"
    "Turning away"
    "Shifting about"
    "Chin dipping to the chest, adopting a slumped posture"
    "Blushing"
    "Reacting defensively"
    "Short-temperedness"
    "Consuming antacids"
    "Repetitive swallowing"
    "Lying"
    "Sweating"
    "Grimacing, lip biting"
    "Avoiding a person or place"
    "Talking too much or too fast"
    "Keeping at a distance"
    "Rubbing the nose or ears"
    "Shoulders drawing up, elbows tucking into the sides"
    "Closing or curling one's hands inward"
    "Stuttering, growing flustered"
    "Joking to lighten the mood or distract others from the truth"
    "Seeking comfort by touching one's own hair, neck, or clothing"
    "Pinning the arms against the stomach"
    "Becoming unnaturally quiet or still"
    "A quivering chin"
    "Muttering tearfully to oneself"
    "Anxious movements (pawing a hand through the hair, pacing)"
    "A cracking voice"
    "Pulling at one's collar"
    "Taking a deep, pained breath and closing the eyes"
    "Staring down at one's feet"
    "Palms hidden (stuffed into pockets, held behind the back)"
    "Darting glances at the person wronged"
    "Following the one wronged, trying to convince oneself to confess"
    "Inflicting pain on oneself as a penance"
    "Destroying one's own possessions"
    "An inability to join in fun activities or be with friends"
    "Looking pale, having a harried or haunted look"
    "Not showing up for work or school, letting grades slip"
    "INTERNAL SENSATIONS:"
    "Upset stomach"
    "Tight chest"
    "Pain in the back of the throat"
    "Loss of appetite"
    "Thickness in the throat"
    "MENTAL RESPONSES:"
    "Replaying what happened , anxiety"
    "Thoughts filled with self -loathing"
    "Wishing one could go back and change what happened"
    "Desiring to confess or share the pain or burden with another"
    "Brooding , retreating inward , withdrawing from others"
    "Paranoia that others know and are passing judgment"
    "An inability to concentrate on anything else"
    "CUES OF ACUTE OR LONG-TERM GUILT:"
    "A lack of interest in one's own appearance or wellness"
    "Drinking until passing out (to forget) , drug use"
    "Insomnia"
    "Depression"
    "Exhaustion"
    "Nightmares"
    "Crying, sobbing , hitching breaths"
    "Flight response-running away , unable to deal with the consequences"
    "Growing reclusive , cutting oneself off from others"
    "Self-muti lation"
    "Self- loathing"
    "Attempting suicide as a way out"
    "MAY ESCALATE TO: CONFLICTED (34), REGRET (122) , SHAME (140),"
    "REMORSE (128)"
    "CUES OF SUPPRESSED GUILT:"
    "Becoming excessively resourceful or helpful to make up for earlier failure"
    "Fidgeting"
    "Hiding one's mouth behind a hand"
    "Changing the subject"
    "Deflecting attention"
    "Throat clearing"
    "Verbally denying having anything to do with the event"
    "WRITER'S TIP: Character bibles can help you keep track of hair, eye and"
    "clothing choices.for each character, keeping the continuity from the first page to"
    "the last."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "guilt_emotion",
  "title": "Guilt Emotion",
  "documentId": "guilt_emotion",
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
