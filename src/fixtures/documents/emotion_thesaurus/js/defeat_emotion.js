console.log("Wordbank!");

var wordbank = {
  "name": "defeat_emotion",
  "list": [
    "DEFEAT"
    "DEFINITION: the feeling of having been mastered, conquered, or bested"
    "PHYSICAL SIGNALS:"
    "Chin lowering to one's chest"
    "Hands that go limp"
    "Holding one's palms up and out"
    "Shaking the head"
    "A lack of eye contact"
    "Staring down at one's hands or feet"
    "Going quiet or non-responsive"
    "Weaving in place, a lack of balance"
    "Agreeing for the sake of it"
    "Arms hanging at one's sides"
    "A long, low sigh"
    "A thickened voice"
    "Stumbling, knees hitching"
    "Rubbing at the eyes, hiding redness or tears from others"
    "Backing away"
    "Cheeks that burn"
    "A bobbing Adam's apple ( thick swallows)"
    "Hunched or rounded shoulders"
    "Sagging posture"
    "Hands hidden behind the back or in pockets"
    "Chin tremors"
    "Arms clutching one's body as ifto hold it together"
    "Lackluster movements"
    "Toneless responses"
    "Vacant eyes"
    "Slumping into a chair"
    "Holding one's head with the hands"
    "A cracking voice"
    "INTERNAL SENSATIONS:"
    "Feeling a pulse in one's throat"
    "Heart thudding dully in the chest"
    "Wheezing breaths"
    "Feeling like the head is spinning"
    "Chest pain or numbness"
    "A sour taste in one's mouth"
    "A lack of energy"
    "Tears or heat behind the eyelids"
    "A painful lump in one's throat"
    "Limbs that feel too heavy to lift or move"
    "MENTAL RESPONSES:"
    "A desire to flee or be alone"
    "Shame"
    "Worrying that others will feel let down or disappointed"
    "Mental fatigue"
    "CUES OF ACUTE OR LONG-TERM DEFEAT:"
    "A quaking or trembling body"
    "Uncontrollable tears"
    "Pleading or begging"
    "Collapsing , knees giving out"
    "Self-loathing"
    "MAY ESCALATE TO: RESIGNATION (132) , DEPRESSION (48), SHAME"
    "(140) , HUMILIATION (90)"
    "CUES OF SUPPRESSED DEFEAT:"
    "Shaking the head"
    "False bravado"
    "Trying to maintain eye contact"
    "Demanding a rematch"
    "Repeating the word No"
    "Shouting , cursing"
    "Laying the blame on others"
    "Making accusations of cheating or underhandedness"
    "A chin that juts sharply"
    "A flinty gaze"
    "Using anger to feed strength"
    "WRITER'S TIP: To reveal quieter emotions, hy using contrast. For example,"
    "pairing a character with someone who is highly volatile will help their own"
    "milder body cues stand out clearly."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "defeat_emotion",
  "title": "Defeat Emotion",
  "documentId": "defeat_emotion",
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
