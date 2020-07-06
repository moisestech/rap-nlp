console.log("Wordbank!");

var wordbank = {
  "name": "determination_emotion",
  "list": [
    "DETERMINATION",
    "DEFINITION firm intention on achieving a goal; decisiveness",
    "PHYSICAL SIGNALS",
    "Being the first to speak",
    "Moving into someone's personal space",
    "Using articulate words and short, strong sentences",
    "A steady, lower-pitched voice",
    "A furrowing brow",
    "Tight muscles",
    "Alert gaze",
    "A set jaw",
    "Strong eye contact",
    "A curt nod",
    "Forming hands into a steeple",
    "Mirroring the leader's movements",
    "Using affirmative words: Yes and I will",
    "Pressing the lips together",
    "Tightening fists",
    "Organizing one's things, being prepared",
    "Standing solidly, at the ready",
    "Planting one's feet in a wide stance",
    "Leaning in, hand on one knee",
    "A high chin, neck exposed",
    "Pushing up one's sleeves",
    "Shoulders pushing back",
    "Strong posture",
    "Precise movements",
    "Sharp hand movements Gabbing a finger for emphasis, etc.)",
    "A fast-paced stride",
    "Asking pointed questions",
    "Straightened legs, knees uncrossed",
    "Thrusting the chest out",
    "Offering a firm handshake",
    "Inhaling deeply through the nose, then exhaling through the mouth",
    "Exuding calm and focus",
    "Practicing a skill",
    "Making preparations or conditioning the body",
    "Studying or gathering information",
    "Accepting criticism to improve",
    "INTERNAL SENSATIONS:",
    "A fluttery feeling in the chest",
    "Increased internal temperature and heartbeat",
    "Muscles tighten ing in readiness",
    "MENTAL RESPONSES:",
    "Planning for obstacles and strategizing ways to overcome them",
    "Mentally encouraging onese lf to succeed",
    "Active listening",
    "An acute sense of purpo se",
    "Ignoring distractions or discomfort s",
    "Extreme mental focus on the objective",
    "Running through what one must say or do",
    "Dismissing negat ive thoughts",
    "Setting goals",
    "CUES OF ACUTE OR LONG-TERM DETERMINATION:",
    "Conditioning for the task in advance",
    "Musc le clenching along the jaw line",
    "Headache s",
    "Muscle strain",
    "Ignoring pain, stress, or any outside elements",
    "Sacrificing what is needed to achieve the desired result",
    "MAY ESCALATE TO: HOPEFULNESS (88), CONFIDENCE (32)",
    "CUES OF SUPPRESSED DETERMINATION:",
    "Purpose ly adopting a languid pose",
    "Feigning disint erest",
    "Meani ngless gestures (scrutiniz ing cutic les, checking for split ends)",
    "Placing one's hands in one's pockets",
    "Engaging in banter or non-threatening conversat ion",
    "Benign questions",
    "Yawning",
    "Shrugging",
    "Laughing or making jokes meant to disarm",
    "A lack of eye contact",
    "Closing one's eyes as if relaxed or dosing",
    "WRITER'S TIP: Never underestimate the power of texture. The way an object",
    "feels against the skin can create a powerful reaction (positive or negative) and",
    "add to the reader's emotional experience."
  ],
}

console.log (wordbank);

var allPhrases = {
  "filename": "determination_emotion",
  "title": "Determination Emotion",
  "documentId": "determination_emotion",
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
