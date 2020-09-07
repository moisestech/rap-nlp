console.log("Wordbank!");

var wordbank = {
  "name": "worry_emotion",
  "list": [
    "WORRY"
    "DEFINITION: mental distress that arises from disturbing thoughts, usually"
    "regarding some anticipated event"
    "PHYSICAL SIGNALS:"
    "Wrinkling the brow"
    "Biting one's lip"
    "Pinching the skin at the throat"
    "Feet that bounce or tap"
    "Pulling or twisting at one's hair"
    "Pacing"
    "Drinking too much coffee, smoking too much"
    "Circles under the eyes"
    "Eyebrows drawing together"
    "Tossing and turning in bed, an inability to sleep"
    "Asking too many questions"
    "Stroking or rubbing an eyebrow"
    "Rumpled, unwashed clothes"
    "Rubbing one's hands on pant legs"
    "Lank or unwashed hair"
    "Poor communication with others"
    "Repeatedly rubbing the face"
    "A gaze that flits around the room, never settling on a person or object for long"
    "Clinging to loved ones"
    "Taking deep breaths in an effort to calm oneself"
    "Pointless activity as a way to stay busy"
    "Calling in sick"
    "Stooped posture"
    "Clutching at a sweater, purse, or necklace for comfort"
    "Biting the nails, chewing on a knuckle"
    "Running a jerky hand through the hair"
    "Smoothing and re-smoothing clothing"
    "Clasping one's hands together"
    "A stiff neck, strained muscles"
    "A pained or watery gaze"
    "Throat clearing"
    "Blinking less (as if worried one might miss something)"
    "Fidgeting, having a hard time sitting still"
    "Sitting, then standing, then sitting again"
    "INTERNAL SENSATIONS:"
    "A loss of appetite"
    "A sensitive stomach"
    "Heartburn or other digestive issues"
    "162"
    "Dry mouth"
    "Constricted throat"
    "MENTAL RESPONSES :"
    "Uncertainty over choices made"
    "An unwillin gness to leave a certain place (phone, house, car)"
    "An inability to focus"
    "A need to control"
    "Regret for a past action"
    "Distancing oneself from others"
    "Reading into things, over-analyzing"
    "Assuming the worst -case scenario"
    "Over-protectiveness"
    "Irritability"
    "CUES OF ACUTE OR LONG-TERM WORRY :"
    "Weight loss"
    "Premature gray"
    "New wrinkle s"
    "Slipping grades at school, poor performance at work"
    "Ulcers"
    "Anxiety attacks"
    "Panic disorder s"
    "High blood pressure"
    "Heart disease"
    "Increased sickness due to compromised immune system"
    "Insomnia and fatigue"
    "Hypochondri a"
    "MAY ESCALATE TO: WARINESS (160), FEAR (76) , ANXIETY (30),"
    "PARANOIA (l 14), DREAD (64)"
    "CUES OF SUPPRESSED WORRY:"
    "Furtively watching the clock or door"
    "Jumpiness"
    "A strained or faked smile"
    "Adopting new hobbies to distract oneself"
    "Putting up a false front as if everything is okay"
    "A shortened attention span"
    "Humming that feels forced , or fades quickly after it starts"
    "Going about one's daily activities with the mind somewhere else"
    "WRITER'S TIP: Weather details can add texture and meaning to a scene."
    "Consider how a character's mood can shift because of the weather. It can also"
    "stand in the way of the.ir goals, providing tension."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "worry_emotion",
  "title": "Worry Emotion",
  "documentId": "worry_emotion",
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
