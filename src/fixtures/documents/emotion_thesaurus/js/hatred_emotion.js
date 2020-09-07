console.log("Wordbank!");

var wordbank = {
  "name": "hatred_emotion",
  "list": [
    "HATRED"
    "DEFINITION: to loathe or detest; to feel animosity toward"
    "PHYSICAL SIGNALS:"
    "Fists that shake"
    "An intense, fevered stare"
    "Clenched jaw, grinding teeth"
    "Rigid and defined forearm muscles"
    "Uttering dark, hurtful words meant to provoke"
    "Stiff posture, square shoulders, a lurching walk"
    "Shoving, pushing, tripping"
    "Bearing the teeth"
    "Fingers retracting, turning claw-like"
    "Shouting, screaming, swearing"
    "Lunging at an enemy"
    "Spittle flying while yelling"
    "A red face and neck"
    "Sweating"
    "Visible vein throb"
    "A corded neck"
    "Walking off, refusing to stay in another's presence"
    "Switching shifts or altering a schedule to avoid an enemy"
    "Tightness in the face, skin stretched into a snar I"
    "An animalistic growl in the throat"
    "Flaring nostrils"
    "A grip that unintentionally crushes or breaks (snapping a pen, etc.)"
    "A tense body, on the verge of springing"
    "Bullying, cyber trolling"
    "A mouth that curls with dislike, sneering"
    "Spitting at someone or in their direction"
    "Reaching out to throttle, hit, or cause pain"
    "Shoving people aside to reach the enemy"
    "Angry tears"
    "Cursing, swearing"
    "A scathing tone"
    "A shaking voice"
    "Using friends to help ostracize or bring the enemy low"
    "Initiating hateful gossip, setting the enemy up, starting rumors"
    "Wrenching an enemy's arm to stop them from leaving"
    "Acting on violent urges (throwing a chair, destroying property)"
    "INTERNAL SENSATIONS:"
    "Loud breaths, a heaving chest"
    "Pain in the jaw from clenching or grinding teeth"
    "86"
    "A poundin g heartbeat"
    "Headache"
    "Rising body temperature"
    "Strain or soreness from tense muscles"
    "Roaring in the ears"
    "MENTAL RESPONSES:"
    "A dark mood that no one can reach through or dispel"
    "Rash dec ision s, impair ed jud gment"
    "Irrational thoughts, taking risks to get even"
    "A desire to carry out a vendetta (via vandalism, theft, etc.)"
    "Sing le-minded focus on how to destroy another"
    "Humiliation fantasies featuring the enemy"
    "Actively wishing for harm or misfortun e to happen to another"
    "CUES OF ACUTE OR LONG-TERM HATRED:"
    "An inability to enjoy pos itive things or happine ss"
    "Difficult y eat ing and sleeping"
    "Iso lation"
    "Fixating on an enemy, stalking"
    "Deri ving plea sure from violent fantasies involving an enemy"
    "Committin g crimes aga inst the enemy"
    "Assault or murder"
    "MAY ESCALATE TO: PARANOIA ( 114), RAGE (120)"
    "CUES OF SUPPRESSED HATRED:"
    "Clamping the teeth shut to contain hard words"
    "Taking deep breath s to calm oneself"
    "Seek ing out a distraction or diver sion"
    "Leav ing the situation or presence of an enemy"
    "Surrounding oneself with supporti ve friends"
    "WRITER'S TIP: One way to create emotional intensity is to have the character"
    "remember the stakes on the cusp of taking action. Worry over the outcome can"
    "add a slice of desperation to any scene and create a compelling emotional pull"
    "for the reader."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "hatred_emotion",
  "title": "Hatred Emotion",
  "documentId": "hatred_emotion",
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
