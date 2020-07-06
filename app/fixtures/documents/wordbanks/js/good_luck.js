console.log("Wordbank!");

var wordbank = {
  "name": "good_luck",
  "list": [
    "acorn in your pocket in Nordic legends",
    "amber",
    "amulets",
    "ankh ancient egypt",
    "bamboo in China",
    "Buddha",
    "cats eye the semi precious stone",
    "charms",
    "Christian saints",
    "chimney sweeps in England",
    "circle",
    "crossed fingers",
    "crystals",
    "dice",
    "dolphins",
    "dragon in China",
    "dragonflies",
    "dreamcatcher is supposed to catch bad dreams",
    "eggs",
    "eight the number in China",
    "elephants",
    "falling star",
    "four leaf clovers",
    "goldfish in China",
    "hand",
    "horses in China",
    "horseshoe",
    "Kachina doll Southwestern American natives",
    "knives ancient Greece",
    "knocking on wood",
    "ladybugs",
    "North star",
    "penny",
    "pigs in Germany",
    "pinch of salt thrown over your shoulder",
    "pot of gold",
    "rabbits foot",
    "rainbows",
    "red lanterns in China",
    "scarab beetles in ancient Egypt",
    "seven the number",
    "shooting stars",
    "tigers in China",
    "tortoises",
    "turtles",
    "wishbones",
    "wishing well"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "good_luck_wordbank",
  "title": "Good Luck Wordbank 2017",
  "documentId": "good_luck_wordbank",
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
