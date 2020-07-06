console.log("Wordbank!");

var wordbank = {
  "name": "uncertainty_emotion",
  "list": [
    "UNCERTAINTY"
    "DEFINITION: the state of being unsure; unable to commit to a course of action"
    "PHYSICAL SIGNALS:"
    "Biting the lip or inside of the cheek"
    "Frowning"
    "Glancing at others to see what they think"
    "Looking down"
    "Asking others for advice or opinions"
    "Hands that fidget (twisting together, rubbing down the front of one's pants)"
    "A downcast expression"
    "Forehead wrinkling"
    "Squinting, looking inward"
    "Pinching or tugging on the bottom lip"
    "Tilting the head from side to side, weighing choices"
    "Rubbing the jaw or back of the neck"
    "Pushing the hair out of the face"
    "An impatient huff"
    "Shuffling feet"
    "Hesitating mid-action (while reaching for something or pulling out a wallet)"
    "Starting a sentence with the word, Well ..."
    "Pulling back slightly"
    "A grimace and a slight shake of the head"
    "Asking questions to elicit more information"
    "Making a Hmmm noise or throat clearing"
    "Swallowing"
    "Cracking the knuckles, or other 'stalling' gestures"
    "Doodling on paper"
    "Swaying or rocking on one's feet"
    "Rubbing the lips or chin"
    "Biting the inside of the cheek or bottom lip"
    "Sighing"
    "Rolling the neck"
    "Tapping a pencil against a notepad or table"
    "Jotting notes as a way to delay answering"
    "Rounded shoulders, a slumped posture"
    "Staring at nothing for an overlong moment"
    "Talking through the options aloud"
    "Asking for reassurance"
    "INTERNAL SENSATIONS:"
    "Breaths that catch in the chest"
    "Tenseness in one's stomach"
    "Increased thirst"
    "MENTAL RESPONSES:"
    "Feeling trapped"
    "Indecision"
    "Unease at one's option s or choices"
    "The mind racing through possibilities"
    "Avoiding the person or issue"
    "A desperate need to find answers"
    "Feeling flustered by a less-than-id eal situation"
    "Making decisions, then seco nd-guessing oneself"
    "Shutting down, refusing to make a decision"
    "CUES OF ACUTE OR LONG-TERM UNCERTAINTY:"
    "Self-doubt"
    "Uncertainty that bleeds into other decisions and situations"
    "Anger and frustration"
    "Dismissing the situat ion without making a decision"
    "Inability to make any decision on one 's own"
    "Researching (searching the web, speaking with profess ionals) to find answers"
    "Going for a walk or leaving the situation in hopes of ga ining a clear head"
    "Repeatedly postponing or rescheduling events"
    "An increased sense of desperation as time goes by and the situation is unresolved"
    "MAY ESCALATE TO: CONFUSION (36), DENIAL (46) , FRUSTRATION"
    "(78), UNEASE (158)"
    "CUES OF SUPPRESSED UNCERTAINTY :"
    "A delayed response"
    "A noncommittal answer: Maybe or We 'fl see"
    "Changing the topic to avoid hurt feelings or an argument"
    "Diversion rather than open support"
    "A hesitant nod"
    "Stalling for time (pouring a glass of water and drinkin g)"
    "Refusing to answer , letting the silence do the talking"
    "Opening one 's mouth to argue, then stopping"
    "Acting noncommittal: l et 's put that in our back pocket fo r now, okay?"
    "Suggesting a vote of majority ·"
    "Offering weak agreement or half-hearted support"
    "Requesting more time to consider in order to delay"
    "Passive-aggress iveness"
    "WRITER'S TIP: Maintain an overall perspective of emotional range as the"
    "stOJy progresses from scene to scene. A strong manuscript will always expose the"
    "reader to contrasting emotional experiences that fit within the context of the"
    "POV character's growth."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "uncertainty_emotion",
  "title": "Uncertainty Emotion",
  "documentId": "uncertainty_emotion",
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
