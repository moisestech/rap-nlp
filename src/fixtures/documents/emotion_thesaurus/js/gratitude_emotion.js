console.log("Wordbank!");

var wordbank = {
  "name": "gratitude_emotion",
  "list": [
    "GRATITUDE"
    "DEFINITION: thankfulness; feeling grateful or appreciative"
    "PHYSICAL SIGNALS:"
    "Eyes that are soft, filled with an inner glow"
    "Clasping another's hand or forearm"
    "Tapping a loose fist against the heart"
    "Placing a hand on the chest"
    "Tearing up"
    "Laying a hand on one's heart then gesturing to a person or group"
    "Pressing fingers to smiling lips"
    "Repeating one's thanks and appreciation"
    "Holding onto someone's hand for longer than necessary"
    "Hugging, showing affection"
    "A light squeeze during a handshake"
    "A smile that has a genuine build and lights up the face"
    "Steady eye contact"
    "Open palms"
    "Saying Thank you"
    "Moving closer, into another's personal space"
    "Forming a steeple with hands and pressing them to lips"
    "Offering praise for others"
    "An emotion-rich voice"
    "Offering small touches to connect"
    "Laying a hand on someone's back or shoulder"
    "Nodding, eyes glowing"
    "Offering a gift, favor, or boon of appreciation"
    "Raising one's palms to the sky and looking up"
    "Complimenting"
    "Clapping vigorously"
    "Body and feet pointed forward"
    "Offering a wave"
    "A two-fingered salute"
    "Tipping the head back for a moment and closing the eyes"
    "Bowing or curtseying"
    "Blowing a kiss"
    "Offering a wave of thanks"
    "INTERNAL SENSATIONS:"
    "Tingling warmth in the limbs"
    "A release of all bodily tension"
    "A feeling of expansion in the chest"
    "Heart that feels 'full'"
    "A comfortable warmth in the face"
    "Weakness in the knees"
    "MENTAL RESPONSES:"
    "Desiring to repay anot her's kindness and support"
    "Feeling overwhelmed in a good way"
    "Wanting to drink in the moment, to remembe r this fee ling forever"
    "CUES OF ACUTE OR LONG-TERM GRATITUDE:"
    "Worship"
    "Falling to one's knees"
    "A desire to do anything to repay"
    "Joyfu l tears"
    "A feeling of connection and love"
    "MAY ESCALATE TO: SATISFACTION (136) , PEACEFULNESS (116) ,"
    "HAPPINESS (84), ELATION (68)"
    "CUES OF SUPPRESSED GRATITUDE:"
    "Closing the eyes"
    "Ducking the head to hide one's expression"
    "Avo iding eye contact with others"
    "Quick, darting glances to express a hidden thanks"
    "Offering a distraction or changing the subject"
    "WRITER'S TIP: Make it a goal to offer the reader something unexpected in"
    "every scene, be it an emotional reaction, a roadblock to trip the character up, or"
    "a snippet of dialogue that sheds new light on the events unfolding."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "gratitude_emotion",
  "title": "Gratitude Emotion",
  "documentId": "gratitude_emotion",
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
