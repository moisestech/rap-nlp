console.log("Wordbank!");

var wordbank = {
  "name": "cars",
  "list": [
    "auto",
    "automobile",
    "buggy",
    "car",
    "cloth top",
    "compact",
    "convertible",
    "coupe",
    "cruiser",
    "dragster",
    "electric car",
    "four door",
    "four wheel drive",
    "gas powered",
    "gas electric",
    "hard top",
    "hatchback",
    "hearse",
    "hot rod",
    "hum vee",
    "hybrid",
    "jeep",
    "limo",
    "limousine",
    "low rider",
    "luxury car",
    "minivan",
    "off road vehicle",
    "patrol car",
    "race car",
    "ragtop",
    "roadster",
    "rotary engine",
    "runabout",
    "R V",
    "sedan",
    "soft top",
    "solar powered",
    "sports car",
    "sports utility vehicle",
    "station wagon",
    "stock car",
    "stretch limo",
    "subcompact",
    "S U V",
    "taxi",
    "taxi cab",
    "two door",
    "van"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "cars_wordbank",
  "title": "Cars Wordbank 2017",
  "documentId": "cars_wordbank",
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
