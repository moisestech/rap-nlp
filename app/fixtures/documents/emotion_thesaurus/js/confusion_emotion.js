console.log("Wordbank!");

var wordbank = {
  "name": "confusion_emotion",
  "list": [
    "CONFUSION",
    "DEFINITION a state of befuddlement or bafflement",
    "PHYSICAL SIGNALS",
    "Difficulty completing a task",
    "Fumbling",
    "Using um and uh hesitations",
    "Grimacing",
    "Excessive swallowing",
    "Scratching at ones cheek or temple",
    "Rubbing the chin",
    "Repeating back what was said as a question",
    "Touching the base of the neck",
    "Showing ones palms and shrugging",
    "An uncertain tone",
    "Increased difficulty in finding the right words",
    "Body posture that loosens or collapses",
    "Tilting ones head to the side and pursing the lips",
    "Narrowed eyes",
    "Stuttering",
    "Head flinching back slightly",
    "Trailing off when speaking",
    "Running hands through the hair",
    "Eyebrows that squish together",
    "Pulling or tugging on an ear",
    "Asking someone to repeat what was said",
    "Gaze clouding going distant",
    "Rubbing ones forehead or eyebrows",
    "Asking questions",
    "Frowning",
    "Biting ones lip",
    "Rapid blinking",
    "Hands touching the lips mouth face",
    "Glancing around as if looking for answers",
    "Wandering a short distance away before returning",
    "Turning away to gather ones thoughts",
    "A slight head shake",
    "A mouth that opens but nothing comes out",
    "Blowing out the cheeks then releasing",
    "A blank look a slack expression",
    "Staring down at the ground",
    "Asking for affirmation Are you sure",
    "Tapping a fist against the lips",
    "Poking ones tongue into the cheek",
    "Dry washing ones hands",
    "INTERNAL SENSATIONS",
    "Rising body heat",
    "Fluttering in the stomach",
    "A tightening chest",
    "Sweating",
    "Feeling overheated",
    "MENTAL RESPONSES",
    "Thoughts that freeze",
    "Hoping for an interruption to delay answering",
    "The mind racing searching for answers",
    "CUES OF ACUTE OR LONG-TERM CONFUSION",
    "Flight response",
    "Failing grades",
    "Loss of respect from others for unfinished or inaccurate work",
    "Broken or unfulfilled promises",
    "A lack of productivity",
    "A loss of self esteem",
    "MAY ESCALATE TO OVERWHELMED FRUSTRATION",
    "RESIGNATION INSECURITY",
    "CUES OF SUPPRESSED CONFUSION",
    "Nodding or agreeing to avoid attention",
    "Waving a hand",
    "False confidence",
    "Assuring others that everything is under control",
    "Smiling and nodding",
    "Physical touches to reassure a clap on the back or shoulder",
    "Fidgeting",
    "Steering the conversation to a different topic",
    "Launching into a flurry of activity",
    "Making promises",
    "Showing a sudden interest in other things",
    "Visible sweating",
    "Using word filler to stall for time",
    "WRITERS TIP Men and women experience and express emotions differently",
    "When writing a character of the opposite sex get a second opinion if needed to",
    "ensure a characters reactions thoughts andfeelings are authentic"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "confusion_emotion",
  "title": "Confusion Emotion",
  "documentId": "confusion_emotion",
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
