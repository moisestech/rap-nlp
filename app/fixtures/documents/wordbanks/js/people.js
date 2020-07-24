console.log("Wordbank!");

var wordbank = {
  "name": "people",
  "list": [
    "acquaintance",
    "admirer",
    "adolescent",
    "adult",
    "adversary",
    "ally",
    "amigo",
    "ancestor",
    "angel",
    "antagonist",
    "anybody",
    "anyone",
    "apparition",
    "associate",
    "baby",
    "backer",
    "beau",
    "benefactor",
    "best friend",
    "boy",
    "boyfriend",
    "bride",
    "bridegroom",
    "brother",
    "bud",
    "buddy",
    "champion",
    "character",
    "cherub",
    "child",
    "children",
    "chum",
    "citizen",
    "clan",
    "classmate",
    "cohort",
    "collaborator",
    "colleague",
    "combatant",
    "compadre",
    "companion",
    "comrade",
    "confederate",
    "confidant",
    "contact",
    "C cont",
    "coworker",
    "crew",
    "crony",
    "customer",
    "descendant",
    "doppelgänger",
    "dude",
    "employee",
    "enemy",
    "everybody",
    "everyone",
    "family",
    "fellow",
    "fiancé",
    "fiancée",
    "flatmate",
    "foe",
    "folks",
    "freshman",
    "friend",
    "gent",
    "gentleman",
    "girl",
    "girlfriend",
    "groom",
    "grown up",
    "guy",
    "house mate",
    "human",
    "human being",
    "individual",
    "infant",
    "inhabitant",
    "in law",
    "junior",
    "kid",
    "kin",
    "kith",
    "lad",
    "laddie",
    "lady",
    "lass",
    "lassie",
    "lover",
    "man",
    "mate",
    "men",
    "minor",
    "mortal",
    "neighbor",
    "newborn",
    "nobody",
    "no one",
    "occupant",
    "opponent",
    "pal",
    "partner",
    "patron",
    "people",
    "person",
    "populace",
    "population",
    "preteen",
    "rank and file",
    "relations",
    "relative",
    "resident",
    "retiree",
    "rival",
    "roommate",
    "schoolboy",
    "schoolgirl",
    "schoolmate",
    "senior",
    "sidekick",
    "sister",
    "socialite",
    "somebody",
    "someone",
    "sophomore",
    "soul",
    "sponsor",
    "spouse",
    "steady",
    "stranger",
    "supporter",
    "sweetheart",
    "teammate",
    "teen",
    "teenager",
    "toddler",
    "tot",
    "tribe",
    "tween",
    "tyke",
    "urchin",
    "well wisher",
    "woman",
    "women",
    "workmate",
    "youngster",
    "youth"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "people_wordbank",
  "title": "People Wordbank 2017",
  "documentId": "people_wordbank",
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