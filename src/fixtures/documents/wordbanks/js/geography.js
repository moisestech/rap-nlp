console.log("Wordbank!");

var wordbank = {
  "name": "grography",
  "list": [
    "Africa",
    "altitude",
    "analemma",
    "Antarctica",
    "Antarctic Circle",
    "antipodes",
    "Arctic",
    "Arctic Circle",
    "area",
    "Asia",
    "atlas",
    "Australia",
    "azimuth",
    "bathymetric map",
    "border",
    "capital",
    "capital city",
    "cartographer",
    "cartography",
    "chart",
    "city",
    "compass rose",
    "continent",
    "contour line",
    "country",
    "degree of latitude",
    "degree of longitude",
    "Earth",
    "east",
    "Eastern Hemisphere",
    "elevation",
    "equator",
    "Europe",
    "geographic coordinates",
    "geography",
    "global",
    "globe",
    "GPS",
    "great circle",
    "hemisphere",
    "IDL",
    "International Date Line",
    "island",
    "key",
    "kilometers",
    "land",
    "landform",
    "latitude",
    "legend",
    "longitude",
    "magnetic pole",
    "map",
    "map maker",
    "map making",
    "map projection",
    "Mercator Projection",
    "meridian",
    "miles",
    "mountain",
    "mountain range",
    "nation",
    "nautical chart",
    "north",
    "northeast",
    "Northern Hemisphere",
    "northwest",
    "North America",
    "North Magnetic Pole",
    "North Pole",
    "ocean",
    "parallel",
    "peak",
    "pole",
    "political map",
    "prime meridian",
    "projection",
    "ratio",
    "region",
    "relief map",
    "river",
    "road atlas",
    "rose",
    "scale",
    "scale bar",
    "sea",
    "sea level",
    "south",
    "southeast",
    "southwest",
    "South America",
    "Southern Hemisphere",
    "South Magnetic Pole",
    "South Pole",
    "street map",
    "territory",
    "time zone",
    "title",
    "topographic map",
    "topography",
    "tributary",
    "Tropic of Cancer",
    "Tropic of Capricorn",
    "tropics",
    "weather map",
    "west",
    "Western Hemisphere",
    "world"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "geography_wordbank",
  "title": "Geography Wordbank 2017",
  "documentId": "geography_wordbank",
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