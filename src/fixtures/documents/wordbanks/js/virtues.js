console.log("Wordbank!");

var wordbank = {
  "name": "virtues",
  "list": [
    "accountability",
    "affection",
    "agreeableness",
    "amiability",
    "benevolence",
    "bravery",
    "care",
    "caring",
    "charity",
    "cleanliness",
    "compassion",
    "concern",
    "confidence",
    "consideration",
    "contentment",
    "cooperation",
    "courage",
    "courtesy",
    "creativity",
    "curiosity",
    "determination",
    "devotion",
    "dignity",
    "diligence",
    "discipline",
    "discretion",
    "duty",
    "earnest",
    "enthusiasm",
    "ethical",
    "excellence",
    "faithfulness",
    "flexibility",
    "friendliness",
    "focus",
    "forgiveness",
    "fortitude",
    "friendliness",
    "frugality",
    "generosity",
    "gentleness",
    "good",
    "goodwill",
    "grace",
    "graciousness",
    "gratitude",
    "helpfulness",
    "honesty",
    "honor",
    "honorable",
    "hope",
    "hopefulness",
    "humanity",
    "humility",
    "humor",
    "idealism",
    "impartiality",
    "industry",
    "innocence",
    "integrity",
    "intelligence",
    "joy",
    "joyfulness",
    "justice",
    "kindness",
    "leniency",
    "love",
    "loyalty",
    "magnanimity",
    "mercy",
    "moderation",
    "modesty",
    "moral",
    "morality",
    "nice",
    "nobility",
    "noble",
    "obedience",
    "openness",
    "orderliness",
    "patience",
    "peacefulness",
    "perseverance",
    "persistence",
    "probity",
    "propriety",
    "prudence",
    "purity",
    "purposefulnes",
    "questioning",
    "quiet",
    "reliability",
    "reputable",
    "respect",
    "respectfulness",
    "resilience",
    "resourcefulness",
    "respect",
    "responsibility",
    "restraint",
    "reverence",
    "righteousness",
    "sensitivity",
    "self discipline",
    "selflessness",
    "simplicity",
    "sincerity",
    "spontaneity",
    "steadfastness",
    "strength",
    "sympathy",
    "tact",
    "tenderness",
    "thrift",
    "tolerance",
    "toughness",
    "tranquility",
    "trust",
    "trustworthiness",
    "truthfulness",
    "understanding",
    "unity",
    "upstanding",
    "virtuous",
    "vitality",
    "wholesome",
    "wisdom",
    "wonder",
    "worthiness",
    "worthy",
    "zeal"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "virtues_wordbank",
  "title": "Virtues Wordbank 2017",
  "documentId": "virtues_wordbank",
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
