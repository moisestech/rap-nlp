console.log("Wordbank!");

var wordbank = {
  "name": "big",
  "list": [
    "adult",
    "astronomical",
    "boundless",
    "broad",
    "brawny",
    "capacious",
    "chunky",
    "colossal",
    "considerable",
    "copious",
    "corpulent",
    "deep",
    "economy sized",
    "elephantine",
    "enormous",
    "epic",
    "expansive",
    "extensive",
    "extra large",
    "family sized",
    "fat",
    "full",
    "full sized",
    "gargantuan",
    "giant",
    "gigantic",
    "ginormous",
    "goodly",
    "grand",
    "great",
    "heaping",
    "heavy",
    "hefty",
    "Herculean",
    "huge",
    "hulking",
    "humongous",
    "husky",
    "immense",
    "imposing",
    "impressive",
    "infinite",
    "jumbo",
    "king sized",
    "large",
    "limitless",
    "lofty",
    "long",
    "mammoth",
    "massive",
    "mega",
    "mighty",
    "miles wide",
    "monsterous",
    "monumental",
    "mountainous",
    "multifarious",
    "multitude",
    "multiplicity",
    "numerous",
    "obese",
    "outsized",
    "overabundant",
    "oversized",
    "piled high",
    "plentiful",
    "plump",
    "portly",
    "powerful",
    "prodigious",
    "queen sized",
    "roly poly",
    "sizable",
    "spacious",
    "stout",
    "strapping",
    "substantial",
    "super",
    "super sized",
    "sweeping",
    "tall",
    "thick",
    "thick set",
    "titanic",
    "towering",
    "tremendous",
    "unlimited",
    "untold amounts",
    "vast",
    "very large",
    "voluminous",
    "weighs a ton",
    "weighty",
    "well built",
    "whopping",
    "wide"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "big_wordbank",
  "title": "Big Wordbank 2017",
  "documentId": "big_wordbank",
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
