console.log("Wordbank!");

var wordbank = {
  "name": "happiness_emotion",
  "list": [
    "HAPPINESS"
    "DEFINITION: a state of well-being or joyful contentment"
    "PHYSICAL SIGNALS:"
    "An upturned face"
    "Smiling"
    "Humming, whistling, singing"
    "A relaxed appearance"
    "Telling jokes, laughing frequently"
    "Laugh lines"
    "Raised, prominent cheekbones (from smiling)"
    "Eyes that dance, sparkle, or shine"
    "A bubbly or light voice"
    "Rapid speaking"
    "Buying gifts for others or offering tokens of kindness"
    "Stretching out the legs, adopting a wide, open stance"
    "Giving someone the thumbs-up"
    "Sitting up, straight and alert"
    "Fluid movements"
    "Offering compliments"
    "Swinging the arms while walking"
    "Enthusiastic waving"
    "A polite manner"
    "Stepping lightly, skipping"
    "Initiating physical contact with others"
    "Infusing one's speech with positive words"
    "Showing a talkative nature and courtesy with strangers"
    "Spontaneity"
    "Lightly rapping one's fingers ( as if to internal music) on a leg or other surface"
    "Swinging or tapping one's foot to an easy beat"
    "Satisfied, catlike stretches"
    "Expressing enjoyment of the senses (swaying to music, savoring food)"
    "Nodding or leaning in, actively showing interest"
    "Bouncing on the toes"
    "Clasping hands to the chest"
    "Offering encouragement and support"
    "Quick movements, no hesitation"
    "An overall visage that glows or radiates"
    "Holding the arms out wide as ifto hug the world"
    "Initiating random acts of kindness"
    "INTERNAL SENSATIONS:"
    "A feeling of breathlessness"
    "Heat that radiates through the chest"
    "84"
    "Tingling hands"
    "Lightne ss in the limbs"
    "A fee ling of weightle ssness"
    "MENTAL RESPONSES:"
    "Positive thinking"
    "Desiring to spread joy and make others feel good"
    "Not icing the small things (sme lling the roses , so to speak)"
    "He lpfulness"
    "Being at ease with the wor ld, content"
    "Showing patience"
    "A bright outlook (glass half full)"
    "A desire to be with loved ones or friends"
    "Fearl ess ness"
    "Benign risk taking for fun"
    "CUES OF ACUTE OR LONG-TERM HAPPINESS:"
    "Joyfu l tears"
    "Shaking with excitement"
    "Big movements (leaping, fist pumpin g, running)"
    "Happy bursts of screaming , shouting , laughter, squeals , giggles"
    "Show s of affection"
    "Spinning in a wild circle"
    "Dancin g"
    "MAY ESCALATE TO: ELATION (68), GRATITUDE (80) , SATISFACTION"
    "( 136), PEACE FULNESS ( 116)"
    "CUES OF SUPPRESSED HAPPINESS:"
    "Press ing the lips tight to keep from smiling"
    "Difficult y staying still"
    "Tak ing deep, calming breaths"
    "Bouncing lightly in place"
    "Avert ing the face"
    "Fiddling with thing s to keep hands and feet from twitchin g"
    "Care fully-ma sked features, but eyes that betray the true emotion"
    "Putting away happy thoughts to savor later"
    "Intense concentration on something or someone e lse"
    "Hiding a jo yous expression with one's hair"
    "Holding a hand over the mouth to cover a smile"
    "Pinching onese lf and using the pain to help contain the emotion"
    "WRITER'S TIP: To increase tension in a scene, think about what is motivating"
    "your character, and which emotions could get in the way. Introduce an event that"
    "creates the very emotions the character wishes to avoid."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "happiness_emotion",
  "title": "Happiness Emotion",
  "documentId": "happiness_emotion",
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
