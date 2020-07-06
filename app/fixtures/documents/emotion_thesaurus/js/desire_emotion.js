console.log("Wordbank!");

var wordbank = {
  "name": "desire_emotion",
  "list": [
    "DESIRE"
    "DEFINITION: to covet, wish, or long for"
    "NOTE: the object of desire can be a person, a thing, or an intangible (prestige,"
    "acceptance, etc.)"
    "PHYSICAL SIGNALS:"
    "Lips parting"
    "Firm eye contact"
    "Hands moistening"
    "Stroking one's arm as a surrogate for the object of desire"
    "Mirroring the object's movements (if a person)"
    "Trembling"
    "Lowering one's voice when speaking"
    "Leaning in or forward"
    "Moving closer to erase distance"
    "Relaxing one's posture"
    "Facing the object straight on"
    "Eyes shining, glossing over, and softening"
    "Slightly parting the legs"
    "Muscles losing tension"
    "Frequent touching of the face and lips"
    "Hands clenching briefly, then releasing"
    "Becoming inarticulate"
    "Skin flushing"
    "Increased swallowing"
    "The tongue darting out to touch or lick the lips"
    "Knees loosening and feeling weak"
    "Responding immediately when called upon"
    "Touching or holding the object close"
    "A slow smile that builds"
    "Subconsciously thrusting out one's chest"
    "Lifting one's chin to expose the neck"
    "Holding in a breath"
    "Stuttering or stammering"
    "A lingering touch, brushing up against the object"
    "Touching or stroking one's own throat"
    "INTERNAL SENSATIONS:"
    "A strong awareness of one's own heartbeat"
    "The sensation of being flooded with warmth"
    "The mouth becoming moist, increased saliva"
    "A sensation of hair raising on one's arms and nape"
    "Fingers aching or tingling with the need to touch"
    "Quickening breath or breathlessness"
    "Hypersensitivity to touch and texture"
    "Fluttering or even mild pain in the chest"
    "Light-headedness"
    "A shifting feeling near the heart, a pang"
    "A shiver that brings pleasure"
    "Nerve endings that stir and tingle"
    "Bodily cravings of being touched by the object (person)"
    "MENTAL RESPONSES:"
    "Preoccupation with the object's scent"
    "Focusing on the object's most desirable qualities"
    "Tuning out distractions in order to fixate on the object or want"
    "A desire to erase all distance"
    "A need to touch and explore"
    "Daydreaming or fantasizing about the object"
    "A determination to have or own"
    "Impatience"
    "A loss of inhibitions"
    "Setting goals to obtain the object"
    "Taking opportunities or meeting challenges to prove one's worth"
    "Wanting to care for and put the object's needs first"
    "CUES OF ACUTE OR LONG-TERM DESIRE:"
    "Bumping, pushing, or shoving to get closer"
    "A willingness to endure suffering or hardship to obtain the object"
    "Not caring what others think or feel"
    "Obsessive thoughts"
    "Centering all aspects of one's life on being with the object"
    "Neglecting friends, family, work, and other interests"
    "Fixation on self-improvement, education, or goals leading to achievement"
    "Shedding bad habits or flaws to appease or impress"
    "MAY ESCALATE TO: ADORATION (14), LOVE (106), DETERMINATION"
    "(54), ENVY (72), JEALOUSY ( I 02)"
    "CUES OF REPRESSED DESIRE:"
    "Glancing away for a brief time"
    "Feigning interest in something else"
    "Making a display of engaging in conversation with others"
    "Examining or pretending to consider other objects"
    "Smiling at other objects"
    "Forcing a slow gait rather than rushing to be with the object"
    "WRITER'S TIP: Emotion should always lead to decision making, either good or"
    "bad, that will prop el the story forward"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "desire_emotion",
  "title": "Desire Emotion",
  "documentId": "desire_emotion",
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
