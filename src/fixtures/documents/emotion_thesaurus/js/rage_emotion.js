console.log("Wordbank!");

var wordbank = {
  "name": "rage_emotion",
  "list": [
    "RAGE"
    "DEFINITION: violent and uncontrolled anger"
    "PHYSICAL SIGNALS:"
    "Flushed or mottled skin"
    "Shaking extremities"
    "Hands that clench and unclench"
    "Wide eyes, showing the whites"
    "Spittle building up in the comers of the mouth"
    "Biting criticism and belittlement"
    "Jabbing a finger in someone's face"
    "A corded neck"
    "Nostrils flaring"
    "Lips pulling back, baring the teeth"
    "Cracking the neck from side to side for intimidation"
    "Muscles and veins straining against skin"
    "A guttural roar"
    "Planting the feet wide apart"
    "Sudden explosions over seemingly little things"
    "Pushing and shoving"
    "Limbering up shoulders and neck as if readying to fight"
    "Squeezing someone's arm to the point of bruising"
    "Using insults to pick a fight"
    "Cracking one's knuckles to intimidate"
    "Pulling out a weapon (knife)"
    "Finding something close to hand to use as a weapon (branch, rock)"
    "Moving slowly and deliberately toward another person to intimidate"
    "Barreling toward someone, uttering a scream or war cry"
    "Fighting with no thought for one's own safety"
    "Throwing or kicking things"
    "Jumping to extreme anger with little provocation"
    "Screaming"
    "Threatening vio le nee"
    "Uttering death threats: I'll kill you!"
    "Staring someone down to frighten them"
    "Getting into someone's personal space"
    "Manipulation"
    "INTERNAL SENSATIONS:"
    "A pounding in the ears"
    "Increased blood flow to the extremities"
    "Elevated pulse"
    "Clouded vision"
    "A dry throat from rushed breathing"
    "I I",
    "Pain that is suspended until later"
    "Adrenaline rushing through the body"
    "A sensation of increased strength"
    "An edgy , twitchy feeling"
    "Tunnel vision or flashes in vision"
    "MENTAL RESPONSES:"
    "Being driven by the belief that one has been mistreated or done wrong"
    "A desire for vengeance"
    "Looking for a fight"
    "Wanting to hurt someone, to see blood"
    "A sense of release when violence is expressed"
    "Not thinking or caring about consequences"
    "A need to dominate or contro l"
    "Difficulty focusing or concentrating"
    "CUES OF ACUTE OR LONG-TERM RAGE:"
    "Beating someone senseless"
    "Committing assault or murder"
    "Seeking out opportunities to react viole ntly"
    "Self-destructive addictions"
    "Depression"
    "Heart disease , stroke"
    "Ulcers"
    "An inability to cope with sma ller problems over time"
    "Insomnia"
    "Fat igue"
    "Destroying property"
    "MAY ESCALATE TO: PARANOIA (114) , REGRET ( 122)"
    "CUES OF SUPPRESSED RAGE:"
    "Unnatura l si lence"
    "Uncontrollab le body tremor s"
    "Punching a wall or object instead of a person"
    "Clenc hed, grinding teeth"
    "Pain in the jaw from clenched teeth"
    "A tight smile that doesn ' t reach the eyes"
    "Grabbing onto something sec ure (like a steering wheel) and shaking it violently"
    "Punching or ripping apart something soft"
    "Aggressive workouts"
    "WRITER'S TIP: As your character reacts emotionally to circumstances within"
    "the environmen t, don't underestimate the importance of sensory details. Do"
    "textures bother them because of a heightened state? What sounds do they pick up"
    "on that they might not othenvise notice?"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "rage_emotion",
  "title": "Rage Emotion",
  "documentId": "rage_emotion",
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
