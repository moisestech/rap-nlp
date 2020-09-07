console.log("Wordbank!");

var wordbank = {
  "name": "sympathy_emotion",
  "list": [
    "SYMPATHY"
    "DEFINITION: sensitivity to and sharing in another's emotions"
    "PHYSICAL SIGNALS:"
    "Kind words, a soothing tone"
    "Telling someone that they aren't alone, how things will work out"
    "Rubbing someone's back"
    "Squeezing a shoulder or hand"
    "Lightly stroking a forearm"
    "Offering a deep sigh and thoughtful expression"
    "A parting hug lasting longer than normal"
    "An understanding nod"
    "Eyes narrowing, eyebrows pulling down in concentration"
    "Crying with the person"
    "Offering the bright side: At least now we know, or It could have been worse"
    "Hugging, holding, pulling someone against your shoulder"
    "Stroking or smoothing someone's hair"
    "Clumsy attempts to comfort ( a weak smile, an awkward hug)"
    "Fumbling for words"
    "Patting a leg in comfort"
    "Leaning in, scooting closer"
    "A gentle tone, using words the other person wants to hear"
    "Phrasing questions in a positive way to make the other person feel better"
    "Sitting with knees touching the other person's"
    "Bringing a box of tissue or a cup of tea, unasked"
    "Floundering hand movements"
    "Pulling someone into a side hug"
    "Handling distractions (answering the phone) so the other person won't have to"
    "Apologizing, not out of accountability, but to voice the unfairness of the situation"
    "Offering the advice of a relative or friend: As my uncle used to say ..."
    "Fussing over the person's appearance while speaking in encouraging tones"
    "Listening intently while ignoring discomforts ( cold, rain, heat)"
    "Making sacrifices to offer comfort (cancelling plans)"
    "*SPECIAL: Sympathetic physical signals between males"
    "Saying That sucks, or Yeah, I hear you, or I feel you, man"
    "A soft tap to the arm, a pat on the back"
    "Lightly touching a shoulder"
    "Listening, arms crossed over one's chest"
    "Leaning in awkwardly with hands in the pockets, asking if things are okay"
    "A heavy nod"
    "Speaking in a quiet voice"
    "A single shoulder shrug that breaks quickly"
    "Listening while participating in another activity"
    "Looking elsew here while listening , so as not to make the other male"
    "uncomfortable"
    "Offering to take him somewhere-a walk, a car ride, to hang out"
    "Agreeing , even if he's being irrational"
    "Lett ing him blow off steam or talk trash about others"
    "Offering to avenge the offended party"
    "Attempting to distract him (going to the movies, a party, drinking)"
    "INTERNAL SENSATIONS :"
    "Feeling emotiona lly drained"
    "An overa ll weig hted feeling"
    "A slower heartbeat"
    "Ache in the throat"
    "MENTAL RESPONSES :"
    "A desire to be near or to make physical contact"
    "Wishing one cou ld a lleviate the pain"
    "Uncertaint y about what to say"
    "Listening without judgment"
    "Worry that this event could happ en again , particular ly to oneself or loved ones"
    "Appreci ation for the little things"
    "The mind turning often to the person"
    "Offering up prayers on their behalf"
    "A narrow ed focus, allowing for sole concen tration on the other person"
    "Relief"
    "CUES OF ACUTE OR LONG-TERM SYMPATHY :"
    "Obsessive thoughts on how to fix the situation"
    "Employing c liches: This loo will pass, keep you r chin up, etc."
    "Giving comfort through gifts, ply ing a person with food or attention"
    "Invol ving oneself in the situation , internaliz ing the other person 's pain"
    "MAY ESCALATE TO: SADNESS ( 134), ADORAT ION (14), LOVE ( 106),"
    "GRAT ITUDE (80), NOSTALG IA (110) , WORRY ( 162)"
    "CUES OF SUPPRESSED SYMPATHY:"
    "A hand that lifts towar ds someo ne, then lowers"
    "Speaki ng often of the person or situat ion"
    "Privately praying for the person"
    "Smiling or winking at the person but not offering verbal support"
    "Watc hing at a distance, hoping for change"
    "WRITER'S TIP: Emotions usually don 't Jump from mild to extreme in a short"
    "period of time. To gain the reader 's trust, lay the prop er fo undation and show"
    "how stressors lead lo a greater intensity."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "sympathy_emotion",
  "title": "Sympathy Emotion",
  "documentId": "sympathy_emotion",
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
