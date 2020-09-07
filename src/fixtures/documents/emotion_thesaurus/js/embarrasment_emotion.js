console.log("Wordbank!");

var wordbank = {
  "name": "embarrasment_emotion",
  "list": [
    "EMBARRASSMENT"
    "DEFINITION: a lack of composure due to self-conscious discomfort"
    "PHYSICAL SIGNALS:"
    "A flush that creeps across the cheeks"
    "Visible sweating"
    "The body freezing in place"
    "Grimacing or swallowing"
    "Ears that twn red"
    "The chin dipping down"
    "The chest caving"
    "A bent spine"
    "Hands curling around one's middle"
    "Feet shuflling"
    "Clearing the throat"
    "Coughing"
    "Covering oneself ( crossing the arms, closing a jacket)"
    "Pulling at the collar"
    "Rubbing the back of the neck"
    "Wincing"
    "Covering the face with hands"
    "Cringing or shaking"
    "Fidgeting, squirming"
    "Stuttering, stammering"
    "Flinching away from touches"
    "A weakened voice"
    "Speechlessness"
    "Toes curling up"
    "Knees pulling together"
    "Arms tucking in at the sides"
    "Sliding down in a chair"
    "Looking down, unable to meet someone's eyes"
    "Shoulders slumping or curling forward"
    "Responding with anger ( shoving, punching)"
    "Gritting one's teeth, pressing the lips tight"
    "Shoving hands in pockets"
    "Fiddling with shirt sleeves"
    "Hiding behind a book"
    "Shielding (having a death grip on a purse)"
    "A walk that accelerates into a sprint"
    "Using hair to hide one's face"
    "Glancing about for help, an exit, or escape"
    "Tugging a hat down low or pulling a hood over the head"
    "A trembling chin"
    "INTERNAL SENSATIONS:"
    "Excessive swal lowing"
    "Lightheadedness"
    "A tingling that sweeps up the back of the neck and across the face"
    "A tightening chest"
    "Stomach hardening or dropping with a manife station of dread"
    "The face, neck , and ears feeling impossibly hot"
    "Rushed breathjng"
    "A rapid heartbeat"
    "MENTAL RESPONSES:"
    "A compulsion to flee"
    "fight or flight"
    "Muddied or panicked thoughts"
    "A disconnect where the mind struggles with belief"
    "This can't be happening!"
    "Thoughts searching for a solution"
    "CUES OF ACUTE OR LONG-TERM EMBARRASSMENT:"
    "Crying"
    "Running from the room or situation"
    "Plummeting self esteem"
    "Fear of public speaking or being on di splay"
    "Withdrawing from gro ups, activities, and social interaction"
    "Loss of appet ite"
    "Obses s ing about the embarrass ing eve nt, reliving it"
    "Poor sleep"
    "Weight loss"
    "MAY ESCALATE TO: HUMILIATION (90), DEPRESSION (48), REGRET"
    "( 122), SHAME ( 140)"
    "CUES OF SUPPRESSED EMBARRASSMENT:"
    "Pretending to not have heard or seen"
    "Intense ly concentrat ing on some thing else, act ive ly ignoring others"
    "A fake smjle"
    "Trying to laugh it off"
    "Changing the topic in any way possible"
    "Lying"
    "Deflecting atte ntion and ass igning blame to another"
    "WRITER'S TIP: Be wary of showing emotion too readily through the act qf"
    "crying. In real life, it takes a lot to reach a tearful state and so it should be the"
    "same for our characters."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "embarrasment_emotion",
  "title": "Embarrasment Emotion",
  "documentId": "embarrasment_emotion",
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
