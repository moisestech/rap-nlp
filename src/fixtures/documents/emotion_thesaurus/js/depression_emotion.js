console.log("Wordbank!");

var wordbank = {
  "name": "depression_emotion",
  "list": [
    "DEPRESSION"
    "DEFINITION: a state of withdrawal; extreme sadness and reduced vitality"
    "PHYSICAL SIGNALS:"
    "A gaunt appearance"
    "Notable weight loss or gain"
    "Eyes that blink infrequently"
    "Wet or red eyes"
    "Staring down at one's hands"
    "Becoming non-reactive to stimulus or noise"
    "Laying in bed with no motivation to get up"
    "Saggy posture, bent neck"
    "Head resting on one's hand"
    "Tangled hair, overlong nails, and other signs of letting oneself go"
    "Wearing the same clothes day after day"
    "Shuffling steps"
    "Lethargic hand movements"
    "Obsession with an object that represents loss (a photo or trinket)"
    "Crying"
    "A vacant stare"
    "Making excuses"
    "A downturned mouth"
    "Lines in the face, a slack expression"
    "Dark circles under one's eyes"
    "An inability to sleep"
    "Sleeping too much"
    "Poor eating habits"
    "A tone that lacks strength or vitality"
    "An unclean home, room, or office space"
    "Ignoring phone calls or visitors"
    "Premature aging (wrinkles, tired eyes, gray or white hair)"
    "Illness"
    "Having no interest in hobbies"
    "Failing grades at school, lack of success at work"
    "Choosing isolation"
    "Dropping out of activities and moving away from friendships"
    "Picking at food or finding food tasteless"
    "Being unable to focus on tasks (work, school, home life)"
    "Forgetting appointments, conversations, and meetings"
    "Bulky or dull clothing choices"
    "Non-responsiveness to others, even family"
    "Poor conversation skills"
    "Body odor"
    "INTERNAL SENSATIONS:"
    "A hollowness in one's chest"
    "A slow pulse"
    "Aches and pains"
    "Shallow breathing"
    "Fatigue"
    "MENTAL RESPONSES:"
    "Focusing inward"
    "Desiring to live in the past or be alone"
    "Poor observation skills"
    "Obsessive thoughts"
    "A negative outlook"
    "An inability to concentrate"
    "Losing track of time"
    "Thoughts of self-harm"
    "Bleak observations about the world and the people in it"
    "An aversion to noise, crowds, and stressful situations"
    "CUES OF ACUTE OR LONG-TERM DEPRESSION:"
    "Eating disorders"
    "Manic behavior (hair pulling, OCD, paranoia)"
    "Tho ugh ts of suicide"
    "Suicide attempts"
    "Addiction to medication"
    "Hoarding"
    "MAY RELATE TO: NOSTALGIA (110), REGRET ( 122), SADNESS ( 134)"
    "CUES OF SUPPRESSED DEPRESSION:"
    "Slight pauses before reacting"
    "Emotional displays that seem forced or false"
    "Heavy self-medicating or drinking"
    "Wearing false, overly bright smiles"
    "Pretending to be ill to avoid social situations and people"
    "Lying"
    "WRITER'S TIP: It isn't enough to show emotion; a writer needs to make the"
    "reader/eel it. Think about the core visceral sensations you experience when"
    "feeling strong emotion, and if appropriate, utilize them lo convey a similar"
    "experience Lo the reader."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "depression_emotion",
  "title": "Depression Emotion",
  "documentId": "depression_emotion",
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
