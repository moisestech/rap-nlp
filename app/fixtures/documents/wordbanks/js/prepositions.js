console.log("Wordbank!");

var wordbank = {
  "name": "prepositions",
  "list": [
    "aboard",
    "about",
    "above",
    "across",
    "after",
    "against",
    "along",
    "alongside",
    "amid",
    "among",
    "amongst",
    "around",
    "as",
    "aside",
    "astride",
    "at",
    "atop",
    "barring",
    "before",
    "behind",
    "below",
    "beneath",
    "beside",
    "besides",
    "between",
    "beyond",
    "but",
    "by",
    "circa",
    "concerning",
    "considering",
    "despite",
    "down",
    "during",
    "except",
    "excepting",
    "excluding",
    "failing",
    "following",
    "for",
    "from",
    "in",
    "including",
    "inside",
    "into",
    "like",
    "minus",
    "near",
    "nearby",
    "next",
    "notwithstanding",
    "of",
    "off",
    "on",
    "onto",
    "opposite",
    "outside",
    "over",
    "past",
    "per",
    "plus",
    "regarding",
    "round",
    "save",
    "since",
    "than",
    "through",
    "throughout",
    "till",
    "times",
    "to",
    "toward",
    "towards",
    "under",
    "underneath",
    "unlike",
    "until",
    "unto",
    "up",
    "upon",
    "versus",
    "via",
    "with",
    "within",
    "without",
    "worth"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "prepositions_wordbank",
  "title": "Prepositions Wordbank 2017",
  "documentId": "prepositions_wordbank",
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
