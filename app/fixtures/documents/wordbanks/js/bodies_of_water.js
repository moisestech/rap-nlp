console.log("Wordbank!");

var wordbank = {
  "name": "bodies_of_water",
  "list": [
    "alluvial fan",
    "arm of the sea",
    "arroyo",
    "basin",
    "bay",
    "bayou",
    "bend",
    "bight",
    "billibong",
    "bog",
    "brook",
    "canal",
    "cataract",
    "channel",
    "coral reef",
    "cove",
    "crater lake",
    "creek",
    "dam",
    "delta",
    "estuary",
    "falls",
    "fen",
    "firth",
    "fjord",
    "fork",
    "geyser",
    "glacier",
    "glacier cave",
    "gulch",
    "gulf",
    "gully",
    "harbor",
    "headland",
    "headwaters",
    "iceberg",
    "ice cliff",
    "ice field",
    "inlet",
    "island",
    "islet",
    "kettle",
    "kill",
    "lagoon",
    "lake",
    "loch",
    "mangrove swamp",
    "marsh",
    "meander",
    "mid ocean ridge",
    "millpond",
    "moat",
    "mouth",
    "mud flat",
    "narrows",
    "neck",
    "oasis",
    "ocean",
    "oceanic trench",
    "oxbow lake",
    "playa",
    "pond",
    "pool",
    "port",
    "prairie",
    "puddle",
    "rapids",
    "reef",
    "reservoir",
    "ria",
    "river",
    "riverbed",
    "river delta",
    "rivulet",
    "run",
    "salt marsh",
    "scarp",
    "scree",
    "sea",
    "sea cave",
    "seashore",
    "shallows",
    "shoal",
    "shore",
    "shoreline",
    "slough",
    "sound",
    "source",
    "spring",
    "strait",
    "stream",
    "subglacial lake",
    "surf",
    "swamp",
    "tidal basin",
    "tide pool",
    "tributary",
    "wash",
    "waterfall",
    "watershed",
    "waterway",
    "wetland"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "bodies_of_water_wordbank",
  "title": "Bodies of Water Wordbank 2017",
  "documentId": "bodies_of_water_wordbank",
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
