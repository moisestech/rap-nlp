console.log("Wordbank!");

var wordbank = {
  "name": "science",
  "list": [
    "astrophysics",
    "astronomy",
    "atom",
    "beaker",
    "biochemistry",
    "biology",
    "botany",
    "Bunsen burner",
    "burette",
    "cell",
    "chemical",
    "chemistry",
    "climate",
    "climatologist",
    "control",
    "cuvette",
    "data",
    "datum",
    "electricity",
    "electrochemist",
    "element",
    "energy",
    "entomology",
    "evolution",
    "experiment",
    "fact",
    "flask",
    "fossil",
    "funnel",
    "genetics",
    "geology",
    "geophysics",
    "glassware",
    "graduated cylinder",
    "gravity",
    "herpetology",
    "hypothesis",
    "ichthyology",
    "immunology",
    "lab",
    "laboratory",
    "laws",
    "lepidoptery",
    "magnetism",
    "mass",
    "matter",
    "measure",
    "meteorologist",
    "meteorology",
    "microbiologist",
    "microbiology",
    "microscope",
    "mineral",
    "mineralogy",
    "molecule",
    "motion",
    "observe",
    "observatory",
    "organism",
    "ornithology",
    "paleontology",
    "particle",
    "Petri dish",
    "phase",
    "physical science",
    "physics",
    "pipette",
    "quantum mechanics",
    "radiology",
    "research",
    "retort",
    "scale",
    "science",
    "scientist",
    "seismology",
    "telescope",
    "temperature",
    "test tube",
    "theory",
    "thermometer",
    "tissue",
    "variable",
    "virologist",
    "volcanology",
    "volume",
    "volumetric flask",
    "watch glass",
    "weather",
    "weigh",
    "zoology"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "science_wordbank",
  "title": "Science Wordbank 2017",
  "documentId": "science_wordbank",
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
