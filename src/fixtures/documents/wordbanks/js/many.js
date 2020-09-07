console.log("Wordbank!");

var wordbank = {
  "name": "many",
  "list": [
    "acres",
    "army",
    "assortment",
    "astronomical amount",
    "batch",
    "billions",
    "blizzard",
    "boatload",
    "boundless amount",
    "buckets",
    "bunches",
    "bundles",
    "by the yard",
    "cart loads",
    "clusters",
    "collection",
    "colossal amount",
    "congregation",
    "copious amounts",
    "crowds",
    "deluge",
    "dozens",
    "droves",
    "enormous amount",
    "epic amount",
    "expansive",
    "extensive",
    "flock",
    "gaggle",
    "gargantuan",
    "gathering",
    "gazillions",
    "giant",
    "gigantic",
    "ginormous",
    "great",
    "great deal",
    "group",
    "heaps",
    "herd",
    "horde",
    "hundreds",
    "huge numbers",
    "humongous",
    "infinite",
    "jumble",
    "large amount",
    "limitless",
    "loads",
    "lots",
    "mammoth",
    "many",
    "mass",
    "masses",
    "mega",
    "miles",
    "millions",
    "mob",
    "mountains",
    "mountainous",
    "multifarious",
    "multitude",
    "multiplicity",
    "numerous",
    "oceans",
    "oodles",
    "overabundance",
    "pack",
    "parcel",
    "piles",
    "plenty",
    "pots",
    "prodigious amount",
    "profusion",
    "quantity",
    "reams",
    "sacks",
    "scads",
    "set",
    "several",
    "slew",
    "some",
    "stacks",
    "sundry",
    "swarm",
    "sweeping",
    "teeming with",
    "thousands",
    "tons",
    "throng",
    "towering",
    "tremendous",
    "troop",
    "umpteen",
    "untold amounts",
    "vast amounts",
    "volumes",
    "a wealth",
    "wide",
    "yards",
    "zillions"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "many_wordbank",
  "title": "Many Wordbank 2017",
  "documentId": "many_wordbank",
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
