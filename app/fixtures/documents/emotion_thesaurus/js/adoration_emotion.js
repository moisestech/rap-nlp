console.log("Wordbank!");

var wordbank = {
  "name": "adoration_emotion",
  "list": [
    "Adoration"
    "the act of worship",
    "to view as divine",
    "Lips parting",
    "A slack or soft expression",
    "Walking quickly to erase the distance",
    "Mimicking body language ( of the subject)",
    "Touching one's mouth or face",
    "Reaching out to brush, touch or grasp",
    "Steady eye contact, large pupils",
    "Leaning forward",
    "Stroking one's own neck or arm as a surrogate",
    "Pointing one's torso and feet toward the subject",
    "A flushed appearance",
    "Nodding while the subject speaks",
    "Smiling",
    "Open body posture",
    "Releasing an appreciative sigh",
    "Laying a hand over the heart",
    "Frequently moistening the lips",
    "Pressing palms lightly against the cheeks",
    "Skimming fingertips along the jaw line",
    "Eyes that are bright, glossy",
    "Agreement ( murmuring affirmations)",
    "Speaking praise and compliments",
    "Keeping trinkets, pictures, or articles of the subject",
    "Constantly talking about the subject to others",
    "Rapt attention, still posture",
    "Becoming unaware of one's environment or other people",
    "A radiant glow",
    "Visible shakiness",
    "Reduced blinking",
    "Closing the eyes to savor the experience",
    "Speaking with a soft voice or tone",
    "A voice that cracks with emotion",
    "Quickening heartbeat",
    "Breathlessness",
    "Feeling one's pulse in the throat",
    "Mouth drying",
    "Throat growing thick"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "adoration_emotion",
  "title": "Adoration Emotion",
  "documentId": "adoration_emotion",
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

"Adoration"
"DEFINITION: the act of worship; to view as divine NOTE: the subject of adoration can be a person or thing"

"PHYSICAL SIGNALS:"
"Lips parting"
"A slack or soft expression"
"Walking quickly to erase the distance"
"Mimicking body language ( of the subject)"
"Touching one's mouth or face"
"Reaching out to brush, touch or grasp"
"Steady eye contact, large pupils"
"Leaning forward"
"Stroking one's own neck or arm as a surrogate"
"Pointing one's torso and feet toward the subject"
"A flushed appearance"
"Nodding while the subject speaks"
"Smiling"
"Open body posture"
"Releasing an appreciative sigh"
"Laying a hand over the heart"
"Frequently moistening the lips"
"Pressing palms lightly against the cheeks"
"Skimming fingertips along the jaw line"
"Eyes that are bright, glossy"
"Agreement ( murmuring affirmations)"
"Speaking praise and compliments"
"Keeping trinkets, pictures, or articles of the subject"
"Constantly talking about the subject to others"
"Rapt attention, still posture"
"Becoming unaware of one's environment or other people"
"A radiant glow"
"Visible shakiness"
"Reduced blinking"
"Closing the eyes to savor the experience"
"Speaking with a soft voice or tone"
"A voice that cracks with emotion"

"INTERNAL SENSATIONS:"
"Quickening heartbeat"
"Breathlessness"
"Feeling one's pulse in the throat"
"Mouth drying"
"Throat growing thick"
