console.log("Wordbank!");

var wordbank = {
  "name": "envy_emotion",
  "list": [
    "ENVY"
    "DEFINITION: resent~} awareness of an advantage enjoyed by another, paired"
    "with a longmg to acqmre that advantage"
    "N_DTE:th e advantage can be a person, an object. or an intangible (populariry"
    "lifesryle, etc.) '"
    "PHYSICAL SIGNALS:"
    "Staring"
    "Glowering"
    "The mouth turning down"
    "Lips parting slightly"
    "A tightening under the eyes"
    "A thinning mouth"
    "Chin poking forward"
    "Squinting"
    "Baring the teeth slightly"
    "A pouty bottom lip"
    "Crossing the arms over the chest"
    "Shoulders hunching slightly"
    "Leaning closer"
    "Reaching"
    "Flaring nostrils"
    "A coveting gaze that drifts to the symbol of envy (the advantage)"
    "Being snarky or rude, seemingly without cause"
    "Shoving one's hands into pockets"
    "Twitching hands"
    "Hands tightening into fists"
    "Muscles bunching"
    "Turning away from the advantage and stalking off"
    "Swallowing frequently"
    "Rubbing the hands over one's clothing"
    "Feet and torso facing the advantage"
    "Licking or sucking on the bottom lip"
    "Sweaty hands"
    "A reddening of the face"
    "Rubbing at or massaging one's chest as if pained"
    "Stroking or pinching one's throat"
    "Taking a step toward the person or object one wants"
    "Obsessive behavior (stalking, making a plan to acquire the advantage)"
    "INTERNAL SENSATIONS:"
    "Quick heartbeat"
    "Ribs squeezing tight"
    "Rising body temperature"
    "A pulling sensation in the gut"
    "Dry throat"
    "Sucking in breath through clenched teeth"
    "MENTAL RESPONSES:"
    "A strong desire to touch , hold, and own"
    "Anger at the unfairne ss or injustice"
    "Unkind thoughts about the other person"
    "Frustration"
    "Scheming ways to acquire what another has"
    "Self-loathing"
    "Fantasizing about the advantage"
    "An inability to commit to or focus on anything else"
    "Dissat isfaction with what one does have"
    "A feeling of entitlement: / deserve it or That should be mine"
    "CUES OF ACUTE OR LONG-TERM ENVY:"
    "Feeling that life isn 't worth living without the advantage"
    "Grabbing or stealing the coveted object"
    "Fighting or arguing with the envied one to relea se frustration"
    "Falsely belittling or minimi zing the attributes of the desired advantage or object"
    "Irrational thinkin g"
    "Making demand s: Give it to me."
    "MAY ESCALATE TO: DETERMINATION (54) , RESENTMENT (130),"
    "ANGER (22) , DEPRESSION (48) , JEALOUSY (102)"
    "CUES OF SUPPRESSED ENVY:"
    "Congratulating or offering praise"
    "Forcing a smile"
    "Acknowledging the object and complimenting it"
    "Attempting not to stare"
    "Watching from a distance"
    "WRITER'S TIP: When crafting the details of a fight scene, remember that less"
    "is more. Too many details create a play-by-play.feel which can come across as"
    "mechanical."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "envy_emotion",
  "title": "Envy Emotion",
  "documentId": "envy_emotion",
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
