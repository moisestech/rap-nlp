console.log("Wordbank!");

var wordbank = {
  "name": "paranoia_emotion",
  "list": [
    "PARANOIA"
    "DEFINITION: excessive or illogical suspicion and/or distrust of others"
    "PHYSICAL SIGNALS:"
    "Startling easily"
    "Clenching the jaw"
    "Darting eye movements, a wide-eyed look"
    "Excessive safety precautions ( extra locks, guard dogs, video surveillance)"
    "Fidgety hands that won't settle"
    "Restless sleep, tossing and turning, insomnia"
    "Backing away with raised hands"
    "Flinching"
    "Eyes that don't seem to blink often enough"
    "Crossing the arms tightly over the chest"
    "Muttering under one's breath, talking to oneself"
    "Scratching compulsively"
    "Sweating"
    "Bloodshot eyes"
    "Scouting for exits when entering a room"
    "A heightened need for personal distance"
    "Dependency on caffeinated beverages or drugs to stay alert"
    "Pallid skin from lack of sunlight"
    "A rumpled appearance"
    "Accusing innocent people of planning or carrying out mischief"
    "Facial tics, muscles that jump"
    "A quick, erratic pace"
    "Always looking over the shoulder or around the next corner"
    "Weight loss"
    "Plucking at clothing as if it chafes"
    "Aligning with fringe groups and conspiracy theorists"
    "Espousing far-out beliefs and opinions"
    "Becoming easily offended"
    "Jumping to the defensive"
    "Verbally attacking any perceived opponents"
    "Spouting inane or irrational arguments"
    "Citing unreliable sources"
    "Stubbornly adhering to one's beliefs no matter how outlandish"
    "Perfectionist tendencies"
    "Compulsive behaviors"
    "Refusing food or drink prepared by others"
    "INTERNAL SENSATIONS:"
    "Heightened senses"
    "Fatigue"
    "114"
    "I !"
    "I"
    "Muscles that are always tense, ready to fight or run"
    "Sensitivity to touch and sound"
    "A racing heartbeat"
    "Raw nerves and skin"
    "High adrenaline level, jumpiness"
    "MENTAL RESPONSES:"
    "Seeing danger symbols in everything"
    "Judging too quickly"
    "A heightened sense of self-import ance"
    "Irrational response s, jumping to illogical conclusions"
    "Mental fatigue from not getting enough sleep"
    "Seeing and hear ing things that aren't there"
    "An inability to connect with others due to a lack of trust"
    "Always see ing the worst-case scenario"
    "Nega tive thought pattern s"
    "Feeling watched or followed"
    "The belief that everyone else is deluded"
    "Adhering to superstitious beliefs to stay safe"
    "CUES OF ACUTE OR LONG-TERM PARANOIA :"
    "Contacting the authoritie s for help against suspected assailants"
    "An inability to maintain long-term relation ships"
    "Isolation"
    "Living off the grid"
    "The belief that one is no longer required to live by the laws of soc iety"
    "A complete break with reality, hallucination s"
    "Rage"
    "Anxiety attacks , phobia s, psychosis"
    "MAY ESCALATE TO: FEAR (76), ANGER (22) , RAGE ( 120), HATRED"
    "(86), DESPERATION (52)"
    "CUES OF SUPPRESSED PARANOIA:"
    "Avoidance of socia l situations"
    "Attempting to engage soc ially, but with wary and darting eyes"
    "Agree ing with everything in an attempt to seem 'part of the gro up'"
    "Watchin g others and mimicking them as a way of appearing normal"
    "A smile that is frozen , manic"
    "A high vo ice or odd laugh"
    "Using medicine or seeking therapy"
    "WRITER'S TIP: In dialogu e, it 's not always what a character says that's"
    "important, it 's how they say ii. (And sometimes it's what they are trying hard not"
    "to say!)"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "paranoia_emotion",
  "title": "Paranoia Emotion",
  "documentId": "paranoia_emotion",
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
