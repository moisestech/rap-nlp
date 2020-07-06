console.log("Wordbank!");

var wordbank = {
  "name": "reluctance_emotion",
  "list": [
    "RELUCTANCE"
    "DEFINITION: unwillingness; aversion"
    "PHYSICAL SIGNALS:"
    "Stalling gestures (taking time to think, turning away)"
    "A hard, obvious swallow"
    "Wetting the lips"
    "Tense arms, shoulders, or face"
    "Hesitant steps"
    "The head pulling back as the shoulders push forward"
    "Responding slowly ( accepting an item, offering assistance)"
    "Pressing lips together"
    "Glancing around uneasily"
    "Hands that shake, nervous twitching"
    "Hands almost curling into fists and then straightening"
    "A grimace or pained look"
    "Eyebrows squeezing together"
    "Stuttering, stammering"
    "Making excuses"
    "Lying"
    "Tentatively reaching out or touching"
    "Holding a hand up, warding someone or something off"
    "Suggesting someone else to help or act instead"
    "Shaking the head"
    "A hand fluttering to the lips or neck"
    "Nervous habits (running hands through the hair, pacing, repetitive gestures)"
    "A too-quick smile"
    "Glancing at one's watch"
    "Jumpiness"
    "Moving toward an exit"
    "Putting distance between oneself and the requester"
    "Biting the lip or nails"
    "Pinching the bridge of the nose and tightly squeezing the eyes"
    "Changing the topic or diverting attention"
    "Closed body language (hands up, crossed arms)"
    "Leaning or turning away from the person making the request"
    "Asking for time to make the decision"
    "Expressing skepticism"
    "Asking questions for clarification"
    "Not meeting the requester's eyes"
    "Not engaging in further conversation"
    "Answering with a 'maybe' response"
    "Muttering negatives: No or I don't want to"
    "INTERNAL SENSATIONS:"
    "Taking a deep breath before acting"
    "A tightening chest"
    "Slight tensene ss in the muscles"
    "A heaviness in the stomach"
    "MENTAL RESPONSES:"
    "A desire to get away from the person making the request"
    "Indecision"
    "A mind that is clearly distracted"
    "Guilt"
    "Searching for ways to get out of whatever is reque sted"
    "An inability to focus on anything but the decision to be made"
    "A need to justify one's reluctance"
    "CUES OF ACUTE OR LONG-TERM RELUCTANCE:"
    "Resentment"
    "A tight or roiling stomach"
    "Avoidance of the source"
    "A strained relationship"
    "MAY ESCALATE TO: SKEPT ICISM (142) , DEFENSIVENESS (44),"
    "ANGER (22), FEAR (76), DISGUST (60), RESENTMENT (130) , DREAD (64)"
    "CUES OF SUPPRESSED RELUCTANCE:"
    "Agreeing, then not following through"
    "Hints about being busy or overly stressed"
    "A rising antipathy toward the person responsible for the situation"
    "Passive -aggressive comment s"
    "Deflecting, acting as if the request is absurd"
    "Joking comments to deflect"
    "Revea ling true feelings to a third party, hoping they ' ll pass the information along"
    "WRITER'S TIP: Avoid brand dropping to characterize. Brand names come and"
    "go, and can date your writing. fnste'tld use other clues to convey your character's"
    "personality, strengths or shortcomings."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "reluctance_emotion",
  "title": "Reluctance Emotion",
  "documentId": "reluctance_emotion",
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
