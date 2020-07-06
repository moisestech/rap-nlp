console.log("Wordbank!");

var wordbank = {
  "name": "suspicion_emotion",
  "list": [
    "SUSPICION"
    "DEFINITION: suspecting, with little or no proof, that something is wrong"
    "PHYSICAL SIGNALS:"
    "Narrowing the eyes, squinting"
    "Body angling away from suspect"
    "A wrinkled brow"
    "Flushed skin"
    "A deliberate lowering of the head to study or stare"
    "Arms tight to the body"
    "Shooting glances at the suspect"
    "Avoiding direct eye contact"
    "A fake smile"
    "Sneaking or spying"
    "Eavesdropping"
    "Following the suspected person"
    "Keeping at a safe distance"
    "Evaluating the subject's manner and appearance"
    "Forced nonchalance to avoid the subject's notice (hands in pockets)"
    "Crouching or leaning forward to get closer without being seen"
    "Lips pressed flat"
    "Recording the suspect's activity and movement (notes, pictures, etc.)"
    "A set jaw"
    "Head tilted while mentally weighing evidence"
    "Being confrontational: What are you doing here? or What do you want?"
    "Pointing a finger while confronting"
    "Openly expressing distrust"
    "Crossing the arms"
    "Legs wide apart"
    "A raised voice"
    "Trying to convince others of the suspect's guilt"
    "Big movements (waving arms while talking, counting out arguments on fingers)"
    "Swaying from side to side"
    "Arguing with the suspect"
    "Pacing"
    "Biting the inside of the lip"
    "Sarcasm: So you just happened to be near when my car's tires were slashed, huh?"
    "Questioning others as a way of gathering information"
    "Googling the suspect"
    "INTERNAL SENSATIONS:"
    "Quickened breaths"
    "Adrenaline rush"
    "Thumping heartbeat"
    "Fight or flight reflex kicking in"
    "knot in the belly"
    "A sense of release when confro nting the suspect"
    "MENTAL RESPONSES:"
    "Intent listening, so as to catch the suspect in their lie"
    "Mentally running through everyt hing known about the situat ion"
    "Wanting to shield onese lf and othe rs from the person"
    "Second guess ing, fearing others will think one's concerns are irrational"
    "Carefu lly preparing an argument or plan of attack"
    "Weighing the danger level of the situation"
    "CUES OF ACUTE OR LONG-TERM SUSPICION:"
    "Obsession with the suspec t"
    "Stalking"
    "Sett ing up the suspect in the hopes he will reveal his true self"
    "Attempting to openly discredit or blackball the suspect"
    "Contact ing the appropriate authorities to express concern"
    "Fantasizing about the day the suspect is finally exposed"
    "MAY ESCALATE TO: FEAR (76) , AGITATION ( 16), ANGER (22) ,"
    "PARANOIA ( 114)"
    "CUES OF SUPPRESSED SUSPICION:"
    "A slight head nod"
    "Hmms, as opposed to overt agreement"
    "A flat tone of voice"
    "No ncommi ttal answers"
    "Avoidi ng the suspected person"
    "Agreeing too quickly , too loudly"
    "Over-the-top support: I'm with you 100%, I absolutely agree"
    "Nervo us movements (biting nails, twist ing a shirt button, rubbing the neck)"
    "Standing back from the suspect , not stepping into his circle of friends"
    "Spending minimum time with the suspec t before finding a reason to leave"
    "WRITER'S TIP: While it's tempting lo let a character speak openly about their"
    "emotions in dialogue, it will raise a red flag.for the reader. If you wouldn 't say if"
    "in real life, don 't let your character."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "suspicion_emotion",
  "title": "Suspicion Emotion",
  "documentId": "suspicion_emotion",
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
