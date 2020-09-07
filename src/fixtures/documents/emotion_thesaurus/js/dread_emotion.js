console.log("Wordbank!");

var wordbank = {
  "name": "dread_emotion",
  "list": [
    "DREAD"
    "DEFINITION: a nearly overpowering fear to face or meet; a strong desire to"
    "avoid a future event or circumstance"
    "PHYSICAL SIGNALS:"
    "Holding the stomach as if pained"
    "Clutching arms to one's chest"
    "Shoulders curling forward, caving the chest in"
    "A bent neck"
    "Leaning back or away from the source of discomfort"
    "Dragging footsteps"
    "Making excuses to leave"
    "A quiet voice, offering one-word responses"
    "Hunched posture and a drooping head"
    "Clasping one's knees tightly together"
    "Avoiding eye contact"
    "Turning the torso, shielding it"
    "Lifting the shoulders as if to hide one's neck"
    "Sweating"
    "Rocking slightly"
    "Hands that tremble"
    "Seeking the safety of darkness, an exit, etc."
    "Holding one's elbows tightly against sides"
    "A downward gaze, using the hair as a shield"
    "Making oneself appear smaller"
    "Huddling in the comer, behind, or against something"
    "Flinching or cringing"
    "Heavy footsteps"
    "Uncontrollable whimpering"
    "Increased swallowing"
    "Arms crossing the stomach in a protective huddle"
    "Rubbing and twisting one's hands, spinning rings or bracelets"
    "Scratching at the skin, picking or biting at nails"
    "Clutching comfort items ( a necklace charm, phone, etc.)"
    "Dragging the palms down one's pant legs"
    "Chewing at one's lips or inner cheek and making them bleed"
    "A pale or sickly complexion"
    "INTERNAL SENSATIONS:"
    "A rolling stomach"
    "Heavy or sluggish heartbeat"
    "Chills"
    "Cold fingers"
    "Tingling in the chest"
    "A weighted chest"
    "Difficulty breathing"
    "A sour taste in the mouth"
    "Ache in the back of the throat"
    "Difficulty swallowing"
    "Dizziness"
    "Shakiness in the limbs"
    "MENTAL RESPONSES:"
    "Thoughts of escape"
    "Wanting to hide"
    "Wishing time would speed up"
    "An inability to see a positive outcome"
    "The need to check for danger overriding the need to hide"
    "CUES OF ACUTE OR LONG-TERM DREAD:"
    "Shaking, shuddering"
    "Jumping at sounds"
    "Teeth chattering"
    "Weeping"
    "Seeking any excuse to avoid what is to come"
    "Hyperventilating"
    "Bargaining, pleading"
    "Anxiety attack"
    "MAY ESCALATE TO: ANGUISH (24), TERROR ( 154)"
    "CUES OF SUPPRESSED DREAD:"
    "Acting like one is simply feeling under the weather"
    "Attempting to escape via distraction (TV, book, music)"
    "Focusing thoughts to keep fear from taking over"
    "Keeping still"
    "WRITER'S TIP: Maintain an overall p erspective of the book 's emotional range."
    "A strong manuscript will always expose the reader lo several contrasting"
    "emotional experiences that fit within the context of the protagonist ·s growth."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "dread_emotion",
  "title": "Dread Emotion",
  "documentId": "dread_emotion",
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
