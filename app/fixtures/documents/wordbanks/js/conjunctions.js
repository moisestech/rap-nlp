console.log("Wordbank!");

var wordbank = {
  "name": "conjunctions",
  "list": [
    "after",
    "although",
    "and",
    "as",
    "as far as",
    "as if",
    "as long as",
    "as soon as",
    "as though",
    "as well as",
    "because",
    "before",
    "but",
    "by the time",
    "even if",
    "even though",
    "for",
    "how",
    "if",
    "in as much as",
    "in case",
    "if only",
    "in addition to",
    "in order that",
    "just as",
    "lest",
    "no matter how",
    "nor",
    "now that",
    "once",
    "only if",
    "or",
    "provided that",
    "since",
    "so",
    "so that",
    "supposing that",
    "than",
    "that",
    "though",
    "till",
    "unless",
    "until",
    "when",
    "whenever",
    "where",
    "whereas",
    "wherever",
    "whether",
    "while",
    "yet"
  ]
}

console.log (wordbank);

var allPhrases = {
  "filename": "conjunction_wordbank",
  "title": "Conjunction Wordbank 2017",
  "documentId": "conjunction_wordbank",
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
