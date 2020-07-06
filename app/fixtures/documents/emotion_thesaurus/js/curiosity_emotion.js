console.log("Wordbank!");

var wordbank = {
  "name": "curiosity_emotion",
  "list": [
    "CURIOSITY"
    "DEFINITION: inquisitiveness; a desire for knowledge"
    "PHYSICAL SIGNALS:"
    "Tilting the head to the side"
    "Raised eyebrows"
    "Body posture that perks up"
    "A slow smile that builds"
    "Repeating a statement as a question"
    "Leaning forward, sliding one's chair closer"
    "Pausing to examine"
    "Eyebrows furrowing and then releasing"
    "Blinking"
    "Gazing with focus"
    "Shifting from casual conversation to pointed questions"
    "A softened voice or tone that may contain wonder"
    "Crossing one's arms while observing"
    "Prying or snooping"
    "Nose-wrinkling"
    "Posing hypothetical questions"
    "Lingering touches"
    "Stopping to pay attention (a sudden halt, a fork pausing halfway to the mouth)"
    "Straining to hear, shushing others to be quiet"
    "Eavesdropping"
    "Cupping an elbow with one hand while tapping the lips with the other"
    "Pushing one's glasses up"
    "Bending, kneeling, or squatting to get closer"
    "Tilting one's body toward the source"
    "Shuffling, creeping, or edging closer"
    "Exploring the senses (smelling something new for the sake of knowing, etc.)"
    "Verbally expressing interest: Oh, look at that! or Isn't that amazing?"
    "Asking questions (who, what, when, where, and why)"
    "Pulling on someone's sleeve to get them to join or follow"
    "A still demeanor to aid in observation"
    "Lips that are slightly parted"
    "Nodding slowly"
    "Poking or prodding at something"
    "INTERNAL SENSATIONS:"
    "Breaths that hitch or briefly stop"
    "An increased pulse"
    "MENTAL RESPONSES:"
    "A need to know, touch, or understand"
    "Forgetting what one was about to say or do"
    "A com pulsion to detour toward something new"
    "Temporary cessa tion of worries, stress, or act ions"
    "A des ire to invest igate or experiment"
    "Increased awareness of sensory inform ation"
    "Wonder or interest at how somet hing works or why it 's there"
    "CUES OF ACUTE OR LONG-TERM CURIOSITY:"
    "Fidgeting or tics"
    "Hypersensit ivity to the source of interest"
    "Obsess ive thoughts"
    "Pointed or even rude question s"
    "Snoopi ng or sneaking about to satisfy the need to know"
    "MAY ESCALATE TO: EAGERNESS (66), AMAZEMENT (18),"
    "CONFLICTED (34)"
    "CUES OF SUPPRESSED CURIOSITY:"
    "Keeping one's eyes down"
    "Holding the hands in the lap"
    "Lack of eye contact"
    "Providing an excuse to linger or move toward the source"
    "Pretending to ignore or be unawa re"
    "A side long glance"
    "Using one's hair to hide an interested glance"
    "Feigning boredom"
    "WRITER'S TIP: Smell triggers memory . Take advantag e of this sense and build"
    "o(factory description into the scene. This will draw readers in and make them"
    "fee l part of the action."
    "4 1"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "curiosity_emotion",
  "title": "Curiosity Emotion",
  "documentId": "curiosity_emotion",
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
