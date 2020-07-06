console.log("Wordbank!");

var wordbank = {
  "name": "fear_emotion",
  "list": [
    "FEAR"
    "DEFINITION: to be afraid of; to expect threat or danger"
    "PHYSICAL SIGNALS:"
    "Face turning ashen, white, pallid"
    "Hair lifting on the nape and arms"
    "Body odor, cold sweats"
    "Clammy hands"
    "Trembling lips and chin"
    "Tendons standing out in the neck, a visible pulse"
    "Elbows pressing into the sides, making one's body as small as possible"
    "Freezing, feeling rooted to the spot"
    "Rapid blinking"
    "Tight shoulders"
    "Staring but not seeing, eyes shut or crying"
    "Hands jammed into armpits or self-hugging"
    "Breath bursting in and out"
    "Leg muscles tightening, the body ready to run"
    "Looking all around, especially behind"
    "A shrill voice"
    "Lowering the voice to a whisper"
    "Keeping one's back to a wall or corner"
    "Shaking uncontrollably"
    "Gripping something, knuckles going white"
    "Stiff walking, the knees locking"
    "Beads of sweat on the lip or forehead"
    "Grabbing onto someone"
    "Eyes appearing damp and overly bright"
    "Stuttering and mispronouncing words, tremors in the voice"
    "Jerky movements, squirming"
    "Licking the lips, gulping down water"
    "Sprinting or running"
    "Sweeping a hand across the forehead to get rid of sweat"
    "Gasping and expelling one's breath as if pained"
    "Uncontrollable whimpering"
    "Pleading, talking to oneself"
    "Flinching at noises"
    "INTERNAL SENSATIONS:"
    "An inability to speak"
    "Shakiness in the limbs"
    "Holding back a scream or cry"
    "Heartbeat racing, nearly exploding"
    "Dizziness, weakness in the legs and knees"
    "A loosening of the bladder"
    "Chest pain"
    "Holding one's breath, gulping down breaths to stay quiet"
    "A stomach that feels rock hard"
    "Hyper-sensitivity to touch and sound"
    "Adrenaline spikes"
    "MENTAL REACTIONS:"
    "Wanting to flee or hide"
    "The sensation of things moving too quickly to process"
    "Images of what-could-be flashing through the mind"
    "Flawed reasoning"
    "Jumping to a course of action without thinking things through"
    "A skewed sense of time"
    "CUES OF ACUTE OR LONG-TERM FEAR:"
    "Uncontrollable trembliJ1g, fainting"
    "Insomnia"
    "Heart giving out"
    "Panic attacks, phobias"
    "Exhaustion"
    "Depression"
    "Substance abuse"
    "Withdrawing from others"
    "Tics (a repetitive grimace, a head twitch, talking to oneself)"
    "Resistance to pain from rushing adrenaline"
    "MAY ESCALATE TO: ANGER (22), TERROR (I 54), PARANOIA (1 14),"
    "DREAD (64)"
    "CUES OF SUPPRESSED FEAR:"
    "Keeping silent"
    "Denying fear through diversion or topic change"
    "Turning away from the cause of the fear"
    "Attempting to keep one's voice light"
    "A watery smile that's forced into place"
    "Masking fear with a reactive emotion (anger or frustration)"
    "False bravado"
    "Over-indulgence in a habit (nail biting, lip biting, scratching the skin raw)"
    "A joking tone, but the voice cracks"
    "WRITER'S TIP: Prime readers for an emotional experience by describing the"
    "mood of a scene as your character enters it. ff your character is antsy, the reader"
    "will be too."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "fear_emotion",
  "title": "Fear Emotion",
  "documentId": "fear_emotion",
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
