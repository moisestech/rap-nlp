console.log("Wordbank!");

var wordbank = {
  "name": "dances",
  "list": [
    "abstract dance",
    "acro",
    "allemande",
    "ballet",
    "ballroom dance",
    "barn dance",
    "beguine",
    "belly dance",
    "bolero",
    "bop",
    "bossa nova",
    "bourrée",
    "breakdance",
    "bunny hop",
    "Cajun dance",
    "cakewalk",
    "can can",
    "carioca",
    "cha cha",
    "Charleston",
    "classical dance",
    "clogging",
    "conga",
    "contra dance",
    "country western",
    "courante",
    "dance",
    "disco",
    "dragon dance",
    "fandango",
    "flamenco",
    "folk dance",
    "foxtrot",
    "frug",
    "gavote",
    "gigue",
    "habanera",
    "Highland fling",
    "hip hop",
    "hoedown",
    "hokey pokey",
    "hop",
    "hula",
    "hustle",
    "ice dancing",
    "interpretive dance",
    "Irish dance",
    "jazz dance",
    "jig",
    "jitterbug",
    "jive",
    "koftos",
    "krumping",
    "lambada",
    "Latin dance",
    "limbo",
    "lindy",
    "line dance",
    "macarena",
    "malaguena",
    "mambo",
    "maypole dance",
    "mazurka",
    "merengue",
    "Mexican hat dance",
    "minuet",
    "modern dance",
    "one step",
    "pas de deux",
    "pasodoble",
    "pavane",
    "polka",
    "pop",
    "quadrille",
    "quickstep",
    "reel",
    "reggae",
    "rumba",
    "salsa",
    "Scottish dance",
    "slow dance",
    "soft shoe",
    "sousta",
    "square dance",
    "step dance",
    "stomp",
    "swing",
    "tango",
    "tap dance",
    "tarantella",
    "time warp",
    "toe dance",
    "troika",
    "twist",
    "two step",
    "Ukrainian dance",
    "Viennese waltz",
    "waltz",
    "watusi",
    "zydeco"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "dances_wordbank",
  "title": "Dances Wordbank 2017",
  "documentId": "dances_wordbank",
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
