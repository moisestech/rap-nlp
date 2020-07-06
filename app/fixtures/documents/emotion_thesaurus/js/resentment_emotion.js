console.log("Wordbank!");

var wordbank = {
  "name": "resentment_emotion",
  "list": [
    "RESENTMENT"
    "DEFINITION: indignation toward an act, remark, or person; feeling injured or"
    "insulted"
    "PHYSICAL SIGNALS:"
    "A pinched mouth"
    "Arms crossed over the chest"
    "A flat look, narrowed eyes"
    "Scowling"
    "Increasing one's personal distance from others"
    "Complaining"
    "Rudeness"
    "Pouting ( children)"
    "Catty behavior"
    "Name-calling"
    "A voice that rises in volume or intensity"
    "Arguing"
    "Looking past someone rather than at them"
    "A hard expression"
    "Arms straight, hands locked into fists"
    "Refusing to be bought off through kindness or thoughtfulness"
    "Shunning the source"
    "A stiff stance"
    "Purposely ignoring someone's conciliatory efforts"
    "Muttering under the breath or cursing"
    "Twisting the mouth, a soured expression"
    "Belittling another's status or accomplishment"
    "Tension in the neck and shoulders"
    "Pointing and jabbing the air for emphasis"
    "A curling lip, showing the teeth"
    "A sharp, defined jaw line"
    "A tart tone, snapping at others"
    "Sabotaging another's projects or actions out of a sense of being wronged"
    "Talking behind someone's back, gossiping"
    "An unkind smile"
    "Shaking the head in disapproval but not saying anything"
    "Balling the hands into fists"
    "Walking out of the room"
    "Spinning away in a huff, stomping up the stairs"
    "Shutting a door with more force than necessary"
    "INTERNAL SENSATIONS:"
    "Tension headaches"
    "Pain in the jaw"
    "A tight chest"
    "Constricting the throat"
    "High blood pressure"
    "Stomach troubles or ulcers"
    "MENTAL RESPONSES:"
    "Unkind thoughts toward the target"
    "Frustration at unfairness or a lack of ju stice"
    "Fantasizing harm or the downfall of another"
    "Moodiness"
    "Wanting to be alone"
    "Fixating on a person or situation to the detriment of other relationships"
    "A desire to bring others in and create a mob mentality of resentment"
    "CUES OF ACUTE OR LONG-TERM RESENTMENT:"
    "Weight gain"
    "Illness"
    "Insomnia"
    "Arriving late, calling in sick, or refusing work shifts to avoid the source of"
    "resentment"
    "High blood pressure"
    "Seeking revenge"
    "MAY ESCALATE TO: ANGER (22), HATRED (86), JEALOUSY ( 102)"
    "CUES OF SUPPRESSED RESENTMENT:"
    "Walking away"
    "Keeping silent"
    "Changing the topic to something safe"
    "Putting on a smile"
    "WRITER'S TIP: When exposing the reader to a new scene, person, or object, it"
    "can be useful to have some description or opinion delivered through a secondary"
    "character's dialogue . What they notice and how they respond provides an"
    "opportunity to characterize."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "resentment_emotion",
  "title": "Resentment Emotion",
  "documentId": "resentment_emotion",
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
