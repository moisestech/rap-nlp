console.log("Wordbank!");

var wordbank = {
  "name": "castles_kings_queens",
  "list": [
    "archer",
    "aristocracy",
    "armor",
    "ballista",
    "baron",
    "baroness",
    "baronet",
    "bastion",
    "battering ram",
    "battle axe",
    "birthright",
    "castle",
    "catapult",
    "chain mail",
    "chateau",
    "chieftain",
    "chivalry",
    "count",
    "countess",
    "court jester",
    "crenelations",
    "crest",
    "crossbow",
    "crown",
    "crown jewels",
    "curtain wall",
    "donjon",
    "dragon",
    "drawbridge",
    "duke",
    "duchess",
    "dungeon",
    "dynasty",
    "earl",
    "empire",
    "feudal",
    "fort",
    "fortress",
    "gatehouse",
    "grand duke",
    "great hall",
    "heraldry",
    "hereditary",
    "highness",
    "honor",
    "imperial",
    "jester",
    "jousting",
    "keep",
    "king",
    "kingdom",
    "knight",
    "lady",
    "lady in waiting",
    "lance",
    "lord",
    "maid",
    "maiden",
    "mangonel",
    "manor",
    "manor house",
    "marquis",
    "Middle Ages",
    "moat",
    "monarch",
    "noble",
    "nobility",
    "onager",
    "palace",
    "peel tower",
    "peer",
    "prince",
    "princess",
    "queen",
    "realm",
    "reign",
    "Renaissance",
    "royal",
    "royalty",
    "scepter",
    "serf",
    "shield",
    "siege",
    "sovereign",
    "sword",
    "titles",
    "tower",
    "trebuchet",
    "turret",
    "unicorn",
    "viscount",
    "wall",
    "watchtower"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "castles_kings_queens_wordbank",
  "title": "Castles Kings Queens Wordbank 2017",
  "documentId": "castles_kings_queens_wordbank",
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

