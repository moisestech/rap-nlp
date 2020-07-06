console.log("Wordbank!");

var wordbank = {
  "name": "loneliness_emotion",
  "list": [
    "LONELINESS"
    "DEFINITION: the feeling of being isolated or cut off"
    "PHYSICAL SIGNALS:"
    "A longing gaze"
    "Disinterest in one's appearance (bland clothing, lackluster hair)"
    "Slumped shoulders, limp posture"
    "A monotone voice"
    "Looking down when walking in public"
    "Watching people furtively"
    "An expressionless, unsmiling face"
    "Sullenness"
    "Being generous to others in order to curry favor"
    "Spying or eavesdropping on others to feel a part of something"
    "Filling schedule with work or volunteering to avoid downtime"
    "Using books, the internet, and TV to escape"
    "An expression that crumples at other peoples' affection displays"
    "Hugging oneself"
    "A lack of eye contact"
    "False bravado"
    "Tears, sadness"
    "A heavy sigh"
    "Talking to oneself"
    "Feeling a sense of comfort from a full mailbox (even junk mail)"
    "Stroking self (rubbing an arm absently for contact)"
    "Using bright or eccentric clothing choices in an attempt to get attention"
    "Doting on someone or something (a neighbor, a pet)"
    "Talking to strangers to feel connected"
    "Relishing opportunities to talk or engage (mail deliveries, etc.)"
    "Rambling when conversing with others"
    "Adhering to a routine ( eating the same meals, visiting the same park)"
    "Living vicariously through an alter ego or avatar ( social networking, gaming)"
    "INTERNAL SENSATIONS:"
    "A thickness in the throat, signaling the onset of tears"
    "A longing so intense it manifests itself as an ache or pain"
    "Insomnia"
    "Fatigue"
    "MENTAL RESPONSES:"
    "A voiding crowds, large events, or social situations"
    "A desire to be included, wanted"
    "Anger, bitterness"
    "Daydreaming about people one would like to have relationships with"
    "A feeling of unwort hiness"
    "CUES OF ACUTE OR LONG-TERM LONELINESS:"
    "Doubting onese lf, a lack of confidence"
    "Weight ga in"
    "Believing that one is unattractive or has a boring personality"
    "Uncontrollab le crying bouts"
    "Despairing of ever being able to change"
    "High blood pressure"
    "Workah o lic tendencie s"
    "Bingeing to compensate (eating, drinkin g, shoppin g, gambling)"
    "Hoarding pets"
    "Suicidal thoughts"
    "MAY ESCALATE TO: SADN ESS ( 134), HURT (92), DEPRESSION (48) ,"
    "RESIGNAT ION (132)"
    "CUES OF SUPPRESSED LONELINESS:"
    "Committing too quickly to anyone who shows interest"
    "Choos ing negative relation ships over being alone"
    "Being too friendly and coming acros s as desperate"
    "Frequently calling fami ly or friends"
    "Solitary act ivities that show a craving for contact (people watc hing from the"
    "porch)"
    "WRITER'S TIP: Body movements should never be random. Everything a"
    "character does should have a specific intent: to achieve an end, reveal emotion,"
    "or to characterize."
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "loneliness_emotion",
  "title": "Loneliness Emotion",
  "documentId": "loneliness_emotion",
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
