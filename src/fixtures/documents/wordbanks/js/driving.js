console.log("Wordbank!");

var wordbank = {
  "name": "driving",
  "list": [
    "accelerate",
    "accelerator",
    "accident",
    "airbag",
    "alley",
    "arterial road",
    "asphalt",
    "auto",
    "automatic transmission",
    "automobile",
    "avenue",
    "back up",
    "back seat",
    "back seat driver",
    "barrier",
    "bicycle",
    "bike",
    "boulevard",
    "brakes",
    "bridge",
    "bus",
    "car",
    "carpool",
    "carpool lane",
    "causeway",
    "caution",
    "chauffeur",
    "circle",
    "cloverleaf",
    "clutch",
    "cobblestone",
    "construction",
    "court",
    "crash",
    "cruise control",
    "cul de sac",
    "curve",
    "danger",
    "dead end",
    "defensive driving",
    "dent",
    "detour",
    "diamond lane",
    "dirt road",
    "do not enter sign",
    "double parked",
    "drive",
    "driver",
    "drivers ed",
    "drivers education",
    "drivers license",
    "driveway",
    "electric car",
    "emergency",
    "emission",
    "entrance ramp",
    "exhaust",
    "exit",
    "exit ramp",
    "expressway",
    "fast",
    "fast lane",
    "fender",
    "fill it up",
    "flat bed truck",
    "flat tire",
    "freeway",
    "fuel",
    "fuel efficiency",
    "fuel tank",
    "garage",
    "gas",
    "gasoline",
    "gas tank",
    "gear",
    "gearshift",
    "global positioning system",
    "go",
    "G P S",
    "gravel road",
    "green light",
    "gridlock",
    "gutter",
    "hairpin curve",
    "headlights",
    "high beam",
    "high occupancy vehicle lane",
    "high octane gas",
    "highway",
    "highway patrol",
    "hill",
    "HOV lane",
    "hybrid",
    "idling",
    "impact",
    "indicator",
    "insurance",
    "interchange",
    "intersection",
    "interstate highway",
    "jackknifing",
    "kilometer",
    "kilometers per hour",
    "kph",
    "lane",
    "learner's permit",
    "left turn",
    "license",
    "lights",
    "loop",
    "low beam",
    "manual transmission",
    "map",
    "mass transit",
    "merge",
    "mile",
    "mile marker",
    "miles per gallon",
    "miles per hour",
    "motor",
    "motorcycle",
    "motorway",
    "mph",
    "no parking",
    "no stopping",
    "oil",
    "oncoming traffic",
    "one way",
    "overpass",
    "parallel parking",
    "park",
    "parking lot",
    "parking meter",
    "parking spot",
    "parking ticket",
    "parkway",
    "pass",
    "pavement",
    "pedal",
    "pedestrian",
    "pedestrian crossing",
    "police",
    "pot hole",
    "railroad crossing",
    "ramp",
    "red light",
    "registration",
    "rest area",
    "rest stop",
    "reverse",
    "ride",
    "right turn",
    "road",
    "road closed",
    "road crew",
    "road rage",
    "road trip",
    "roadway",
    "rollover",
    "roundabout",
    "rush hour",
    "safety",
    "scenery",
    "scenic route",
    "school zone",
    "s curve",
    "seatbelt",
    "semi",
    "shoulder",
    "sidewalk",
    "sign",
    "skid",
    "slow",
    "snow plow",
    "speed",
    "speed bump",
    "speed limit",
    "speeding",
    "speeding ticket",
    "speedometer",
    "state patrol",
    "steer",
    "steering wheel",
    "stop",
    "stop sign",
    "street",
    "street sign",
    "superhighway",
    "SUV",
    "switchbacks",
    "terrace",
    "test drive",
    "ticket",
    "tire",
    "toll",
    "toll road",
    "tow truck",
    "traffic",
    "traffic jam",
    "traffic light",
    "traffic sign",
    "transmission",
    "transportation",
    "truck",
    "truck route",
    "truck stop",
    "tunnel",
    "turn",
    "turn signal",
    "under construction",
    "underpass",
    "u turn",
    "van pool",
    "vehicle",
    "warning",
    "wide load",
    "yellow light",
    "yield",
    "zebra crossing"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "driving_wordbank",
  "title": "Driving Wordbank 2017",
  "documentId": "driving_wordbank",
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