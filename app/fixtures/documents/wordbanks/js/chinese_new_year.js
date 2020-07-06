console.log("Wordbank!");

var wordbank = {
  "name": "chinese_new_year",
  "list": [
    "abundance",
    "bamboo",
    "blessings",
    "boar",
    "cakes",
    "calendar",
    "candles",
    "celebrate",
    "China",
    "Chinese",
    "Chinese New Year",
    "clean",
    "couplets",
    "dimsum",
    "dog",
    "dragon",
    "dragon dance",
    "dumplings",
    "emperor",
    "envelope",
    "evil spirit",
    "family",
    "feast",
    "festival",
    "firecrackers",
    "fireworks",
    "fortune",
    "fortune cookie",
    "friends",
    "full moon",
    "gathering",
    "gifts",
    "goat",
    "gold",
    "golden",
    "good fortune",
    "good luck",
    "gratitude",
    "gung hei fat choy",
    "happiness",
    "holiday",
    "horse",
    "incense",
    "jade",
    "lantern",
    "lantern festival",
    "lights",
    "lion",
    "lion dance",
    "longevity",
    "luck",
    "lucky",
    "lunar",
    "monkey",
    "money",
    "month",
    "moon",
    "moon cake",
    "mouse",
    "new moon",
    "new year",
    "new year cake",
    "noodles",
    "oranges",
    "ox",
    "packets",
    "panda",
    "phases of the moon",
    "pig",
    "poetry",
    "prosperity",
    "prosperous",
    "rabbit",
    "rat",
    "red",
    "red envelope",
    "red packet",
    "reunion",
    "rice",
    "ritual",
    "season",
    "silk",
    "snake",
    "spirits",
    "spring",
    "spring rolls",
    "steamed fish",
    "success",
    "sweep",
    "symbols",
    "tiger",
    "tradition",
    "traditional",
    "vegetarian",
    "wealth",
    "winter",
    "year",
    "yin and yang",
    "zodiac"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "chinese_new_year_wordbank",
  "title": "Chinese New Year Wordbank 2017",
  "documentId": "chinese_new_year_wordbank",
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
