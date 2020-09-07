console.log("Wordbank!");

var wordbank = {
  "name": "happy",
  "list": [
    "amused",
    "beaming",
    "blissful",
    "blithe",
    "buoyant",
    "carefree",
    "cheerful",
    "cheery",
    "chipper",
    "chirpy",
    "content",
    "contented",
    "delighted",
    "ebullient",
    "ecstatic",
    "elated",
    "enraptured",
    "euphoric",
    "exhilarated",
    "exultant",
    "funny",
    "glad",
    "gleeful",
    "gratified",
    "grinning",
    "happy",
    "in a good mood",
    "in good spirits",
    "in seventh heaven",
    "invigorated",
    "jocular",
    "jolly",
    "jovial",
    "joyful",
    "joyous",
    "jubilant",
    "lighthearted",
    "merry",
    "mirthful",
    "never been better",
    "on cloud nine",
    "on top of the world",
    "optomistic",
    "overjoyed",
    "over the moon",
    "pleased",
    "radiant",
    "rapturous",
    "satisfied",
    "smiling",
    "sunny",
    "thrilled",
    "tickled pink",
    "untroubled",
    "upbeat",
    "walking on air"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "happy_wordbank",
  "title": "Happy Wordbank 2017",
  "documentId": "happy_wordbank",
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
