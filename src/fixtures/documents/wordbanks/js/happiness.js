console.log("Wordbank!");

var wordbank = {
  "name": "happiness",
  "list": [
    "adore",
    "affable",
    "aggreeable",
    "amiable",
    "amusing",
    "animated",
    "appealing",
    "as happy as a clam",
    "beaming",
    "beatific",
    "beautiful",
    "bliss",
    "blissful",
    "blithe",
    "bowl over",
    "buoyant",
    "carefree",
    "charming",
    "cheerful",
    "cheeriness",
    "cheery",
    "chipper",
    "chirpy",
    "content",
    "contented",
    "delight",
    "delighted",
    "delightful",
    "diverting",
    "droll",
    "ebullient",
    "ecstasy",
    "ecstatic",
    "elated",
    "elation",
    "enchanting",
    "endearing",
    "energized",
    "engaging",
    "enjoyable",
    "entertaining",
    "euphoria",
    "euphoric",
    "excited",
    "exhilirated",
    "exuberance",
    "exultant",
    "exultation",
    "favorable",
    "fine",
    "friendly",
    "fulfilled",
    "fun",
    "funny",
    "genial",
    "get a kick out of",
    "glad",
    "gladden",
    "glee",
    "glory",
    "glory in",
    "glorious",
    "good",
    "good humored",
    "good mood",
    "good natured",
    "grateful",
    "gratified",
    "gratify",
    "gratifying",
    "great",
    "grinning",
    "happiness",
    "happy",
    "happy as a clam",
    "heartening",
    "heartwarming",
    "heavenly",
    "high",
    "high spirits",
    "hilarious",
    "hopeful",
    "in a good mood",
    "in good spirits",
    "in seventh heaven",
    "invigorated",
    "jocular",
    "jollity",
    "joie de vivre",
    "joy",
    "joyfulness",
    "joyous",
    "jubilation",
    "jumping for joy",
    "lap up",
    "lighthearted",
    "likable",
    "looking on the bright side",
    "lovable",
    "lovely",
    "lucky",
    "luxuriate in",
    "merriment",
    "merry",
    "mirth",
    "mirthful",
    "never been better",
    "nice",
    "obliging",
    "on cloud nine",
    "on top of the world",
    "open",
    "opportune",
    "optomistic",
    "overjoyed",
    "over the moon",
    "paradise",
    "perkiness",
    "perky",
    "pleasant",
    "pleased",
    "please greatly",
    "pleasure",
    "precious",
    "radiant",
    "rapture",
    "rapturous",
    "relaxed",
    "relish",
    "revel in",
    "satisfied",
    "savor",
    "seventh heaven",
    "simpatico",
    "smiling",
    "source of pleasure",
    "sparkle",
    "stimulated",
    "sunniness",
    "sunny",
    "sweet",
    "take pleasure in",
    "tears of joy",
    "thrill",
    "thrilled",
    "tickled pink",
    "touching",
    "treat",
    "triumph",
    "upbeat",
    "uplifting",
    "untroubled",
    "vitalized",
    "vivacity",
    "walking on air",
    "welcoming",
    "willing",
    "wondrous",
    "zest for life"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "happiness_wordbank",
  "title": "Happiness Wordbank 2017",
  "documentId": "happiness_wordbank",
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
