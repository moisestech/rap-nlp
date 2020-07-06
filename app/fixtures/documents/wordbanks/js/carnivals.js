console.log("Wordbank!");

var wordbank = {
  "name": "carnivals",
  "list": [
    "amusement",
    "banquet",
    "bash",
    "beads",
    "block party",
    "booth",
    "bumper cars",
    "candy apple",
    "carnival",
    "cavalcade",
    "cavort",
    "celebrate",
    "celebration",
    "cheerful",
    "cheery",
    "circus",
    "clown",
    "concessions",
    "contest",
    "corn dog",
    "costume",
    "cotton candy",
    "county fair",
    "dance",
    "enjoyable",
    "entertain",
    "entertainment",
    "event",
    "exciting",
    "exhibition",
    "extravaganza",
    "fair",
    "fairground",
    "feast",
    "Ferris wheel",
    "festival",
    "festive",
    "festivity",
    "fete",
    "fiesta",
    "float",
    "fried dough",
    "food",
    "frolic",
    "fun",
    "funfair",
    "fun house",
    "funnel cakes",
    "gala",
    "games",
    "gathering",
    "gleeful",
    "hat",
    "hijinks",
    "holiday",
    "hot dog",
    "house of mirrors",
    "ice cream",
    "jamboree",
    "joyous",
    "juggle",
    "juggler",
    "lemonade",
    "Lent",
    "marching band",
    "Mardi Gras",
    "mask",
    "masquerade",
    "merriment",
    "merry go round",
    "merry makers",
    "merrymaking",
    "midway",
    "music",
    "observance",
    "occasion",
    "parade",
    "party",
    "performances",
    "picnic",
    "popcorn",
    "prance",
    "procession",
    "regale",
    "revel",
    "revelry",
    "rides",
    "roller coaster",
    "rollick",
    "romp",
    "shindig",
    "show",
    "sideshow",
    "snow cone",
    "spectacle",
    "spin art",
    "state fair",
    "street fair",
    "wingding",
    "worlds fair"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "carnivals_wordbank",
  "title": "Carnivals Wordbank 2017",
  "documentId": "carnivals_wordbank",
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
