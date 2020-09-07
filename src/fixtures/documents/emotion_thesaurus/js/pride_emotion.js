console.log("Wordbank!");

var wordbank = {
  "name": "pride_emotion",
  "list": [
    "PRIDE"
    "DEFINITION: proper self-respect arising from a significant achievement,"
    "possession of an item, or involvement in a relationship"
    "PHYSICAL SIGNALS:"
    "A high chin"
    "Shoulders back"
    "Chest thrust out"
    "Standing tall with good posture, legs spread wide"
    "A gleam in one's eye"
    "A knowing grin"
    "Perfectionism"
    "Watching others to see their reactions"
    "Verbalizing the ups and downs that led to this point"
    "Calling friends and loved ones to tell them about an accomplishment"
    "Direct or intense eye contact"
    "A booming laugh"
    "Becoming talkative"
    "Lifting the heels and rising up slightly to emphasize words"
    "Steering or dominating the conversation"
    "Becoming extra animated when there's an audience"
    "A grin that conveys secret knowledge"
    "Thrusting oneself into the middle of an event or debate"
    "A satisfied smile"
    "Hooking thumbs into one's belt loops, thrusting the pelvis forward"
    "Pulling in a deep breath"
    "False modesty"
    "Ignoring or overlooking any flaws associated with the pride item"
    "A preoccupation with one's appearance"
    "Standing with hands tucked in one's armpits, thumbs visible and pointing up"
    "Running the hands through the hair, flipping hair back"
    "Assuming a pose that's sexy or draws attention to one's best attributes"
    "Appearing unaffected by what others think"
    "Speaking first, thinking second"
    "INTERNAL SENSATIONS:"
    "The feeling of being taller, bigger, stronger"
    "Lungs expanded to their fullest through deep, satisfied breaths"
    "MENTAL RESPONSES:"
    "Positive self thoughts"
    "Preoccupation with one's achievements or successes"
    "A feeling of being able to conquer the world"
    "Wanting to be surrounded by supportive loved ones"
    "A desire to share achievements with others"
    "A tendency to judge people according to one 's personal measuring stick"
    "Over-estimating one 's capabilities"
    "Underest imating others"
    "A sense of entitlement"
    "Planning and seek ing advantages"
    "CUES OF ACUTE OR LONG-TERM PRIDE:"
    "Enjoyment at proving others wrong"
    "Bragging, obsessively talking about an achievement or material object"
    "Praising group acco mplishme nts as a way to remind people of one's own"
    "involvement"
    "Reacting with anger or jealousy if one 's reputation is impugned"
    "Making radical statements or promise s about future goals"
    "Revisiting the source or place of accomplishment to feel empowered"
    "MAY ESCALATE TO: SMUGN ESS ( 144), CONTEMPT (38), CONFIDENCE"
    "CUES OF SUPPRESSED PRIDE:"
    "Waving off a compliment"
    "Passing the cred it to someo ne else"
    "Turning attention away from oneself"
    "Seeking others' opinion s as a form of va lidation"
    "WRITER'S TIP: Understand your character 's emotional range. For one"
    "character, intense situations may make them hyperventilate. For anothe,~ it"
    "might cause them to shift slightly while seated Knowing how expressive a"
    "character is will help you.find the perfect body cue to convey an emotional"
    "meaning."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "pride_emotion",
  "title": "Pride Emotion",
  "documentId": "pride_emotion",
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
