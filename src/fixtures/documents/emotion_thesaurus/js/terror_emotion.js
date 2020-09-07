console.log("Wordbank!");

var wordbank = {
  "name": "terror_emotion",
  "list": [
    "TERROR"
    "DEFINITION: a state of extreme fear"
    "PHYSICAL SIGNALS:"
    "Rasping breaths"
    "Bulging eyes, an inability to blink"
    "Full body tremors"
    "Bolting out of hiding, rushing away from the threat"
    "Screaming, crying, blubbering"
    "Speechlessness or incoherence"
    "Holding oneself tightly (clutching the arms or wrapping arms around the belly)"
    "Squeezing eyes shut"
    "Moaning, whimpering"
    "Trembling chin and lips"
    "Running away with no destination in mind"
    "Shaking one's head as if in denial"
    "Clapping the hands over the ears"
    "Pressing fists to the sides of the head"
    "Crumpling, sinking to the ground"
    "Retreating into the fetal position or curling up on the knees"
    "Covering the face"
    "Cringing, flinching, jumping at sounds"
    "Tense muscles, rigid posture"
    "A primal scream"
    "Flaring nostrils"
    "Grabbing onto another person, refusing to let go or leave them"
    "Clumsiness (bumping into things, knocking things over)"
    "Clutching the throat or chest"
    "Gasping for air"
    "Clammy skin"
    "A harried, wild appearance"
    "Clawing at the cheeks, dragging the fingers down"
    "Tremors in the hands and fingers"
    "Copious sweating"
    "Risking a lesser danger in order to escape"
    "Causing self-harm and not noticing (cuts, bruises, etc., while trying to escape)"
    "Spinning around, trying to spot any and all danger"
    "Backing away in quick, jerky steps from something or someone"
    "Fight response ( a rush attack, using anything at hand to hit or destroy)"
    "INTERNAL SENSATIONS:"
    "Hyperventilation"
    "A racing pulse"
    "Sound of heartbeat thrashing in the ears"
    "A clenched jaw"
    "High pain tolerance , not fee ling or noticing injuries"
    "Increased strength or stamina"
    "Claustrophobia (even if one is not usually claustrophobic)"
    "Pain in the chest, lungs, or throat"
    "Weak legs"
    "Increa sed sensitivity to every sound, touch , or change in the environment"
    "Dizziness, seeing black spots"
    "MENTAL RESPONSES:"
    "A compu lsion to look back (when fleeing)"
    "Impaired decision making"
    "A single-minded focus: to save onese lf or someone else"
    "Risk taking"
    "Surrender if breaking point is reached"
    "Hyper- vigilance"
    "Thoughts that keep coming back to the worst possible outcome"
    "Sens itivity to noise and movement"
    "CUES OF ACUTE OR LONG-TERM TERROR :"
    "Pass ing out from a stress overload, lack of oxygen, or both"
    "A mental break (humming, rocking , hands over ears or eyes)"
    "Heart attack"
    "Shutting down mentally , retreating inward"
    "Post Traumatic Stress Disorder"
    "Insomnia"
    "Hallucinations"
    "Anxiety attacks"
    "Weight loss"
    "Nightmares"
    "Depress ion"
    "Substance abuse"
    "Difficulties relating to others"
    "Isolat ion"
    "Phobias"
    "MAY ESCALATE TO: PARANOIA (114), RAGE ( 120)"
    "CUES OF SUPPRESSED TERROR :"
    "Terror by nature is almost impossible to suppress or hide. Any attempt to hide"
    "terror would simply display itself as FEAR (76)"
    "WRITER'S TIP: When conveying high emotion, keep the metaphors to a"
    "minimum. No matter how jlowe,y or creative a character might be, in the midst"
    "of strong emotion, most p eople don ,t think in those terms. Keep it simple to"
    "maintain believability ."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "terror_emotion",
  "title": "Terror Emotion",
  "documentId": "terror_emotion",
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
