console.log("Wordbank!");

var wordbank = {
  "name": "nostalgia_emotion",
  "list": [
    "NOSTALGIA"
    "DEFINITION: the yearning for a return to a past period or situation"
    "PHYSICAL SIGNALS:"
    "An unfocused gaze"
    "A slight smile"
    "Slowly flipping through old pictures, stroking the pages"
    "A relaxed posture"
    "Eyes that fill with tears"
    "Using a quiet voice"
    "Cocking one's head to the side"
    "Subdued laughter"
    "A shallow sigh"
    "An unhurried walk"
    "Rubbing a hand against the heart"
    "Slouching on a sofa, watching old movies"
    "Slow, languid movements"
    "Growing animated when memory is triggered (an old song on the radio, etc.)"
    "Eyes brightening as memories are recalled"
    "Keeping mementos from the happy time"
    "Telling and retelling stories about the past"
    "Seeking out those who shared the event"
    "Gently touching memorable items ( a baby blanket, wedding invitations)"
    "Closing one's eyes to more clearly recall the memories"
    "Trying to recreate a past event (burning the same scented candle, wearing the old"
    "clothes)"
    "Seeing similarities in the present: You look just like him or This is the same color"
    "as our first car"
    "Increased tenderness (sitting close, a quick kiss) for those who shared in the"
    "event"
    "INTERNAL SENSATIONS:"
    "Eyes prickling with tears"
    "An excited flutter in the belly"
    "An overall relaxation of the body"
    "Breathing slows as a memory takes over"
    "Dulled awareness (sitting in an uncomfortable position without feeling it)"
    "Experiencing ( to a lesser degree) the same physical sensations felt during the"
    "past event"
    "MENTAL RESPONSES:"
    "Losing track of the time while remembering"
    "A desire to go back and visit the past"
    "Mentally replaying past events"
    "Satisfaction at having experienced the event despite any pain or loss resulting"
    "from it"
    "CUES OF ACUTE OR LONG-TERM NOSTALGIA:"
    "Discontentment with the way things presently are"
    "Expressing more emotion about the past than the present"
    "Spending large periods of time in the past"
    "Hoarding tendencies"
    "Neglecting current duties or relationship s"
    "An inability to move on"
    "Depression"
    "MAY ESCALATE TO: SADNESS (134), DEPRESSION (48), HAPPINESS"
    "CUES OF SUPPRESSED NOSTALGIA:"
    "An austere lack of mementos from the past"
    "Sniffing back tears"
    "Rejecting oppo1tunities to revisit the past (reunions, trips to the old house or"
    "hometown)"
    "Not engaging in conversations about the past"
    "Masking nostalgia with practicality : I kept his toys so he could give them to his"
    "kids"
    "WRITER'S TIP: When introducing and describing characters, parcel out"
    "personal details in small bits. Anything that isn't pivotal to plot or"
    "characterization can be left to the reader's imagination."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "nostalgia_emotion",
  "title": "Nostalgia Emotion",
  "documentId": "nostalgia_emotion",
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
