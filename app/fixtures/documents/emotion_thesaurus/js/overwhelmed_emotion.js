console.log("Wordbank!");

var wordbank = {
  "name": "overwhelmed_emotion",
  "list": [
    "OVERWHELMED"
    "DEFINITION: to be overpowered or overcome by feelings or circumstances"
    "PHYSICAL SIGNALS:"
    "Bringing a shaky hand to the forehead"
    "Holding a palm up to stop someone from dumping on more worry"
    "Waving people away"
    "Shoulders that drop or curl"
    "A chest that caves in"
    "Clutching at one's arms or stomach"
    "Touching a temple while closing the eyes"
    "A voice choked with tears"
    "A chest that hitches"
    "A quaking voice"
    "Poor balance"
    "Mumbling, muttering"
    "Letting out an uncontrollable cry, sob, or whimper"
    "Uncertain (almost drunken) steps"
    "Sagging into a chair, leaning against a door frame or wall"
    "Pulling the knees up to the chest, circling one's knees with the arms"
    "Falling against another person"
    "Shaking all over"
    "Teary eyes"
    "Difficulty forming responses"
    "Holing up in a corner, placing one's back against the wall"
    "Dropping or spilling things"
    "Shaking the head repeatedly"
    "A glassy stare, a glazed look"
    "Staring down at one's empty palms"
    "Crumpling to the floor"
    "Putting one's hands over one's ears"
    "Rocking back and forth"
    "Closing the eyes"
    "Inappropriate responses ( laughing, screaming)"
    "Leaning over with the hands on the knees"
    "Hyperventilating"
    "Loosening belts, collars, and other confining clothing"
    "Touching one's fingertips to one's lips"
    "INTERNAL SENSATIONS:"
    "Weakness in the legs, a sudden need to sit down"
    "A wave of heat or cold"
    "Light-headedness"
    "Difficulty breathing"
    "An inability to eat"
    "Noise sens itivity"
    "Ringing ears"
    "Tunnel vision"
    "MENTAL RESPONSES:"
    "Mental numbnes s"
    "Retreating inward"
    "Becoming non-r espons ive to others, almost catatonic"
    "Wishing for comfort"
    "The desire to be alone"
    "An inability to focus"
    "Indeci siveness"
    "CUES OF BErNG OVERWHELMED LONG TERM:"
    "Flight"
    "Snapping under pressure (screaming, yelling, hitting others)"
    "Fainting or swooning"
    "Weep ing"
    "Hysteria"
    "Headache s"
    "Hypertension"
    "Muscle fatigue and sore ness"
    "Seeking comfort in unhea lthy ways"
    "Heart attack or stroke"
    "Chronic fatigue, insomnia"
    "Decaying physica l health , hospitalizat ion"
    "MAY ESCALATE TO: ANXIETY (30), DEPRESSION ( 48)"
    "SUPPRESSED CUES OF BErNG OVERWHELMED:"
    "Verbal denial: J'mfine, really"
    "False smiles and confidence"
    "Agreeability or false enthusiasm"
    "Masking weakness with exc uses: Sorry, I stood up too fast"
    "Feigning a headache or ot her malady rather than admit one's limits"
    "WRITER'S TIP: When delivering emotional description , it ·s easy to rely too"
    "much on facial expressions. Instead, look down and describe what the arms,"
    "hands, legs, and feet are doing."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "overwhelmed_emotion",
  "title": "Overwhelmed Emotion",
  "documentId": "overwhelmed_emotion",
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
