console.log("Wordbank!");

var wordbank = {
  "name": "conflicted_emotion",
  "list": [
    "CONFLICTED",
    "DEFINITION experiencing opposing emotions",
    "opposing emotions",
    "feeling emotions",
    "opposing feelings",
    "PHYSICAL SIGNALS",
    "Lips pressing together in a slight grimace",
    "Increased swallowing or blinking",
    "A smile that wavers",
    "Gaze ping ponging avoiding direct eye contact",
    "Start and stop gesturing reaching then hesitating changing direction mid stride",
    "Broken dialogue, self-interruptions",[]
    "Opening and closing the mouth",
    "Struggling to find the right words",
    "Voicing support, but with a tone that lacks enthusiasm",
    "Becoming quieter, less animated",
    "Scratching one's neck or cheek",
    "Rubbing or pulling at an ear",
    "Asking questions to gain more insight",
    "Talking to others about similar experiences or situations",
    "Gathering opinions on what others would do",
    "Soft head shaking",
    "A need to sit down and reflect",
    "Rubbing or pinching the bottom lip",
    "A pensive expression",
    "Making a Hmmm noise in the throat",
    "Tilting the head in a side-to-side rhythm",
    "Pulling in and then slowly releasing a deep breath",
    "Apologizing for one's lackluster reaction, citing mixed feelings",
    "Requesting some time to digest everything",
    "Tapping one's index finger against the lip",
    "Brows pulling in",
    "Looking downward",
    "Rubbing at the middle of one's forehead, eyes closed",
    "Voicing conflict: This is a tough decision",
    "Voicing surprise: Sorry, you caught me off guard",
    "Knees that bend, then straighten",
    "A restless stance, pacing",
    "Rubbing a hand through the hair",
    "Smoothing one's clothes or touching items to keep the hands busy",
    "Cancelling gestures (smiling while shaking the head, nodding and grimacing)",
    "Holding one's elbow while the opposite hand makes a fist against the mouth",
    "Blowing cheeks out, then swallowing the air or releasing it",
    "Wrinkling the nose",
    "Holding hands out and weighing them in the air",
    "Rubbing a hand against the front of one's shirt (over heart)",
    "Forcing enthusiasm because its the right thing to do",
    "Subdued or delayed reactions",
    "INTERNAL SENSATIONS :",
    "Headaches",
    "A heaviness in the body",
    "Tightness in the chest",
    "A sinking fee ling in the stomach",
    "Loss of appetite",
    "MENTAL RESPONSES:",
    "Weighing the pros and cons",
    "Researching or seeking information",
    "Guilt toward those negatively affected by a final decision",
    "Playing What if? to understand the repercussion of a situation",
    "A need to verbal ize the interna l conflict",
    "A desire to retreat and go somew here quiet to think",
    "An inability to focus on anything but the internal conflict",
    "Drawing on moral beliefs to help one decide",
    "CUES OF BEING CONFLICTED OVER THE LONG TERM",
    "A disheveled look hair out of place clothes rumpled",
    "Obsessive information-gathering looking for the key solution",
    "Stomach upset poor diet weight loss",
    "Stress headaches",
    "Difficulty sleeping",
    "Loss of self confidence",
    "Avoiding making any decisions at all",
    "Hair loss",
    "MAY ESCALATE TO CONFUSION OVER WHELMED",
    "FRUSTRATION ANXIETY",
    "CUES WHEN SUPPRESSING THE FEELING OF BEING CONFLICTED:",
    "Citing that one is not the ideal cand idate to make the choice",
    "Making excuses to avoid the situation",
    "Suggesting that a break is needed to regroup",
    "Making a joke to allev iate tension or lighten the mood",
    "Giving a distracted nod to what 's being said",
    "WRITERS TIP In scenes where information must be shared characters should",
    "still be moving acting and revealing emotion to keep the pace flowing smoothly"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "conflicted_emotion",
  "title": "Conflicted Emotion",
  "documentId": "conflicted_emotion",
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
