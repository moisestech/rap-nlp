console.log("Wordbank!");

var wordbank = {
  "name": "love_emotion",
  "list": [
    "LOVE"
    "DEFINITION: deep affection, attachment, or devotion for another"
    "PHYSICAL SIGNALS:"
    "Moving to get closer or touch"
    "Smiling at nothing"
    "A beaming expression, glowing cheeks"
    "Strong eye contact, very little blinking"
    "Focusing on the other's best attributes"
    "Taking large, deep, savoring breaths"
    "A yearning look"
    "Licking one's lips"
    "Unconsciously parting the lips"
    "A light, bouncing step"
    "A silly grin, laughing, talking non stop"
    "Leaning against one another"
    "Lying in the other's lap"
    "Using pet names or terms of endearment"
    "Mooning over photos or representations of a love interest"
    "Listening to and connecting with love songs"
    "Adopting a silly love-struck tone when communicating"
    "Nervous behaviors (fiddling with the hands, moistening one's lips)"
    "Flirtatious talk or saying: / love you"
    "Torso and feet pointing toward the loved one"
    "Playful shoving and grabbing"
    "Sharing secrets and desires"
    "Affectionate touches (arm stroking, holding hands, kissing, hugging)"
    "Sitting together so the legs touch"
    "Putting an arm around someone's shoulders"
    "Realigning hobbies or interests to match the other's"
    "Hooking a hand in the other person's belt or pocket"
    "Ignoring or neglecting other :friends to be with the significant other"
    "Writing notes or poetry to the other person"
    "Offering gifts of time, value, or thoughtfulness"
    "Talking to friends about the special person, asking for advice"
    "Obsessively checking the phone to see if the love interest has called"
    "Constant texting back and forth"
    "Doodling hearts and names"
    "Dieting or working out in an effort to improve one's appearance"
    "Watching romantic movies"
    "INTERNAL SENSATIONS:"
    "A fluttering in the stomach, a feeling of emptiness"
    "A racing pulse"
    "The heart beating, banging , or hammering"
    "A hyper-awarenes s of the body"
    "Weak knees or legs"
    "A tingling or electrical jolt at accidental touches"
    "Getting tongue-tangled"
    "MENTAL RESPONSES:"
    "Euphoria, pleasure at touching and closeness"
    "Appreciating the world and everything in it"
    "Losing track of time when with the other person"
    "Mental fuzziness, distraction , daydreaming"
    "Losing awareness of surroundings when love interest is near"
    "Seeking ways to make a loved one proud"
    "Worrying when too much time has passed without contact"
    "A feeling of possessiveness, jealousy"
    "Feeing safe and whole when together"
    "CUES OF ACUTE OR LONG-TERM LOVE:"
    "Exchanging personal effects (clothing , jewelr y, keys)"
    "Embracing the love interest's friends as one's own"
    "Sharing finances and possessions"
    "Enduring hardship to be with the love interest or make them happy"
    "Putting the other 's needs and desires first"
    "Intimacy"
    "Sharing hopes and dreams , becoming emotionally vulnerable"
    "Future planning that centers around the love interest"
    "Living together, a committed relationship , marriage"
    "MAY ESCALATE TO: PEACEFULNESS (116), SATISFACTION (136),"
    "DESIRE (50), ADORATION ( 14)"
    "CUES OF SUPPRESSED LOVE:"
    "Flushed skin"
    "A high-pitched voice"
    "Nervous laughter or giggling"
    "Stand ing close yet not touching"
    "Darting glances"
    "Watching from a safe distance"
    "An increased interest in the other person 's personal life"
    "Forcib ly declaring that nothing 's going on: We 're just fi'iends"
    "An overa ll brightening when the other person enters the room"
    "WRITER'S TIP: Sentence structure is e~pecially important when describing."
    "Varied sentence length keeps the pace moving and livens up sensory detail,"
    "avoiding a d,y report fee/".
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "love_emotion",
  "title": "Love Emotion",
  "documentId": "love_emotion",
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
