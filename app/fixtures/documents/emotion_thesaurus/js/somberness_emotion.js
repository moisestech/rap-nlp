console.log("Wordbank!");

var wordbank = {
  "name": "somberness_emotion",
  "list": [
    "SOMBERNESS"
    "DEFINITION: having a dark or gloomy manner"
    "PHYSICAL SIGNALS:"
    "An unmoving stance"
    "A voice devoid of emotion, deadpan"
    "A grave expression"
    "A sad or serious demeanor"
    "Hands folded in one's lap"
    "Sitting quietly"
    "Flaccid yet unwelcoming ( closed) body language"
    "A tendency to look down"
    "A thoughtful expression"
    "Hesitation before speaking, as if weighing words"
    "Dark or heavy observations"
    "A bleak mood that affects others, lessens energy, brings people down"
    "An inward gaze or unfocused stare"
    "Loose posture"
    "Speaking at the air rather than make eye contact with others"
    "Hands clasped loosely behind the back and gaze down"
    "A slow walk"
    "Features are smooth, expressionless"
    "Keeping arms and legs in close to the body"
    "Movements are functional and precise"
    "Unsmiling, humorless"
    "Words are chosen deliberately"
    "Not reacting to stimuli (laughter, excitement, activities)"
    "Drab, colorless clothing choices"
    "A grim twist to the mouth"
    "Sedate mannerisms, minimal or economical movement"
    "Eyes that look dark or serious"
    "An unnatural stillness"
    "A pensive expression"
    "Food and drink lacks taste or does not bring enjoyment"
    "INTERNAL SENSATIONS:"
    "Fatigue, lacking energy"
    "Heaviness in the limbs or muscles"
    "A weighed-down feeling"
    "Breathing is slow and even"
    "MENTAL RESPONSES:"
    "Subdued personality"
    "A negative outlook"
    "A desire to be alone"
    "Difficult y engaging in conversation"
    "Searching internally for answers rather than asking others"
    "CUES OF ACUTE OR LONG-TERM SOMBERNESS:"
    "Accepting a negative outcome or rea lization"
    "Unint erested in hobbies or entertainments"
    "Melancholy , gloomin ess"
    "Shunning other people who are not of like mind"
    "Inability to focus on the needs of others (chi ldren, family)"
    "Apathetic toward goals, des ires or upcoming events"
    "MAY ESCALATE TO: DEPRESS ION (48) , RESIGNATION ( 132)"
    "CUES OF SUPPRESSED SOMBERNESS:"
    "Forced laughter"
    "A too -freq uent smile"
    "Smiles that quickly fade"
    "Agreeing to attend happy socia l events , then not showing"
    "Smiles that don' t reach the eyes"
    "Light words delivered in a serious tone"
    "Adding an adornment (a pin, fancy hat, a bright scarf) so lely for appeara nces"
    "WRITER'S TIP: If your scene includes a small dip into the pa~1 to retrieve"
    "information that has direct bearing on the current action, make sure there is an"
    "emotional component. Emotions are triggers to memory and help tie the pr esent"
    "to the past."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "somberness_emotion",
  "title": "Somberness Emotion",
  "documentId": "somberness_emotion",
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
