console.log("Wordbank!");

var wordbank = {
  "name": "container",
  "list": [
    "amphora",
    "attache case",
    "backpack",
    "bag",
    "baggage",
    "barrel",
    "basin",
    "basket",
    "beaker",
    "bin",
    "bottle",
    "bowl",
    "box",
    "briefcase",
    "bucket",
    "cabinet",
    "can",
    "canister",
    "canteen",
    "carafe",
    "carrier",
    "carryall",
    "carton",
    "case",
    "cask",
    "casket",
    "chest",
    "coffer",
    "cone",
    "container",
    "compote",
    "cooler",
    "crate",
    "crock",
    "cruet",
    "cube",
    "depository",
    "dish",
    "drawer",
    "drum",
    "enclosure",
    "envelope",
    "ewer",
    "file folder",
    "flask",
    "folder",
    "garbage can",
    "glass",
    "goblet",
    "grocery bag",
    "hamper",
    "handbag",
    "holder",
    "hopper",
    "hutch",
    "ice bucket",
    "jar",
    "jug",
    "knapsack",
    "locker",
    "luggage",
    "lunchbox",
    "milk crate",
    "packet",
    "pail",
    "pan",
    "paper bag",
    "plastic bag",
    "plate",
    "pocket",
    "pod",
    "pot",
    "pouch",
    "purse",
    "rack",
    "receptacle",
    "sack",
    "saddlebag",
    "satchel",
    "saucer",
    "stein",
    "suitcase",
    "tin",
    "tote",
    "trash bin",
    "trunk",
    "tray",
    "tub",
    "tube",
    "tun",
    "tureen",
    "test tube",
    "urn",
    "vase",
    "vat",
    "vault",
    "vesicle",
    "vessel",
    "vial",
    "wastebasket",
    "water bottle"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "container_wordbank",
  "title": "Container Wordbank 2017",
  "documentId": "container_wordbank",
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
