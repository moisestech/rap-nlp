console.log("Wordbank!");

var wordbank = {
  "name": "humiliation_emotion",
  "list": [
    "HUMILIATION"
    "DEFINITION: feeling degraded or mortified, worthless or cheap"
    "PHYSICAL SIGNALS:"
    "Body collapsing in on itself"
    "A bowed head"
    "Shoulders curling over chest"
    "Angling torso away from others"
    "Uncontrollable shuddering or shivering"
    "Hair hanging in face, hiding the eyes"
    "A downward gaze"
    "A flushed face"
    "Hitching chest"
    "Eyes dull, lifeless"
    "Pulling down a shirt hem ( covering gesture)"
    "Body shielding (if holding onto an object)"
    "Hands clutching at stomach"
    "Covering face with hands"
    "Bottom lip or chin trembling"
    "Whimpering"
    "Throat bobbing"
    "Arms falling to sides, lifeless"
    "Uncontrolled tears"
    "Flinching at noise or from being touched"
    "Huddling, crouching"
    "Trying to cover body with hands"
    "Neck bending forward"
    "Movement is slow, jerky"
    "Knees locked tight together"
    "A loss of coordination"
    "Cold sweat"
    "Stumbling, staggering"
    "Backing up against a wall, sliding into a corner, hiding"
    "Visible tremors coursing through the body"
    "Hands gripping elbows"
    "Pigeon toes (tilted inward)"
    "Sobs trapped in throat"
    "Drawing knees up to the body's core"
    "Wrapping arms around self"
    "Runny nose"
    "INTERNAL SENSATIONS:"
    "Weakness in legs"
    "Sluggish heartbeat"
    "Pain in chest"
    "Rapid swa llowing"
    "Dizziness, a sense of vertigo"
    "Ribs squeezing"
    "Body feels broken"
    "Skin tightens (crawls)"
    "Loose muscles"
    "Hot eyes and cheeks"
    "Nausea"
    "MENTAL RESPONSES:"
    "Self-loathing"
    "Shattered thoughts"
    "A feeling of nakedne ss, of being on display"
    "A need to hide or flee that supersedes all else"
    "Wanting it to end at all costs"
    "CUES OF ACUTE OR LONG-TERM HUMILIATION:"
    "Curling up on the floor"
    "Hiding behind something , against something"
    "Crying, blubbering, hitching sobs"
    "Willingnes s to escape by any means"
    "A desire to die, for the emotional pain to end"
    "MAY ESCALATE TO: DEPRESSION (48), REGRET (122), SHAME ( 140),"
    "ANGER (22), HATRED (86)"
    "CUES OF SUPPRESSED HUMILIATION :"
    "Numbness in mind and body"
    "Becoming passive and disengaged"
    "Closing off all thought s of what is happenin g"
    "Not speaking or making any sound"
    "Sending the mind 'so mewhere else'"
    "A disconnect between the mind and body"
    "WRITER'S TIP: Add conflicting emotions for a richer experience. A character"
    "might feel excitement and pride at purchasing their first car, yet worry that they"
    "might be extending themselves too.far financially. This inner conflict helps to"
    "humanize a character to the reader."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "humiliation_emotion",
  "title": "Humiliation Emotion",
  "documentId": "humiliation_emotion",
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
